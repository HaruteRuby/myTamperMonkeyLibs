// ==UserScript==
// @name         注册测绘师继续教育_列表页
// @namespace    https://rackar.github.io/article_tech/zhuCeCHS_edu.html
// @version      0.5
// @description  try to take over the world!
// @author       rackar
// @match        http://rsedu.ch.mnr.gov.cn//index/onlineCourseUser/class?*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    function sleepTime(secends) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), secends * 1000);
        });
    }
    async function doAllClassListen(obj) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].button.click();
            console.log("点击按钮第" + i);
            await sleepTime(obj[i].time);
        }
    }
    setTimeout(function() {
        var trs = $("tbody tr");
        let arrNeed = [];
        for (let index = 0; index < trs.length; index++) {
            const tr = trs[index];
            console.log(tr.children[4].innerText);
            //不应直接把“已完成”作为判断条件，实际判断会多出个换行符，导致无法成功排除掉已完成的条目，修改为判断是否包含“已完成”字符串的方式解决该问题——2021年9月18日 15:11:21@HaruteRuby
            if (tr.children[4].innerText.indexOf("已完成") == -1) {
                //alert(tr.children[0].innerText);
                let url = tr.children[5].children[0].children[0].href;
                //let timeMin = tr.children[1].children[0].innerText;
                //timeMin = timeMin.replace("约", "");
                //timeMin = timeMin.replace("分钟", "");
                //let time = (timeMin - 0 + 3)*60;
                //可以快速刷课的，不需要等待这么久——2021年9月18日 11:11:34@HaruteRuby
                let time=20;
                // let time = (timeMin - 0 + 3) * 60;
                let button = tr.children[5].children[0].children[0];
                let obj = {
                    url,
                    time,
                    button
                };
                arrNeed.push(obj);
            }
        }
        console.log(arrNeed);
        doAllClassListen(arrNeed);
    }, 4000);
    //alert("已完成刷课");
})();
