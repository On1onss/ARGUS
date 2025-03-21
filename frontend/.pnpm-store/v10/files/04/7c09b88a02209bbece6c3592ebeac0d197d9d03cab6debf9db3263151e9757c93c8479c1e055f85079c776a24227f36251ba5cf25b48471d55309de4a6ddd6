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

// src/scrollable.ts
var scrollable_exports = {};
__export(scrollable_exports, {
  getScrollOffset: () => getScrollOffset,
  getScrollParent: () => getScrollParent,
  getScrollParents: () => getScrollParents,
  isScrollParent: () => isScrollParent
});
module.exports = __toCommonJS(scrollable_exports);

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

// src/query.ts
function isDocument(el) {
  return el.nodeType === Node.DOCUMENT_NODE;
}
function isWindow(value) {
  return value?.toString() === "[object Window]";
}
function getDocument(el) {
  if (isWindow(el))
    return el.document;
  if (isDocument(el))
    return el;
  return el?.ownerDocument ?? document;
}
function getWindow(el) {
  return el?.ownerDocument.defaultView ?? window;
}
function getNodeName(node) {
  return isWindow(node) ? "" : node?.localName ?? "";
}
function getParent(el) {
  const doc = getDocument(el);
  if (getNodeName(el) === "html")
    return el;
  return el.assignedSlot || el.parentElement || doc.documentElement;
}
function isHTMLElement(v) {
  return typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";
}

// src/scrollable.ts
function isScrollParent(el) {
  const { overflow, overflowX, overflowY } = getComputedStyle(el);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(el) {
  if (["html", "body", "#document"].includes(getNodeName(el))) {
    return getDocument(el).body;
  }
  if (isHTMLElement(el) && isScrollParent(el)) {
    return el;
  }
  return getScrollParent(getParent(el));
}
function getScrollParents(el, list = []) {
  const scrollParent = getScrollParent(el);
  const isBody = scrollParent === getDocument(el).body;
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const parents = list.concat(target);
  if (isBody)
    return parents;
  return parents.concat(getScrollParents(getParent(target)));
}
function getScrollOffset(el) {
  if (isWindow(el)) {
    return { scrollLeft: el.scrollX, scrollTop: el.scrollY };
  }
  return { scrollLeft: el.scrollLeft, scrollTop: el.scrollTop };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getScrollOffset,
  getScrollParent,
  getScrollParents,
  isScrollParent
});
