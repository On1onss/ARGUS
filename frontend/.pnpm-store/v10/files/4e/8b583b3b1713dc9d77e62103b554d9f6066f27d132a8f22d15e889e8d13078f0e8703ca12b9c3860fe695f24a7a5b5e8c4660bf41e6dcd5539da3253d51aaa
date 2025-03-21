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

// src/next-tick.ts
var next_tick_exports = {};
__export(next_tick_exports, {
  disposable: () => disposable,
  disposableNextTick: () => disposableNextTick,
  disposableRaf: () => disposableRaf,
  nextTick: () => nextTick,
  raf: () => raf
});
module.exports = __toCommonJS(next_tick_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disposable,
  disposableNextTick,
  disposableRaf,
  nextTick,
  raf
});
