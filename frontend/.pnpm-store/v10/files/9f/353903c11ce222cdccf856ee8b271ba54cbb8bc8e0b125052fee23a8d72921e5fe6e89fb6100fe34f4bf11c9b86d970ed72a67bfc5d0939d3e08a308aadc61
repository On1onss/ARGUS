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

// src/get-event-point.ts
var get_event_point_exports = {};
__export(get_event_point_exports, {
  getEventPoint: () => getEventPoint
});
module.exports = __toCommonJS(get_event_point_exports);

// ../core/src/guard.ts
var isArray = (v) => Array.isArray(v);
var isObject = (v) => !(v == null || typeof v !== "object" || isArray(v));
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// src/event.ts
var isTouchEvent = (v) => isObject(v) && hasProp(v, "touches");

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEventPoint
});
