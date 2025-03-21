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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  MAX_Z_INDEX: () => MAX_Z_INDEX,
  addDomEvent: () => addDomEvent,
  addPointerEvent: () => addPointerEvent,
  addPointerlockChangeListener: () => addPointerlockChangeListener,
  addPointerlockErrorListener: () => addPointerlockErrorListener,
  ariaAttr: () => ariaAttr,
  contains: () => contains,
  copyVisualStyles: () => copyVisualStyles,
  dataAttr: () => dataAttr,
  defineDomHelpers: () => defineDomHelpers,
  disableTextSelection: () => disableTextSelection,
  disposable: () => disposable,
  disposableNextTick: () => disposableNextTick,
  disposableRaf: () => disposableRaf,
  extractClientInfo: () => extractClientInfo,
  extractInfo: () => extractInfo,
  findByText: () => findByText,
  findByTypeahead: () => findByTypeahead,
  fireBlurEvent: () => fireBlurEvent,
  fireClickEvent: () => fireClickEvent,
  fireCustomEvent: () => fireCustomEvent,
  fireKeyboardEvent: () => fireKeyboardEvent,
  focusableSelector: () => focusableSelector,
  getActiveDescendant: () => getActiveDescendant,
  getActiveElement: () => getActiveElement,
  getComputedStyle: () => getComputedStyle,
  getDocument: () => getDocument,
  getDocumentElement: () => getDocumentElement,
  getElementOffset: () => getElementOffset,
  getEventKey: () => getEventKey,
  getEventName: () => getEventName,
  getEventPoint: () => getEventPoint,
  getEventStep: () => getEventStep,
  getEventTarget: () => getEventTarget,
  getEventWindow: () => getEventWindow,
  getFirstFocusable: () => getFirstFocusable,
  getFirstTabbable: () => getFirstTabbable,
  getFocusables: () => getFocusables,
  getLastTabbable: () => getLastTabbable,
  getNativeEvent: () => getNativeEvent,
  getNodeName: () => getNodeName,
  getParent: () => getParent,
  getPlatform: () => getPlatform,
  getPointPercentRelativeToNode: () => getPointPercentRelativeToNode,
  getPointRelativeToNode: () => getPointRelativeToNode,
  getRootNode: () => getRootNode,
  getScrollOffset: () => getScrollOffset,
  getScrollParent: () => getScrollParent,
  getScrollParents: () => getScrollParents,
  getTabbables: () => getTabbables,
  getWindow: () => getWindow,
  indexOfId: () => indexOfId,
  isApple: () => isApple,
  isContextMenuEvent: () => isContextMenuEvent,
  isCtrlKey: () => isCtrlKey,
  isDisabled: () => isDisabled,
  isDocument: () => isDocument,
  isDom: () => isDom,
  isElementEditable: () => isElementEditable,
  isFirefox: () => isFirefox,
  isFocusable: () => isFocusable,
  isFrame: () => isFrame,
  isHTMLElement: () => isHTMLElement,
  isIPhone: () => isIPhone,
  isIos: () => isIos,
  isKeyboardClick: () => isKeyboardClick,
  isLeftClick: () => isLeftClick,
  isMac: () => isMac,
  isModifiedEvent: () => isModifiedEvent,
  isMouseEvent: () => isMouseEvent,
  isPrintableKey: () => isPrintableKey,
  isRightClick: () => isRightClick,
  isSafari: () => isSafari,
  isScrollParent: () => isScrollParent,
  isSelfEvent: () => isSelfEvent,
  isShadowRoot: () => isShadowRoot,
  isTabbable: () => isTabbable,
  isTouchDevice: () => isTouchDevice,
  isTouchEvent: () => isTouchEvent,
  isVirtualClick: () => isVirtualClick,
  isVirtualPointerEvent: () => isVirtualPointerEvent,
  isVisible: () => isVisible,
  isWindow: () => isWindow,
  isWithinShadowRoot: () => isWithinShadowRoot,
  itemById: () => itemById,
  matchAttr: () => matchAttr,
  nextById: () => nextById,
  nextTick: () => nextTick,
  normalizePointValue: () => normalizePointValue,
  observeAttributes: () => observeAttributes,
  observeChildren: () => observeChildren,
  observeElementRect: () => observeElementRect,
  prevById: () => prevById,
  query: () => query,
  queryAll: () => queryAll,
  queueBeforeEvent: () => queueBeforeEvent,
  queueMicrotask: () => queueMicrotask,
  raf: () => raf,
  requestPointerLock: () => requestPointerLock,
  restoreTextSelection: () => restoreTextSelection,
  setVisuallyHidden: () => setVisuallyHidden,
  sortByTreeOrder: () => sortByTreeOrder,
  supportsMouseEvent: () => supportsMouseEvent,
  supportsPointerEvent: () => supportsPointerEvent,
  supportsTouchEvent: () => supportsTouchEvent,
  trackDocumentVisibility: () => trackDocumentVisibility,
  trackPointerDown: () => trackPointerDown,
  trackPointerMove: () => trackPointerMove,
  trackVisualViewport: () => trackVisualViewport,
  visuallyHiddenStyle: () => visuallyHiddenStyle,
  waitFor: () => waitFor,
  waitForEvent: () => waitForEvent
});
module.exports = __toCommonJS(src_exports);

