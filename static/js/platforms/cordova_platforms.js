var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {         //移动终端浏览器版本信息
        	/*浏览器*/
        	//IE内核
            trident: u.indexOf('Trident') > -1,
            //opera内核
            presto: u.indexOf('Presto') > -1, 
            //苹果、谷歌内核
            webKit: u.indexOf('AppleWebKit') > -1, 
            //火狐内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
            //是否web应该程序，没有头部与底部
            webApp: u.indexOf('Safari') == -1, 
            /*移动端*/
            //是否为移动终端
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
            //android终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            //ios终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
            //是否为iPhone
            iPhone: u.indexOf('iPhone') > -1, 
            //是否iPad
            iPad: u.indexOf('iPad') > -1 
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase();
}

//安卓加载页
if (browser.versions.mobile && browser.versions.android) {
    document.write("<script type=\"text/javascript\" src=\"./static/js/platforms/android/cordova.js\" charset=\"UTF-8\"><" + "/script>");  
}
//IOS加载页
else if (browser.versions.mobile && (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios)) {
//  document.write("<script type=\"text/javascript\" src=\"./static/js/platforms/ios/cordova.js\"  charset=\"UTF-8\"></" + "script>"); 
}
else {
	console.log("使用了其他设备");
}