window.__require=function e(t,n,o){function r(c,u){if(!n[c]){if(!t[c]){var f=c.split("/");if(f=f[f.length-1],!t[f]){var s="function"==typeof __require&&__require;if(!u&&s)return s(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+c+"'")}}var p=n[c]={exports:{}};t[c][0].call(p.exports,function(e){return r(t[c][1][e]||e)},p,p.exports,e,t,n,o)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({test:[function(e,t,n){"use strict";cc._RF.push(t,"91a75D1UdREzJPG4NEeoYsj","test");var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};cc.Class({extends:cc.Component,properties:{},start:function(){},getPermission:function(){"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(function(e){console.log(e)}).catch(function(e){console.log(e)}):console.log("undefined"==typeof DeviceOrientationEvent?"undefined":o(DeviceOrientationEvent))}}),cc._RF.pop()},{}]},{},["test"]);