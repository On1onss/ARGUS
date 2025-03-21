'use client'
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

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  addDomEvent: () => import_utils.addDomEvent,
  addPointerEvent: () => import_utils.addPointerEvent,
  analyzeBreakpoints: () => import_utils.analyzeBreakpoints,
  ariaAttr: () => import_utils.ariaAttr,
  arrayToObjectNotation: () => import_utils.arrayToObjectNotation,
  assignAfter: () => import_utils.assignAfter,
  breakpoints: () => import_utils.breakpoints,
  callAll: () => import_utils.callAll,
  callAllHandlers: () => import_utils.callAllHandlers,
  clampValue: () => import_utils.clampValue,
  compact: () => import_utils.compact,
  contains: () => import_utils.contains,
  countDecimalPlaces: () => import_utils.countDecimalPlaces,
  createContext: () => import_utils.createContext,
  createProps: () => createProps,
  createSplitProps: () => createSplitProps,
  cx: () => import_utils.cx,
  dataAttr: () => import_utils.dataAttr,
  get: () => import_utils.get,
  getActiveElement: () => import_utils.getActiveElement,
  getAllFocusable: () => import_utils.getAllFocusable,
  getAllTabbable: () => import_utils.getAllTabbable,
  getEventPoint: () => import_utils.getEventPoint,
  getEventWindow: () => import_utils.getEventWindow,
  getFirstFocusable: () => import_utils.getFirstFocusable,
  getFirstTabbableIn: () => import_utils.getFirstTabbableIn,
  getLastTabbableIn: () => import_utils.getLastTabbableIn,
  getNextTabbable: () => import_utils.getNextTabbable,
  getOwnerDocument: () => import_utils.getOwnerDocument,
  getOwnerWindow: () => import_utils.getOwnerWindow,
  getPreviousTabbable: () => import_utils.getPreviousTabbable,
  getValidChildren: () => import_utils.getValidChildren,
  hasDisplayNone: () => import_utils.hasDisplayNone,
  hasFocusWithin: () => import_utils.hasFocusWithin,
  hasNegativeTabIndex: () => import_utils.hasNegativeTabIndex,
  hasTabIndex: () => import_utils.hasTabIndex,
  interopDefault: () => import_utils.interopDefault,
  isArray: () => import_utils.isArray,
  isCssVar: () => import_utils.isCssVar,
  isCustomBreakpoint: () => import_utils.isCustomBreakpoint,
  isDefined: () => import_utils.isDefined,
  isElement: () => isElement,
  isEmpty: () => import_utils.isEmpty,
  isEmptyArray: () => import_utils.isEmptyArray,
  isEmptyObject: () => import_utils.isEmptyObject,
  isFocusable: () => import_utils.isFocusable,
  isFunction: () => import_utils.isFunction,
  isHTMLElement: () => isHTMLElement,
  isInputEvent: () => import_utils.isInputEvent,
  isMouseEvent: () => import_utils.isMouseEvent,
  isMultiTouchEvent: () => import_utils.isMultiTouchEvent,
  isNotNumber: () => import_utils.isNotNumber,
  isNull: () => import_utils.isNull,
  isNumber: () => import_utils.isNumber,
  isNumeric: () => import_utils.isNumeric,
  isObject: () => import_utils.isObject,
  isRefObject: () => import_utils.isRefObject,
  isResponsiveObjectLike: () => import_utils.isResponsiveObjectLike,
  isString: () => import_utils.isString,
  isTabbable: () => import_utils.isTabbable,
  isTouchEvent: () => import_utils.isTouchEvent,
  isUndefined: () => import_utils.isUndefined,
  lazyDisclosure: () => import_utils.lazyDisclosure,
  mapResponsive: () => import_utils.mapResponsive,
  memoizedGet: () => import_utils.memoizedGet,
  mergeWith: () => import_utils.mergeWith,
  objectToArrayNotation: () => import_utils.objectToArrayNotation,
  omit: () => import_utils.omit,
  percentToValue: () => import_utils.percentToValue,
  pick: () => import_utils.pick,
  px: () => import_utils.px,
  roundValueToStep: () => import_utils.roundValueToStep,
  runIfFn: () => import_utils.runIfFn,
  split: () => import_utils.split,
  splitProps: () => splitProps,
  toMediaQueryString: () => import_utils.toMediaQueryString,
  toPrecision: () => import_utils.toPrecision,
  valueToPercent: () => import_utils.valueToPercent,
  walkObject: () => import_utils.walkObject,
  warn: () => import_utils.warn
});
module.exports = __toCommonJS(utils_exports);

// src/utils/split-props.ts
var splitProps = (props, keys) => {
  const picked = {};
  const omitted = { ...props };
  if (typeof keys === "function") {
    for (const key in props) {
      if (keys(key)) {
        picked[key] = props[key];
        delete omitted[key];
      }
    }
  } else {
    for (const key of keys) {
      picked[key] = props[key];
      delete omitted[key];
    }
  }
  return [picked, omitted];
};
var createSplitProps = (keys) => {
  return function split2(props) {
    return splitProps(props, keys);
  };
};

// src/utils/create-props.ts
var createProps = () => (props) => Array.from(new Set(props));

// src/utils/index.ts
var import_utils = require("@chakra-ui/utils");
function isHTMLElement(el) {
  var _a;
  if (!isElement(el)) return false;
  const win = (_a = el.ownerDocument.defaultView) != null ? _a : window;
  return el instanceof win.HTMLElement;
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDomEvent,
  addPointerEvent,
  analyzeBreakpoints,
  ariaAttr,
  arrayToObjectNotation,
  assignAfter,
  breakpoints,
  callAll,
  callAllHandlers,
  clampValue,
  compact,
  contains,
  countDecimalPlaces,
  createContext,
  createProps,
  createSplitProps,
  cx,
  dataAttr,
  get,
  getActiveElement,
  getAllFocusable,
  getAllTabbable,
  getEventPoint,
  getEventWindow,
  getFirstFocusable,
  getFirstTabbableIn,
  getLastTabbableIn,
  getNextTabbable,
  getOwnerDocument,
  getOwnerWindow,
  getPreviousTabbable,
  getValidChildren,
  hasDisplayNone,
  hasFocusWithin,
  hasNegativeTabIndex,
  hasTabIndex,
  interopDefault,
  isArray,
  isCssVar,
  isCustomBreakpoint,
  isDefined,
  isElement,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isFocusable,
  isFunction,
  isHTMLElement,
  isInputEvent,
  isMouseEvent,
  isMultiTouchEvent,
  isNotNumber,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isRefObject,
  isResponsiveObjectLike,
  isString,
  isTabbable,
  isTouchEvent,
  isUndefined,
  lazyDisclosure,
  mapResponsive,
  memoizedGet,
  mergeWith,
  objectToArrayNotation,
  omit,
  percentToValue,
  pick,
  px,
  roundValueToStep,
  runIfFn,
  split,
  splitProps,
  toMediaQueryString,
  toPrecision,
  valueToPercent,
  walkObject,
  warn
});
//# sourceMappingURL=index.js.map