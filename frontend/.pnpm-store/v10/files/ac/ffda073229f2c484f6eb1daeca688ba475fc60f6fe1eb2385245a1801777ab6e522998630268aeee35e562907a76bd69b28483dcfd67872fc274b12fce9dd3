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

// src/fire-event.ts
var fire_event_exports = {};
__export(fire_event_exports, {
  fireBlurEvent: () => fireBlurEvent,
  fireClickEvent: () => fireClickEvent,
  fireCustomEvent: () => fireCustomEvent,
  fireKeyboardEvent: () => fireKeyboardEvent
});
module.exports = __toCommonJS(fire_event_exports);

// src/query.ts
function getWindow(el) {
  return el?.ownerDocument.defaultView ?? window;
}

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fireBlurEvent,
  fireClickEvent,
  fireCustomEvent,
  fireKeyboardEvent
});
