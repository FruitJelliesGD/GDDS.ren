# Bilibili Live Chat Scrollbar Keeper
###### <Badge type="tip" text="发行版" />
#### 保持 B 站直播聊天记录滚动条可见  

https://greasyfork.org/zh-CN/scripts/566345-bilibili-live-chat-scrollbar-keeper  


## 代码内容
````
// ==UserScript==
// @name         Bilibili Live Chat Scrollbar Keeper
// @namespace    https://tampermonkey.net/
// @version      2026.1.25
// @description  保持 B 站直播聊天记录滚动条可见
// @author       FruitJelliesGD
// @match        https://live.bilibili.com/*
// @grant        none
// @run-at       document-end
// @license MIT
// ==/UserScript==
 
(function () {
    'use strict';
 
    function addStyle() {
        const style = document.createElement('style');
        style.textContent = `
body:not(.pure_room_root) .chat-history-panel .chat-history-list {
    scrollbar-width: thin;
}
        `;
        document.head.appendChild(style);
    }
 
    // 等待 DOM 完全可用
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addStyle);
    } else {
        addStyle();
    }
})();
````