// src/rect-observer.ts
function getObservedElements() {
  ;
  globalThis.__rectObserverMap__ = globalThis.__rectObserverMap__ || /* @__PURE__ */ new Map();
  return globalThis.__rectObserverMap__;
}
function observeElementRect(el, fn) {
  const observedElements = getObservedElements();
  const data = observedElements.get(el);
  if (!data) {
    observedElements.set(el, { rect: {}, callbacks: [fn] });
    if (observedElements.size === 1) {
      rafId = requestAnimationFrame(runLoop);
    }
  } else {
    data.callbacks.push(fn);
    fn(el.getBoundingClientRect());
  }
  return function unobserve() {
    const data2 = observedElements.get(el);
    if (!data2)
      return;
    const index = data2.callbacks.indexOf(fn);
    if (index > -1) {
      data2.callbacks.splice(index, 1);
    }
    if (data2.callbacks.length === 0) {
      observedElements.delete(el);
      if (observedElements.size === 0) {
        cancelAnimationFrame(rafId);
      }
    }
  };
}
var rafId;
function runLoop() {
  const observedElements = getObservedElements();
  const changedRectsData = [];
  observedElements.forEach((data, element) => {
    const newRect = element.getBoundingClientRect();
    if (!isEqual(data.rect, newRect)) {
      data.rect = newRect;
      changedRectsData.push(data);
    }
  });
  changedRectsData.forEach((data) => {
    data.callbacks.forEach((callback) => callback(data.rect));
  });
  rafId = requestAnimationFrame(runLoop);
}
function isEqual(rect1, rect2) {
  return rect1.width === rect2.width && rect1.height === rect2.height && rect1.top === rect2.top && rect1.right === rect2.right && rect1.bottom === rect2.bottom && rect1.left === rect2.left;
}

export {
  observeElementRect
};
