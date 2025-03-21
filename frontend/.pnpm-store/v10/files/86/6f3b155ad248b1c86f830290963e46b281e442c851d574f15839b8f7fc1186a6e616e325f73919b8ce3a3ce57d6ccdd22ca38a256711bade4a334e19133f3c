// src/get-computed-style.ts
function getCache() {
  const g = globalThis;
  g.__styleCache = g.__styleCache || /* @__PURE__ */ new WeakMap();
  return g.__styleCache;
}
function getComputedStyle(el) {
  if (!el)
    return {};
  const cache = getCache();
  let style = cache.get(el);
  if (!style) {
    const win = el?.ownerDocument.defaultView ?? window;
    style = win.getComputedStyle(el);
    cache.set(el, style);
  }
  return style;
}

export {
  getComputedStyle
};
