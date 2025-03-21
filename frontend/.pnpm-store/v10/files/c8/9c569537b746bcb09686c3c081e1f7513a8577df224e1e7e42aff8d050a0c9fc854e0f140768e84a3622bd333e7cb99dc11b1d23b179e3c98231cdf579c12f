import {
  getElementOffset
} from "./chunk-LYGZVQ73.mjs";

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

export {
  getPointRelativeToNode,
  getPointPercentRelativeToNode,
  normalizePointValue
};
