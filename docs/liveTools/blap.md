# Bilibili Live Auto Play
###### <Badge type="tip" text="发行版" />
#### 直播未开播时自动轮询，检测到开播会自动刷新网页并语音播报  

## 代码内容
````js
// ==UserScript==
// @name         Bilibili Live Auto Play
// @namespace    https://bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @version      2025.11.22
// @description  直播未开播时自动轮询，开播自动刷新并语音播报主播昵称
// @match        https://live.bilibili.com/*
// @match        https://live.bilibili.com/blanc/*
// @grant        GM_xmlhttpRequest
// @connect      api.live.bilibili.com
// @connect      api.vc.bilibili.com
// ==/UserScript==
 
(function () {
    'use strict';
    if (window.top !== window.self) {
    console.log("【BLAP】检测到 iframe 内部，不执行脚本");
    return;
}
 
    // ---- 提取直播间号 ----
    const match = window.location.pathname.match(/(\d+)$/);
    if (!match) {
        console.warn("【BLAP】无法解析直播间号");
        return;
    }
    const roomId = match[1];
    let userName = "未识别到主播名";
    const refreshedFlagKey = `bili_live_refreshed_${roomId}`;
 
    if (sessionStorage.getItem(refreshedFlagKey) === "1") {
        console.log("【BLAP】刷新后标记已存在，不再继续检测。");
        return;
    }
 
    const apiUrl = `https://api.live.bilibili.com/room/v1/Room/get_info?room_id=${roomId}`;
 
    // ---- 获取 UID ----
    async function fetchUID(roomId) {
        const url = apiUrl;
        const res = await fetch(url);
        const json = await res.json();
        return json.data?.uid || null;
    }
 
    // ---- 获取主播昵称 ----
    async function fetchUserName(uid) {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: `https://api.vc.bilibili.com/account/v1/user/cards?uids=${uid}`,
                onload: (res) => {
                    try {
                        const json = JSON.parse(res.responseText);
                        resolve(json.data?.[0]?.name || "主播");
                    } catch (e) {
                        console.error("【BLAP】解析昵称失败:", e);
                        resolve("主播");
                    }
                },
                onerror: () => resolve("主播")
            });
        });
    }
 
    // ---- 语音播报 ----
    function speak(text) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "zh-CN";
        speechSynthesis.speak(utter);
    }
 
    // ---- 检查直播状态 ----
    function checkLiveStatus() {
        GM_xmlhttpRequest({
            method: "GET",
            url: apiUrl,
            onload: (res) => {
                try {
                    const data = JSON.parse(res.responseText);
                    const status = data?.data?.live_status; // 0未开播、1直播中、2轮播
 
                    console.log("【BLAP】当前直播状态:", status);
 
                    if (status === 1) {
                        console.log("【BLAP】检测到开播，刷新页面并播报！");
                        speak(`${userName} 开播了`);
                        sessionStorage.setItem(refreshedFlagKey, "1");
                        location.reload();
                    }
                } catch (e) {
                    console.error("【BLAP】检查直播状态解析错误:", e);
                }
            },
            onerror: (err) => console.error("【BLAP】请求直播状态失败:", err)
        });
    }
    let pollingStarted = false;
 
    // ---- 开始轮询 ----
    function startPolling() {
 
        setInterval(() => {
            if (sessionStorage.getItem(refreshedFlagKey) === "1") return;
            checkLiveStatus();
        }, 10000); // 每10秒检查一次
 
    }
 
    // ---- 初始化流程 ----
    async function init() {
        try {
            // 首次检查直播状态
            const res = await fetch(apiUrl);
            const data = await res.json();
            const status = data?.data?.live_status;
            console.log("【BLAP】首次检查直播状态:", status);
 
            if (status === 1) {
                console.log("【BLAP】正在直播，无需操作。");
                return;
            }
 
            console.log("【BLAP】直播未开播，获取主播信息...");
            const uid = await fetchUID(roomId);
            console.log("【BLAP】主播 UID:", uid);
 
            if (uid) {
                userName = await fetchUserName(uid);
                console.log("【BLAP】主播昵称:", userName);
            }
 
            console.log("【BLAP】开始轮询监控开播状态...");
            startPolling();
 
        } catch (e) {
            console.error("【BLAP】初始化失败:", e);
        }
    }
 
    init();
 
})();
````