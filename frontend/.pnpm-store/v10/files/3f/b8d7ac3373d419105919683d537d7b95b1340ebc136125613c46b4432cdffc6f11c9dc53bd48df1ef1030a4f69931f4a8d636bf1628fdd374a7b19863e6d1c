'use client'
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  FilterIcon,
  HamburgerIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  ViewIcon,
  ViewOffIcon,
  createIcon
} from "./chunk-KRTCJUOH.mjs";
import {
  splitProps
} from "./chunk-7EWPNTWZ.mjs";

// src/command/command.tsx
import { chakra, Kbd, useStyleConfig } from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import { Fragment, jsx } from "react/jsx-runtime";
var Key = ({ children }) => {
  if (typeof children !== "string") {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  if (["then", "or", "+"].includes(children)) {
    return /* @__PURE__ */ jsx(chakra.span, { children });
  }
  return /* @__PURE__ */ jsx(Kbd, { children });
};
var Command = (props) => {
  const { children, className, ...rest } = props;
  if (typeof children !== "string") {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  const keys = children.split(/\s|\+/);
  const styles = useStyleConfig("SuiCommand");
  const commandStyles = {
    "& > *:not(style) ~ *:not(style)": { marginEnd: 1 },
    color: "muted",
    ...styles
  };
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      className: cx("sui-command", className),
      __css: commandStyles,
      ...rest,
      children: keys.map((key) => /* @__PURE__ */ jsx(Key, { children: key }, key))
    }
  );
};

// src/typography/br.tsx
import { chakra as chakra2 } from "@chakra-ui/react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Br = (props) => {
  return /* @__PURE__ */ jsx2(chakra2.span, { ...props, children: /* @__PURE__ */ jsx2("br", {}) });
};

// src/empty-state/empty-state.tsx
import {
  forwardRef,
  Icon,
  chakra as chakra3,
  omitThemingProps,
  useMultiStyleConfig,
  ButtonGroup,
  createStylesContext
} from "@chakra-ui/react";
import { cx as cx2 } from "@chakra-ui/utils";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var [StylesProvider, useStyles] = createStylesContext("SuiEmptyState");
var useEmptyStateStyles = useStyles;
var EmptyState = (props) => {
  const {
    children,
    spacing,
    icon,
    title,
    description,
    actions,
    footer,
    ...rest
  } = props;
  return /* @__PURE__ */ jsx3(EmptyStateContainer, { ...rest, children: /* @__PURE__ */ jsxs(EmptyStateBody, { spacing, children: [
    icon && /* @__PURE__ */ jsx3(EmptyStateIcon, { as: icon }),
    /* @__PURE__ */ jsxs(chakra3.div, { children: [
      title && /* @__PURE__ */ jsx3(EmptyStateTitle, { children: title }),
      description && /* @__PURE__ */ jsx3(EmptyStateDescription, { children: description })
    ] }),
    children,
    actions && /* @__PURE__ */ jsx3(EmptyStateActions, { children: actions }),
    footer && /* @__PURE__ */ jsx3(EmptyStateFooter, { children: footer })
  ] }) });
};
EmptyState.displayName = "EmptyState";
var EmptyStateContainer = (props) => {
  const { children, spacing, ...rest } = props;
  const styles = useMultiStyleConfig("SuiEmptyState", props);
  const containerProps = omitThemingProps(rest);
  const containerStyles = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ...styles.container
  };
  return /* @__PURE__ */ jsx3(StylesProvider, { value: styles, children: /* @__PURE__ */ jsx3(
    chakra3.div,
    {
      ...containerProps,
      __css: containerStyles,
      className: cx2("sui-empty-state", props.className),
      children
    }
  ) });
};
EmptyStateContainer.displayName = "EmptyStateContainer";
var EmptyStateIcon = forwardRef(
  (props, ref) => {
    var _a;
    const styles = useStyles();
    return /* @__PURE__ */ jsx3(
      Icon,
      {
        ref,
        role: "presentation",
        ...props,
        boxSize: (_a = props.boxSize) != null ? _a : 10,
        sx: {
          ...styles.icon,
          ...props.sx
        },
        className: cx2("sui-empty-state__icon", props.className)
      }
    );
  }
);
EmptyStateIcon.displayName = "EmptyStateIcon";
var EmptyStateTitle = (props) => {
  const styles = useStyles();
  const titleStyles = {
    mb: 1,
    ...styles.title
  };
  return /* @__PURE__ */ jsx3(
    chakra3.h3,
    {
      __css: titleStyles,
      ...props,
      className: cx2("sui-empty-state__title", props.className)
    }
  );
};
EmptyStateTitle.displayName = "EmptyStateTitle";
var EmptyStateDescription = (props) => {
  const styles = useStyles();
  const descriptionStyles = {
    color: "muted",
    fontSize: "md",
    ...styles.description
  };
  return /* @__PURE__ */ jsx3(
    chakra3.p,
    {
      __css: descriptionStyles,
      ...props,
      className: cx2("sui-empty-state__description", props.className)
    }
  );
};
EmptyStateDescription.displayName = "EmptyStateDescription";
var EmptyStateBody = (props) => {
  const { spacing = 8, ...rest } = props;
  const styles = useStyles();
  const bodyStyles = {
    ...styles.body
  };
  return /* @__PURE__ */ jsx3(
    chakra3.div,
    {
      __css: bodyStyles,
      ...rest,
      className: cx2("sui-empty-state__body", props.className)
    }
  );
};
EmptyStateBody.displayName = "EmptyStateBody";
var EmptyStateActions = (props) => {
  const styles = useStyles();
  return /* @__PURE__ */ jsx3(
    ButtonGroup,
    {
      sx: styles.actions,
      ...props,
      className: cx2("sui-empty-state__actions", props.className)
    }
  );
};
EmptyStateActions.displayName = "EmptyStateActions";
var EmptyStateFooter = (props) => {
  const styles = useStyles();
  return /* @__PURE__ */ jsx3(
    chakra3.footer,
    {
      __css: styles.footer,
      ...props,
      className: cx2("sui-empty-state__footer", props.className)
    }
  );
};
EmptyStateFooter.displayName = "EmptyStateFooter";

// src/error-boundary/error-boundary.tsx
import * as React2 from "react";

// src/provider/saas-provider.tsx
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as defaultTheme } from "@saas-ui/theme";
import { jsx as jsx4 } from "react/jsx-runtime";
var SaasContext = React.createContext({});
function SaasProvider(props) {
  const { theme, linkComponent, onError, children, ...rest } = props;
  const context = {
    linkComponent,
    onError
  };
  return /* @__PURE__ */ jsx4(SaasContext.Provider, { value: context, children: /* @__PURE__ */ jsx4(ChakraProvider, { ...rest, theme: theme || defaultTheme, children }) });
}
var useSaas = () => React.useContext(SaasContext);

// src/provider/use-link.tsx
import { chakra as chakra4 } from "@chakra-ui/react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Link = (props) => /* @__PURE__ */ jsx5(chakra4.a, { ...props });
function useLink() {
  const context = useSaas();
  if (context == null ? void 0 : context.linkComponent) {
    return context.linkComponent;
  }
  return Link;
}

// src/error-boundary/error-boundary.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var ErrorBoundary = class extends React2.Component {
  constructor(props) {
    super(props);
    this.onError = (error, errorInfo) => {
      var _a, _b, _c, _d;
      (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, error, errorInfo);
      (_d = (_c = this.context).onError) == null ? void 0 : _d.call(_c, error, errorInfo);
    };
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    this.onError(error, errorInfo);
  }
  render() {
    if (this.state.error) {
      return this.props.fallback || /* @__PURE__ */ jsx6("h1", { children: "Something went wrong." });
    }
    return this.props.children;
  }
};
ErrorBoundary.contextType = SaasContext;

// src/app-shell/app-shell.tsx
import * as React3 from "react";
import {
  Flex,
  createStylesContext as createStylesContext2,
  useMultiStyleConfig as useMultiStyleConfig2,
  omitThemingProps as omitThemingProps2,
  forwardRef as forwardRef2
} from "@chakra-ui/react";
import { cx as cx3 } from "@chakra-ui/utils";

// src/app-shell/app-shell-context.ts
import { createContext as createContext2 } from "@chakra-ui/utils";
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";

// src/sidebar/sidebar-utils.ts
var getBreakpoints = (breakpoint = "lg") => {
  return breakpoint ? {
    base: true,
    [breakpoint]: false
  } : { base: false };
};

// src/app-shell/app-shell-context.ts
var [AppShellProvider, useAppShellContext] = createContext2({
  strict: false,
  errorMessage: "AppShell context not available."
});
var useAppShell = (props) => {
  const disclosure = useDisclosure();
  const breakpoints = getBreakpoints(props.toggleBreakpoint);
  const isMobile = useBreakpointValue(breakpoints, {
    fallback: props.toggleBreakpoint || "lg"
  });
  return {
    isSidebarOpen: disclosure.isOpen,
    closeSidebar: disclosure.onClose,
    openSidebar: disclosure.onOpen,
    toggleSidebar: disclosure.onToggle,
    isMobile
  };
};

// src/app-shell/app-shell.tsx
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var [StylesProvider2, useStyles2] = createStylesContext2("SuiAppShell");
var AppShell = forwardRef2((props, ref) => {
  const styles = useMultiStyleConfig2("SuiAppShell", props);
  const {
    navbar,
    sidebar,
    aside,
    footer,
    children,
    mainRef,
    ...containerProps
  } = omitThemingProps2(props);
  const containerStyles = {
    flexDirection: "column",
    ...styles.container
  };
  const innerStyles = {
    flex: 1,
    minHeight: 0,
    // make sure child flex divs get correct height.
    minWidth: 0,
    // make sure child flex divs get correct width.
    ...styles.inner
  };
  const mainStyles = {
    flex: 1,
    flexDirection: "column",
    minWidth: 0,
    // make sure child flex divs get correct width.
    ...styles.main
  };
  const isSidebar = React3.isValidElement(sidebar) && sidebar.type.id === "Sidebar";
  const context = useAppShell({
    toggleBreakpoint: isSidebar ? sidebar == null ? void 0 : sidebar.props.toggleBreakpoint : void 0
  });
  return /* @__PURE__ */ jsx7(AppShellProvider, { value: context, children: /* @__PURE__ */ jsx7(StylesProvider2, { value: styles, children: /* @__PURE__ */ jsxs2(
    Flex,
    {
      ref,
      ...containerProps,
      sx: containerStyles,
      className: cx3("sui-app-shell", props.className),
      children: [
        navbar,
        /* @__PURE__ */ jsxs2(Flex, { sx: innerStyles, className: "saas-app-shell__inner", children: [
          sidebar,
          /* @__PURE__ */ jsx7(
            Flex,
            {
              ref: mainRef,
              sx: mainStyles,
              className: "saas-app-shell__main",
              children
            }
          ),
          aside
        ] }),
        footer
      ]
    }
  ) }) });
});
AppShell.displayName = "AppShell";

// src/banner/banner.tsx
import * as React5 from "react";
import {
  CloseButton,
  chakra as chakra6,
  forwardRef as forwardRef4,
  omitThemingProps as omitThemingProps3,
  ButtonGroup as ButtonGroup2,
  useMultiStyleConfig as useMultiStyleConfig3,
  createStylesContext as createStylesContext3,
  Icon as Icon3
} from "@chakra-ui/react";
import { callAllHandlers, cx as cx4, createContext as createContext3 } from "@chakra-ui/utils";

