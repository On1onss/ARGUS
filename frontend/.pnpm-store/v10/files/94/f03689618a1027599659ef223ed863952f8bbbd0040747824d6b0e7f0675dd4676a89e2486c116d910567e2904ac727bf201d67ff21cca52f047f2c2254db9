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

// src/focusable.ts
var focusable_exports = {};
__export(focusable_exports, {
  focusableSelector: () => focusableSelector,
  getFirstFocusable: () => getFirstFocusable,
  getFirstTabbable: () => getFirstTabbable,
  getFocusables: () => getFocusables,
  getLastTabbable: () => getLastTabbable,
  getTabbables: () => getTabbables,
  isFocusable: () => isFocusable,
  isTabbable: () => isTabbable
});
module.exports = __toCommonJS(focusable_exports);

// src/query.ts
function isFrame(element) {
  return element.localName === "iframe";
}
function isHTMLElement(v) {
  return typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";
}
function isVisible(el) {
  if (!isHTMLElement(el))
    return false;
  return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
}

// src/focusable.ts
function hasNegativeTabIndex(element) {
  const tabIndex = parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
var focusableSelector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var getFocusables = (container, includeContainer = false) => {
  if (!container)
    return [];
  const elements = Array.from(container.querySelectorAll(focusableSelector));
  const include = includeContainer == true || includeContainer == "if-empty" && elements.length === 0;
  if (include && isHTMLElement(container) && isFocusable(container)) {
    elements.unshift(container);
  }
  const focusableElements = elements.filter(isFocusable);
  focusableElements.forEach((element, i) => {
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      focusableElements.splice(i, 1, ...getFocusables(frameBody));
    }
  });
  return focusableElements;
};
function isFocusable(element) {
  if (!element)
    return false;
  return element.matches(focusableSelector) && isVisible(element);
}
function getFirstFocusable(container, includeContainer) {
  const [first] = getFocusables(container, includeContainer);
  return first || null;
}
function getTabbables(container, includeContainer) {
  if (!container)
    return [];
  const elements = Array.from(container.querySelectorAll(focusableSelector));
  const tabbableElements = elements.filter(isTabbable);
  if (includeContainer && isTabbable(container)) {
    tabbableElements.unshift(container);
  }
  tabbableElements.forEach((element, i) => {
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getTabbables(frameBody);
      tabbableElements.splice(i, 1, ...allFrameTabbable);
    }
  });
  if (!tabbableElements.length && includeContainer) {
    return elements;
  }
  return tabbableElements;
}
function isTabbable(el) {
  return isFocusable(el) && !hasNegativeTabIndex(el);
}
function getFirstTabbable(container, includeContainer) {
  const [first] = getTabbables(container, includeContainer);
  return first || null;
}
function getLastTabbable(container, includeContainer) {
  const elements = getTabbables(container, includeContainer);
  return elements[elements.length - 1] || null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  focusableSelector,
  getFirstFocusable,
  getFirstTabbable,
  getFocusables,
  getLastTabbable,
  getTabbables,
  isFocusable,
  isTabbable
});
