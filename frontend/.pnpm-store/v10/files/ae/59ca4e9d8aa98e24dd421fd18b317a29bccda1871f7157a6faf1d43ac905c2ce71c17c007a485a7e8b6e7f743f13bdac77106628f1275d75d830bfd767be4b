import {
  isTouchEvent
} from "./chunk-2HPIH2IE.mjs";

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

export {
  getEventPoint
};
