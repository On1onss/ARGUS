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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NProgress: () => NProgress,
  NProgressNextRouter: () => NProgressNextRouter
});
module.exports = __toCommonJS(src_exports);

// src/nprogress.tsx
var import_react = require("@chakra-ui/react");
var import_utils = require("@chakra-ui/utils");
var import_react_nprogress = require("@tanem/react-nprogress");
var import_jsx_runtime = require("react/jsx-runtime");
var NProgress = (0, import_react.forwardRef)((props, ref) => {
  const styles = (0, import_react.useMultiStyleConfig)("SuiNProgress", props);
  const { colorScheme: c } = props;
  const { children, isAnimating, ...containerProps } = (0, import_react.omitThemingProps)(props);
  const { animationDuration, isFinished, progress } = (0, import_react_nprogress.useNProgress)({
    isAnimating
  });
  const barStyles = {
    width: "100%",
    height: "2px",
    bg: (0, import_react.useColorModeValue)(`${c}.500`, `${c}.300`),
    ...styles.bar
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.chakra.div,
    {
      ref,
      __css: styles.container,
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      opacity: isFinished ? 0 : 1,
      zIndex: "overlay",
      transition: `opacity ${animationDuration}ms linear`,
      ...containerProps,
      className: (0, import_utils.cx)("sui-nprogress", props.className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.chakra.div,
        {
          __css: barStyles,
          ml: `${(-1 + progress) * 100}%;`,
          transition: `margin-left ${animationDuration}ms linear`
        }
      )
    }
  );
});
NProgress.displayName = "NProgress";

// src/next-router.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var NProgressNextRouter = ({ router }) => {
  const [state, setState] = (0, import_react2.useState)({
    isRouteChanging: false,
    loadingKey: 0
  });
  (0, import_react2.useEffect)(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1
      }));
    };
    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false
      }));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);
  const isAnimating = state.isRouteChanging;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(NProgress, { isAnimating }, state.loadingKey) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NProgress,
  NProgressNextRouter
});
//# sourceMappingURL=index.js.map