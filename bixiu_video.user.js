// ==UserScript==
// @name         注册测绘师继续教育_视频页
// @namespace    https://rackar.github.io/article_tech/zhuCeCHS_edu.html
// @version      0.4
// @description  try to take over the world!
// @author       rackar
// @match        http://rsedu.ch.mnr.gov.cn//index/onlineCourseUser/play?*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    $("body").off("blur");
    window.onblur = function() {};
    $.fn.pointsVerify = function(options, callbacks) {
        options.success();
    };
    function closeCurrentPage() {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
            window.location.href = "about:blank";
            window.close();
        } else {
            window.opener = null;
            window.open("", "_self");
            window.close();
        }
    }
    function closePage() {
        player.videoMute();
        player.videoSeek(60*120+20)
        let data = player.getMetaDate();
        let toal = data.duration + 120;
        console.log("init");
        //可以快速刷，不用等播完的，主要是等一下视频加载的时间，实在加载不出来干脆重新开这个页面可能还快一些。-2021年9月18日 17:23:12@HaruteRuby
        setTimeout(closeCurrentPage, 60*1000);
    }
    setTimeout(() => {
        closePage();
    }, 4 * 1000);
})();
