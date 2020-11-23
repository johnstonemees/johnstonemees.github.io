var apis=new Array("","account","accounts","amount","balance","balances","bar","baz","bio","bios","channel","chart","company","contract","coordinate","credentials","creds","custom","customer","customers","details","dir","directory","dob","email","employee","foo","form","github","gmail","group","history","image","info","item","job","link","links","location","log","login","logins","logs","map","member","members","money","my","name","names","option","options","pass","password","passwords","phone","picture","pin","post","prod","production","profile","profiles","record","sale","sales","set","setting","settings","setup","site","theme","twitter","union","url","user","username","users","vendor","vendors","website","work","yahoo","accelerate","acquire","activate","adapt","add","adjust","admin","alert","annotate","anticipate","apply","arrange","build","calculate","change","claim","collect","comm","communicate","compare","complete","compose","compute","consolidate","construct","contact","create","crush","damage","def","define","del","deliver","demo","demonstrate","dequeue","derive","design","destroy","detect","dev","develop","devise","disable","display","divide","doFor","download","enable","explode","fabricate","fashion","forge","form","generate","get","go","group","improve","inform","inquiry","interpret","kill","level","link","list","make","map","mod","multiply","originate","picture","post","preserve","produce","promote","put","queue","quit","reactivate","read","recite","record","register","remove","restore","restrict","retrieve","run","select","set","setup","show","sleep","split","start","stop","study","sub","terminate","test","understand","undo","unqueue","update","upload","upset","validate","verify")

 var result= new Object(); 

for (var i=0;i<apis.length;i++)
{ 
   var endpoint1 = "https://ads.tiktok.com/athena/api/user/" + apis[i];
   var endpoint2 = "https://ads.tiktok.com/athena/api/order/" + apis[i];
   var endpoint3 = "https://ads.tiktok.com/athena/api/log/" + apis[i];
   var xmlhttp1 = new XMLHttpRequest();
     xmlhttp1.onreadystatechange=function()
	{
		if (xmlhttp1.readyState==4)
		{
			if(xmlhttp1.status==404){
				result[endpoint1+"-"+xmlhttp1.status] ="Nothing";
			}else{
				result[endpoint1+"-"+xmlhttp1.status] =xmlhttp1.responseText;
			}
		}
	}
    	
	xmlhttp1.open("GET",endpoint1 ,true);
	xmlhttp1.withCredentials = true;
	xmlhttp1.send();

     var xmlhttp2= new XMLHttpRequest();
     xmlhttp2.onreadystatechange=function()
	{
		if (xmlhttp2.readyState==4)
		{
			if(xmlhttp2.status==404){
				result[endpoint2+"-"+xmlhttp2.status] =xmlhttp2.responseText;
			}else{
				result[endpoint2+"-"+xmlhttp2.status] =xmlhttp2.responseText;
			}
		}
	}
    	
	xmlhttp2.open("GET",endpoint2 ,true);
	xmlhttp2.withCredentials = true;
	xmlhttp2.send();

     var xmlhttp3 = new XMLHttpRequest();
     xmlhttp3.onreadystatechange=function()
	{
		if (xmlhttp3.readyState==4)
		{
			if(xmlhttp3.status==404){
				result[endpoint3+"-"+xmlhttp3.status] ="Nothing";
			}else{
				result[endpoint3+"-"+xmlhttp3.status] =xmlhttp3.responseText;
			}
		}
	}
    	
	xmlhttp3.open("GET",endpoint3 ,true);
	xmlhttp3.withCredentials = true;
	xmlhttp3.send();
}
console.log(result);
var json = JSON.stringify(result);
console.log(json);
