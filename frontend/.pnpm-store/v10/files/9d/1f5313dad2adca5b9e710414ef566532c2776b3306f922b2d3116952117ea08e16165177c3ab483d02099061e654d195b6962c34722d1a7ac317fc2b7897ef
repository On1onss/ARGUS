// src/queue-microtask.ts
function queueMicrotask(fn) {
  if (typeof globalThis.queueMicrotask === "function") {
    globalThis.queueMicrotask(fn);
  } else {
    Promise.resolve().then(fn);
  }
}

export {
  queueMicrotask
};
