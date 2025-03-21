import {
  addDomEvent
} from "./chunk-XNMAYA7J.mjs";

// src/visual-viewport.ts
function trackVisualViewport(options) {
  const { document: doc, resolve } = options;
  const win = doc?.defaultView || window;
  resolve?.(getViewportSize(win));
  const onResize = () => resolve?.(getViewportSize(win));
  return addDomEvent(win.visualViewport ?? win, "resize", onResize);
}
function getViewportSize(win) {
  return {
    width: win.visualViewport?.width || win.innerWidth,
    height: win.visualViewport?.height || win.innerHeight
  };
}

export {
  trackVisualViewport
};
