'use client'

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
import {
  addDomEvent,
  addPointerEvent,
  analyzeBreakpoints,
  ariaAttr,
  arrayToObjectNotation,
  breakpoints,
  callAll,
  callAllHandlers,
  clampValue,
  contains,
  countDecimalPlaces,
  cx,
  dataAttr,
  get,
  getActiveElement,
  getAllFocusable,
  getAllTabbable,
  getEventWindow,
  getFirstFocusable,
  getFirstTabbableIn,
  getLastTabbableIn,
  getNextTabbable,
  getOwnerDocument,
  getOwnerWindow,
  getPreviousTabbable,
  hasDisplayNone,
  hasFocusWithin,
  hasNegativeTabIndex,
  hasTabIndex,
  isArray,
  isCssVar,
  isCustomBreakpoint,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isFocusable,
  isFunction,
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
  toMediaQueryString,
  toPrecision,
  valueToPercent,
  walkObject,
  warn,
  assignAfter,
  compact,
  createContext,
  getEventPoint,
  getValidChildren,
  interopDefault,
  lazyDisclosure
} from "@chakra-ui/utils";
function isHTMLElement(el) {
  var _a;
  if (!isElement(el)) return false;
  const win = (_a = el.ownerDocument.defaultView) != null ? _a : window;
  return el instanceof win.HTMLElement;
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}

export {
  splitProps,
  createSplitProps,
  createProps,
  isHTMLElement,
  isElement,
  addDomEvent,
  addPointerEvent,
  analyzeBreakpoints,
  ariaAttr,
  arrayToObjectNotation,
  breakpoints,
  callAll,
  callAllHandlers,
  clampValue,
  contains,
  countDecimalPlaces,
  cx,
  dataAttr,
  get,
  getActiveElement,
  getAllFocusable,
  getAllTabbable,
  getEventWindow,
  getFirstFocusable,
  getFirstTabbableIn,
  getLastTabbableIn,
  getNextTabbable,
  getOwnerDocument,
  getOwnerWindow,
  getPreviousTabbable,
  hasDisplayNone,
  hasFocusWithin,
  hasNegativeTabIndex,
  hasTabIndex,
  isArray,
  isCssVar,
  isCustomBreakpoint,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isFocusable,
  isFunction,
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
  toMediaQueryString,
  toPrecision,
  valueToPercent,
  walkObject,
  warn,
  assignAfter,
  compact,
  createContext,
  getEventPoint,
  getValidChildren,
  interopDefault,
  lazyDisclosure
};
//# sourceMappingURL=chunk-7EWPNTWZ.mjs.map