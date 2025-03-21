'use client'

// src/nprogress.tsx
import {
  chakra,
  forwardRef,
  omitThemingProps,
  useColorModeValue,
  useMultiStyleConfig
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import { useNProgress } from "@tanem/react-nprogress";
import { jsx } from "react/jsx-runtime";
var NProgress = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("SuiNProgress", props);
  const { colorScheme: c } = props;
  const { children, isAnimating, ...containerProps } = omitThemingProps(props);
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  });
  const barStyles = {
    width: "100%",
    height: "2px",
    bg: useColorModeValue(`${c}.500`, `${c}.300`),
    ...styles.bar
  };
  return /* @__PURE__ */ jsx(
    chakra.div,
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
      className: cx("sui-nprogress", props.className),
      children: /* @__PURE__ */ jsx(
        chakra.div,
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
import { useEffect, useState } from "react";
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
var NProgressNextRouter = ({ router }) => {
  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0
  });
  useEffect(() => {
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
  return /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2(NProgress, { isAnimating }, state.loadingKey) });
};
export {
  NProgress,
  NProgressNextRouter
};
//# sourceMappingURL=index.mjs.map