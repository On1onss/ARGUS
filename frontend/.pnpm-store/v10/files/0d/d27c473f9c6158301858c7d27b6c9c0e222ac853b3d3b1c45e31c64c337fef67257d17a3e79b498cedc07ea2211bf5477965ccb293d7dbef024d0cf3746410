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

// src/pointerlock.ts
var pointerlock_exports = {};
__export(pointerlock_exports, {
  addPointerlockChangeListener: () => addPointerlockChangeListener,
  addPointerlockErrorListener: () => addPointerlockErrorListener,
  requestPointerLock: () => requestPointerLock
});
module.exports = __toCommonJS(pointerlock_exports);

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
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// src/listener.ts
var isRef = (v) => hasProp(v, "current");
function addDomEvent(target, eventName, handler, options) {
  const node = isRef(target) ? target.current : runIfFn(target);
  node?.addEventListener(eventName, handler, options);
  return () => {
    node?.removeEventListener(eventName, handler, options);
  };
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addPointerlockChangeListener,
  addPointerlockErrorListener,
  requestPointerLock
});
