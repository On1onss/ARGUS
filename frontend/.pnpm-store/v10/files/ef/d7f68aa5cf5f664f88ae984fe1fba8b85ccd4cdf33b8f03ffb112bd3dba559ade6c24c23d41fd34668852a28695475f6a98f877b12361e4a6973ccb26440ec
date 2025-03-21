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

// src/attrs.ts
var attrs_exports = {};
__export(attrs_exports, {
  ariaAttr: () => ariaAttr,
  dataAttr: () => dataAttr,
  matchAttr: () => matchAttr
});
module.exports = __toCommonJS(attrs_exports);
var dataAttr = (guard) => {
  return guard ? "" : void 0;
};
var ariaAttr = (guard) => {
  return guard ? "true" : void 0;
};
var matchAttr = (el) => {
  return {
    get: (key) => el.getAttribute(key),
    set: (key, value) => el.setAttribute(key, value),
    is: (key, value) => {
      return el.getAttribute(key) === value;
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ariaAttr,
  dataAttr,
  matchAttr
});
