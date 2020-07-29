window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  test: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91a75D1UdREzJPG4NEeoYsj", "test");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var yao;
    var SHAKE_THRESHOLD = 4e3;
    var last_update = 0;
    var x, y, z, last_x = 0, last_y = 0, last_z = 0;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        yao = this;
        cc.systemEvent.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
        console.log("onload");
      },
      start: function start() {
        yao.getPermission();
        console.log("start");
      },
      getPermission: function getPermission() {
        "function" === typeof DeviceOrientationEvent.requestPermission ? DeviceOrientationEvent.requestPermission().then(function(permissionState) {
          "granted" === permissionState, console.log(permissionState);
        }).catch(function(err) {
          console.log(err);
        }) : console.log("undefined" === typeof DeviceOrientationEvent ? "undefined" : _typeof(DeviceOrientationEvent));
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        console.log(event);
        console.log("event name:", event.type, " acc x:", event.acc.x, " acc y:", event.acc.y, " acc z:", event.acc.z);
        yao.deviceMotionHandler(event);
      },
      deviceMotionHandler: function deviceMotionHandler(eventData) {
        var acceleration = eventData.acc;
        var curTime = new Date().getTime();
        if (curTime - last_update > 10) {
          var diffTime = curTime - last_update;
          last_update = curTime;
          x = acceleration.x;
          y = acceleration.y;
          z = acceleration.z;
          var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 1e4;
          speed > SHAKE_THRESHOLD && yao.vibration();
          last_x = x;
          last_y = y;
          last_z = z;
        }
      },
      vibration: function vibration() {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        navigator.vibrate && console.log("\u652f\u6301\u8bbe\u5907\u9707\u52a8\uff01");
        navigator.vibrate([ 500, 300, 400, 300 ]);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "test" ]);