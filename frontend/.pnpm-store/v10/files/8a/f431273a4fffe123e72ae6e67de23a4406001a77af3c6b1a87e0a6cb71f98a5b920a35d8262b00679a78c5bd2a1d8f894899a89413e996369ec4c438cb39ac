
// src/get-child-of-type.ts
import * as React from "react";
function getChildOfType(children, type) {
  return React.Children.toArray(children).find(
    (item) => item.type === type
  );
}

// src/get-children-of-type.ts
import * as React2 from "react";
function getChildrenOfType(children, type) {
  return React2.Children.toArray(children).filter(
    (item) => Array.isArray(type) ? type.some((component) => component === item.type) : item.type === type
  );
}

// src/use-responsive-value.ts
import {
  useTheme,
  useBreakpointValue
} from "@chakra-ui/react";
var normalize = (variant, toArray) => {
  if (Array.isArray(variant)) return variant;
  else if (typeof variant === "object") return toArray == null ? void 0 : toArray(variant);
  if (variant != null) return [variant];
  return [];
};
var useResponsiveValue = (value, options) => {
  var _a;
  const theme = useTheme();
  const normalized = normalize(value, (_a = theme.__breakpoints) == null ? void 0 : _a.toArrayValue);
  return useBreakpointValue(normalized, options);
};

// src/index.ts
export * from "@chakra-ui/utils";
export {
  getChildOfType,
  getChildrenOfType,
  useResponsiveValue
};
//# sourceMappingURL=index.mjs.map