// src/banner/icons.tsx
import { Icon as Icon2 } from "@chakra-ui/react";
import { jsx as jsx8 } from "react/jsx-runtime";
function CheckIcon2(props) {
  return /* @__PURE__ */ jsx8(Icon2, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx8(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function InfoIcon(props) {
  return /* @__PURE__ */ jsx8(Icon2, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx8(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function WarningIcon(props) {
  return /* @__PURE__ */ jsx8(Icon2, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx8(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}

// src/banner/banner.tsx
import { AnimatePresence } from "framer-motion";

// src/banner/banner-transition.tsx
import * as React4 from "react";
import { chakra as chakra5 } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { EASINGS, scaleFadeConfig, slideFadeConfig } from "@chakra-ui/react";
import { jsx as jsx9 } from "react/jsx-runtime";
var defaultTransition = {
  enter: {
    duration: 0.2,
    ease: EASINGS.easeOut
  },
  exit: {
    duration: 0.2,
    ease: EASINGS.easeIn
  }
};
var transitions = {
  slideOutTop: {
    ...slideFadeConfig,
    custom: {
      offsetY: "-100%",
      reverse: true,
      transition: defaultTransition
    },
    initial: "enter"
  },
  slideOutBottom: {
    ...slideFadeConfig,
    custom: {
      offsetY: "100%",
      reverse: true,
      transition: defaultTransition
    },
    initial: "enter"
  },
  fade: {
    ...slideFadeConfig,
    custom: {
      transition: defaultTransition
    },
    initial: "enter"
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.1, reverse: true, transition: defaultTransition },
    initial: "enter"
  },
  none: {
    custom: {}
  }
};
var Motion = chakra5(motion.div);
var BannerTransition = React4.forwardRef(
  (props, ref) => {
    const { motionPreset, ...rest } = props;
    const preset = transitions[motionPreset];
    const motionProps = {
      ...preset
    };
    return /* @__PURE__ */ jsx9(Motion, { ref, ...motionProps, ...rest });
  }
);

// src/banner/banner.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var [StylesProvider3, useStyles3] = createStylesContext3("SuiBanner");
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon2, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" }
};
var [BannerProvider, useBannerContext] = createContext3({
  name: "BannerContext",
  errorMessage: "useBannerContext: `context` is undefined. Seems you forgot to wrap banner components in `<Banner />`"
});
var Banner = forwardRef4((props, ref) => {
  var _a;
  const {
    id,
    status = "info",
    isOpen = true,
    onClose,
    motionPreset = "slideOutTop",
    ...rest
  } = omitThemingProps3(props);
  const colorScheme = (_a = props.colorScheme) != null ? _a : STATUSES[status].colorScheme;
  const styles = useMultiStyleConfig3("SuiBanner", {
    ...props,
    colorScheme
  });
  const containerStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  };
  const context = {
    id: id || `banner-${React5.useId()}`,
    status,
    onClose,
    isOpen
  };
  const role = ["warning", "error"].includes(status) ? "alert" : "status";
  const animate = isOpen ? "enter" : "exit";
  return /* @__PURE__ */ jsx10(BannerProvider, { value: context, children: /* @__PURE__ */ jsx10(StylesProvider3, { value: styles, children: /* @__PURE__ */ jsx10(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx10(
    BannerTransition,
    {
      id: context.id,
      role,
      ref,
      motionPreset,
      animate,
      ...rest,
      className: cx4("sui-banner", props.className),
      __css: containerStyles
    }
  ) }) }) });
});
Banner.displayName = "Banner";
var BannerContent = forwardRef4(
  (props, ref) => {
    const styles = useStyles3();
    return /* @__PURE__ */ jsx10(
      chakra6.div,
      {
        ref,
        ...props,
        className: cx4("sui-banner__content", props.className),
        __css: styles.content
      }
    );
  }
);
BannerContent.displayName = "BannerContent";
var BannerTitle = forwardRef4((props, ref) => {
  const styles = useStyles3();
  return /* @__PURE__ */ jsx10(
    chakra6.div,
    {
      ref,
      ...props,
      className: cx4("sui-banner__title", props.className),
      __css: styles.title
    }
  );
});
BannerTitle.displayName = "BannerTitle";
var BannerDescription = forwardRef4(
  (props, ref) => {
    const styles = useStyles3();
    const descriptionStyles = {
      display: "inline",
      ...styles.description
    };
    return /* @__PURE__ */ jsx10(
      chakra6.div,
      {
        ref,
        ...props,
        className: cx4("sui-banner__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
BannerDescription.displayName = "BannerDescription";
var BannerActions = forwardRef4(
  (props, ref) => {
    const { children, variant } = props;
    const styles = useStyles3();
    return /* @__PURE__ */ jsx10(
      chakra6.div,
      {
        ref,
        ...props,
        className: cx4("sui-banner__actions", props.className),
        __css: styles.actions,
        children: /* @__PURE__ */ jsx10(ButtonGroup2, { variant, children })
      }
    );
  }
);
BannerActions.displayName = "BannerActions";
var BannerIcon = (props) => {
  const { status } = useBannerContext();
  const { icon, ...rest } = props;
  const { icon: statusIcon } = STATUSES[status];
  const styles = useStyles3();
  return /* @__PURE__ */ jsx10(
    chakra6.span,
    {
      display: "inherit",
      ...rest,
      className: cx4("sui-banner__icon", props.className),
      __css: styles.icon,
      children: /* @__PURE__ */ jsx10(Icon3, { as: icon || statusIcon, w: "100%", h: "100%" })
    }
  );
};
BannerIcon.displayName = "BannerIcon";
var BannerCloseButton = forwardRef4(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose, isOpen, id } = useBannerContext();
    const _className = cx4("sui-banner__close-btn", className);
    const styles = useStyles3();
    return /* @__PURE__ */ jsx10(
      CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose == null ? void 0 : onClose();
        }),
        "aria-controls": id,
        "aria-expanded": (isOpen == null ? void 0 : isOpen.toString()) ? "true" : "false",
        ...rest
      }
    );
  }
);
BannerCloseButton.displayName = "BannerCloseButton";

// src/collapse/use-collapse.ts
import * as React6 from "react";
import { useDisclosure as useDisclosure2 } from "@chakra-ui/react";
import { cx as cx5, createContext as createContext4 } from "@chakra-ui/utils";
var [CollapseProvider, useCollapseContext] = createContext4({
  name: "UseCollapseReturn"
});
var useCollapse = (props = {}) => {
  const { isCollapsible = true, ...rest } = props;
  const id = `collapse-${React6.useId()}`;
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure2(rest);
  const getToggleProps = React6.useCallback(
    (props2 = {}) => {
      const { className, ...rest2 } = props2;
      if (isCollapsible) {
        return {
          className: cx5("sui-collapse-toggle", className),
          onClick: () => onToggle(),
          "aria-expanded": isOpen.toString(),
          "aria-controls": id,
          ...rest2
        };
      }
      return {};
    },
    [isCollapsible, isOpen]
  );
  const getCollapseProps = React6.useCallback(
    (props2 = {}) => {
      return {
        id,
        in: isOpen,
        ...props2
      };
    },
    [isOpen]
  );
  return {
    isCollapsible,
    isOpen,
    getToggleProps,
    getCollapseProps,
    onToggle,
    onOpen,
    onClose
  };
};

// src/structured-list/list.tsx
import * as React7 from "react";
import {
  chakra as chakra7,
  forwardRef as forwardRef5,
  omitThemingProps as omitThemingProps4,
  useMultiStyleConfig as useMultiStyleConfig4,
  createStylesContext as createStylesContext4,
  Icon as Icon4,
  useMergeRefs
} from "@chakra-ui/react";
import { callAllHandlers as callAllHandlers2, cx as cx6, dataAttr, createContext as createContext5 } from "@chakra-ui/utils";
import { nextById, prevById, queryAll } from "@zag-js/dom-utils";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
import { createElement } from "react";
var [StylesProvider4, useStyles4] = createStylesContext4("SuiStructuredList");
var [StructuredListProvider, useStructuredListContext] = createContext5({
  name: "StructuredListContext",
  errorMessage: "useStructuredListContext: `context` is undefined. Seems you forgot to wrap the components in `<StructuredList />`"
});
function queryAllItems(root) {
  return queryAll(root, `[role='button']:not([disabled])`);
}
var useStructuredList = (props) => {
  var _a;
  const id = React7.useId();
  const ref = React7.useRef(null);
  const [focusId, setFocusId] = React7.useState(null);
  const listProps = {
    onBlur: callAllHandlers2(props.onBlur, (e) => {
      if (e.relatedTarget) {
        const items = queryAllItems(ref.current);
        if (!items.includes(e.relatedTarget)) {
          setFocusId(null);
        }
      }
    })
  };
  return {
    id: (_a = props.id) != null ? _a : id,
    containerRef: ref,
    focusId,
    setFocusId,
    listProps
  };
};
var StructuredList = forwardRef5(
  (props, ref) => {
    const { items, children, ...rest } = props;
    const styles = useMultiStyleConfig4("SuiStructuredList", rest);
    const ownProps = omitThemingProps4(rest);
    let content;
    if (items) {
      content = items.map((item, i) => {
        return /* @__PURE__ */ createElement(StructuredListItem, { ...item, key: item.id || i });
      });
    } else {
      content = children;
    }
    const listStyles = {
      py: 2,
      position: "relative",
      ...styles.list
    };
    const { listProps, ...context } = useStructuredList(props);
    return /* @__PURE__ */ jsx11(StructuredListProvider, { value: context, children: /* @__PURE__ */ jsx11(StylesProvider4, { value: styles, children: /* @__PURE__ */ jsx11(
      chakra7.ul,
      {
        ref: useMergeRefs(ref, context.containerRef),
        __css: listStyles,
        ...ownProps,
        ...listProps,
        className: cx6("sui-list", props.className),
        children: content
      }
    ) }) });
  }
);
StructuredList.displayName = "StructuredList";
var StructuredListHeader = forwardRef5(
  (props, ref) => {
    const {
      children,
      onClick,
      action,
      role = "heading",
      level = 1,
      ...rest
    } = props;
    const styles = useStyles4();
    return /* @__PURE__ */ jsxs3(
      chakra7.li,
      {
        ref,
        __css: styles.header,
        onClick,
        ...rest,
        className: cx6("sui-list__header", props.className),
        children: [
          /* @__PURE__ */ jsx11(chakra7.span, { flex: "1", userSelect: "none", role, "aria-level": level, children }),
          action
        ]
      }
    );
  }
);
StructuredListHeader.displayName = "StructuredListHeader";
var StructuredListItem = forwardRef5(
  (props, ref) => {
    const { onClick, href, as, children, isDisabled, ...rest } = props;
    const styles = useStyles4();
    const isButton = !!(onClick || href);
    const ContentWrapper = isButton ? StructuredListButton : React7.Fragment;
    const disablePadding = !!isButton;
    const itemStyles = {
      ...styles.item,
      ...disablePadding ? { py: 0, px: 0 } : {}
    };
    const wrapperProps = isButton ? {
      onClick,
      href,
      as,
      isDisabled
    } : {};
    const content = isButton ? /* @__PURE__ */ jsx11(ContentWrapper, { ...wrapperProps, children }) : children;
    return /* @__PURE__ */ jsx11(
      chakra7.li,
      {
        ref,
        __css: itemStyles,
        ...rest,
        className: cx6("sui-list__item", props.className),
        children: content
      }
    );
  }
);
StructuredListItem.displayName = "StructuredListItem";
var useStructuredListButton = (props) => {
  var _a;
  const {
    id: containerId,
    containerRef,
    focusId,
    setFocusId
  } = useStructuredListContext();
  const id = `${containerId}-${React7.useId()}`;
  const buttonId = (_a = props.id) != null ? _a : id;
  const isFocused = focusId === buttonId;
  function getItems() {
    return queryAll(
      containerRef.current,
      `.sui-list__item-button:not([aria-disabled=true])`
    );
  }
  const buttonProps = {
    id: buttonId,
    ["data-focus"]: dataAttr(isFocused),
    ["aria-disabled"]: props.isDisabled ? "true" : void 0,
    tabIndex: props.isDisabled ? -1 : 0,
    onFocus: callAllHandlers2(props.onFocus, () => {
      setFocusId(buttonId);
    }),
    onKeyDown: callAllHandlers2(
      props.onKeyDown,
      React7.useCallback(
        (e) => {
          const items = getItems();
          const keyMap = {
            ArrowUp: () => {
              var _a2;
              (_a2 = prevById(items, buttonId)) == null ? void 0 : _a2.focus();
            },
            ArrowDown: () => {
              var _a2;
              (_a2 = nextById(items, buttonId)) == null ? void 0 : _a2.focus();
            },
            Home: () => {
              var _a2;
              (_a2 = items[0]) == null ? void 0 : _a2.focus();
            },
            End: () => {
              var _a2;
              (_a2 = items[items.length - 1]) == null ? void 0 : _a2.focus();
            }
          };
          if (keyMap[e.key]) {
            e.preventDefault();
            keyMap[e.key](e);
          }
        },
        [buttonId]
      )
    ),
    onClick: (e) => {
      var _a2;
      if (props.isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      (_a2 = props.onClick) == null ? void 0 : _a2.call(props, e);
    }
  };
  return {
    buttonProps
  };
};
var StructuredListButton = forwardRef5((props, ref) => {
  const { children, isDisabled, ...rest } = props;
  const { buttonProps } = useStructuredListButton(props);
  const styles = useStyles4();
  return /* @__PURE__ */ jsx11(
    chakra7.div,
    {
      ref,
      __css: styles.button,
      role: "button",
      ...rest,
      ...buttonProps,
      className: cx6("sui-list__item-button", props.className),
      children
    }
  );
});
StructuredListButton.displayName = "StructuredListButton";
var StructuredListIcon = (props) => {
  const { children, spacing, size = 5, as, ...rest } = props;
  const styles = useStyles4();
  const iconStyles = {
    ...styles.icon,
    me: spacing
  };
  let _icon = children;
  if (!_icon && as) {
    _icon = /* @__PURE__ */ jsx11(Icon4, { as, role: "presentation", boxSize: size });
  } else if (React7.isValidElement(_icon) && _icon.type === Icon4) {
    _icon = React7.cloneElement(_icon, {
      boxSize: size
    });
  }
  return /* @__PURE__ */ jsx11(
    chakra7.div,
    {
      __css: iconStyles,
      ...rest,
      className: cx6("sui-list__item-icon", props.className),
      children: _icon
    }
  );
};
StructuredListIcon.displayName = "StructuredListItemIcon";
var StructuredListCell = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles4();
  return /* @__PURE__ */ jsx11(
    chakra7.div,
    {
      __css: styles.cell,
      ...rest,
      className: cx6("sui-list__cell", props.className),
      children
    }
  );
};
StructuredListCell.displayName = "StructuredListCell";

// src/link/link.tsx
import { Link as ChakraLink, forwardRef as forwardRef6 } from "@chakra-ui/react";
import { jsx as jsx12 } from "react/jsx-runtime";
var Link2 = forwardRef6((props, ref) => {
  const LinkComponent = useLink();
  const { href, ...rest } = props;
  return /* @__PURE__ */ jsx12(ChakraLink, { as: LinkComponent, ref, href, ...rest });
});
Link2.displayName = "Link";

// src/loading-overlay/loading-overlay.tsx
import { useState as useState2 } from "react";
import {
  chakra as chakra8,
  Spinner,
  createStylesContext as createStylesContext5,
  useMultiStyleConfig as useMultiStyleConfig5,
  omitThemingProps as omitThemingProps5,
  fadeConfig
} from "@chakra-ui/react";
import { cx as cx7 } from "@chakra-ui/utils";
import { AnimatePresence as AnimatePresence2, motion as motion2 } from "framer-motion";
import { jsx as jsx13 } from "react/jsx-runtime";
var [StylesProvider5, useStyles5] = createStylesContext5("SuiLoadingOverlay");
var Motion2 = chakra8(motion2.div);
var LoadingOverlay = (props) => {
  const styles = useMultiStyleConfig5("SuiLoadingOverlay", props);
  const {
    children,
    isLoading = true,
    spacing = 2,
    motionPreset,
    ...rest
  } = omitThemingProps5(props);
  const overlayStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing },
    ...styles.overlay
  };
  const [animateInitial] = useState2(!isLoading && motionPreset !== "none");
  const motionProps = motionPreset === "none" ? {} : fadeConfig;
  return /* @__PURE__ */ jsx13(StylesProvider5, { value: styles, children: /* @__PURE__ */ jsx13(AnimatePresence2, { initial: animateInitial, children: isLoading && /* @__PURE__ */ jsx13(
    Motion2,
    {
      ...motionProps,
      ...rest,
      __css: overlayStyles,
      className: cx7("chakra-loading-overlay", props.className),
      children
    }
  ) }) });
};
LoadingOverlay.displayName = "LoadingOverlay";
var LoadingSpinner = Spinner;
var LoadingText = (props) => {
  const styles = useStyles5();
  return /* @__PURE__ */ jsx13(chakra8.p, { ...props, __css: styles.text });
};

// src/menu/overflow-menu.tsx
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton
} from "@chakra-ui/react";

// src/menu/icons.tsx
import { Icon as Icon5 } from "@chakra-ui/react";
import { jsx as jsx14, jsxs as jsxs4 } from "react/jsx-runtime";
var MoreIcon = (props) => {
  return /* @__PURE__ */ jsxs4(Icon5, { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx14("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ jsx14("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ jsx14("circle", { cx: "12", cy: "19", r: "1" })
  ] });
};

// src/menu/overflow-menu.tsx
import { jsx as jsx15, jsxs as jsxs5 } from "react/jsx-runtime";
var OverflowMenu = (props) => {
  const {
    variant = "ghost",
    size,
    label = "More",
    icon = /* @__PURE__ */ jsx15(MoreIcon, {}),
    menuListProps,
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ jsxs5(Menu, { ...rest, children: [
    /* @__PURE__ */ jsx15(
      MenuButton,
      {
        as: IconButton,
        icon,
        "aria-label": label,
        variant,
        size
      }
    ),
    /* @__PURE__ */ jsx15(MenuList, { ...menuListProps, children })
  ] });
};
OverflowMenu.displayName = "OverflowMenu";

// src/menu/context-menu.tsx
import * as React10 from "react";
import { useCallback as useCallback3, useRef as useRef4, useState as useState5 } from "react";
import {
  chakra as chakra9,
  Menu as Menu2,
  MenuList as MenuList2,
  MenuItem,
  useMenuContext,
  useEventListener,
  forwardRef as forwardRef7,
  mergeRefs
} from "@chakra-ui/react";
import { callAllHandlers as callAllHandlers3, runIfFn, createContext as createContext6 } from "@chakra-ui/utils";
import { useLongPress } from "@react-aria/interactions";
import { getEventPoint } from "@zag-js/dom-event";

// ../saas-ui-hooks/dist/index.mjs
import * as React9 from "react";
import React22, { useState as useState22, useEffect } from "react";
import { useState as useState32 } from "react";
import { useEffect as useEffect2, useState as useState4 } from "react";
import { useRef as useRef2, useEffect as useEffect3 } from "react";
import { useCallbackRef } from "@chakra-ui/react";
import { useEffect as useEffect4, useRef as useRef22 } from "react";
var isBrowser2 = typeof window !== "undefined";
function getScrollPosition(element) {
  if (!isBrowser2) return { x: 0, y: 0 };
  if (!element) {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: element.scrollLeft, y: element.scrollTop };
}
var useScrollPosition = (props) => {
  const { elementRef, delay = 30, callback, isEnabled } = props;
  const position = useRef2(
    isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : { x: 0, y: 0 }
  );
  let throttleTimeout = null;
  const handler = () => {
    const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);
    if (typeof callback === "function") {
      callback({ prevPos: position.current, currPos });
    }
    position.current = currPos;
    throttleTimeout = null;
  };
  useEffect3(() => {
    if (!isEnabled) return;
    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(handler, delay);
        }
      } else {
        handler();
      }
    };
    const target = (elementRef == null ? void 0 : elementRef.current) || window;
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [elementRef == null ? void 0 : elementRef.current, delay, isEnabled]);
  return position.current;
};
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = useRef22({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  useEffect4(() => {
    if (!enabled) return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent(event, ref) {
  var _a;
  const target = event.target;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target)) return false;
  }
  return !((_a = ref.current) == null ? void 0 : _a.contains(target));
}
function getOwnerDocument(node) {
  var _a;
  return (_a = node == null ? void 0 : node.ownerDocument) != null ? _a : document;
}

// src/menu/context-menu.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var [ContextMenuProvider, useContextMenuContext] = createContext6({
  name: "UseContextMenuContext",
  strict: false
});
var useContextMenu = (props) => {
  const { closeOnBlur = true } = props;
  const [isOpen, setIsOpen] = useState5(false);
  const [anchor, setAnchor] = useState5({ x: 0, y: 0 });
  const triggerRef = useRef4(null);
  const menuRef = useRef4(null);
  useEventListener(
    () => document,
    "contextmenu",
    (e) => {
      var _a;
      if (!((_a = triggerRef.current) == null ? void 0 : _a.contains(e.target)) && e.target !== triggerRef.current) {
        setIsOpen(false);
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  );
  useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      var _a, _b;
      if (!(event.button === 2 && ((_a = triggerRef.current) == null ? void 0 : _a.contains(event.target))) && ((_b = menuRef.current) == null ? void 0 : _b.parentElement) !== event.target) {
        onClose();
      }
    }
  });
  const onOpen = useCallback3((event) => {
    const point = getEventPoint(event);
    setAnchor(point);
    setIsOpen(true);
  }, []);
  const onClose = useCallback3(() => {
    var _a;
    (_a = props.onClose) == null ? void 0 : _a.call(props);
    setIsOpen(false);
  }, [props.onClose, setIsOpen]);
  return {
    isOpen,
    anchor,
    triggerRef,
    menuRef,
    onClose,
    onOpen
  };
};
var ContextMenu = (props) => {
  const { children, ...rest } = props;
  const ctx = useContextMenu(props);
  const context = React10.useMemo(() => ctx, [ctx]);
  const { isOpen, onClose } = context;
  return /* @__PURE__ */ jsx16(
    Menu2,
    {
      gutter: 0,
      ...rest,
      isOpen,
      onClose,
      closeOnBlur: false,
      children: (fnProps) => /* @__PURE__ */ jsx16(ContextMenuProvider, { value: context, children: runIfFn(children, fnProps) })
    }
  );
};
ContextMenu.displayName = "ContextMenu";
var generateClientRect = (x = 0, y = 0) => {
  return () => {
    return {
      width: 0,
      height: 0,
      top: y,
      left: x,
      right: x,
      bottom: y
    };
  };
};
var isTouchDevice = () => {
  return typeof window !== void 0 && window.matchMedia("(hover: none)").matches;
};
var useContextMenuTrigger = (props, ref) => {
  const { triggerRef, onOpen, onClose, anchor } = useContextMenuContext();
  const menu = useMenuContext();
  const { popper, openAndFocusFirstItem } = menu;
  const { longPressProps } = useLongPress({
    isDisabled: props.longPressDisabled,
    accessibilityDescription: "Long press to open context menu",
    onLongPressStart: (e) => {
      onClose();
    },
    onLongPress: (e) => {
      if (e.pointerType === "mouse") return;
      if (e.type === "longpress") {
        onOpen(e);
        openAndFocusFirstItem();
      }
    }
  });
  const anchorRef = React10.useRef({
    getBoundingClientRect: generateClientRect(anchor.x, anchor.y)
  });
  React10.useEffect(() => {
    popper.referenceRef(anchorRef.current);
  }, []);
  React10.useEffect(() => {
    anchorRef.current.getBoundingClientRect = generateClientRect(
      anchor.x,
      anchor.y
    );
    menu.popper.update();
  }, [anchor]);
  const onPointerDown = (event) => {
    var _a;
    if (event.pointerType !== "mouse") {
      (_a = longPressProps.onPointerDown) == null ? void 0 : _a.call(longPressProps, event);
    }
  };
  const onMouseDown = (event) => {
    var _a;
    if (isTouchDevice()) {
      (_a = longPressProps.onMouseDown) == null ? void 0 : _a.call(longPressProps, event);
    }
  };
  return {
    triggerProps: {
      ...longPressProps,
      onPointerDown,
      onMouseDown,
      onContextMenu: callAllHandlers3((event) => {
        event.preventDefault();
        onOpen(event);
        openAndFocusFirstItem();
      }, props.onContextMenu),
      ref: mergeRefs(triggerRef, ref)
    }
  };
};
var ContextMenuTrigger = forwardRef7(
  (props, ref) => {
    const { children, longPressDisabled, ...rest } = props;
    const { triggerProps } = useContextMenuTrigger(props, ref);
    return /* @__PURE__ */ jsx16(
      chakra9.span,
      {
        ...rest,
        sx: { WebkitTouchCallout: "none" },
        ...triggerProps,
        children
      }
    );
  }
);
ContextMenuTrigger.displayName = "ContextMenuTrigger";
var ContextMenuList = (props) => {
  const { children, ...rest } = props;
  const { menuRef } = useContextMenuContext();
  return /* @__PURE__ */ jsx16(MenuList2, { ref: menuRef, ...rest, children });
};
ContextMenuList.displayName = "ContextMenuList";
var ContextMenuItem = MenuItem;

