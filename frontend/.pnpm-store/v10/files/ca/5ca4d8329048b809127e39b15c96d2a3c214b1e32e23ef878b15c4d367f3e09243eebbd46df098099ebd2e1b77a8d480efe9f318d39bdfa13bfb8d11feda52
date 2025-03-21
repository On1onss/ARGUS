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

// src/pointer-event.ts
var pointer_event_exports = {};
__export(pointer_event_exports, {
  trackPointerDown: () => trackPointerDown,
  trackPointerMove: () => trackPointerMove
});
module.exports = __toCommonJS(pointer_event_exports);

// ../core/src/functions.ts
var runIfFn = (v, ...a) => {
  const res = typeof v === "function" ? v(...a) : v;
  return res ?? void 0;
};
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
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice;
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();

// src/event.ts
var supportsPointerEvent = () => isDom() && window.onpointerdown === null;
var supportsTouchEvent = () => isDom() && window.ontouchstart === null;
var supportsMouseEvent = () => isDom() && window.onmousedown === null;
var isMouseEvent = (v) => isObject(v) && hasProp(v, "button");
var isTouchEvent = (v) => isObject(v) && hasProp(v, "touches");
var isLeftClick = (v) => v.button === 0;

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
    const isMouseEvent2 = event instanceof win.MouseEvent;
    const isPrimary = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimary)
      fn(event);
  };
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trackPointerDown,
  trackPointerMove
});
