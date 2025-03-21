// src/next-tick.ts
function nextTick(fn) {
  const set = /* @__PURE__ */ new Set();
  function raf2(fn2) {
    const id = globalThis.requestAnimationFrame(fn2);
    set.add(() => globalThis.cancelAnimationFrame(id));
  }
  raf2(() => raf2(fn));
  return function cleanup() {
    set.forEach(function(fn2) {
      fn2();
    });
  };
}
function raf(fn) {
  const id = globalThis.requestAnimationFrame(fn);
  return function cleanup() {
    globalThis.cancelAnimationFrame(id);
  };
}
function disposable(type, fn) {
  let cleanup;
  let dispose;
  if (type) {
    dispose = type(() => {
      cleanup = fn();
    });
  } else {
    cleanup = fn();
  }
  return () => {
    cleanup?.();
    dispose?.();
  };
}
function disposableRaf(fn) {
  return disposable(raf, fn);
}
function disposableNextTick(fn) {
  return disposable(nextTick, fn);
}

export {
  nextTick,
  raf,
  disposable,
  disposableRaf,
  disposableNextTick
};
