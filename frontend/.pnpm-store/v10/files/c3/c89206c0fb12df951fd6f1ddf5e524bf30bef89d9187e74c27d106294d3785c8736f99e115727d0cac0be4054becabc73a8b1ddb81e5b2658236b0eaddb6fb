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

// src/text-selection.ts
var text_selection_exports = {};
__export(text_selection_exports, {
  disableTextSelection: () => disableTextSelection,
  restoreTextSelection: () => restoreTextSelection
});
module.exports = __toCommonJS(text_selection_exports);

// src/next-tick.ts
function nextTick(fn) {
  const set = /* @__PURE__ */ new Set();
  function raf(fn2) {
    const id = globalThis.requestAnimationFrame(fn2);
    set.add(() => globalThis.cancelAnimationFrame(id));
  }
  raf(() => raf(fn));
  return function cleanup() {
    set.forEach(function(fn2) {
      fn2();
    });
  };
}

// src/platform.ts
var isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
var pt = (v) => isDom() && v.test(getPlatform());
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice;
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();

// src/text-selection.ts
var state = "default";
var savedUserSelect = "";
var modifiedElementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelection({ target, doc } = {}) {
  const _document = doc ?? document;
  if (isIos()) {
    if (state === "default") {
      savedUserSelect = _document.documentElement.style.webkitUserSelect;
      _document.documentElement.style.webkitUserSelect = "none";
    }
    state = "disabled";
  } else if (target) {
    modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
  return () => restoreTextSelection({ target, doc: _document });
}
function restoreTextSelection({ target, doc } = {}) {
  const _document = doc ?? document;
  if (isIos()) {
    if (state !== "disabled")
      return;
    state = "restoring";
    setTimeout(() => {
      nextTick(() => {
        if (state === "restoring") {
          if (_document.documentElement.style.webkitUserSelect === "none") {
            _document.documentElement.style.webkitUserSelect = savedUserSelect || "";
          }
          savedUserSelect = "";
          state = "default";
        }
      });
    }, 300);
  } else {
    if (target && modifiedElementMap.has(target)) {
      let targetOldUserSelect = modifiedElementMap.get(target);
      if (target.style.userSelect === "none") {
        target.style.userSelect = targetOldUserSelect ?? "";
      }
      if (target.getAttribute("style") === "") {
        target.removeAttribute("style");
      }
      modifiedElementMap.delete(target);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disableTextSelection,
  restoreTextSelection
});
