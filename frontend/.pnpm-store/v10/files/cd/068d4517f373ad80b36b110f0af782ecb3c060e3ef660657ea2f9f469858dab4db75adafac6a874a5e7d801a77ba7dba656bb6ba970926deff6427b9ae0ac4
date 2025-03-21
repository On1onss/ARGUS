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

// src/event.ts
var event_exports = {};
__export(event_exports, {
  getNativeEvent: () => getNativeEvent,
  isContextMenuEvent: () => isContextMenuEvent,
  isCtrlKey: () => isCtrlKey,
  isKeyboardClick: () => isKeyboardClick,
  isLeftClick: () => isLeftClick,
  isModifiedEvent: () => isModifiedEvent,
  isMouseEvent: () => isMouseEvent,
  isPrintableKey: () => isPrintableKey,
  isRightClick: () => isRightClick,
  isSelfEvent: () => isSelfEvent,
  isTouchEvent: () => isTouchEvent,
  isVirtualClick: () => isVirtualClick,
  isVirtualPointerEvent: () => isVirtualPointerEvent,
  supportsMouseEvent: () => supportsMouseEvent,
  supportsPointerEvent: () => supportsPointerEvent,
  supportsTouchEvent: () => supportsTouchEvent
});
module.exports = __toCommonJS(event_exports);

// ../core/src/guard.ts
var isArray = (v) => Array.isArray(v);
var isObject = (v) => !(v == null || typeof v !== "object" || isArray(v));
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// src/platform.ts
var isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
var pt = (v) => isDom() && v.test(getPlatform());
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice;

// src/query.ts
function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || isHTMLElement(parent) && isHTMLElement(child) && parent.contains(child);
}
function isHTMLElement(v) {
  return typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";
}

// src/event.ts
function isKeyboardClick(e) {
  return e.detail === 0 || e.clientX === 0 && e.clientY === 0;
}
function isPrintableKey(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
function getNativeEvent(e) {
  return e.nativeEvent ?? e;
}
function isSelfEvent(event) {
  return contains(event.currentTarget, event.target);
}
var supportsPointerEvent = () => isDom() && window.onpointerdown === null;
var supportsTouchEvent = () => isDom() && window.ontouchstart === null;
var supportsMouseEvent = () => isDom() && window.onmousedown === null;
var isMouseEvent = (v) => isObject(v) && hasProp(v, "button");
var isTouchEvent = (v) => isObject(v) && hasProp(v, "touches");
var isLeftClick = (v) => v.button === 0;
var isContextMenuEvent = (e) => {
  return e.button === 2 || isCtrlKey(e) && e.button === 0;
};
var isRightClick = (v) => v.button === 2;
var isModifiedEvent = (v) => v.ctrlKey || v.altKey || v.metaKey;
var isCtrlKey = (v) => isMac() ? v.metaKey && !v.ctrlKey : v.ctrlKey && !v.metaKey;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getNativeEvent,
  isContextMenuEvent,
  isCtrlKey,
  isKeyboardClick,
  isLeftClick,
  isModifiedEvent,
  isMouseEvent,
  isPrintableKey,
  isRightClick,
  isSelfEvent,
  isTouchEvent,
  isVirtualClick,
  isVirtualPointerEvent,
  supportsMouseEvent,
  supportsPointerEvent,
  supportsTouchEvent
});
