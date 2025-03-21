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

// src/copy-visual-styles.ts
var copy_visual_styles_exports = {};
__export(copy_visual_styles_exports, {
  copyVisualStyles: () => copyVisualStyles
});
module.exports = __toCommonJS(copy_visual_styles_exports);

// src/get-computed-style.ts
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

// src/copy-visual-styles.ts
function copyVisualStyles(fromEl, toEl) {
  if (!fromEl)
    return;
  const el = getComputedStyle(fromEl);
  const cssText = "box-sizing:" + el.boxSizing + ";border-left:" + el.borderLeftWidth + " solid red;border-right:" + el.borderRightWidth + " solid red;font-family:" + el.fontFamily + ";font-feature-settings:" + el.fontFeatureSettings + ";font-kerning:" + el.fontKerning + ";font-size:" + el.fontSize + ";font-stretch:" + el.fontStretch + ";font-style:" + el.fontStyle + ";font-variant:" + el.fontVariant + ";font-variant-caps:" + el.fontVariantCaps + ";font-variant-ligatures:" + el.fontVariantLigatures + ";font-variant-numeric:" + el.fontVariantNumeric + ";font-weight:" + el.fontWeight + ";letter-spacing:" + el.letterSpacing + ";margin-left:" + el.marginLeft + ";margin-right:" + el.marginRight + ";padding-left:" + el.paddingLeft + ";padding-right:" + el.paddingRight + ";text-indent:" + el.textIndent + ";text-transform:" + el.textTransform;
  toEl.style.cssText += cssText;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  copyVisualStyles
});