// src/persona/persona.tsx
import {
  Avatar,
  AvatarBadge,
  Tooltip,
  chakra as chakra10,
  forwardRef as forwardRef8,
  useColorModeValue,
  useTheme,
  useMultiStyleConfig as useMultiStyleConfig6,
  omitThemingProps as omitThemingProps6,
  createStylesContext as createStylesContext6
} from "@chakra-ui/react";
import { cx as cx8 } from "@chakra-ui/utils";
import { Fragment as Fragment3, jsx as jsx17, jsxs as jsxs6 } from "react/jsx-runtime";
var [StylesProvider6, useStyles6] = createStylesContext6("SuiPersona");
var Presence = {
  online: {
    label: "Online",
    color: "presence.online"
  },
  offline: {
    label: "Offline",
    color: "presence.offline"
  },
  busy: {
    label: "Busy",
    color: "presence.busy"
  },
  dnd: {
    label: "Do-not-disturb",
    color: "presence.dnd"
  },
  away: {
    label: "Away",
    color: "presence.away"
  }
};
var defaultPresenceTokens = {
  online: "green.500",
  offline: "gray.400",
  busy: "orange.500",
  dnd: "red.500",
  away: "gray.400"
};
var Persona = (props) => {
  const {
    name,
    presence,
    presenceIcon,
    isOutOfOffice,
    label,
    secondaryLabel,
    tertiaryLabel,
    size,
    hideDetails,
    children,
    /** Avatar props */
    getInitials,
    icon,
    iconLabel,
    ignoreFallback,
    loading,
    onError,
    src,
    srcSet,
    ...rest
  } = props;
  const isComposed = !!(name || label || src || icon);
  return /* @__PURE__ */ jsx17(PersonaContainer, { size, ...rest, children: isComposed ? /* @__PURE__ */ jsxs6(Fragment3, { children: [
    /* @__PURE__ */ jsx17(
      PersonaAvatar,
      {
        name,
        presence,
        presenceIcon,
        isOutOfOffice,
        size,
        getInitials,
        icon,
        iconLabel,
        ignoreFallback,
        loading,
        onError,
        src,
        srcSet
      }
    ),
    !hideDetails && /* @__PURE__ */ jsxs6(PersonaDetails, { children: [
      /* @__PURE__ */ jsx17(PersonaLabel, { children: label || name }),
      secondaryLabel && /* @__PURE__ */ jsx17(PersonaSecondaryLabel, { children: secondaryLabel }),
      tertiaryLabel && /* @__PURE__ */ jsx17(PersonaTertiaryLabel, { children: tertiaryLabel }),
      children
    ] })
  ] }) : children });
};
Persona.displayName = "Persona";
var PersonaContainer = forwardRef8(
  (props, ref) => {
    const { children, ...rest } = props;
    const styles = useMultiStyleConfig6("SuiPersona", props);
    const containerProps = omitThemingProps6(rest);
    const baseStyle = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    };
    const containerStyles = {
      ...baseStyle,
      ...styles.container
    };
    return /* @__PURE__ */ jsx17(StylesProvider6, { value: styles, children: /* @__PURE__ */ jsx17(
      chakra10.div,
      {
        ref,
        __css: containerStyles,
        ...containerProps,
        className: cx8("sui-persona", props.className),
        children
      }
    ) });
  }
);
PersonaContainer.displayName = "PersonaContainer";
var PersonaAvatar = forwardRef8(
  (props, ref) => {
    var _a, _b, _c, _d, _e;
    const {
      name,
      presence,
      presenceLabel,
      presenceIcon,
      isOutOfOffice,
      badgeSize = "1em",
      size,
      getInitials,
      icon,
      iconLabel,
      ignoreFallback,
      loading,
      onError,
      src,
      srcSet,
      ...rest
    } = props;
    const badgeProps = {};
    let badge;
    const theme = useTheme();
    const colors = ((_a = theme.colors) == null ? void 0 : _a.presence) || defaultPresenceTokens;
    const semantic = !!((_c = (_b = theme.semanticTokens) == null ? void 0 : _b.colors) == null ? void 0 : _c["presence.online"]);
    if (presence) {
      const label = presenceLabel || ((_d = Presence[presence]) == null ? void 0 : _d.label);
      const color = semantic ? ((_e = Presence[presence]) == null ? void 0 : _e.color) || `presence.${presence}` : colors[presence];
      if (isOutOfOffice) {
        badgeProps.sx = {
          _before: {
            content: '""',
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            border: "0.2em solid",
            borderColor: color,
            borderRadius: "50%",
            boxSizing: "border-box"
          }
        };
        badgeProps.borderWidth = "0.15em";
        badgeProps.bg = useColorModeValue("white", "gray.800");
      } else {
        badgeProps.bg = color;
      }
      badge = /* @__PURE__ */ jsx17(AvatarBadge, { boxSize: badgeSize, ...badgeProps, children: presenceIcon });
      if (label) {
        badge = /* @__PURE__ */ jsx17(Tooltip, { label, children: badge });
      }
    }
    return /* @__PURE__ */ jsx17(
      Avatar,
      {
        ref,
        name,
        size,
        getInitials,
        icon,
        iconLabel,
        ignoreFallback,
        loading,
        onError,
        src,
        srcSet,
        ...rest,
        children: badge
      }
    );
  }
);
PersonaAvatar.displayName = "PersonaAvatar";
var PersonaDetails = forwardRef8((props, ref) => {
  const { children, className, ...rest } = props;
  const styles = useStyles6();
  const baseStyle = {
    display: "flex",
    flexDirection: "column"
  };
  const detailsStyles = {
    ...baseStyle,
    ...styles.details
  };
  return /* @__PURE__ */ jsx17(
    chakra10.div,
    {
      ref,
      ...rest,
      __css: detailsStyles,
      className: cx8("sui-persona__details", className),
      children
    }
  );
});
PersonaDetails.displayName = "PersonaDetails";
var PersonaLabel = forwardRef8(
  (props, ref) => {
    const styles = useStyles6();
    return /* @__PURE__ */ jsx17(
      chakra10.span,
      {
        ref,
        ...props,
        __css: styles.label,
        className: cx8("sui-persona__label", props.className)
      }
    );
  }
);
PersonaLabel.displayName = "PersonaLabel";
var PersonaSecondaryLabel = forwardRef8((props, ref) => {
  const styles = useStyles6();
  return /* @__PURE__ */ jsx17(
    chakra10.span,
    {
      ref,
      ...props,
      __css: styles.secondaryLabel,
      className: cx8("sui-persona__secondary-label", props.className)
    }
  );
});
PersonaSecondaryLabel.displayName = "PersonaSecondaryLabel";
var PersonaTertiaryLabel = forwardRef8(
  (props, ref) => {
    const styles = useStyles6();
    return /* @__PURE__ */ jsx17(
      chakra10.span,
      {
        ref,
        ...props,
        __css: styles.tertiaryLabel,
        className: cx8("sui-persona__tertiary-label", props.className)
      }
    );
  }
);
PersonaTertiaryLabel.displayName = "PersonaTertiaryLabel";

