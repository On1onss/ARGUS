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

// src/rect-observer.ts
var rect_observer_exports = {};
__export(rect_observer_exports, {
  observeElementRect: () => observeElementRect
});
module.exports = __toCommonJS(rect_observer_exports);
function getObservedElements() {
  ;
  globalThis.__rectObserverMap__ = globalThis.__rectObserverMap__ || /* @__PURE__ */ new Map();
  return globalThis.__rectObserverMap__;
}
function observeElementRect(el, fn) {
  const observedElements = getObservedElements();
  const data = observedElements.get(el);
  if (!data) {
    observedElements.set(el, { rect: {}, callbacks: [fn] });
    if (observedElements.size === 1) {
      rafId = requestAnimationFrame(runLoop);
    }
  } else {
    data.callbacks.push(fn);
    fn(el.getBoundingClientRect());
  }
  return function unobserve() {
    const data2 = observedElements.get(el);
    if (!data2)
      return;
    const index = data2.callbacks.indexOf(fn);
    if (index > -1) {
      data2.callbacks.splice(index, 1);
    }
    if (data2.callbacks.length === 0) {
      observedElements.delete(el);
      if (observedElements.size === 0) {
        cancelAnimationFrame(rafId);
      }
    }
  };
}
var rafId;
function runLoop() {
  const observedElements = getObservedElements();
  const changedRectsData = [];
  observedElements.forEach((data, element) => {
    const newRect = element.getBoundingClientRect();
    if (!isEqual(data.rect, newRect)) {
      data.rect = newRect;
      changedRectsData.push(data);
    }
  });
  changedRectsData.forEach((data) => {
    data.callbacks.forEach((callback) => callback(data.rect));
  });
  rafId = requestAnimationFrame(runLoop);
}
function isEqual(rect1, rect2) {
  return rect1.width === rect2.width && rect1.height === rect2.height && rect1.top === rect2.top && rect1.right === rect2.right && rect1.bottom === rect2.bottom && rect1.left === rect2.left;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  observeElementRect
});