// src/attrs.ts
var dataAttr = (guard) => {
  return guard ? "" : void 0;
};
var ariaAttr = (guard) => {
  return guard ? "true" : void 0;
};
var matchAttr = (el) => {
  return {
    get: (key) => el.getAttribute(key),
    set: (key, value) => el.setAttribute(key, value),
    is: (key, value) => {
      return el.getAttribute(key) === value;
    }
  };
};

// src/constants.ts
var MAX_Z_INDEX = 2147483647;

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

// ../core/src/functions.ts
var runIfFn = (v, ...a) => {
  const res = typeof v === "function" ? v(...a) : v;
  return res ?? void 0;
};
var cast = (v) => v;
var callAll = (...fns) => (...a) => {
  fns.forEach(function(fn) {
    fn?.(...a);
  });
};

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
var ua = (v) => isDom() && v.test(navigator.userAgent);
var vn = (v) => isDom() && v.test(navigator.vendor);
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice;
var isIPhone = () => pt(/^iPhone/);
var isSafari = () => isApple() && vn(/apple/i);
var isFirefox = () => ua(/firefox\//i);
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();

// src/query.ts
function isDocument(el) {
  return el.nodeType === Node.DOCUMENT_NODE;
}
function isShadowRoot(el) {
  return el?.toString() === "[object ShadowRoot]";
}
function isWindow(value) {
  return value?.toString() === "[object Window]";
}
function isFrame(element) {
  return element.localName === "iframe";
}
var isWithinShadowRoot = (node) => {
  return isShadowRoot(node.getRootNode());
};
function getDocument(el) {
  if (isWindow(el))
    return el.document;
  if (isDocument(el))
    return el;
  return el?.ownerDocument ?? document;
}
function getRootNode(el) {
  return el.getRootNode();
}
function getWindow(el) {
  return el?.ownerDocument.defaultView ?? window;
}
function getDocumentElement(el) {
  return getDocument(el).documentElement;
}
function getNodeName(node) {
  return isWindow(node) ? "" : node?.localName ?? "";
}
function getEventWindow(event) {
  if (event.view)
    return event.view;
  let target = event.currentTarget;
  if (target != null)
    return getWindow(target);
  return window;
}
function getEventTarget(event) {
  return event.composedPath?.()[0] ?? event.target;
}
function getActiveElement(el) {
  let activeElement = getDocument(el).activeElement;
  while (activeElement && activeElement.shadowRoot) {
    const el2 = activeElement.shadowRoot.activeElement;
    if (el2 === activeElement)
      break;
    else
      activeElement = el2;
  }
  return activeElement;
}
function getActiveDescendant(node) {
  if (!node)
    return null;
  const id = node.getAttribute("aria-activedescendant");
  if (!id)
    return null;
  return getDocument(node).getElementById(id);
}
function getParent(el) {
  const doc = getDocument(el);
  if (getNodeName(el) === "html")
    return el;
  return el.assignedSlot || el.parentElement || doc.documentElement;
}
function defineDomHelpers(helpers) {
  const dom = {
    getRootNode: (ctx) => ctx.getRootNode?.() ?? document,
    getDoc: (ctx) => getDocument(dom.getRootNode(ctx)),
    getWin: (ctx) => dom.getDoc(ctx).defaultView ?? window,
    getActiveElement: (ctx) => dom.getDoc(ctx).activeElement,
    getById: (ctx, id) => dom.getRootNode(ctx).getElementById(id)
  };
  return {
    ...dom,
    ...helpers
  };
}
function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || isHTMLElement(parent) && isHTMLElement(child) && parent.contains(child);
}
function isHTMLElement(v) {
  return typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";
}
var isDisabled = (el) => {
  return el?.getAttribute("disabled") != null || !!el?.getAttribute("aria-disabled") === true;
};
function isElementEditable(el) {
  if (el == null || !isHTMLElement(el)) {
    return false;
  }
  try {
    const win = getWindow(el);
    return el instanceof win.HTMLInputElement && el.selectionStart != null || /(textarea|select)/.test(el.localName) || el.isContentEditable;
  } catch {
    return false;
  }
}
function isVisible(el) {
  if (!isHTMLElement(el))
    return false;
  return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
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

// src/fire-event.ts
function fireCustomEvent(el, type, init) {
  if (!el)
    return;
  const win = getWindow(el);
  const event = new win.CustomEvent(type, init);
  return el.dispatchEvent(event);
}
function fireBlurEvent(el, init) {
  const win = getWindow(el);
  const event = new win.FocusEvent("blur", init);
  const allowed = el.dispatchEvent(event);
  const bubbleInit = { ...init, bubbles: true };
  el.dispatchEvent(new win.FocusEvent("focusout", bubbleInit));
  return allowed;
}
function fireKeyboardEvent(el, type, init) {
  const win = getWindow(el);
  const event = new win.KeyboardEvent(type, init);
  return el.dispatchEvent(event);
}
function fireClickEvent(el, init) {
  const win = getWindow(el);
  const event = typeof win.PointerEvent !== "undefined" ? new win.PointerEvent("click", init) : new win.MouseEvent("click", init);
  return el.dispatchEvent(event);
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

// src/get-element-offset.ts
function getElementOffset(element) {
  let left = 0;
  let top = 0;
  let el = element;
  if (el.parentNode) {
    do {
      left += el.offsetLeft;
      top += el.offsetTop;
    } while ((el = el.offsetParent) && el.nodeType < 9);
    el = element;
    do {
      left -= el.scrollLeft;
      top -= el.scrollTop;
    } while ((el = el.parentNode) && !/body/i.test(el.nodeName));
  }
  return {
    top,
    right: innerWidth - left - element.offsetWidth,
    bottom: innerHeight - top - element.offsetHeight,
    left
  };
}

// src/get-event-point.ts
var fallback = {
  pageX: 0,
  pageY: 0,
  clientX: 0,
  clientY: 0
};
function getEventPoint(event, type = "page") {
  const point = isTouchEvent(event) ? event.touches[0] ?? event.changedTouches[0] ?? fallback : event;
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}

// src/get-point-relative-to-element.ts
function getPointRelativeToNode(point, element) {
  const offset = getElementOffset(element);
  const x = point.x - offset.left;
  const y = point.y - offset.top;
  return { x, y };
}
var clampPercent = (value) => Math.max(0, Math.min(100, value));
function getPointPercentRelativeToNode(point, element) {
  const relativePoint = getPointRelativeToNode(point, element);
  const x = relativePoint.x / element.offsetWidth * 100;
  const y = relativePoint.y / element.offsetHeight * 100;
  return { x: clampPercent(x), y: clampPercent(y) };
}
function normalizePointValue(point, options) {
  const { dir = "ltr", orientation = "horizontal" } = options;
  const { x, y } = point;
  let result = { x, y };
  if (orientation === "horizontal" && dir === "rtl") {
    result = { x: 100 - x, y };
  }
  return orientation === "horizontal" ? result.x : result.y;
}

// src/keyboard-event.ts
var rtlKeyMap = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
var sameKeyMap = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
};
function getEventKey(event, options = {}) {
  const { dir = "ltr", orientation = "horizontal" } = options;
  let { key } = event;
  key = sameKeyMap[key] ?? key;
  const isRtl = dir === "rtl" && orientation === "horizontal";
  if (isRtl && key in rtlKeyMap) {
    key = rtlKeyMap[key];
  }
  return key;
}
var PAGE_KEYS = /* @__PURE__ */ new Set(["PageUp", "PageDown"]);
var ARROW_KEYS = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
function getEventStep(event) {
  if (event.ctrlKey || event.metaKey) {
    return 0.1;
  } else {
    const isPageKey = PAGE_KEYS.has(event.key);
    const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.has(event.key);
    return isSkipKey ? 10 : 1;
  }
}

// src/listener.ts
var isRef = (v) => hasProp(v, "current");
var fallback2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0 };
function extractInfo(event, type = "page") {
  const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || fallback2 : event;
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
    const isMouseEvent2 = event instanceof win.MouseEvent;
    const isPrimary = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
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

// src/mutation-observer.ts
function observeAttributes(node, attributes, fn) {
  if (!node)
    return;
  const attrs = Array.isArray(attributes) ? attributes : [attributes];
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
        fn(change);
      }
    }
  });
  obs.observe(node, { attributes: true, attributeFilter: attrs });
  return () => obs.disconnect();
}
function observeChildren(node, fn) {
  if (!node)
    return;
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver(fn);
  obs.observe(node, { childList: true, subtree: true });
  return () => obs.disconnect();
}