// src/property/property.tsx
import * as React11 from "react";
import {
  chakra as chakra11,
  forwardRef as forwardRef9,
  useMultiStyleConfig as useMultiStyleConfig7,
  omitThemingProps as omitThemingProps7,
  createStylesContext as createStylesContext7
} from "@chakra-ui/react";
import { cx as cx9 } from "@chakra-ui/utils";
import { jsx as jsx18, jsxs as jsxs7 } from "react/jsx-runtime";
var [StylesProvider7, useStyles7] = createStylesContext7("SuiProperty");
var Property = forwardRef9((props, ref) => {
  const styles = useMultiStyleConfig7("SuiProperty", props);
  const { children, label, value, labelWidth, spacing, ...rest } = omitThemingProps7(props);
  const propertyStyles = {
    minW: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...styles.property
  };
  return /* @__PURE__ */ jsx18(StylesProvider7, { value: styles, children: /* @__PURE__ */ jsxs7(
    chakra11.dl,
    {
      ref,
      __css: propertyStyles,
      ...rest,
      className: cx9("sui-property", props.className),
      children: [
        label && /* @__PURE__ */ jsx18(
          PropertyLabel,
          {
            width: labelWidth,
            minWidth: labelWidth,
            marginEnd: spacing,
            children: label
          }
        ),
        value && /* @__PURE__ */ jsx18(PropertyValue, { children: value }),
        children
      ]
    }
  ) });
});
Property.displayName = "Property";
var PropertyLabel = forwardRef9((props, ref) => {
  const styles = useStyles7();
  const { children, noOfLines = 1, width, minWidth, ...rest } = props;
  const labelStyles = {
    display: "flex",
    flexDirection: "row",
    ...styles.label
  };
  if (width) {
    labelStyles.minWidth = minWidth || "auto";
    labelStyles.width = width;
  }
  return /* @__PURE__ */ jsx18(
    chakra11.dt,
    {
      ref,
      __css: labelStyles,
      ...rest,
      className: cx9("sui-property__label", props.className),
      children: /* @__PURE__ */ jsx18(chakra11.span, { flex: "1", noOfLines, children })
    }
  );
});
PropertyLabel.displayName = "PropertyLabel";
var PropertyValue = forwardRef9(
  (props, ref) => {
    const styles = useStyles7();
    const { children, ...rest } = props;
    const valueStyles = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      ...styles.value
    };
    return /* @__PURE__ */ jsx18(
      chakra11.dd,
      {
        ref,
        __css: valueStyles,
        ...rest,
        className: cx9("sui-property__value", props.className),
        children
      }
    );
  }
);
PropertyValue.displayName = "PropertyValue";
var PropertyList = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx18(chakra11.dl, { ...rest, className: cx9("sui-property-list", props.className), children: React11.Children.map(
    children,
    (child) => React11.isValidElement(child) ? React11.cloneElement(child, {
      as: "div"
    }) : child
  ) });
};
PropertyList.displayName = "PropertyList";

