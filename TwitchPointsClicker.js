// ==UserScript==
// @name         Twitch Channel Points Auto Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Twitch Channel Points Auto Clicker
// @author       David
// @include      https://www.twitch.tv/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// ==/UserScript==

setInterval(function() {
    document.getElementsByClassName("tw-button tw-button--success")[0]?.click();
}, 10000);