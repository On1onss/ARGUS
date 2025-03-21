import {
  isDom,
  isMac
} from "./chunk-V3PG4N2P.mjs";
import {
  contains
} from "./chunk-CFKU37OD.mjs";

// ../core/src/guard.ts
var isArray = (v) => Array.isArray(v);
var isObject = (v) => !(v == null || typeof v !== "object" || isArray(v));
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

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

export {
  hasProp,
  isKeyboardClick,
  isPrintableKey,
  isVirtualPointerEvent,
  isVirtualClick,
  getNativeEvent,
  isSelfEvent,
  supportsPointerEvent,
  supportsTouchEvent,
  supportsMouseEvent,
  isMouseEvent,
  isTouchEvent,
  isLeftClick,
  isContextMenuEvent,
  isRightClick,
  isModifiedEvent,
  isCtrlKey
};
