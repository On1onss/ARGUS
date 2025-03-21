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

// src/wait.ts
var wait_exports = {};
__export(wait_exports, {
  waitFor: () => waitFor,
  waitForEvent: () => waitForEvent
});
module.exports = __toCommonJS(wait_exports);
function waitFor(predicate) {
  let value = predicate();
  if (!!value)
    return Promise.resolve(value);
  return new Promise((resolve) => {
    const id = globalThis.setInterval(function() {
      let value2 = predicate();
      if (value2) {
        globalThis.clearInterval(id);
        resolve(value2);
      }
    }, 0);
  });
}
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  waitFor,
  waitForEvent
});
