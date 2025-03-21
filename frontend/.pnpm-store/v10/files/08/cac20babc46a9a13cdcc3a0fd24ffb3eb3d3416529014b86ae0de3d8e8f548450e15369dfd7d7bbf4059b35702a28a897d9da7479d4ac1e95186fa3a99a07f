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

// src/visibility-event.ts
var visibility_event_exports = {};
__export(visibility_event_exports, {
  trackDocumentVisibility: () => trackDocumentVisibility
});
module.exports = __toCommonJS(visibility_event_exports);

// ../core/src/functions.ts
var runIfFn = (v, ...a) => {
  const res = typeof v === "function" ? v(...a) : v;
  return res ?? void 0;
};
var cast = (v) => v;

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

// src/visibility-event.ts
function trackDocumentVisibility(_doc, callback) {
  const doc = cast(_doc);
  return addDomEvent(doc, "visibilitychange", () => {
    const hidden = doc.hidden || doc.msHidden || doc.webkitHidden;
    callback(!!hidden);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trackDocumentVisibility
});
