window.__require=function e(t,n,o){function c(r,s){if(!n[r]){if(!t[r]){var u=r.split("/");if(u=u[u.length-1],!t[u]){var f="function"==typeof __require&&__require;if(!s&&f)return f(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+r+"'")}}var a=n[r]={exports:{}};t[r][0].call(a.exports,function(e){return c(t[r][1][e]||e)},a,a.exports,e,t,n,o)}return n[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<o.length;r++)c(o[r]);return c}({test:[function(e,t,n){"use strict";cc._RF.push(t,"91a75D1UdREzJPG4NEeoYsj","test");var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.systemEvent.setAccelerometerEnabled(!0),cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION,this.onDeviceMotionEvent,this)},start:function(){},getPermission:function(){"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(function(e){console.log(e)}).catch(function(e){console.log(e)}):console.log("undefined"==typeof DeviceOrientationEvent?"undefined":o(DeviceOrientationEvent))},onDeviceMotionEvent:function(e){console.log("event name:",e.type," acc x:",e.acc.x," acc y:",e.acc.y," acc z:",e.acc.z)}}),cc._RF.pop()},{}]},{},["test"]);