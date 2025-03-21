import {
  isFrame,
  isHTMLElement,
  isVisible
} from "./chunk-CFKU37OD.mjs";

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

export {
  focusableSelector,
  getFocusables,
  isFocusable,
  getFirstFocusable,
  getTabbables,
  isTabbable,
  getFirstTabbable,
  getLastTabbable
};
