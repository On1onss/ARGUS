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

// src/listener.ts
var listener_exports = {};
__export(listener_exports, {
  addDomEvent: () => addDomEvent,
  addPointerEvent: () => addPointerEvent,
  extractClientInfo: () => extractClientInfo,
  extractInfo: () => extractInfo,
  getEventName: () => getEventName
});
module.exports = __toCommonJS(listener_exports);

// ../core/src/functions.ts
var runIfFn = (v, ...a) => {
  const res = typeof v === "function" ? v(...a) : v;
  return res ?? void 0;
};

// ../core/src/guard.ts
var isArray = (v) => Array.isArray(v);
var isObject = (v) => !(v == null || typeof v !== "object" || isArray(v));
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// src/platform.ts
var isDom = () => typeof window !== "undefined";

// src/event.ts
var supportsPointerEvent = () => isDom() && window.onpointerdown === null;
var supportsTouchEvent = () => isDom() && window.ontouchstart === null;
var supportsMouseEvent = () => isDom() && window.onmousedown === null;
var isTouchEvent = (v) => isObject(v) && hasProp(v, "touches");

// src/listener.ts
var isRef = (v) => hasProp(v, "current");
var fallback = { pageX: 0, pageY: 0, clientX: 0, clientY: 0 };
function extractInfo(event, type = "page") {
  const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || fallback : event;
  return {
    point: {
      x: point[`${type}X`],
      y: point[`${type}Y`]
    }
  };
}
function addDomEvent(target, eventName, handler, options) {
  const node = isRef(target) ? target.current : runIfFn(target);
  node?.addEventListener(eventName, handler, options);
  return () => {
    node?.removeEventListener(eventName, handler, options);
  };
}
function addPointerEvent(target, event, listener, options) {
  const type = getEventName(event) ?? event;
  return addDomEvent(target, type, wrapHandler(listener, event === "pointerdown"), options);
}
function wrapHandler(fn, filter = false) {
  const listener = (event) => {
    fn(event, extractInfo(event));
  };
  return filter ? filterPrimaryPointer(listener) : listener;
}
function filterPrimaryPointer(fn) {
  return (event) => {
    const win = event.view ?? window;
    const isMouseEvent = event instanceof win.MouseEvent;
    const isPrimary = !isMouseEvent || isMouseEvent && event.button === 0;
    if (isPrimary)
      fn(event);
  };
}
function extractClientInfo(event) {
  return extractInfo(event, "client");
}
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getEventName(evt) {
  if (supportsPointerEvent())
    return evt;
  if (supportsTouchEvent())
    return touchEventNames[evt];
  if (supportsMouseEvent())
    return mouseEventNames[evt];
  return evt;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDomEvent,
  addPointerEvent,
  extractClientInfo,
  extractInfo,
  getEventName
});
