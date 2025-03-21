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

// src/get-computed-style.ts
var get_computed_style_exports = {};
__export(get_computed_style_exports, {
  getComputedStyle: () => getComputedStyle
});
module.exports = __toCommonJS(get_computed_style_exports);
function getCache() {
  const g = globalThis;
  g.__styleCache = g.__styleCache || /* @__PURE__ */ new WeakMap();
  return g.__styleCache;
}
function getComputedStyle(el) {
  if (!el)
    return {};
  const cache = getCache();
  let style = cache.get(el);
  if (!style) {
    const win = el?.ownerDocument.defaultView ?? window;
    style = win.getComputedStyle(el);
    cache.set(el, style);
  }
  return style;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getComputedStyle
});
