"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/platform.ts
var platform_exports = {};
__export(platform_exports, {
  getPlatform: () => getPlatform,
  isApple: () => isApple,
  isDom: () => isDom,
  isFirefox: () => isFirefox,
  isIPhone: () => isIPhone,
  isIos: () => isIos,
  isMac: () => isMac,
  isSafari: () => isSafari,
  isTouchDevice: () => isTouchDevice
});
module.exports = __toCommonJS(platform_exports);
var isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
var pt = (v) => isDom() && v.test(getPlatform());
var ua = (v) => isDom() && v.test(navigator.userAgent);
var vn = (v) => isDom() && v.test(navigator.vendor);
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice;
var isIPhone = () => pt(/^iPhone/);
var isSafari = () => isApple() && vn(/apple/i);
var isFirefox = () => ua(/firefox\//i);
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPlatform,
  isApple,
  isDom,
  isFirefox,
  isIPhone,
  isIos,
  isMac,
  isSafari,
  isTouchDevice
});
