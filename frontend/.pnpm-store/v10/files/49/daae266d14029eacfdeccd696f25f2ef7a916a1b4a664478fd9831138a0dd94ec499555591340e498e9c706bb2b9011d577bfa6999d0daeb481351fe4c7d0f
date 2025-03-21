import {
  disableTextSelection
} from "./chunk-T5RLSDNR.mjs";
import {
  addDomEvent,
  addPointerEvent,
  callAll
} from "./chunk-XNMAYA7J.mjs";
import {
  isLeftClick,
  isMouseEvent
} from "./chunk-2HPIH2IE.mjs";

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

export {
  trackPointerDown,
  trackPointerMove
};