// src/next-tick.ts
function nextTick(fn) {
  const set = /* @__PURE__ */ new Set();
  function raf2(fn2) {
    const id = globalThis.requestAnimationFrame(fn2);
    set.add(() => globalThis.cancelAnimationFrame(id));
  }
  raf2(() => raf2(fn));
  return function cleanup() {
    set.forEach(function(fn2) {
      fn2();
    });
  };
}
function raf(fn) {
  const id = globalThis.requestAnimationFrame(fn);
  return function cleanup() {
    globalThis.cancelAnimationFrame(id);
  };
}
function disposable(type, fn) {
  let cleanup;
  let dispose;
  if (type) {
    dispose = type(() => {
      cleanup = fn();
    });
  } else {
    cleanup = fn();
  }
  return () => {
    cleanup?.();
    dispose?.();
  };
}
function disposableRaf(fn) {
  return disposable(raf, fn);
}
function disposableNextTick(fn) {
  return disposable(nextTick, fn);
}

// src/nodelist.ts
function queryAll(root, selector) {
  return Array.from(root?.querySelectorAll(selector) ?? []);
}
function query(root, selector) {
  return root?.querySelector(selector);
}
function itemById(v, id) {
  return v.find((node) => node.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
function nextById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);
  return v[idx];
}
function prevById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  if (idx === -1)
    return loop ? v[v.length - 1] : null;
  idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);
  return v[idx];
}
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match = (valueText, query2) => valueText.toLowerCase().startsWith(query2.toLowerCase());
var wrap = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function findByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match(getValueText(item), text));
}
function sortByTreeOrder(v) {
  return v.sort((a, b) => a.compareDocumentPosition(b) & 2 ? 1 : -1);
}

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