// src/navbar/use-navbar.ts
import { dataAttr as dataAttr2 } from "@chakra-ui/utils";
import { useEffect as useEffect6, useImperativeHandle, useRef as useRef5, useState as useState6 } from "react";
import { useResizeObserver } from "@react-aria/utils";
function useNavbar(props) {
  const {
    ref,
    parentRef,
    height = "3.5rem",
    shouldHideOnScroll = false,
    disableScrollHandler = false,
    onScrollPositionChange,
    motionProps,
    ...containerProps
  } = props;
  const containerRef = useRef5(null);
  useImperativeHandle(ref, () => containerRef.current);
  const prevWidth = useRef5(0);
  const navHeight = useRef5(0);
  const [isHidden, setIsHidden] = useState6(false);
  const updateWidth = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      if (width !== prevWidth.current) {
        prevWidth.current = width;
      }
    }
  };
  useResizeObserver({
    ref: containerRef,
    onResize: () => {
      var _a;
      const currentWidth = (_a = containerRef.current) == null ? void 0 : _a.offsetWidth;
      if (currentWidth !== prevWidth.current) {
        updateWidth();
      }
    }
  });
  useEffect6(() => {
    var _a;
    updateWidth();
    navHeight.current = ((_a = containerRef.current) == null ? void 0 : _a.offsetHeight) || 0;
  }, []);
  useScrollPosition({
    elementRef: parentRef,
    isEnabled: shouldHideOnScroll || !disableScrollHandler,
    callback: ({ prevPos, currPos }) => {
      onScrollPositionChange == null ? void 0 : onScrollPositionChange(currPos.y);
      if (shouldHideOnScroll) {
        setIsHidden((prev) => {
          const next = currPos.y > prevPos.y && currPos.y > navHeight.current;
          return next !== prev ? next : prev;
        });
      }
    }
  });
  const getContainerProps = (props2 = {}) => ({
    ...containerProps,
    ...motionProps,
    "data-hidden": dataAttr2(isHidden),
    ref: containerRef,
    style: {
      "--navbar-height": height,
      ...containerProps.style,
      ...props2 == null ? void 0 : props2.style
    }
  });
  return {
    containerRef,
    height,
    isHidden,
    shouldHideOnScroll,
    motionProps,
    getContainerProps
  };
}

// src/navbar/navbar-context.ts
import { createContext as createContext7 } from "@chakra-ui/utils";
var [NavbarProvider, useNavbarContext] = createContext7({
  name: "NavbarContext",
  strict: true,
  errorMessage: "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"
});
var [NavBarStylesProvider, useNavBarStyles] = createContext7({
  name: `NavBarStylesContext`,
  hookName: `useNavItemStyles`,
  providerName: "<NavBar />"
});

// src/navbar/navbar.tsx
import { chakra as chakra12, forwardRef as forwardRef10, useMultiStyleConfig as useMultiStyleConfig8 } from "@chakra-ui/react";
import { motion as motion3 } from "framer-motion";
import { cx as cx10 } from "@saas-ui/react-utils";
import { jsx as jsx19 } from "react/jsx-runtime";
var MotionBox = chakra12(motion3.nav);
var Navbar = forwardRef10((props, ref) => {
  const { children, ...otherProps } = props;
  const context = useNavbar({ ...otherProps, ref });
  const styles = useMultiStyleConfig8("SuiNavbar", props);
  const content = /* @__PURE__ */ jsx19(chakra12.header, { __css: styles.inner, className: "sui-navbar__inner", children });
  const containerStyles = {
    top: props.position === "sticky" ? "0" : void 0,
    insetX: props.position === "sticky" ? "0" : void 0,
    ...styles.container
  };
  return /* @__PURE__ */ jsx19(NavBarStylesProvider, { value: styles, children: /* @__PURE__ */ jsx19(NavbarProvider, { value: context, children: /* @__PURE__ */ jsx19(
    MotionBox,
    {
      __css: containerStyles,
      animate: context.isHidden ? "hidden" : "visible",
      initial: false,
      variants: {
        hidden: { y: "-100%" },
        visible: { y: 0, transition: { ease: "easeInOut" } }
      },
      className: cx10("sui-navbar", props.className),
      ...context.getContainerProps(props),
      children: content
    }
  ) }) });
});
Navbar.displayName = "Navbar";

// src/navbar/navbar-brand.tsx
import { chakra as chakra13, forwardRef as forwardRef11 } from "@chakra-ui/react";
import { cx as cx11 } from "@chakra-ui/utils";
import { jsx as jsx20 } from "react/jsx-runtime";
var NavbarBrand = forwardRef11((props, ref) => {
  const { className, children, ...rest } = props;
  const styles = useNavBarStyles();
  return /* @__PURE__ */ jsx20(
    chakra13.div,
    {
      ref,
      __css: styles.brand,
      className: cx11("sui-navbar__brand"),
      ...rest,
      children
    }
  );
});
NavbarBrand.displayName = "NavbarBrand";

// src/navbar/navbar-content.tsx
import {
  chakra as chakra14,
  forwardRef as forwardRef12
} from "@chakra-ui/react";
import { cx as cx12 } from "@chakra-ui/utils";
import { jsx as jsx21 } from "react/jsx-runtime";
var NavbarContent = forwardRef12(
  (props, ref) => {
    const { className, children, spacing = 0, ...rest } = props;
    const styles = useNavBarStyles();
    const contentStyles = {
      ...styles.content,
      "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
    };
    return /* @__PURE__ */ jsx21(
      chakra14.ul,
      {
        ref,
        __css: contentStyles,
        className: cx12("sui-navbar__content", className),
        ...rest,
        children
      }
    );
  }
);
NavbarContent.displayName = "NavbarContent";

// src/navbar/navbar-item.tsx
import { chakra as chakra15, forwardRef as forwardRef13 } from "@chakra-ui/react";
import { cx as cx13, dataAttr as dataAttr3 } from "@chakra-ui/utils";
import { jsx as jsx22 } from "react/jsx-runtime";
var NavbarItem = forwardRef13((props, ref) => {
  const { className, children, isActive, ...rest } = props;
  const styles = useNavBarStyles();
  return /* @__PURE__ */ jsx22(
    chakra15.li,
    {
      ref,
      __css: styles.item,
      className: cx13("sui-navbar__item", className),
      "data-active": dataAttr3(isActive),
      ...rest,
      children
    }
  );
});
NavbarItem.displayName = "NavbarItem";

// src/navbar/navbar-link.tsx
import { chakra as chakra16, forwardRef as forwardRef14 } from "@chakra-ui/react";
import { cx as cx14, dataAttr as dataAttr4 } from "@chakra-ui/utils";
import { jsx as jsx23 } from "react/jsx-runtime";
var NavbarLink = forwardRef14((props, ref) => {
  const { className, children, isActive, ...rest } = props;
  const Link3 = useLink();
  const styles = useNavBarStyles();
  return /* @__PURE__ */ jsx23(
    chakra16.a,
    {
      as: Link3,
      ref,
      __css: styles.link,
      "data-active": dataAttr4(isActive),
      className: cx14("sui-navbar__link", className),
      ...rest,
      children
    }
  );
});
NavbarLink.displayName = "NavbarLink";

// src/sidebar/sidebar.tsx
import * as React13 from "react";
import {
  chakra as chakra17,
  omitThemingProps as omitThemingProps8,
  useMultiStyleConfig as useMultiStyleConfig9,
  useBreakpointValue as useBreakpointValue2,
  useDisclosure as useDisclosure3,
  Portal,
  forwardRef as forwardRef15,
  useTheme as useTheme2,
  useStyleConfig as useStyleConfig2
} from "@chakra-ui/react";
import { cx as cx15, dataAttr as dataAttr5, runIfFn as runIfFn2 } from "@chakra-ui/utils";
import { motion as motion4, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { useResponsiveValue } from "@saas-ui/react-utils";

// src/sidebar/use-sidebar.ts
import { callAllHandlers as callAllHandlers4, createContext as createContext8 } from "@chakra-ui/utils";
var [SidebarProvider, useSidebarContext] = createContext8({
  name: "SidebarContext",
  strict: false
});
var useSidebarToggleButton = () => {
  const appShellContext = useAppShellContext();
  const context = useSidebarContext();
  const getButtonProps = (props) => {
    return {
      onClick: callAllHandlers4(
        (context == null ? void 0 : context.onToggle) || (appShellContext == null ? void 0 : appShellContext.toggleSidebar),
        props == null ? void 0 : props.onClick
      )
    };
  };
  return {
    isOpen: (context == null ? void 0 : context.isOpen) || (appShellContext == null ? void 0 : appShellContext.isSidebarOpen),
    isMobile: (context == null ? void 0 : context.isMobile) || (appShellContext == null ? void 0 : appShellContext.isMobile),
    getButtonProps
  };
};

// src/sidebar/sidebar-context.tsx
import { createContext as createContext9 } from "@chakra-ui/utils";
var [SidebarStylesProvider, useSidebarStyles] = createContext9({
  name: `SidebarStylesContext`,
  hookName: `useSidebarStyles`,
  providerName: "<Sidebar />"
});

// src/sidebar/sidebar.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var MotionBox2 = chakra17(motion4.nav);
var motionPresets = {
  slideInOut: {
    enter: {
      left: 0,
      transition: { type: "spring", duration: 0.6, bounce: 0.15 }
    },
    exit: {
      left: "-100%"
    }
  },
  none: {}
};
var Sidebar = forwardRef15((props, ref) => {
  var _a, _b, _c;
  const styles = useMultiStyleConfig9("SuiSidebar", props);
  const theme = useTheme2();
  const defaultProps = (_a = theme.components["SuiSidebar"]) == null ? void 0 : _a.defaultProps;
  const variant = useResponsiveValue((_b = props.variant) != null ? _b : defaultProps == null ? void 0 : defaultProps.variant, {
    fallback: "base"
  });
  const size = useResponsiveValue((_c = props.size) != null ? _c : defaultProps == null ? void 0 : defaultProps.size, {
    fallback: "base"
  });
  const isCondensed = variant === "compact";
  const {
    spacing = 4,
    children,
    toggleBreakpoint = "lg",
    className,
    motionPreset = "slideInOut",
    isOpen: isOpenProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    ...containerProps
  } = omitThemingProps8(props);
  const appShell = useAppShellContext();
  const breakpoints = getBreakpoints(toggleBreakpoint);
  const isMobile = useBreakpointValue2(breakpoints, {
    fallback: void 0
  });
  const isMobileInitial = useBreakpointValue2(breakpoints);
  const isInitial = typeof isMobile === "undefined";
  const isControlled = typeof isOpenProp !== "undefined";
  const isCollapsible = (isMobile || isControlled) && !isCondensed;
  const disclosure = useDisclosure3({
    isOpen: isOpenProp || (appShell == null ? void 0 : appShell.isSidebarOpen),
    onOpen: onOpenProp || (appShell == null ? void 0 : appShell.openSidebar),
    onClose: onCloseProp || (appShell == null ? void 0 : appShell.closeSidebar)
  });
  const { isOpen, onClose, onOpen } = disclosure;
  React13.useEffect(() => {
    if (isInitial && isMobileInitial || isCondensed || isControlled) {
      return;
    }
    isMobileInitial ? onClose() : onOpen();
  }, [isInitial, isCondensed, isMobileInitial]);
  const containerStyles = {
    "& > *:not(style) ~ *:not(style, .sui-resize-handle, .sui-sidebar__toggle-button + *)": {
      marginTop: spacing
    },
    display: "flex",
    flexDirection: "column",
    ...isMobile && isCollapsible ? {
      position: "absolute",
      zIndex: "modal",
      top: 0,
      left: { base: "-100%", lg: "0" },
      bottom: 0
    } : {
      position: "relative"
    }
  };
  const context = {
    ...disclosure,
    breakpoints,
    isMobile,
    variant,
    size
  };
  const variants = motionPresets[isCondensed ? "none" : motionPreset || "none"];
  return /* @__PURE__ */ jsx24(SidebarProvider, { value: context, children: /* @__PURE__ */ jsx24(SidebarStylesProvider, { value: styles, children: /* @__PURE__ */ jsx24(
    MotionBox2,
    {
      ref,
      initial: false,
      animate: !isInitial && (!isCollapsible || isOpen ? "enter" : "exit"),
      variants,
      __css: {
        ...containerStyles,
        ...styles.container
      },
      ...containerProps,
      id: disclosure.getDisclosureProps().id,
      className: cx15("sui-sidebar", className),
      "data-compact": dataAttr5(isCondensed),
      "data-collapsible": dataAttr5(isMobile && isCollapsible),
      children
    }
  ) }) });
});
Sidebar.displayName = "Sidebar";
Sidebar.id = "Sidebar";
var SidebarToggleButton = (props) => {
  var _a, _b;
  const { sx, pos, position, variant = "ghost", icon, isRound, ...rest } = props;
  const { isOpen, isMobile, getButtonProps } = useSidebarToggleButton();
  const styles = useStyleConfig2("SuiSidebarToggleButton", props);
  const btnStyles = useStyleConfig2("Button", {
    ...props,
    variant
  });
  const p = (_b = (_a = pos != null ? pos : position) != null ? _a : sx == null ? void 0 : sx.pos) != null ? _b : sx == null ? void 0 : sx.position;
  const buttonStyles = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "none",
    ...btnStyles,
    ...isMobile ? !p ? { position: "fixed", top: 3, left: 3, zIndex: "popover" } : {} : { display: "none" },
    ...styles
  };
  const _icon = icon ? runIfFn2(icon, {
    isOpen
  }) : /* @__PURE__ */ jsx24(HamburgerIcon, { "aria-hidden": "true", focusable: "false" });
  return /* @__PURE__ */ jsx24(
    chakra17.button,
    {
      __css: buttonStyles,
      padding: "0",
      borderRadius: isRound ? "full" : void 0,
      "aria-label": isOpen ? "Close sidebar" : "Open sidebar",
      "data-state": isOpen ? "open" : "closed",
      ...rest,
      ...getButtonProps(props),
      sx,
      className: cx15("sui-sidebar__toggle-button", props.className),
      children: _icon
    }
  );
};
var SidebarOverlay = (props) => {
  const { onClose, isOpen, isMobile } = useSidebarContext();
  const styles = useSidebarStyles();
  return /* @__PURE__ */ jsx24(Portal, { children: /* @__PURE__ */ jsx24(AnimatePresence3, { children: isMobile && isOpen && /* @__PURE__ */ jsx24(
    MotionBox2,
    {
      animate: isOpen ? "enter" : "exit",
      initial: "exit",
      variants: {
        enter: { opacity: 1 },
        exit: { opacity: 0 }
      },
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "overlay",
      ...props,
      onClick: onClose,
      __css: styles.overlay
    }
  ) }) });
};
SidebarToggleButton.displayName = "SidebarToggleButton";
var SidebarSection = (props) => {
  const { direction = "column", ...rest } = props;
  const styles = useSidebarStyles();
  const sectionStyles = {
    display: "flex",
    flexDirection: direction,
    ...styles.section
  };
  return /* @__PURE__ */ jsx24(
    chakra17.div,
    {
      __css: sectionStyles,
      ...rest,
      className: cx15("sui-sidebar__section", props.className)
    }
  );
};
SidebarSection.displayName = "SidebarSection";

