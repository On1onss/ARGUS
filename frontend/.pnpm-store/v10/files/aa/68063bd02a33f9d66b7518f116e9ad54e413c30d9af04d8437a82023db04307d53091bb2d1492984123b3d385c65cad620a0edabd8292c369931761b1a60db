import {
  hasProp,
  isTouchEvent,
  supportsMouseEvent,
  supportsPointerEvent,
  supportsTouchEvent
} from "./chunk-2HPIH2IE.mjs";

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

export {
  cast,
  callAll,
  extractInfo,
  addDomEvent,
  addPointerEvent,
  extractClientInfo,
  getEventName
};