// src/pointer-event.ts
function trackPointerDown(doc, onPointerDown) {
  const win = doc.defaultView ?? window;
  const fn = (event) => {
    if (event.target instanceof win.HTMLElement) {
      onPointerDown(event.target);
    }
  };
  return addDomEvent(doc, "pointerdown", fn);
}
var THRESHOLD = 5;
function trackPointerMove(doc, opts) {
  const { onPointerMove, onPointerUp } = opts;
  const handlePointerMove = (event, info) => {
    const { point: p } = info;
    const distance = Math.sqrt(p.x ** 2 + p.y ** 2);
    if (distance < THRESHOLD)
      return;
    if (isMouseEvent(event) && isLeftClick(event)) {
      onPointerUp();
      return;
    }
    onPointerMove(info, event);
  };
  return callAll(
    addPointerEvent(doc, "pointermove", handlePointerMove, false),
    addPointerEvent(doc, "pointerup", onPointerUp, false),
    addPointerEvent(doc, "pointercancel", onPointerUp, false),
    addPointerEvent(doc, "contextmenu", onPointerUp, false),
    disableTextSelection({ doc })
  );
}

// src/pointerlock.ts
function addPointerlockChangeListener(doc, fn) {
  return addDomEvent(doc, "pointerlockchange", fn, false);
}
function addPointerlockErrorListener(doc, fn) {
  doc.addEventListener("pointerlockerror", fn, false);
  return function cleanup() {
    doc.removeEventListener("pointerlockerror", fn, false);
  };
}
function requestPointerLock(doc, handlers = {}) {
  const { onPointerLock, onPointerUnlock } = handlers;
  const body = doc.body;
  const supported = "pointerLockElement" in doc || "mozPointerLockElement" in doc;
  const locked = !!doc.pointerLockElement;
  function onPointerChange() {
    if (locked)
      onPointerLock?.();
    else
      onPointerUnlock?.();
  }
  function onPointerError(event) {
    if (locked)
      onPointerUnlock?.();
    console.error("PointerLock error occured:", event);
    exit();
  }
  function exit() {
    doc.exitPointerLock();
  }
  if (!supported)
    return;
  try {
    body.requestPointerLock();
  } catch {
  }
  const cleanup = callAll(
    addPointerlockChangeListener(doc, onPointerChange),
    addPointerlockErrorListener(doc, onPointerError)
  );
  return function dispose() {
    if (!supported)
      return;
    cleanup();
    exit();
  };
}

