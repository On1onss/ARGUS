import {
  addDomEvent,
  cast
} from "./chunk-XNMAYA7J.mjs";

// src/visibility-event.ts
function trackDocumentVisibility(_doc, callback) {
  const doc = cast(_doc);
  return addDomEvent(doc, "visibilitychange", () => {
    const hidden = doc.hidden || doc.msHidden || doc.webkitHidden;
    callback(!!hidden);
  });
}

export {
  trackDocumentVisibility
};
