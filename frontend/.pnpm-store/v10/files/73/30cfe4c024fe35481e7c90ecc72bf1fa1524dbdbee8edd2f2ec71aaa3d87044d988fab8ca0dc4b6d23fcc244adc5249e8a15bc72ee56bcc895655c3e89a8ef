import {
  getWindow
} from "./chunk-CFKU37OD.mjs";

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

export {
  fireCustomEvent,
  fireBlurEvent,
  fireKeyboardEvent,
  fireClickEvent
};