// src/queue-before-event.ts
function queueBeforeEvent(el, type, fn) {
  const id = requestAnimationFrame(() => {
    el.removeEventListener(type, invoke, true);
    fn();
  });
  const invoke = () => {
    cancelAnimationFrame(id);
    fn();
  };
  el.addEventListener(type, invoke, { once: true, capture: true });
}

// src/queue-microtask.ts
function queueMicrotask(fn) {
  if (typeof globalThis.queueMicrotask === "function") {
    globalThis.queueMicrotask(fn);
  } else {
    Promise.resolve().then(fn);
  }
}

// src/rect-observer.ts
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

// src/typeahead.ts
function findByTypeaheadImpl(_items, options) {
  const { state: state2, activeId, key, timeout = 350 } = options;
  const search = state2.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const query2 = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next = findByText(items, query2, activeId);
  function cleanup() {
    clearTimeout(state2.timer);
    state2.timer = -1;
  }
  function update(value) {
    state2.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state2.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next;
}
var findByTypeahead = /* @__PURE__ */ Object.assign(findByTypeaheadImpl, {
  defaultOptions: {
    keysSoFar: "",
    timer: -1
  },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}

// src/visibility-event.ts
function trackDocumentVisibility(_doc, callback) {
  const doc = cast(_doc);
  return addDomEvent(doc, "visibilitychange", () => {
    const hidden = doc.hidden || doc.msHidden || doc.webkitHidden;
    callback(!!hidden);
  });
}

// src/visual-viewport.ts
function trackVisualViewport(options) {
  const { document: doc, resolve } = options;
  const win = doc?.defaultView || window;
  resolve?.(getViewportSize(win));
  const onResize = () => resolve?.(getViewportSize(win));
  return addDomEvent(win.visualViewport ?? win, "resize", onResize);
}
function getViewportSize(win) {
  return {
    width: win.visualViewport?.width || win.innerWidth,
    height: win.visualViewport?.height || win.innerHeight
  };
}

// src/visually-hidden.ts
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
  wordWrap: "normal"
};
function setVisuallyHidden(el) {
  Object.assign(el.style, visuallyHiddenStyle);
}

// src/wait.ts
function waitFor(predicate) {
  let value = predicate();
  if (!!value)
    return Promise.resolve(value);
  return new Promise((resolve) => {
    const id = globalThis.setInterval(function() {
      let value2 = predicate();
      if (value2) {
        globalThis.clearInterval(id);
        resolve(value2);
      }
    }, 0);
  });
}
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MAX_Z_INDEX,
  addDomEvent,
  addPointerEvent,
  addPointerlockChangeListener,
  addPointerlockErrorListener,
  ariaAttr,
  contains,
  copyVisualStyles,
  dataAttr,
  defineDomHelpers,
  disableTextSelection,
  disposable,
  disposableNextTick,
  disposableRaf,
  extractClientInfo,
  extractInfo,
  findByText,
  findByTypeahead,
  fireBlurEvent,
  fireClickEvent,
  fireCustomEvent,
  fireKeyboardEvent,
  focusableSelector,
  getActiveDescendant,
  getActiveElement,
  getComputedStyle,
  getDocument,
  getDocumentElement,
  getElementOffset,
  getEventKey,
  getEventName,
  getEventPoint,
  getEventStep,
  getEventTarget,
  getEventWindow,
  getFirstFocusable,
  getFirstTabbable,
  getFocusables,
  getLastTabbable,
  getNativeEvent,
  getNodeName,
  getParent,
  getPlatform,
  getPointPercentRelativeToNode,
  getPointRelativeToNode,
  getRootNode,
  getScrollOffset,
  getScrollParent,
  getScrollParents,
  getTabbables,
  getWindow,
  indexOfId,
  isApple,
  isContextMenuEvent,
  isCtrlKey,
  isDisabled,
  isDocument,
  isDom,
  isElementEditable,
  isFirefox,
  isFocusable,
  isFrame,
  isHTMLElement,
  isIPhone,
  isIos,
  isKeyboardClick,
  isLeftClick,
  isMac,
  isModifiedEvent,
  isMouseEvent,
  isPrintableKey,
  isRightClick,
  isSafari,
  isScrollParent,
  isSelfEvent,
  isShadowRoot,
  isTabbable,
  isTouchDevice,
  isTouchEvent,
  isVirtualClick,
  isVirtualPointerEvent,
  isVisible,
  isWindow,
  isWithinShadowRoot,
  itemById,
  matchAttr,
  nextById,
  nextTick,
  normalizePointValue,
  observeAttributes,
  observeChildren,
  observeElementRect,
  prevById,
  query,
  queryAll,
  queueBeforeEvent,
  queueMicrotask,
  raf,
  requestPointerLock,
  restoreTextSelection,
  setVisuallyHidden,
  sortByTreeOrder,
  supportsMouseEvent,
  supportsPointerEvent,
  supportsTouchEvent,
  trackDocumentVisibility,
  trackPointerDown,
  trackPointerMove,
  trackVisualViewport,
  visuallyHiddenStyle,
  waitFor,
  waitForEvent
});
