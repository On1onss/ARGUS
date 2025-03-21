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

// src/get-element-offset.ts
var get_element_offset_exports = {};
__export(get_element_offset_exports, {
  getElementOffset: () => getElementOffset
});
module.exports = __toCommonJS(get_element_offset_exports);
function getElementOffset(element) {
  let left = 0;
  let top = 0;
  let el = element;
  if (el.parentNode) {
    do {
      left += el.offsetLeft;
      top += el.offsetTop;
    } while ((el = el.offsetParent) && el.nodeType < 9);
    el = element;
    do {
      left -= el.scrollLeft;
      top -= el.scrollTop;
    } while ((el = el.parentNode) && !/body/i.test(el.nodeName));
  }
  return {
    top,
    right: innerWidth - left - element.offsetWidth,
    bottom: innerHeight - top - element.offsetHeight,
    left
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getElementOffset
});
