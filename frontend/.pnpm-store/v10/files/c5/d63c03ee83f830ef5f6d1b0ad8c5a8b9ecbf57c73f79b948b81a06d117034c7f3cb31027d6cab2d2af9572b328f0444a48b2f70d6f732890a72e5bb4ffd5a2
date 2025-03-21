import {
  addDomEvent,
  callAll
} from "./chunk-XNMAYA7J.mjs";

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

export {
  addPointerlockChangeListener,
  addPointerlockErrorListener,
  requestPointerLock
};
