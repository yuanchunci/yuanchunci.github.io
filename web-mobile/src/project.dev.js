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
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.systemEvent.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
      },
      start: function start() {},
      getPermission: function getPermission() {
        "function" === typeof DeviceOrientationEvent.requestPermission ? DeviceOrientationEvent.requestPermission().then(function(permissionState) {
          "granted" === permissionState, console.log(permissionState);
        }).catch(function(err) {
          console.log(err);
        }) : console.log("undefined" === typeof DeviceOrientationEvent ? "undefined" : _typeof(DeviceOrientationEvent));
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        console.log("event name:", event.type, " acc x:", event.acc.x, " acc y:", event.acc.y, " acc z:", event.acc.z);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "test" ]);