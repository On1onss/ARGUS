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

// src/get-point-relative-to-element.ts
var get_point_relative_to_element_exports = {};
__export(get_point_relative_to_element_exports, {
  getPointPercentRelativeToNode: () => getPointPercentRelativeToNode,
  getPointRelativeToNode: () => getPointRelativeToNode,
  normalizePointValue: () => normalizePointValue
});
module.exports = __toCommonJS(get_point_relative_to_element_exports);

// src/get-element-offset.ts
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

// src/get-point-relative-to-element.ts
function getPointRelativeToNode(point, element) {
  const offset = getElementOffset(element);
  const x = point.x - offset.left;
  const y = point.y - offset.top;
  return { x, y };
}
var clampPercent = (value) => Math.max(0, Math.min(100, value));
function getPointPercentRelativeToNode(point, element) {
  const relativePoint = getPointRelativeToNode(point, element);
  const x = relativePoint.x / element.offsetWidth * 100;
  const y = relativePoint.y / element.offsetHeight * 100;
  return { x: clampPercent(x), y: clampPercent(y) };
}
function normalizePointValue(point, options) {
  const { dir = "ltr", orientation = "horizontal" } = options;
  const { x, y } = point;
  let result = { x, y };
  if (orientation === "horizontal" && dir === "rtl") {
    result = { x: 100 - x, y };
  }
  return orientation === "horizontal" ? result.x : result.y;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPointPercentRelativeToNode,
  getPointRelativeToNode,
  normalizePointValue
});
