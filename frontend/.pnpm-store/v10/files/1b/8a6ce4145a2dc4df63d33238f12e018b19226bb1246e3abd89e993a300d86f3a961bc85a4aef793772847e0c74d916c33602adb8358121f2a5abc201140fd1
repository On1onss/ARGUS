"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getChildOfType: () => getChildOfType,
  getChildrenOfType: () => getChildrenOfType,
  useResponsiveValue: () => useResponsiveValue
});
module.exports = __toCommonJS(src_exports);

// src/get-child-of-type.ts
var React = __toESM(require("react"));
function getChildOfType(children, type) {
  return React.Children.toArray(children).find(
    (item) => item.type === type
  );
}

// src/get-children-of-type.ts
var React2 = __toESM(require("react"));
function getChildrenOfType(children, type) {
  return React2.Children.toArray(children).filter(
    (item) => Array.isArray(type) ? type.some((component) => component === item.type) : item.type === type
  );
}

// src/use-responsive-value.ts
var import_react = require("@chakra-ui/react");
var normalize = (variant, toArray) => {
  if (Array.isArray(variant)) return variant;
  else if (typeof variant === "object") return toArray == null ? void 0 : toArray(variant);
  if (variant != null) return [variant];
  return [];
};
var useResponsiveValue = (value, options) => {
  var _a;
  const theme = (0, import_react.useTheme)();
  const normalized = normalize(value, (_a = theme.__breakpoints) == null ? void 0 : _a.toArrayValue);
  return (0, import_react.useBreakpointValue)(normalized, options);
};

// src/index.ts
__reExport(src_exports, require("@chakra-ui/utils"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getChildOfType,
  getChildrenOfType,
  useResponsiveValue,
  ...require("@chakra-ui/utils")
});
//# sourceMappingURL=index.js.map