// src/sidebar/nav.tsx
import {
  chakra as chakra18,
  useStyleConfig as useStyleConfig3
} from "@chakra-ui/react";
import { cx as cx16 } from "@chakra-ui/utils";
import { jsx as jsx25 } from "react/jsx-runtime";
var Nav = (props) => {
  const styles = useStyleConfig3("SuiNav", props);
  const { children, spacing = 0, orientation = "vertical", ...rest } = props;
  const containerStyles = {
    "& > *:not(style) ~ *:not(style)": {
      mt: orientation === "vertical" ? spacing : void 0,
      me: orientation === "horizontal" ? spacing : void 0
    },
    ...styles
  };
  return /* @__PURE__ */ jsx25(
    chakra18.nav,
    {
      ...rest,
      __css: containerStyles,
      className: cx16("sui-nav", props.className),
      "data-orientation": orientation,
      children
    }
  );
};
Nav.displayName = "Nav";

// src/sidebar/nav-group.tsx
import * as React14 from "react";
import {
  chakra as chakra19,
  Collapse,
  useMultiStyleConfig as useMultiStyleConfig10
} from "@chakra-ui/react";
import { runIfFn as runIfFn3, cx as cx17 } from "@chakra-ui/utils";

// src/sidebar/nav-context.tsx
import { createContext as createContext10 } from "@chakra-ui/utils";
var [NavGroupStylesProvider, useNavGroupStyles] = createContext10({
  name: `NavGroupStylesContext`,
  hookName: `useNavItemStyles`,
  providerName: "<NavItem />"
});
var [NavItemStylesProvider, useNavItemStyles] = createContext10({
  name: `NavItemStylesContext`,
  hookName: `useNavItemStyles`,
  providerName: "<NavItem />"
});

