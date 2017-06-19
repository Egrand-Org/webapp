var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

var _IsiosApp = 0;
var _IsandroidApp = 0;
console.log(navigator.userAgent.indexOf('Android') > -1);

//安卓加载页
if (browser.versions.mobile && browser.versions.android) {
    document.write("<script type=\"text/javascript\" src=\"./static/js/platforms/android/cordova.js\" charset=\"UTF-8\"><" + "/script>");
    _IsiosApp = 0;
    _IsandroidApp = 1;    
}
//IOS加载页
else if (browser.versions.mobile && (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios)) {
//  document.write("<script type=\"text/javascript\" src=\"./static/js/platforms/ios/cordova.js\"  charset=\"UTF-8\"></" + "script>");
    _IsiosApp = 1;
    _IsandroidApp = 0;    
}
else {
	console.log("使用了浏览器");
}