// src/sidebar/nav-group.tsx
import { jsx as jsx26, jsxs as jsxs8 } from "react/jsx-runtime";
var NavGroupIcon = (props) => {
  const { children, className, ...rest } = props;
  const _children = React14.isValidElement(children) ? React14.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx17("sui-nav-group__icon", className);
  return /* @__PURE__ */ jsx26(
    chakra19.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
};
var NavGroupTitle = (props) => {
  const {
    leftIcon,
    collapseIcon = ({ isOpen: isOpen2 }) => isOpen2 ? /* @__PURE__ */ jsx26(ChevronDownIcon, {}) : /* @__PURE__ */ jsx26(ChevronRightIcon, {}),
    children,
    ...rest
  } = props;
  const styles = useNavGroupStyles();
  const { getToggleProps, isOpen, isCollapsible } = useCollapseContext();
  const iconStyles = { marginEnd: 2, ...styles.icon };
  const toggleProps = getToggleProps(rest);
  return /* @__PURE__ */ jsxs8(
    chakra19.div,
    {
      ...toggleProps,
      __css: styles.title,
      className: cx17(
        "saas-nav-group__title",
        props.className,
        toggleProps.className
      ),
      children: [
        leftIcon && /* @__PURE__ */ jsx26(NavGroupIcon, { __css: iconStyles, children: leftIcon }),
        /* @__PURE__ */ jsx26(chakra19.span, { flex: "1", children: runIfFn3(children, { isOpen }) }),
        isCollapsible && /* @__PURE__ */ jsx26(NavGroupIcon, { children: runIfFn3(collapseIcon, { isOpen }) })
      ]
    }
  );
};
NavGroupTitle.displayName = "NavGroupTitle";
var NavGroupContent = (props) => {
  const styles = useNavGroupStyles();
  return /* @__PURE__ */ jsx26(
    chakra19.div,
    {
      ...props,
      __css: styles.content,
      className: cx17("sui-nav-group__content", props.className)
    }
  );
};
var NavGroup = (props) => {
  const {
    title,
    icon,
    isCollapsible = false,
    defaultIsOpen = true,
    onOpen,
    onClose,
    children,
    ...rest
  } = props;
  const styles = useMultiStyleConfig10("SuiNavGroup", props);
  const collapse = useCollapse({
    ...props,
    isCollapsible,
    defaultIsOpen
  });
  const { getCollapseProps } = collapse;
  let header = title;
  if (typeof title === "string") {
    header = /* @__PURE__ */ jsx26(NavGroupTitle, { leftIcon: icon, children: title });
  }
  let content = /* @__PURE__ */ jsx26(NavGroupContent, { children });
  if (isCollapsible) {
    content = /* @__PURE__ */ jsx26(Collapse, { ...getCollapseProps(), children: content });
  }
  return /* @__PURE__ */ jsx26(NavGroupStylesProvider, { value: styles, children: /* @__PURE__ */ jsx26(CollapseProvider, { value: collapse, children: /* @__PURE__ */ jsxs8(
    chakra19.div,
    {
      __css: {
        userSelect: "none",
        ...styles.container
      },
      ...rest,
      className: cx17("sui-nav-group", props.className),
      role: "group",
      children: [
        header,
        content
      ]
    }
  ) }) });
};
NavGroup.displayName = "NavGroup";

// src/sidebar/nav-item.tsx
import * as React15 from "react";
import {
  chakra as chakra20,
  forwardRef as forwardRef16,
  omitThemingProps as omitThemingProps9,
  useMultiStyleConfig as useMultiStyleConfig11,
  Tooltip as Tooltip2
} from "@chakra-ui/react";
import { cx as cx18, dataAttr as dataAttr6 } from "@chakra-ui/utils";
import { jsx as jsx27, jsxs as jsxs9 } from "react/jsx-runtime";
var NavItemLabel = forwardRef16(
  ({ children, ...props }, ref) => {
    const styles = useNavItemStyles();
    return /* @__PURE__ */ jsx27(
      chakra20.span,
      {
        ref,
        __css: styles.label,
        ...props,
        className: cx18("sui-nav-item__label", props.className),
        children
      }
    );
  }
);
NavItemLabel.displayName = "NavItemLabel";
var NavItemIcon = (props) => {
  const styles = useNavItemStyles();
  const { className, children, ...rest } = props;
  const child = React15.Children.only(children);
  const clone = React15.isValidElement(child) ? React15.cloneElement(child, {
    focusable: "false",
    "aria-hidden": true
  }) : null;
  return /* @__PURE__ */ jsx27(
    chakra20.span,
    {
      ...rest,
      className: cx18("sui-nav-item__icon", props.className),
      __css: {
        flexShrink: 0,
        ...styles.icon
      },
      children: clone
    }
  );
};
NavItemIcon.displayName = "NavItemIcon";
var NavItem = forwardRef16((props, ref) => {
  const {
    as,
    href,
    icon,
    inset,
    className,
    tooltipProps,
    isActive,
    children,
    ...rest
  } = omitThemingProps9(props);
  const Link3 = useLink();
  const { onClose, variant: sidebarVariant } = useSidebarContext() || {};
  const isCompact = sidebarVariant === "compact";
  const styles = useMultiStyleConfig11("SuiNavItem", props);
  let label = children;
  let tooltipLabel = tooltipProps == null ? void 0 : tooltipProps.label;
  if (typeof label === "string") {
    if (!tooltipLabel && isCompact) {
      tooltipLabel = label;
    }
    label = /* @__PURE__ */ jsx27(NavItemLabel, { children: label });
  }
  let asLink = as;
  if (href && !as) {
    asLink = Link3;
  }
  const link = /* @__PURE__ */ jsx27(
    chakra20.a,
    {
      as: asLink,
      "aria-current": isActive ? "page" : void 0,
      ...rest,
      ref,
      href,
      className: "sui-nav-item__link",
      "data-active": dataAttr6(isActive),
      __css: styles.link,
      children: /* @__PURE__ */ jsxs9(
        chakra20.span,
        {
          __css: {
            ...styles.inner,
            pl: inset
          },
          className: "sui-nav-item__inner",
          children: [
            icon && /* @__PURE__ */ jsx27(NavItemIcon, { children: icon }),
            label
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ jsx27(NavItemStylesProvider, { value: styles, children: /* @__PURE__ */ jsx27(
    Tooltip2,
    {
      label: tooltipLabel,
      placement: "right",
      openDelay: 400,
      ...tooltipProps,
      children: /* @__PURE__ */ jsx27(
        chakra20.div,
        {
          __css: styles.item,
          onClick: onClose,
          "data-compact": dataAttr6(isCompact),
          className: cx18("sui-nav-item", className),
          children: link
        }
      )
    }
  ) });
});
NavItem.displayName = "NavItem";

// src/search-input/search-input.tsx
import * as React16 from "react";
import {
  forwardRef as forwardRef17,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  IconButton as IconButton3,
  useMultiStyleConfig as useMultiStyleConfig12,
  useControllableState,
  useMergeRefs as useMergeRefs2
} from "@chakra-ui/react";
import { callAllHandlers as callAllHandlers5 } from "@chakra-ui/utils";
import { jsx as jsx28, jsxs as jsxs10 } from "react/jsx-runtime";
var SearchInput = forwardRef17(
  (props, ref) => {
    const {
      placeholder = "Search",
      value: valueProp,
      defaultValue: defaultValueProp,
      size,
      variant,
      width,
      icon,
      resetIcon,
      rightElement,
      onChange: onChangeProp,
      onReset: onResetProp,
      onKeyDown: onKeyDownProp,
      ...inputProps
    } = props;
    const styles = useMultiStyleConfig12("SuiSearchInput", props);
    const inputRef = React16.useRef(null);
    const [value, setValue] = useControllableState({
      value: valueProp,
      defaultValue: defaultValueProp
    });
    const onChange = React16.useCallback(
      (e) => {
        setValue(e.target.value);
      },
      [setValue]
    );
    const onKeyDown = React16.useCallback(
      (event) => {
        if (event.key === "Escape") {
          setValue("");
          onReset();
        }
      },
      [onResetProp, setValue]
    );
    const onReset = () => {
      var _a;
      setValue("");
      onResetProp == null ? void 0 : onResetProp();
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    };
    const btnSize = size === "lg" ? "sm" : "xs";
    const showReset = value && !props.isDisabled;
    return /* @__PURE__ */ jsxs10(InputGroup, { size, width, children: [
      /* @__PURE__ */ jsx28(InputLeftElement, { children: icon || /* @__PURE__ */ jsx28(SearchIcon, {}) }),
      /* @__PURE__ */ jsx28(
        Input,
        {
          type: "text",
          placeholder,
          variant,
          size,
          value,
          ref: useMergeRefs2(ref, inputRef),
          sx: styles.input,
          onChange: callAllHandlers5(onChange, onChangeProp),
          onKeyDown: callAllHandlers5(onKeyDown, onKeyDownProp),
          ...inputProps
        }
      ),
      /* @__PURE__ */ jsx28(InputRightElement, { children: showReset ? /* @__PURE__ */ jsx28(
        IconButton3,
        {
          onClick: onReset,
          size: btnSize,
          variant: "ghost",
          "aria-label": "Reset search",
          icon: resetIcon || /* @__PURE__ */ jsx28(CloseIcon, {}),
          sx: styles.reset
        }
      ) : rightElement })
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/snackbar/use-snackbar.tsx
import * as React17 from "react";
import {
  chakra as chakra21,
  useTheme as useTheme3,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton as CloseButton2,
  ButtonGroup as ButtonGroup3,
  Spinner as Spinner2,
  useMultiStyleConfig as useMultiStyleConfig13
} from "@chakra-ui/react";
import { runIfFn as runIfFn4 } from "@chakra-ui/utils";
import { jsx as jsx29, jsxs as jsxs11 } from "react/jsx-runtime";
var AlertSpinner = (props) => {
  const styles = useMultiStyleConfig13("Alert", props);
  return /* @__PURE__ */ jsx29(
    chakra21.span,
    {
      display: "inherit",
      alignItems: "center",
      ...props,
      __css: styles.icon,
      children: /* @__PURE__ */ jsx29(Spinner2, { size: "sm" })
    }
  );
};
var Snackbar = (props) => {
  var _a, _b, _c;
  const {
    status,
    variant,
    id,
    title,
    icon,
    isClosable,
    onClose,
    description,
    action
  } = props;
  const theme = useTheme3();
  const defaultVariant = ((_c = (_b = (_a = theme.components) == null ? void 0 : _a.Alert) == null ? void 0 : _b.variants) == null ? void 0 : _c.snackbar) ? "snackbar" : "solid";
  const alertTitleId = typeof id !== "undefined" ? `toast-${id}-title` : void 0;
  return /* @__PURE__ */ jsxs11(
    Alert,
    {
      status,
      variant: variant || defaultVariant,
      id: id !== "undefined" ? `toast-${id}` : void 0,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      textAlign: "start",
      width: "auto",
      "aria-labelledby": alertTitleId,
      children: [
        icon === null ? null : icon ? icon : /* @__PURE__ */ jsx29(AlertIcon, {}),
        /* @__PURE__ */ jsxs11(chakra21.div, { flex: "1", maxWidth: "100%", children: [
          title && /* @__PURE__ */ jsx29(AlertTitle, { id: alertTitleId, children: title }),
          description && /* @__PURE__ */ jsx29(AlertDescription, { display: "block", children: description })
        ] }),
        (action || isClosable) && /* @__PURE__ */ jsxs11(ButtonGroup3, { size: "xs", variant: "ghost", ms: "2", children: [
          action,
          isClosable && /* @__PURE__ */ jsx29(CloseButton2, { size: "sm", onClick: onClose })
        ] })
      ]
    }
  );
};
function useSnackbar(defaultOptions) {
  const toast = useToast(defaultOptions);
  const parseOptions = React17.useCallback(
    (options) => {
      if (typeof options === "string") {
        return {
          title: options
        };
      }
      return options;
    },
    []
  );
  return React17.useMemo(() => {
    const snackbar = (options) => {
      const opts = parseOptions(options);
      useToast;
      return toast({
        render: (props) => /* @__PURE__ */ jsx29(Snackbar, { ...defaultOptions, ...opts, ...props }),
        ...opts
      });
    };
    snackbar.info = (options) => snackbar({
      status: "info",
      ...parseOptions(options)
    });
    snackbar.success = (options) => snackbar({
      status: "success",
      ...parseOptions(options)
    });
    snackbar.error = (options) => snackbar({
      status: "error",
      ...parseOptions(options)
    });
    snackbar.promise = async (promise, { loading, success, error }) => {
      let toastId;
      if (loading) {
        const options = parseOptions(loading);
        toastId = snackbar({
          status: "info",
          duration: null,
          icon: /* @__PURE__ */ jsx29(AlertSpinner, {}),
          ...options
        });
      }
      return promise.then((result) => {
        const options = {
          status: "success",
          duration: 5e3,
          ...parseOptions(runIfFn4(success, result))
        };
        if (toastId) {
          snackbar.update(toastId, options);
        } else {
          snackbar(options);
        }
        return result;
      }).catch((e) => {
        const options = {
          title: e.name,
          description: e.description,
          status: "error",
          duration: 5e3,
          ...parseOptions(runIfFn4(error, e))
        };
        if (toastId) {
          snackbar.update(toastId, options);
        } else {
          snackbar(options);
        }
        if (typeof error !== "function") {
          throw e;
        }
      });
    };
    snackbar.update = (toastId, options) => {
      return toast.update(toastId, {
        render: (props) => /* @__PURE__ */ jsx29(Snackbar, { ...defaultOptions, ...options, ...props }),
        ...options
      });
    };
    snackbar.isActive = toast.isActive;
    snackbar.close = toast.close;
    snackbar.closeAll = toast.closeAll;
    return snackbar;
  }, [toast, defaultOptions]);
}

// src/snackbar/standalone.tsx
import {
  createStandaloneToast
} from "@chakra-ui/react";
import { jsx as jsx30 } from "react/jsx-runtime";
var createStandAloneSnackbar = (options) => {
  const { ToastContainer: SnackbarContainer, toast: snackbar } = createStandaloneToast({
    ...options,
    defaultOptions: {
      render: (props) => /* @__PURE__ */ jsx30(Snackbar, { ...props }),
      ...options.defaultOptions
    }
  });
  return {
    SnackbarContainer,
    snackbar
  };
};

// src/stepper/steps.tsx
import * as React19 from "react";
import {
  chakra as chakra22,
  forwardRef as forwardRef18,
  useMultiStyleConfig as useMultiStyleConfig14,
  createStylesContext as createStylesContext8,
  Stepper,
  StepSeparator,
  Collapse as Collapse2,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription
} from "@chakra-ui/react";
import { getChildOfType, getChildrenOfType } from "@saas-ui/react-utils";
import { cx as cx19 } from "@chakra-ui/utils";

// src/stepper/use-stepper.tsx
import * as React18 from "react";
import { createContext as createContext11 } from "@chakra-ui/utils";
var [StepperProvider, useStepperContext] = createContext11({
  name: "StepperContext",
  errorMessage: "useStepperContext: `context` is undefined. Seems you forgot to wrap stepper components in `<Stepper />`"
});
function useStepper(props) {
  const { step, onChange } = props;
  const [activeIndex, setIndex] = React18.useState(0);
  const stepsRef = React18.useRef([]);
  const [, onUpdate] = React18.useState(Date.now());
  const registerStep = React18.useCallback(
    (name) => {
      const newSteps = [...stepsRef.current];
      if (newSteps.indexOf(name) === -1) {
        newSteps.push(name);
      }
      stepsRef.current = newSteps;
      onUpdate(Date.now());
    },
    [stepsRef, onUpdate]
  );
  const unregisterStep = (name) => {
    stepsRef.current = stepsRef.current.slice(stepsRef.current.indexOf(name), 1);
  };
  const setStep = (name) => {
    const i = stepsRef.current.indexOf(name);
    if (i !== -1) {
      setIndex(i);
    }
  };
  const nextStep = () => {
    setIndex(activeIndex + 1);
  };
  const prevStep = () => {
    setIndex(activeIndex - 1);
  };
  React18.useEffect(() => {
    if (typeof step === "string") {
      setStep(step);
    } else if (typeof step === "number") {
      setIndex(step);
    } else if (activeIndex === -1) {
      setIndex(0);
    }
  }, [step]);
  React18.useEffect(() => {
    onChange == null ? void 0 : onChange(activeIndex);
  }, [activeIndex, onChange]);
  const context = {
    stepsRef,
    activeStep: stepsRef.current[activeIndex],
    activeIndex,
    isFirstStep: activeIndex === 0,
    isLastStep: activeIndex === stepsRef.current.length - 1,
    isCompleted: activeIndex >= stepsRef.current.length,
    setIndex,
    setStep,
    nextStep,
    prevStep,
    registerStep,
    unregisterStep
  };
  return context;
}
function useStep(props) {
  const { name, isActive, isCompleted } = props;
  const { registerStep, unregisterStep, activeStep } = useStepperContext();
  React18.useEffect(() => {
    if (!name) {
      return;
    }
    registerStep(name);
    return () => {
      unregisterStep(name);
    };
  }, []);
  return {
    isActive: name ? activeStep === name : isActive,
    isCompleted
  };
}
function useStepperPrevButton({ label = "Back" } = {}) {
  const { isFirstStep, prevStep } = useStepperContext();
  return {
    isDisabled: isFirstStep,
    onClick: prevStep,
    children: label
  };
}
function useStepperNextButton({
  label = "Next",
  submitLabel = "Submit"
} = {}) {
  const { isLastStep, isCompleted, nextStep } = useStepperContext();
  return {
    isDisabled: isCompleted,
    onClick: nextStep,
    children: isLastStep ? submitLabel : label
  };
}

// src/stepper/steps.tsx
import { jsx as jsx31, jsxs as jsxs12 } from "react/jsx-runtime";
var [StylesProvider8, useStyles8] = createStylesContext8("Stepper");
var Steps = forwardRef18((props, ref) => {
  var _a, _b, _c, _d;
  const {
    children,
    orientation = "horizontal",
    index,
    step,
    onChange,
    variant,
    colorScheme,
    size,
    stepperProps,
    ...rest
  } = props;
  const styles = useMultiStyleConfig14("Stepper", props);
  const context = useStepper({
    step: step != null ? step : index,
    onChange
  });
  const { activeIndex } = context;
  const isVertical = orientation === "vertical";
  const steps = getChildrenOfType(children, StepsItem);
  const itemStyles = {
    position: "relative",
    ...styles.item
  };
  const elements = steps.reduce((memo, step2, i, arr) => {
    const item = React19.cloneElement(step2, {
      key: i,
      ...step2.props,
      isActive: activeIndex === i,
      isCompleted: step2.props.isCompleted || activeIndex > i
    });
    if (isVertical) {
      memo.push(
        /* @__PURE__ */ jsxs12(
          chakra22.div,
          {
            className: "sui-steps__item",
            __css: itemStyles,
            children: [
              item,
              /* @__PURE__ */ jsx31(StepsContent, { isOpen: activeIndex === i, orientation, children: step2.props.children }),
              i < arr.length - 1 ? /* @__PURE__ */ jsx31(StepSeparator, {}) : null
            ]
          },
          `content-${i}`
        )
      );
    } else {
      memo.push(item);
    }
    return memo;
  }, []);
  const completed = getChildOfType(children, StepsCompleted);
  const hasContent = (_b = (_a = steps[activeIndex]) == null ? void 0 : _a.props) == null ? void 0 : _b.children;
  const content = activeIndex >= steps.length ? completed : !isVertical && hasContent ? /* @__PURE__ */ jsx31(StepsContent, { orientation, children: (_d = (_c = steps[activeIndex]) == null ? void 0 : _c.props) == null ? void 0 : _d.children }) : null;
  return /* @__PURE__ */ jsx31(StylesProvider8, { value: styles, children: /* @__PURE__ */ jsx31(StepperProvider, { value: context, children: /* @__PURE__ */ jsxs12(
    chakra22.div,
    {
      ref,
      __css: styles.container,
      ...rest,
      className: cx19("sui-steps", props.className),
      children: [
        /* @__PURE__ */ jsx31(
          Stepper,
          {
            index: activeIndex,
            orientation,
            variant,
            colorScheme,
            size,
            ...stepperProps,
            children: elements
          }
        ),
        content
      ]
    }
  ) }) });
});
Steps.displayName = "Steps";
var StepsItem = (props) => {
  const { render, icon, title, description, ...rest } = props;
  const step = useStep(rest);
  if (render) {
    return render({
      ...step,
      ...props
    });
  }
  return /* @__PURE__ */ jsxs12(Step, { children: [
    /* @__PURE__ */ jsx31(StepIndicator, { children: /* @__PURE__ */ jsx31(
      StepStatus,
      {
        complete: /* @__PURE__ */ jsx31(StepIcon, {}),
        incomplete: /* @__PURE__ */ jsx31(StepNumber, { children: icon }),
        active: /* @__PURE__ */ jsx31(StepNumber, {})
      }
    ) }),
    /* @__PURE__ */ jsxs12(Box, { flexShrink: "0", children: [
      /* @__PURE__ */ jsx31(StepTitle, { children: title }),
      description && /* @__PURE__ */ jsx31(StepDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx31(StepSeparator, {})
  ] });
};
StepsItem.displayName = "StepsItem";
var StepsContent = (props) => {
  const { children, isOpen = true, orientation = "horizontal", ...rest } = props;
  const styles = useStyles8();
  return /* @__PURE__ */ jsx31(
    chakra22.div,
    {
      ...rest,
      __css: styles.content,
      className: cx19("sui-steps__content", props.className),
      "data-orientation": orientation,
      children: orientation === "vertical" ? /* @__PURE__ */ jsx31(
        Collapse2,
        {
          in: isOpen,
          style: { overflow: isOpen ? "visible" : "hidden" },
          children: /* @__PURE__ */ jsx31(chakra22.div, { p: "2px", children: isOpen ? children : null })
        }
      ) : children
    }
  );
};
StepsContent.displayName = "StepsContent";
var StepsCompleted = (props) => {
  const completedStyles = {};
  return /* @__PURE__ */ jsx31(
    chakra22.div,
    {
      __css: completedStyles,
      ...props,
      className: cx19("sui-steps__completed", props.className)
    }
  );
};
StepsCompleted.displayName = "StepsCompleted";

// src/web3-address/address.tsx
import { chakra as chakra23 } from "@chakra-ui/react";
import { cx as cx20 } from "@chakra-ui/utils";
import { jsxs as jsxs13 } from "react/jsx-runtime";
var Web3Address = (props) => {
  const { address, startLength = 6, endLength = 4, ...rest } = props;
  const start = address.slice(0, startLength);
  const end = address.slice(address.length - endLength, address.length);
  return /* @__PURE__ */ jsxs13(chakra23.span, { ...rest, className: cx20("sui-web3-address", props.className), children: [
    start,
    "...",
    end
  ] });
};
Web3Address.displayName = "Web3Address";

// src/timeline/timeline.tsx
import {
  chakra as chakra24,
  forwardRef as forwardRef19,
  createStylesContext as createStylesContext9,
  useMultiStyleConfig as useMultiStyleConfig15
} from "@chakra-ui/react";
import { cx as cx21, dataAttr as dataAttr7 } from "@chakra-ui/utils";
import { jsx as jsx32 } from "react/jsx-runtime";
var [StylesProvider9, useStyles9] = createStylesContext9("SuiTimeline");
var useTimelineStyles = useStyles9;
var Timeline = (props) => {
  const { children, orientation = "vertical", ...rest } = props;
  const styles = useMultiStyleConfig15("SuiTimeline", props);
  const timelineStyles = {
    position: "relative",
    listStyle: "none",
    ...styles.container
  };
  return /* @__PURE__ */ jsx32(StylesProvider9, { value: styles, children: /* @__PURE__ */ jsx32(
    chakra24.ul,
    {
      ...rest,
      __css: timelineStyles,
      className: cx21("sui-timeline", props.className),
      "data-orientation": "vertical",
      children
    }
  ) });
};
Timeline.displayName = "Timeline";
var TimelineItem = forwardRef19(
  (props, ref) => {
    const { children, ...rest } = props;
    const styles = useStyles9();
    return /* @__PURE__ */ jsx32(
      chakra24.li,
      {
        ...rest,
        ref,
        __css: styles.item,
        className: cx21("sui-timeline__item", props.className),
        children
      }
    );
  }
);
TimelineItem.displayName = "TimelineItem";
var TimelineContent = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles9();
  const contentStyles = {
    flex: 1,
    ...styles.content
  };
  return /* @__PURE__ */ jsx32(
    chakra24.div,
    {
      ...rest,
      __css: contentStyles,
      className: cx21("sui-timeline__content", props.className),
      children
    }
  );
};
TimelineContent.displayName = "TimelineContent";
var TimelineSeparator = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles9();
  const separatorStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    ...styles.separator
  };
  return /* @__PURE__ */ jsx32(
    chakra24.div,
    {
      ...rest,
      __css: separatorStyles,
      className: cx21("sui-timeline__separator", props.className),
      children
    }
  );
};
TimelineSeparator.displayName = "TimelineSeparator";
var TimelineDot = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles9();
  const dotStyles = {
    ...styles.dot
  };
  return /* @__PURE__ */ jsx32(
    chakra24.div,
    {
      ...rest,
      __css: dotStyles,
      className: cx21("sui-timeline__dot", props.className),
      children
    }
  );
};
TimelineDot.displayName = "TimelineDot";
var TimelineIcon = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles9();
  const iconStyles = {
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    ...styles.icon
  };
  return /* @__PURE__ */ jsx32(
    chakra24.div,
    {
      ...rest,
      __css: iconStyles,
      className: cx21("sui-timeline__icon", props.className),
      "data-dot": dataAttr7(!children),
      children: children || /* @__PURE__ */ jsx32(TimelineDot, {})
    }
  );
};
TimelineIcon.displayName = "TimelineIcon";
var TimelineTrack = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles9();
  return /* @__PURE__ */ jsx32(
    chakra24.div,
    {
      ...rest,
      __css: styles.track,
      className: cx21("sui-timeline__track", props.className),
      children
    }
  );
};
TimelineTrack.displayName = "TimelineTrack";

// src/icon-badge/icon-badge.tsx
import {
  chakra as chakra25,
  useStyleConfig as useStyleConfig4,
  forwardRef as forwardRef20,
  omitThemingProps as omitThemingProps10
} from "@chakra-ui/react";
import { cx as cx22 } from "@chakra-ui/utils";
import { cloneElement as cloneElement6, isValidElement as isValidElement6 } from "react";
import { jsx as jsx33 } from "react/jsx-runtime";
var IconBadge = forwardRef20((props, ref) => {
  const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
  const styles = useStyleConfig4("SuiIconBadge", props);
  const itemProps = omitThemingProps10(rest);
  const element = icon || children;
  const _children = isValidElement6(element) ? cloneElement6(element, {
    "aria-hidden": true,
    focusable: false
  }) : null;
  const __css = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles
  };
  return /* @__PURE__ */ jsx33(
    chakra25.div,
    {
      ref,
      __css,
      borderRadius: isRound ? "full" : void 0,
      "aria-label": ariaLabel,
      ...itemProps,
      className: cx22("sui-icon-badge", props.className),
      children: _children
    }
  );
});
export {
  AppShell,
  Banner,
  BannerActions,
  BannerCloseButton,
  BannerContent,
  BannerDescription,
  BannerIcon,
  BannerTitle,
  Br,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  CollapseProvider,
  Command,
  ContextMenu,
  ContextMenuItem,
  ContextMenuList,
  ContextMenuProvider,
  ContextMenuTrigger,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateContainer,
  EmptyStateDescription,
  EmptyStateFooter,
  EmptyStateIcon,
  EmptyStateTitle,
  ErrorBoundary,
  FilterIcon,
  HamburgerIcon,
  IconBadge,
  Link2 as Link,
  LoadingOverlay,
  LoadingSpinner,
  LoadingText,
  MinusIcon,
  Nav,
  NavGroup,
  NavGroupContent,
  NavGroupStylesProvider,
  NavGroupTitle,
  NavItem,
  NavItemLabel,
  NavItemStylesProvider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  NavbarProvider,
  OverflowMenu,
  Persona,
  PersonaAvatar,
  PersonaContainer,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
  PersonaTertiaryLabel,
  PlusIcon,
  Presence,
  Property,
  PropertyLabel,
  PropertyList,
  PropertyValue,
  SaasContext,
  SaasProvider,
  SearchIcon,
  SearchInput,
  Sidebar,
  SidebarOverlay,
  SidebarProvider,
  SidebarSection,
  SidebarStylesProvider,
  SidebarToggleButton,
  Snackbar,
  StepperProvider,
  Steps,
  StepsCompleted,
  StepsContent,
  StepsItem,
  StructuredList,
  StructuredListButton,
  StructuredListCell,
  StructuredListHeader,
  StructuredListIcon,
  StructuredListItem,
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
  TimelineTrack,
  ViewIcon,
  ViewOffIcon,
  Web3Address,
  createIcon,
  createStandAloneSnackbar,
  defaultPresenceTokens,
  splitProps,
  useCollapse,
  useCollapseContext,
  useContextMenu,
  useContextMenuContext,
  useEmptyStateStyles,
  useLink,
  useNavGroupStyles,
  useNavItemStyles,
  useNavbar,
  useNavbarContext,
  useSaas,
  useSidebarContext,
  useSidebarStyles,
  useSidebarToggleButton,
  useSnackbar,
  useStep,
  useStepper,
  useStepperContext,
  useStepperNextButton,
  useStepperPrevButton,
  useTimelineStyles
};
//# sourceMappingURL=index.mjs.map