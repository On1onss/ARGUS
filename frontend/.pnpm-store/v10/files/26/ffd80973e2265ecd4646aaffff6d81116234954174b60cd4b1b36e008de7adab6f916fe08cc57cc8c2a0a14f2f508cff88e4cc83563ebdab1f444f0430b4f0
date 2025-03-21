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
  baseTheme: () => baseTheme2,
  theme: () => theme2
});
module.exports = __toCommonJS(src_exports);

// src/saas-ui/theme.ts
var import_react3 = require("@chakra-ui/react");

// src/base/theme.ts
var import_react2 = require("@chakra-ui/react");

// src/base/components/app-shell.ts
var import_styled_system = require("@chakra-ui/styled-system");

// src/anatomy/create-anatomy.ts
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts2(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts3) {
    for (const part of parts3) {
      if (part in map) continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts: parts2,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// src/anatomy/index.ts
var appShellAnatomy = anatomy("app-shell").parts(
  "container",
  "inner",
  "main"
);
var emptyStateAnatomy = anatomy("emptystate").parts(
  "container",
  "body",
  "icon",
  "title",
  "descripton",
  "actions",
  "footer"
);
var bannerAnatomy = anatomy("banner").parts(
  "container",
  "icon",
  "content",
  "title",
  "description",
  "actions",
  "close"
);
var hotkeysAnantomy = anatomy("hotkeys").parts(
  "container",
  "group",
  "groupTitle",
  "item",
  "command",
  "then"
);
var loadingOverlayAnatomy = anatomy("loading-overlay").parts(
  "overlay",
  "text"
);
var navGroupAnatomy = anatomy("nav-group").parts(
  "container",
  "title",
  "icon",
  "content"
);
var navItemAnatomy = anatomy("nav-item").parts(
  "item",
  "link",
  "inner",
  "icon",
  "label"
);
var nprogressAnatomy = anatomy("nprogress").parts("container", "bar");
var personaAnatomy = anatomy("persona").parts(
  "container",
  "details",
  "avatar",
  "label",
  "secondaryLabel",
  "tertiaryLabel"
);
var searchInputAnatomy = anatomy("search-input").parts(
  "input",
  "reset"
);
var sidebarAnatomy = anatomy("sidebar").parts(
  "container",
  "overlay",
  "section",
  "toggleWrapper",
  "toggle"
);
var stepperAnatomy = anatomy("stepper").parts(
  "container",
  "steps",
  "icon",
  "content",
  "title",
  "separator"
);
var structuredListAnatomy = anatomy("structured-list").parts(
  "list",
  "item",
  "button",
  "header",
  "cell",
  "icon"
);
var propertyAnatomy = anatomy("property").parts(
  "property",
  "label",
  "value"
);
var selectAnatomy = anatomy("select").parts(
  "addon",
  "field",
  "element"
);
var timelineAnatomy = anatomy("timeline").parts(
  "container",
  "item",
  "separator",
  "icon",
  "dot",
  "track",
  "content"
);

// src/base/components/app-shell.ts
var { definePartsStyle, defineMultiStyleConfig } = (0, import_styled_system.createMultiStyleConfigHelpers)(appShellAnatomy.keys);
var baseStyle = definePartsStyle({
  container: {},
  inner: {},
  main: {}
});
var appShellTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: "fullscreen"
  },
  variants: {
    static: {},
    fullscreen: {
      container: {
        position: "absolute",
        inset: 0
      }
    }
  },
  baseStyle
});

// src/base/components/banner.ts
var import_theme_tools = require("@chakra-ui/theme-tools");
var import_styled_system2 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = (0, import_styled_system2.createMultiStyleConfigHelpers)(bannerAnatomy.keys);
var baseStyle2 = definePartsStyle2({
  container: {
    px: 4,
    py: 3
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: ["column", null, "row"]
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6,
    marginEnd: 2
  },
  actions: {
    marginEnd: 2
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  }
});
var variantSubtle = definePartsStyle2((props) => {
  const { theme: theme3, colorScheme: c } = props;
  return {
    container: {
      bg: `${c}.100`,
      _dark: { bg: (0, import_theme_tools.transparentize)(`${c}.200`, 0.16)(theme3) }
    },
    icon: { color: `${c}.500`, _dark: { color: `${c}.200` } }
  };
});
var variantSolid = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      bg: `${c}.500`,
      color: "white"
    }
  };
});
var bannerTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  variants: {
    subtle: variantSubtle,
    solid: variantSolid
  },
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// src/base/components/command.ts
var commandTheme = {
  baseStyle: {
    fontSize: "xs",
    "[role=tooltip] > &": {
      ms: 1,
      _before: {
        content: '"\u2022"',
        me: 1,
        fontSize: "xs"
      }
    }
  }
};

// src/base/components/empty-state.ts
var import_styled_system3 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = (0, import_styled_system3.createMultiStyleConfigHelpers)(emptyStateAnatomy.keys);
var baseStyle3 = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    icon: {
      boxSize: [10, null, 12],
      color: `${c}.500`,
      _dark: {
        color: `${c}.200`
      }
    },
    title: {
      mt: 8,
      fontWeight: "bold",
      fontSize: "xl"
    },
    actions: {
      mt: 8
    }
  };
});
var variantCentered = definePartsStyle3((props) => {
  return {
    body: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center"
    }
  };
});
var emptyStateTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  variants: {
    centered: variantCentered
  }
});

// src/base/components/form.ts
var import_styled_system4 = require("@chakra-ui/styled-system");
var import_anatomy4 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle4, defineMultiStyleConfig: defineMultiStyleConfig4 } = (0, import_styled_system4.createMultiStyleConfigHelpers)(import_anatomy4.formAnatomy.keys);
var horizontalVariant = definePartsStyle4({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
var formTheme = defineMultiStyleConfig4({
  variants: {
    horizontal: horizontalVariant
  }
});

// src/base/components/form-layout.ts
var import_styled_system5 = require("@chakra-ui/styled-system");
var formLayoutTheme = (0, import_styled_system5.defineStyleConfig)({
  defaultProps: {
    /* @ts-expect-error */
    spacing: 4
    // Chakra UI officially doesn't support custom default props yet, but this works.
  }
});

// src/base/components/form-legend.ts
var import_styled_system6 = require("@chakra-ui/styled-system");
var formLegendTheme = (0, import_styled_system6.defineStyleConfig)({
  baseStyle: {
    fontWeight: "semibold",
    mb: 4
  }
});

// src/base/components/hotkeys.ts
var import_styled_system7 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = (0, import_styled_system7.createMultiStyleConfigHelpers)(hotkeysAnantomy.keys);
var hotkeysTheme = defineMultiStyleConfig5({
  baseStyle: {
    container: {
      fontSize: "md"
    },
    group: {
      my: 2,
      py: 2
    },
    groupTitle: { py: 2, fontWeight: "semibold", fontSize: "sm" },
    item: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      py: 2
    },
    then: {
      mr: 1,
      fontSize: "sm",
      color: "muted"
    }
  }
});

// src/base/components/loading-overlay.ts
var import_styled_system8 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig6, definePartsStyle: definePartsStyle6 } = (0, import_styled_system8.createMultiStyleConfigHelpers)(loadingOverlayAnatomy.keys);
var baseStyle4 = definePartsStyle6({
  overlay: {
    p: 4
  }
});
var variantFill = definePartsStyle6(() => {
  return {
    overlay: {
      flex: 1,
      height: "100%"
    }
  };
});
var variantFullscreen = definePartsStyle6(() => {
  return {
    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: "modal",
      bg: "white",
      _dark: {
        bg: "gray.800"
      }
    }
  };
});
var variantOverlay = definePartsStyle6(() => {
  return {
    overlay: {
      position: "absolute",
      inset: 0,
      bg: "whiteAlpha.300",
      _dark: {
        bg: "blackAlpha.300"
      }
    }
  };
});
var loadingOverlayTheme = defineMultiStyleConfig6({
  defaultProps: {
    variant: "fill"
  },
  baseStyle: baseStyle4,
  variants: {
    fill: variantFill,
    fullscreen: variantFullscreen,
    overlay: variantOverlay
  }
});

// src/base/components/nav-group.ts
var import_styled_system9 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = (0, import_styled_system9.createMultiStyleConfigHelpers)(navGroupAnatomy.keys);
var baseStyle5 = definePartsStyle7((props) => {
  return {
    container: {
      "&:not(:last-of-type)": {
        mb: 4
      }
    },
    title: {
      display: "flex",
      alignItems: "center",
      px: 3,
      my: 1,
      height: 6,
      fontSize: "sm",
      fontWeight: "medium",
      color: "muted",
      transitionProperty: "common",
      transitionDuration: "normal",
      "&.sui-collapse-toggle .chakra-icon": {
        opacity: 0
      },
      "&.sui-collapse-toggle": {
        cursor: "pointer",
        borderRadius: "md",
        _hover: {
          bg: "blackAlpha.100",
          "& .chakra-icon": {
            opacity: 1
          },
          _dark: {
            bg: "whiteAlpha.200"
          }
        }
      },
      "[data-compact] &": {
        opacity: 0
      }
    },
    content: {}
  };
});
var navGroupTheme = defineMultiStyleConfig7({
  baseStyle: baseStyle5
});

// src/base/components/nav-item.ts
var import_theme_tools2 = require("@chakra-ui/theme-tools");
var import_react = require("@chakra-ui/react");
var import_styled_system10 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = (0, import_styled_system10.createMultiStyleConfigHelpers)(navItemAnatomy.keys);
var baseStyle6 = definePartsStyle8((props) => {
  return {
    item: {
      my: "2px",
      color: "gray.900",
      minW: 1,
      _dark: {
        color: "whiteAlpha.900"
      }
    },
    link: {
      display: "flex",
      rounded: "md",
      justifyContent: "flex-start",
      alignItems: "center",
      textDecoration: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      minW: 1,
      _hover: {
        textDecoration: "none"
      },
      _focusVisible: {
        outline: "none",
        boxShadow: "outline"
      }
    },
    inner: {
      display: "flex",
      flex: 1,
      w: "100%",
      alignItems: "center",
      minW: 1
    },
    label: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden"
    },
    icon: {
      display: "flex",
      transitionProperty: "common",
      transitionDuration: "normal",
      alignItems: "center",
      justifyContent: "center",
      width: "4",
      ml: "-0.25rem",
      color: "currentColor"
    }
  };
});
var variantNeutral = definePartsStyle8((props) => {
  const _active = {
    bg: "blackAlpha.200",
    _dark: {
      bg: `whiteAlpha.200`
    }
  };
  return {
    link: {
      _hover: {
        bg: "blackAlpha.100",
        _dark: {
          bg: `whiteAlpha.100`
        }
      },
      _active,
      ["&[aria-current=page]"]: _active
    },
    icon: {
      opacity: 0.8,
      "[data-active] &": {
        opacity: 1
      }
    }
  };
});
var variantSubtle2 = definePartsStyle8((props) => {
  const { colorScheme: c, theme: theme3 } = props;
  const _active = {
    bg: (0, import_theme_tools2.transparentize)(`${c}.500`, 0.3)(theme3),
    fontWeight: "semibold",
    color: `${c}.600`,
    _dark: {
      bg: (0, import_theme_tools2.transparentize)(`${c}.500`, 0.3)(theme3),
      color: `${c}.100`
    }
  };
  return {
    link: {
      _hover: {
        bg: `blackAlpha.100`,
        _dark: {
          bg: `whiteAlpha.200`
        }
      },
      _active,
      ["&[aria-current=page]"]: _active
    }
  };
});
var variantSolid2 = definePartsStyle8((props) => {
  const { colorScheme: c } = props;
  const _active = {
    bg: `${c}.500`
  };
  return {
    link: {
      _hover: {
        bg: "blackAlpha.100",
        _dark: {
          bg: `whiteAlpha.200`
        }
      },
      _active,
      ["&[aria-current=page]"]: _active,
      color: "white"
    },
    icon: {
      color: "white"
    },
    label: {}
  };
});
var variantLeftAccent = definePartsStyle8((props) => {
  const { colorScheme: c } = props;
  const _active = {
    _before: {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: -3,
      width: "3px",
      bg: `${c}.500`
    }
  };
  return {
    item: {
      position: "relative"
    },
    link: {
      _hover: {
        color: "inherit",
        bg: "blackAlpha.100",
        _dark: {
          bg: `whiteAlpha.200`
        }
      },
      _active,
      ["&[aria-current=page]"]: _active
    },
    icon: {
      "[data-active] &": {
        color: "currentColor"
      }
    },
    label: {}
  };
});
var _a, _b, _c, _d;
var navItemTheme = defineMultiStyleConfig8({
  defaultProps: {
    size: "sm",
    colorScheme: "primary",
    variant: "neutral"
  },
  baseStyle: baseStyle6,
  sizes: {
    xs: {
      link: (_a = import_react.theme.components.Button.sizes) == null ? void 0 : _a.xs,
      icon: {
        me: 1,
        fontSize: "xs"
      }
    },
    sm: {
      link: (_b = import_react.theme.components.Button.sizes) == null ? void 0 : _b.sm,
      icon: {
        me: 2,
        fontSize: "sm"
      }
    },
    md: {
      link: (_c = import_react.theme.components.Button.sizes) == null ? void 0 : _c.md,
      icon: {
        me: 2,
        fontSize: "md"
      }
    },
    lg: {
      link: (_d = import_react.theme.components.Button.sizes) == null ? void 0 : _d.lg,
      icon: {
        me: 3,
        fontSize: "lg"
      }
    }
  },
  variants: {
    neutral: variantNeutral,
    subtle: variantSubtle2,
    solid: variantSolid2,
    "left-accent": variantLeftAccent
  }
});

// src/base/components/nprogress.ts
var import_styled_system11 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = (0, import_styled_system11.createMultiStyleConfigHelpers)(nprogressAnatomy.keys);
var baseStyle7 = definePartsStyle9((props) => {
  const { colorScheme: c } = props;
  return {
    bar: {
      bg: `${c}.500`,
      _dark: {
        bg: `${c}.300`
      }
    }
  };
});
var nprogressTheme = defineMultiStyleConfig9({
  defaultProps: {
    colorScheme: "teal"
  },
  baseStyle: baseStyle7
});

// src/base/components/persona.ts
var import_styled_system12 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = (0, import_styled_system12.createMultiStyleConfigHelpers)(personaAnatomy.keys);
var baseStyleLabel = (0, import_styled_system12.defineStyle)((props) => {
  return {
    color: "gray.500",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    minW: 0,
    _dark: {
      color: "whiteAlpha.600"
    }
  };
});
var baseStyle8 = definePartsStyle10((props) => {
  return {
    details: {
      minW: 0
    },
    secondaryLabel: baseStyleLabel(props),
    tertiaryLabel: baseStyleLabel(props)
  };
});
var sizes = {
  "2xs": definePartsStyle10({
    details: { ms: 2 },
    label: {
      fontSize: "xs"
    },
    secondaryLabel: { display: "none" },
    tertiaryLabel: { display: "none" }
  }),
  xs: definePartsStyle10({
    details: { ms: 2 },
    label: {
      fontSize: "md"
    },
    secondaryLabel: { display: "none" },
    tertiaryLabel: { display: "none" }
  }),
  sm: definePartsStyle10({
    details: { ms: 2 },
    label: { fontSize: "md" },
    secondaryLabel: { fontSize: "sm" },
    tertiaryLabel: { display: "none" }
  }),
  md: definePartsStyle10({
    details: { ms: 2 },
    label: {
      fontSize: "md"
    },
    secondaryLabel: {
      fontSize: "sm"
    },
    tertiaryLabel: { display: "none" }
  }),
  lg: definePartsStyle10({
    details: { ms: 3 },
    label: {
      fontSize: "md"
    },
    secondaryLabel: {
      fontSize: "sm"
    },
    tertiaryLabel: {
      fontSize: "sm"
    }
  }),
  xl: definePartsStyle10({
    details: { ms: 3 },
    label: {
      fontSize: "xl"
    },
    secondaryLabel: {
      fontSize: "md"
    },
    tertiaryLabel: { fontSize: "md" }
  }),
  "2xl": definePartsStyle10({
    details: { ms: 4 },
    label: {
      fontSize: "2xl"
    },
    secondaryLabel: {
      fontSize: "lg"
    },
    tertiaryLabel: { fontSize: "lg" }
  })
};
var personaTheme = defineMultiStyleConfig10({
  defaultProps: {
    size: "md"
  },
  baseStyle: baseStyle8,
  sizes
});

// src/base/components/property.ts
var import_styled_system13 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig11 } = (0, import_styled_system13.createMultiStyleConfigHelpers)(propertyAnatomy.keys);
var propertyTheme = defineMultiStyleConfig11({
  baseStyle: {
    label: {
      display: "flex",
      flexDirection: "row",
      minWidth: "100px",
      width: "30%",
      marginEnd: 2,
      py: 2,
      color: "gray.500",
      _dark: {
        color: "gray.400"
      }
    }
  }
});

// src/base/components/search-input.ts
var import_styled_system14 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig12 } = (0, import_styled_system14.createMultiStyleConfigHelpers)(
  searchInputAnatomy.keys
);
var searchInputTheme = defineMultiStyleConfig12({
  baseStyle: {
    input: {
      pr: 8
    }
  },
  sizes: {
    sm: {
      reset: {
        fontSize: "0.7em"
      }
    },
    lg: {
      input: {
        pr: 10
      }
    }
  }
});

// src/base/components/sidebar.ts
var import_styled_system15 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle12, defineMultiStyleConfig: defineMultiStyleConfig13 } = (0, import_styled_system15.createMultiStyleConfigHelpers)(sidebarAnatomy.keys);
var baseStyle9 = definePartsStyle12((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      bg: c ? `${c}.500` : "white",
      display: "flex",
      flexDirection: "column",
      borderRightWidth: "1px",
      _dark: {
        bg: c ? `${c}.500` : "gray.800"
      }
    },
    overlay: {
      bg: "blackAlpha.200"
    }
  };
});
var variantDefault = definePartsStyle12((props) => {
  return {
    container: {
      width: "280px",
      maxWidth: ["100vw", "320px"],
      minWidth: "220px",
      py: 3,
      "&[data-collapsible]": {
        pt: 14
      }
    },
    section: {
      px: 3
    },
    toggleWrapper: {
      h: 8,
      mb: 4,
      display: "none",
      "[data-collapsible] &": {
        display: "block"
      }
    }
  };
});
var variantCondensed = definePartsStyle12((props) => {
  return {
    container: {
      width: "14",
      py: 3
    },
    section: {
      px: 3
    },
    toggleWrapper: {
      display: "none"
    }
  };
});
var sidebarTheme = defineMultiStyleConfig13({
  defaultProps: {
    variant: "default"
  },
  baseStyle: baseStyle9,
  variants: {
    default: variantDefault,
    compact: variantCondensed
  }
});

// src/base/components/select.ts
var import_styled_system17 = require("@chakra-ui/styled-system");

// ../../node_modules/@chakra-ui/theme/dist/esm/components/input.mjs
var import_anatomy14 = require("@chakra-ui/anatomy");
var import_styled_system16 = require("@chakra-ui/styled-system");
var import_theme_tools3 = require("@chakra-ui/theme-tools");
var { definePartsStyle: definePartsStyle13, defineMultiStyleConfig: defineMultiStyleConfig14 } = (0, import_styled_system16.createMultiStyleConfigHelpers)(import_anatomy14.inputAnatomy.keys);
var $height = (0, import_styled_system16.cssVar)("input-height");
var $fontSize = (0, import_styled_system16.cssVar)("input-font-size");
var $padding = (0, import_styled_system16.cssVar)("input-padding");
var $borderRadius = (0, import_styled_system16.cssVar)("input-border-radius");
var baseStyle10 = definePartsStyle13({
  addon: {
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: (0, import_styled_system16.defineStyle)({
    [$fontSize.variable]: "fontSizes.lg",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.12"
  }),
  md: (0, import_styled_system16.defineStyle)({
    [$fontSize.variable]: "fontSizes.md",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.10"
  }),
  sm: (0, import_styled_system16.defineStyle)({
    [$fontSize.variable]: "fontSizes.sm",
    [$padding.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.8"
  }),
  xs: (0, import_styled_system16.defineStyle)({
    [$fontSize.variable]: "fontSizes.xs",
    [$padding.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.6"
  })
};
var sizes2 = {
  lg: definePartsStyle13({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle13({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle13({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle13({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || (0, import_theme_tools3.mode)("blue.500", "blue.300")(props),
    errorBorderColor: ec || (0, import_theme_tools3.mode)("red.500", "red.300")(props)
  };
}
var variantOutline = definePartsStyle13((props) => {
  const { theme: theme3 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: (0, import_theme_tools3.mode)("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools3.getColor)(theme3, ec),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(theme3, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: (0, import_theme_tools3.getColor)(theme3, fc),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(theme3, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: (0, import_theme_tools3.mode)("inherit", "whiteAlpha.50")(props),
      bg: (0, import_theme_tools3.mode)("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle13((props) => {
  const { theme: theme3 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools3.mode)("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: (0, import_theme_tools3.mode)("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools3.getColor)(theme3, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: (0, import_theme_tools3.getColor)(theme3, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools3.mode)("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle13((props) => {
  const { theme: theme3 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools3.getColor)(theme3, ec),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools3.getColor)(theme3, ec)}`
      },
      _focusVisible: {
        borderColor: (0, import_theme_tools3.getColor)(theme3, fc),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools3.getColor)(theme3, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled = definePartsStyle13({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled
};
var inputTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle10,
  sizes: sizes2,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// src/base/components/select.ts
var { defineMultiStyleConfig: defineMultiStyleConfig15 } = (0, import_styled_system17.createMultiStyleConfigHelpers)(
  selectAnatomy.keys
);
var selectTheme = defineMultiStyleConfig15({
  defaultProps: inputTheme.defaultProps,
  baseStyle: inputTheme.baseStyle,
  sizes: inputTheme.sizes,
  variants: inputTheme.variants
});

// src/base/components/structured-list.ts
var import_styled_system18 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle14, defineMultiStyleConfig: defineMultiStyleConfig16 } = (0, import_styled_system18.createMultiStyleConfigHelpers)(structuredListAnatomy.keys);
var baseStyle11 = definePartsStyle14((props) => {
  return {
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "md"
    },
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      cursor: "pointer",
      userSelect: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      borderRadius: "inherit",
      outline: "none",
      _hover: {
        bg: "blackAlpha.50",
        _dark: {
          bg: "whiteAlpha.50"
        }
      },
      _focusVisible: {
        boxShadow: "outline"
      },
      _focus: {
        bg: "blackAlpha.50",
        _dark: {
          bg: "whiteAlpha.50"
        }
      },
      _active: {
        bg: "blackAlpha.100",
        _dark: {
          bg: "whiteAlpha.100"
        }
      },
      _disabled: {
        cursor: "inherit",
        opacity: 0.5,
        _hover: {
          bg: "transparent",
          _dark: {
            bg: "transparent"
          }
        },
        _active: {
          bg: "transparent",
          _dark: {
            bg: "transparent"
          }
        }
      }
    },
    header: {
      display: "flex",
      flexDirection: "row",
      position: "sticky",
      fontSize: "md",
      fontWeight: "semibold",
      color: "muted"
    },
    icon: {
      display: "flex",
      flexShrink: 0
    }
  };
});
var structuredListTheme = defineMultiStyleConfig16({
  defaultProps: {
    size: "md"
  },
  baseStyle: baseStyle11,
  sizes: {
    sm: {
      item: {
        py: 1,
        px: 1
      },
      header: {
        py: 1,
        px: 1
      },
      button: {
        py: 1,
        px: 1
      },
      cell: {
        px: 1
      },
      icon: {
        px: 1
      }
    },
    md: {
      item: {
        py: 2,
        px: 2
      },
      header: {
        py: 2,
        px: 2
      },
      button: { py: 2, px: 2 },
      cell: {
        px: 2
      },
      icon: {
        px: 2
      }
    }
  }
});

// src/base/components/timeline.ts
var import_styled_system19 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle15, defineMultiStyleConfig: defineMultiStyleConfig17 } = (0, import_styled_system19.createMultiStyleConfigHelpers)(timelineAnatomy.keys);
var $rowStart = (0, import_styled_system19.cssVar)("timeline-row-start", "minmax(0,1fr)");
var $rowEnd = (0, import_styled_system19.cssVar)("timeline-row-end", "minmax(0,1fr)");
var $colStart = (0, import_styled_system19.cssVar)("timeline-col-start", "minmax(0,1fr)");
var $colEnd = (0, import_styled_system19.cssVar)("timeline-col-end", "minmax(0,1fr)");
var baseStyle12 = definePartsStyle15((props) => {
  return {
    container: {
      display: "flex",
      [$rowStart.variable]: "minmax(0,1fr)",
      [$rowEnd.variable]: "minmax(0,1fr)",
      [$colStart.variable]: "auto",
      [$colEnd.variable]: "2fr",
      flexDirection: "column",
      justifyItems: "center"
    },
    item: {
      display: "grid",
      alignItems: "center",
      justifyItems: "start",
      gridTemplateRows: `${$rowStart.reference}`,
      gridTemplateColumns: `${$colStart.reference} ${$colEnd.reference}`,
      position: "relative"
    },
    separator: {
      mx: 1,
      minW: "24px",
      flexShrink: 0,
      gridColumnStart: 1,
      gap: 2,
      height: "100%",
      _before: {
        content: '""',
        display: "block",
        flex: 1,
        minH: "0.5em"
      },
      _after: {
        content: '""',
        display: "block",
        flex: 1,
        minH: "0.5em"
      },
      "&:has(.sui-timeline__track:first-of-type):before": {
        display: "none"
      },
      "&:has(.sui-timeline__track:last-of-type):after": {
        display: "none"
      }
    },
    icon: {
      color: "gray.300",
      _dark: {
        color: "gray.600"
      }
    },
    dot: {
      width: "9px",
      height: "9px",
      bg: "currentColor",
      borderRadius: "full"
    },
    track: {
      bg: "gray.300",
      width: "1px",
      flex: 1,
      minH: "0.5em",
      _dark: {
        bg: "gray.600"
      }
    },
    content: {
      px: "2",
      _first: {
        gridColumnStart: 1
      },
      _last: {
        gridColumnStart: 2,
        justifySelf: "start"
      }
    }
  };
});
var variantSolid3 = definePartsStyle15((props) => {
  return {
    icon: {}
  };
});
var variantOutline2 = definePartsStyle15((props) => {
  return {
    dot: {
      bg: "transparent",
      borderColor: "currentColor",
      borderWidth: "2px"
    }
  };
});
var timelineTheme = defineMultiStyleConfig17({
  defaultProps: { variant: "solid", size: "sm" },
  baseStyle: baseStyle12,
  variants: {
    solid: variantSolid3,
    outline: variantOutline2
  },
  sizes: {
    sm: {
      icon: {
        minH: "8px",
        minW: "8px"
      }
    }
  }
});

// src/base/components/icon-badge.ts
var import_styled_system20 = require("@chakra-ui/styled-system");
var iconBadgeTheme = (0, import_styled_system20.defineStyleConfig)({
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    outline: ({ colorScheme }) => {
      return {
        borderWidth: "1px",
        borderColor: colorScheme ? `${colorScheme}.500` : "chakra-border-color",
        color: colorScheme ? `${colorScheme}.500` : "currentColor"
      };
    },
    solid: ({ colorScheme = "gray" }) => {
      return {
        bg: `${colorScheme}.500`,
        color: "white"
      };
    }
  },
  sizes: {
    sm: {
      borderRadius: "sm",
      fontSize: "0.9em",
      w: 6,
      h: 6
    },
    md: {
      borderRadius: "md",
      fontSize: "1.1em",
      w: 8,
      h: 8
    },
    lg: {
      borderRadius: "md",
      fontSize: "1.3em",
      w: 10,
      h: 10
    },
    xl: {
      borderRadius: "md",
      fontSize: "1.5em",
      w: 12,
      h: 12
    }
  },
  defaultProps: {
    variant: "outline",
    size: "md"
  }
});

// src/base/components/navbar.ts
var import_anatomy18 = require("@chakra-ui/anatomy");
var import_styled_system21 = require("@chakra-ui/styled-system");
var parts = (0, import_anatomy18.anatomy)("navbar").parts(
  "container",
  "inner",
  "brand",
  "content",
  "item",
  "link"
);
var { defineMultiStyleConfig: defineMultiStyleConfig18, definePartsStyle: definePartsStyle16 } = (0, import_styled_system21.createMultiStyleConfigHelpers)(parts.keys);
var $bg = (0, import_styled_system21.cssVar)("navbar-bg");
var $color = (0, import_styled_system21.cssVar)("navbar-text-color", "currentColor");
var $linkBg = (0, import_styled_system21.cssVar)("navbar-link-bg", "transparent");
var accessibleColors = ["yellow", "cyan"];
var navbarTheme = defineMultiStyleConfig18({
  baseStyle: definePartsStyle16(({ colorScheme }) => {
    let color = "currentColor";
    if (colorScheme) {
      color = accessibleColors.includes(colorScheme) ? "colors.black" : "colors.white";
    }
    return {
      container: {
        display: "flex",
        [$bg.variable]: colorScheme ? `colors.${colorScheme}.500` : "colors.chakra-body-bg",
        [$color.variable]: color,
        bg: $bg.reference,
        color: $color.reference,
        zIndex: "overlay",
        width: "full",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        data: {
          "& [data-menu-open=true]": {
            border: "none"
          }
        }
      },
      inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "full",
        height: "var(--navbar-height)",
        px: {
          base: 4,
          lg: 6
        },
        gap: 4,
        flexWrap: "nowrap"
      },
      toggle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 6,
        height: "full",
        outline: "none",
        borderRadius: "sm"
      },
      brand: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "full",
        bg: "transparent",
        textDecoration: "none",
        color: "inherit",
        whiteSpace: "nowrap",
        boxSizing: "border-box"
      },
      content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        listStyle: "none"
      },
      item: {
        display: "inline-flex",
        p: 0
      },
      link: {
        bg: $linkBg.reference,
        color: "current",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        borderRadius: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        lineHeight: 1,
        px: 3,
        h: 8,
        _focusVisible: {
          outline: "none",
          boxShadow: "outline"
        },
        _hover: {
          [$linkBg.variable]: `colors.blackAlpha.100`,
          textDecoration: "none",
          _dark: {
            [$linkBg.variable]: `colors.whiteAlpha.200`
          }
        },
        _active: {
          fontWeight: "semibold"
        }
      }
    };
  })
});

// src/base/components/index.ts
var components = {
  Form: formTheme,
  SuiAppShell: appShellTheme,
  SuiBanner: bannerTheme,
  SuiCommand: commandTheme,
  SuiEmptyState: emptyStateTheme,
  SuiFormLayout: formLayoutTheme,
  SuiFormLegend: formLegendTheme,
  SuiHotkeys: hotkeysTheme,
  SuiStructuredList: structuredListTheme,
  SuiLoadingOverlay: loadingOverlayTheme,
  SuiNavGroup: navGroupTheme,
  SuiNavItem: navItemTheme,
  SuiPersona: personaTheme,
  SuiProperty: propertyTheme,
  SuiNProgress: nprogressTheme,
  SuiSearchInput: searchInputTheme,
  SuiSelect: selectTheme,
  SuiSidebar: sidebarTheme,
  SuiTimeline: timelineTheme,
  SuiIconBadge: iconBadgeTheme,
  SuiNavbar: navbarTheme
};

// src/base/theme.ts
var baseTheme2 = (0, import_react2.extendTheme)({
  colors: {
    primary: import_react2.theme.colors.blue
  },
  semanticTokens: {
    colors: {
      "presence.online": "green.500",
      "presence.offline": "gray.400",
      "presence.busy": "orange.500",
      "presence.dnd": "red.500",
      "presence.away": "gray.400"
    }
  },
  components
});

// src/saas-ui/styles.ts
var styles = {
  global: (props) => ({
    body: {
      WebkitFontSmoothing: "antialiased",
      TextRendering: "optimizelegibility"
    }
  })
};

// src/saas-ui/foundations/colors.ts
var colors = {
  black: "#0e1012",
  gray: {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e7e7e8",
    "300": "#d3d4d5",
    "400": "#abadaf",
    "500": "#7d7f83",
    "600": "#52555a",
    "700": "#33373d",
    "800": "#1d2025",
    "900": "#171a1d"
  },
  purple: {
    "50": "#f9f6fd",
    "100": "#e5daf8",
    "200": "#d3bef4",
    "300": "#b795ec",
    "400": "#a379e7",
    "500": "#8952e0",
    "600": "#7434db",
    "700": "#6023c0",
    "800": "#4f1d9e",
    "900": "#3b1676"
  },
  pink: {
    "50": "#fdf5f9",
    "100": "#f8d9e7",
    "200": "#f3b9d3",
    "300": "#eb8db8",
    "400": "#e56ba2",
    "500": "#dc3882",
    "600": "#c4246c",
    "700": "#a01d58",
    "800": "#7d1745",
    "900": "#5d1133"
  },
  red: {
    "50": "#fdf6f5",
    "100": "#f8d9d8",
    "200": "#f1b8b4",
    "300": "#e98d87",
    "400": "#e4726c",
    "500": "#dc4a41",
    "600": "#d2140a",
    "700": "#ac0900",
    "800": "#930800",
    "900": "#6d0600"
  },
  orange: {
    "50": "#fdfaf6",
    "100": "#f9ebdb",
    "200": "#f1d4b1",
    "300": "#e6b273",
    "400": "#dc9239",
    "500": "#c37b24",
    "600": "#a5681e",
    "700": "#835318",
    "800": "#674113",
    "900": "#553610"
  },
  yellow: {
    "50": "#fffefb",
    "100": "#fff8e9",
    "200": "#feecbd",
    "300": "#fddc87",
    "400": "#fbc434",
    "500": "#d2a01e",
    "600": "#a88018",
    "700": "#836413",
    "800": "#624b0e",
    "900": "#513e0c"
  },
  green: {
    "50": "#f7fdfb",
    "100": "#d2f2e7",
    "200": "#9fe3cd",
    "300": "#64d2ad",
    "400": "#1dbd88",
    "500": "#0ea371",
    "600": "#0c875e",
    "700": "#096949",
    "800": "#07563c",
    "900": "#064731"
  },
  teal: {
    "50": "#f1fcfc",
    "100": "#c0f1f4",
    "200": "#84e4e9",
    "300": "#2dd1da",
    "400": "#22b2ba",
    "500": "#1d979e",
    "600": "#187b80",
    "700": "#125f64",
    "800": "#0f5053",
    "900": "#0d4244"
  },
  cyan: {
    "50": "#f4fbfd",
    "100": "#d0eef7",
    "200": "#bae7f3",
    "300": "#a2deee",
    "400": "#53c2e1",
    "500": "#2ab4d9",
    "600": "#24a2c4",
    "700": "#1e86a2",
    "800": "#196e85",
    "900": "#135567"
  },
  blue: {
    "50": "#f1f6fd",
    "100": "#cde0f6",
    "200": "#a8c8f0",
    "300": "#7fafe8",
    "400": "#5896e1",
    "500": "#347fdb",
    "600": "#236abf",
    "700": "#1b5192",
    "800": "#164278",
    "900": "#123662"
  },
  indigo: {
    "50": "#f8f7fc",
    "100": "#e1ddf5",
    "200": "#c8c0ec",
    "300": "#a89de2",
    "400": "#9789dc",
    "500": "#7f6ed4",
    "600": "#6a58c9",
    "700": "#5546a1",
    "800": "#483c88",
    "900": "#342b62"
  }
};
var colors_default = {
  primary: colors.purple,
  secondary: colors.cyan,
  ...colors
};

// src/saas-ui/foundations/typography.ts
var fonts = {
  heading: "InterVariable, Inter, sans-serif",
  body: "InterVariable, Inter, sans-serif"
};
var fontSizes = {
  "3xs": "0.45rem",
  "2xs": "0.625rem",
  xs: "0.75rem",
  sm: "0.8125rem",
  md: "0.875rem",
  lg: "1rem",
  xl: "1.125rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  "4xl": "1.875rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "3.75rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var textStyles = {
  h1: {
    fontSize: ["5xl", "6xl", "7xl"],
    fontWeight: "extrabold",
    lineHeight: "1.2",
    letterSpacing: "-2%"
  },
  h2: {
    fontSize: ["3xl", "4xl", "5xl"],
    fontWeight: "extrabold",
    lineHeight: "1.1",
    letterSpacing: "-1%"
  },
  h3: {
    fontSize: ["lg", "xl"],
    fontWeight: "extrabold",
    lineHeight: "1.1",
    letterSpacing: "-1%"
  },
  subtitle: {
    fontSize: ["lg", null, "2xl"],
    fontWeight: "normal"
  }
};

// src/saas-ui/foundations/sizes.ts
var sizes3 = {
  container: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
  }
};
var sizes_default = sizes3;

// src/saas-ui/foundations/shadows.ts
var import_theme_tools4 = require("@chakra-ui/theme-tools");
var shadows = {
  outline: `0 0 0 2px ${(0, import_theme_tools4.transparentize)(colors_default.primary[500], 0.6)({ colors: colors_default })}`
};
var shadows_default = shadows;

// src/saas-ui/foundations/semantic-tokens.ts
var semantic_tokens_default = {
  colors: {
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.200" },
    muted: {
      default: "gray.500",
      _dark: "gray.400"
    },
    neutral: {
      default: "black",
      _dark: "white"
    },
    "neutral-fg": {
      default: "white",
      _dark: "black"
    }
  }
};

// src/saas-ui/foundations/index.ts
var foundations = {
  colors: colors_default,
  fonts,
  fontSizes,
  textStyles,
  sizes: sizes_default,
  shadows: shadows_default,
  semanticTokens: semantic_tokens_default
};

// src/saas-ui/components/alert.ts
var import_anatomy19 = require("@chakra-ui/anatomy");
var import_styled_system22 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle17, defineMultiStyleConfig: defineMultiStyleConfig19 } = (0, import_styled_system22.createMultiStyleConfigHelpers)(import_anatomy19.alertAnatomy.keys);
var variantSnackbar = definePartsStyle17((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      bg: `white`,
      _dark: {
        bg: `black`
      },
      borderWidth: "1px"
    },
    icon: {
      color: `${c}.500`,
      _dark: {
        color: `${c}.500`
      },
      "& .chakra-spinner": {
        color: `black`,
        _dark: {
          color: `white`
        }
      }
    },
    title: { fontWeight: "semibold", fontSize: "md" },
    description: {
      fontSize: "sm",
      color: `gray.500`,
      _dark: {
        color: `gray.400`
      }
    }
  };
});
var baseStyle13 = definePartsStyle17({
  container: {
    borderRadius: "md"
  }
});
var alertTheme = defineMultiStyleConfig19({
  defaultProps: {
    size: "sm"
  },
  baseStyle: baseStyle13,
  variants: {
    snackbar: variantSnackbar
  }
});

// src/saas-ui/components/badge.ts
var import_styled_system23 = require("@chakra-ui/styled-system");
var import_theme_tools5 = require("@chakra-ui/theme-tools");
var vars = (0, import_styled_system23.defineCssVars)("badge", ["bg", "color", "shadow", "border"]);
var variantOutline3 = (0, import_styled_system23.defineStyle)((props) => {
  const { colorScheme: c, theme: theme3 } = props;
  const darkColor = (0, import_theme_tools5.transparentize)(`${c}.200`, 0.8)(theme3);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var badgeTheme = (0, import_styled_system23.defineStyleConfig)({
  variants: {
    outline: (props) => {
      const styles2 = variantOutline3(props);
      return {
        ...styles2,
        _dark: {
          ...styles2 == null ? void 0 : styles2._dark,
          [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.border.reference}`,
          [vars.color.variable]: `colors.${props.colorScheme}.200`,
          [vars.border.variable]: `colors.${props.colorScheme}.500`
        }
      };
    },
    ghost: (props) => {
      const styles2 = variantOutline3(props);
      return {
        ...styles2,
        shadow: "none",
        _dark: {
          ...styles2 == null ? void 0 : styles2._dark,
          [vars.color.variable]: `colors.${props.colorScheme}.200`
        }
      };
    }
  }
});

// src/saas-ui/components/button.ts
var import_styled_system24 = require("@chakra-ui/styled-system");
var import_theme_tools6 = require("@chakra-ui/theme-tools");
var getStateColors = (props) => {
  const { colorScheme: c } = props;
  if (c === "gray") {
    return {
      base: (0, import_theme_tools6.mode)("gray.100", "whiteAlpha.300")(props),
      hover: (0, import_theme_tools6.mode)("gray.200", "whiteAlpha.400")(props),
      active: (0, import_theme_tools6.mode)("gray.300", "whiteAlpha.500")(props)
    };
  }
  if (c === "white") {
    return {
      base: "whiteAlpha.900",
      hover: "whiteAlpha.700",
      active: "whiteAlpha.500"
    };
  }
  return {
    base: (0, import_theme_tools6.mode)(`${c}.500`, `${c}.500`)(props),
    hover: (0, import_theme_tools6.mode)(`${c}.600`, `${c}.600`)(props),
    active: (0, import_theme_tools6.mode)(`${c}.700`, `${c}.700`)(props)
  };
};
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
    color: "black"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid4 = (0, import_styled_system24.defineStyle)((props) => {
  var _a3;
  const { colorScheme: c, colorMode } = props;
  if (c === "white") {
    return {
      bg: "white",
      color: "black",
      _hover: {
        bg: `whiteAlpha.900`,
        _dark: {
          bg: `whiteAlpha.900`
        },
        _disabled: {
          bg: "white"
        }
      },
      _active: {
        bg: `whiteAlpha.800`,
        _dark: {
          bg: `whiteAlpha.800`
        }
      },
      _disabled: {
        color: "blackAlpha.700"
      }
    };
  }
  if (c === "neutral") {
    return {
      bg: "black",
      color: "white",
      _dark: {
        bg: "white",
        color: "black"
      },
      _hover: {
        bg: `blackAlpha.800`,
        _disabled: {
          bg: "black"
        },
        _dark: {
          bg: "whiteAlpha.800",
          _disabled: {
            bg: "white"
          }
        }
      },
      _active: {
        bg: `blackAlpha.800`,
        _dark: {
          bg: "whiteAlpha.800"
        }
      },
      _disabled: {
        color: "blackAlpha.700",
        _dark: {
          color: "whiteAlpha.700"
        }
      }
    };
  }
  const { base, hover, active } = getStateColors(props);
  const {
    color = c === "gray" ? (0, import_theme_tools6.mode)("black", "white")(props) : "white",
    bg = base,
    hoverBg = hover,
    activeBg = active
  } = (_a3 = accessibleColorMap[c]) != null ? _a3 : {};
  return {
    bg,
    color,
    _hover: {
      bg: hoverBg,
      _disabled: {
        bg
      }
    },
    _active: {
      bg: activeBg
    }
  };
});
var variantElevated = (0, import_styled_system24.defineStyle)((props) => {
  return {
    shadow: "md",
    ...variantSolid4(props)
  };
});
var variantOutline4 = (0, import_styled_system24.defineStyle)((props) => {
  const { colorScheme: c } = props;
  const { base, hover, active } = getStateColors(props);
  return {
    ...variantGhost(props),
    borderColor: c === "gray" ? hover : base,
    borderWidth: "1px",
    _hover: {
      borderColor: c === "gray" ? active : hover
    }
  };
});
var variantGhost = (0, import_styled_system24.defineStyle)((props) => {
  const { colorScheme: c, theme: theme3 } = props;
  if (c === "gray") {
    return {
      color: "inherit",
      _dark: {
        color: "whiteAlpha.900"
      },
      _hover: {
        bg: `blackAlpha.100`,
        _dark: {
          bg: "whiteAlpha.200"
        }
      },
      _active: {
        bg: "blackAlpha.200",
        _dark: {
          bg: "whiteAlpha.300"
        }
      }
    };
  }
  if (c === "white") {
    return {
      color: "white",
      _hover: {
        bg: "whiteAlpha.200"
      },
      _active: "whiteAlpha.300"
    };
  }
  const darkHoverBg = (0, import_theme_tools6.transparentize)(`${c}.200`, 0.12)(theme3);
  const darkActiveBg = (0, import_theme_tools6.transparentize)(`${c}.200`, 0.24)(theme3);
  return {
    color: `${c}.600`,
    _dark: {
      color: `${c}.200`
    },
    bg: "transparent",
    _hover: {
      bg: `${c}.50`,
      _dark: {
        bg: darkHoverBg
      }
    },
    _active: {
      bg: `${c}.100`,
      _dark: {
        bg: darkActiveBg
      }
    }
  };
});
var variantSubtle3 = (0, import_styled_system24.defineStyle)((props) => {
  const { colorScheme: c, theme: theme3 } = props;
  if (c === "gray") {
    return {
      color: `inherit`,
      bg: `blackAlpha.100`,
      _dark: {
        bg: `whiteAlpha.100`,
        color: `whiteAlpha.900`
      },
      _hover: {
        bg: `blackAlpha.200`,
        _dark: {
          color: `white.200`
        }
      },
      _active: {
        bg: `blackAlpha.300`,
        _dark: {
          bg: `whiteAlpha.300`
        }
      }
    };
  }
  const bgColor = c === "white" ? "white" : (0, import_theme_tools6.mode)(`${c}.500`, `${c}.200`)(props);
  const bg = (0, import_theme_tools6.transparentize)(bgColor, 0.1)(theme3);
  const hoverBg = (0, import_theme_tools6.transparentize)(bgColor, 0.16)(theme3);
  const activeBg = (0, import_theme_tools6.transparentize)(bgColor, 0.24)(theme3);
  return {
    color: c === "white" ? "white" : (0, import_theme_tools6.mode)(`${c}.600`, `${c}.200`)(props),
    bg,
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    }
  };
});
var variantLink = (0, import_styled_system24.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: c === "white" ? "white" : (0, import_theme_tools6.mode)(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: c === "white" ? "whiteAlpha.800" : (0, import_theme_tools6.mode)(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantPrimary = (0, import_styled_system24.defineStyle)((props) => {
  let { colorScheme } = props;
  if (colorScheme === "gray") {
    colorScheme = "primary";
  }
  return variantSolid4({
    ...props,
    variant: "solid",
    colorScheme
  });
});
var variantSecondary = (0, import_styled_system24.defineStyle)((props) => {
  return variantSolid4({
    ...props,
    variant: "solid"
  });
});
var variantTertiary = (0, import_styled_system24.defineStyle)((props) => {
  return variantOutline4({
    ...props,
    variant: "outline"
  });
});
var buttonTheme = (0, import_styled_system24.defineStyleConfig)({
  defaultProps: {
    size: "sm"
  },
  variants: {
    solid: variantSolid4,
    ghost: variantGhost,
    outline: variantOutline4,
    subtle: variantSubtle3,
    elevated: variantElevated,
    link: variantLink,
    primary: variantPrimary,
    secondary: variantSecondary,
    tertiary: variantTertiary
  }
});

// src/saas-ui/components/card.ts
var import_anatomy20 = require("@chakra-ui/anatomy");
var import_styled_system25 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle18, defineMultiStyleConfig: defineMultiStyleConfig20 } = (0, import_styled_system25.createMultiStyleConfigHelpers)(import_anatomy20.cardAnatomy.keys);
var $bg2 = (0, import_styled_system25.cssVar)("card-bg");
var $padding2 = (0, import_styled_system25.cssVar)("card-padding");
var $shadow = (0, import_styled_system25.cssVar)("card-shadow");
var $radius = (0, import_styled_system25.cssVar)("card-radius");
var $border = (0, import_styled_system25.cssVar)("card-border-width", "0");
var $borderColor = (0, import_styled_system25.cssVar)("card-border-color");
var baseStyle14 = definePartsStyle18(() => {
  return {
    container: {
      transitionProperty: "common",
      transitionDuration: "normal"
    }
  };
});
var variantElevated2 = definePartsStyle18((props) => {
  return {
    container: {
      [$bg2.variable]: "colors.white",
      [$borderColor.variable]: "colors.blackAlpha.200",
      [$border.variable]: "1px",
      [$shadow.variable]: "shadows.sm",
      _dark: {
        [$bg2.variable]: "colors.whiteAlpha.200",
        [$borderColor.variable]: "colors.whiteAlpha.50"
      },
      "&.chakra-linkbox:hover": {
        [$borderColor.variable]: "colors.blackAlpha.300",
        _dark: {
          [$borderColor.variable]: "colors.whiteAlpha.300"
        }
      }
    }
  };
});
var variantFilled2 = definePartsStyle18((props) => {
  const { colorScheme: c } = props;
  const color = c ? "white" : "inherit";
  return {
    container: {
      [$border.variable]: "0",
      [$shadow.variable]: "none",
      [$bg2.variable]: c ? `${c}.500` : `colors.blackAlpha.100`,
      color,
      "&.chakra-linkbox:hover": {
        [$bg2.variable]: c ? `${c}.600` : `colors.blackAlpha.200`
      },
      _dark: {
        [$bg2.variable]: c ? `${c}.500` : `colors.whiteAlpha.100`,
        "&.chakra-linkbox:hover": {
          [$bg2.variable]: c ? `${c}.600` : `colors.whiteAlpha.200`
        }
      }
    }
  };
});
var variantOutline5 = definePartsStyle18((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$border.variable]: "1px",
      [$shadow.variable]: "none",
      [$borderColor.variable]: c ? `${c}.500` : `colors.blackAlpha.200`,
      [$bg2.variable]: "transparent",
      "&.chakra-linkbox:hover": {
        [$borderColor.variable]: c ? `${c}.600` : `colors.blackAlpha.300`
      },
      _dark: {
        [$borderColor.variable]: c ? `${c}.500` : `colors.whiteAlpha.300`,
        "&.chakra-linkbox:hover": {
          [$borderColor.variable]: c ? `${c}.600` : `colors.whiteAlpha.400`
        }
      }
    }
  };
});
var sizes4 = {
  sm: definePartsStyle18({
    container: {
      [$radius.variable]: "radii.base",
      [$padding2.variable]: "space.3"
    }
  }),
  md: definePartsStyle18({
    container: {
      [$radius.variable]: "radii.md",
      [$padding2.variable]: "space.4"
    }
  }),
  lg: definePartsStyle18({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding2.variable]: "space.6"
    }
  })
};
var cardTheme = defineMultiStyleConfig20({
  defaultProps: {
    variant: "elevated"
  },
  baseStyle: baseStyle14,
  variants: {
    elevated: variantElevated2,
    outline: variantOutline5,
    filled: variantFilled2
  },
  sizes: sizes4
});

// src/saas-ui/components/checkbox.ts
var import_styled_system26 = require("@chakra-ui/styled-system");
var import_anatomy21 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle19, defineMultiStyleConfig: defineMultiStyleConfig21 } = (0, import_styled_system26.createMultiStyleConfigHelpers)(import_anatomy21.checkboxAnatomy.keys);
var baseStyle15 = definePartsStyle19((props) => {
  const { colorScheme } = props;
  return {
    control: {
      _checked: {
        borderColor: `${colorScheme}.500`,
        bg: `${colorScheme}.500`,
        color: "white"
      }
    }
  };
});
var checkboxTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle15,
  defaultProps: {
    colorScheme: "primary"
  }
});

// src/saas-ui/components/close-button.ts
var import_styled_system27 = require("@chakra-ui/styled-system");
var closeButtonTheme = (0, import_styled_system27.defineStyleConfig)({
  defaultProps: {
    size: "sm"
  }
});

// src/saas-ui/components/form.ts
var import_anatomy22 = require("@chakra-ui/anatomy");
var import_styled_system28 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle20, defineMultiStyleConfig: defineMultiStyleConfig22 } = (0, import_styled_system28.createMultiStyleConfigHelpers)(import_anatomy22.inputAnatomy.keys);
var $height2 = (0, import_styled_system28.cssVar)("input-height");
var $padding3 = (0, import_styled_system28.cssVar)("input-padding");
var $borderRadius2 = (0, import_styled_system28.cssVar)("input-border-radius");
var inputSizes = {
  sm: definePartsStyle20({
    field: {
      [$borderRadius2.variable]: "radii.md"
    },
    group: {
      [$borderRadius2.variable]: "radii.md"
    }
  }),
  md: definePartsStyle20({
    field: {
      [$padding3.variable]: "space.3",
      [$height2.variable]: "sizes.9"
    },
    group: {
      [$padding3.variable]: "space.3",
      [$height2.variable]: "sizes.9"
    }
  }),
  lg: definePartsStyle20({
    field: {
      [$padding3.variable]: "space.3",
      [$height2.variable]: "sizes.10"
    },
    group: {
      [$padding3.variable]: "space.3",
      [$height2.variable]: "sizes.10"
    }
  })
};
var outlineVariant = definePartsStyle20((props) => {
  return {
    field: {
      borderColor: "blackAlpha.300",
      _dark: {
        borderColor: "whiteAlpha.300"
      },
      _hover: {
        borderColor: "blackAlpha.400",
        _dark: {
          borderColor: "whiteAlpha.400"
        }
      }
    }
  };
});
var Input = defineMultiStyleConfig22({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  },
  sizes: inputSizes
});
var formLabelTheme = {
  variants: {
    horizontal: {
      mb: 0,
      marginStart: "0.5rem"
    }
  }
};
var inputTheme2 = Input;
var numberInputTheme = Input;
var pinInputTheme = (0, import_styled_system28.defineStyleConfig)({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  },
  sizes: inputSizes
});
var textareaTheme = (0, import_styled_system28.defineStyleConfig)({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: (0, import_styled_system28.defineStyle)(
      (props) => {
        var _a3, _b3;
        return (_b3 = (_a3 = inputTheme2.variants) == null ? void 0 : _a3.outline(props).field) != null ? _b3 : {};
      }
    )
  }
});
var nativeSelectTheme = (0, import_styled_system28.defineStyleConfig)(Input);

// src/saas-ui/components/select.ts
var import_styled_system29 = require("@chakra-ui/styled-system");
var _a2, _b2;
var selectTheme2 = (0, import_styled_system29.defineStyleConfig)({
  ...inputTheme,
  defaultProps: inputTheme2.defaultProps,
  variants: {
    outline: (0, import_styled_system29.defineStyle)((props) => {
      var _a3, _b3;
      return {
        ...(_b3 = (_a3 = inputTheme2.variants) == null ? void 0 : _a3.outline(props)) != null ? _b3 : {}
      };
    }),
    flushed: (0, import_styled_system29.defineStyle)((props) => {
      var _a3, _b3;
      return (_b3 = (_a3 = inputTheme.variants) == null ? void 0 : _a3.flushed(props)) != null ? _b3 : {};
    }),
    filled: (0, import_styled_system29.defineStyle)((props) => {
      var _a3, _b3;
      return (_b3 = (_a3 = inputTheme.variants) == null ? void 0 : _a3.filled(props)) != null ? _b3 : {};
    }),
    unstyled: (_b2 = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled) != null ? _b2 : {}
  },
  sizes: inputTheme2.sizes
});

// src/saas-ui/components/heading.ts
var import_styled_system30 = require("@chakra-ui/styled-system");
var headingTheme = (0, import_styled_system30.defineStyleConfig)({
  defaultProps: {
    size: "lg"
  }
});

// src/saas-ui/components/kbd.ts
var import_styled_system31 = require("@chakra-ui/styled-system");
var variantSolid5 = (0, import_styled_system31.defineStyle)((props) => {
  return {
    color: `blackAlpha.300`,
    _dark: {
      bg: `whiteAlpha.300`
    },
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: "1px",
    display: "inline-block",
    borderRadius: "3px",
    minW: "20px",
    textAlign: "center",
    mr: 1,
    ":last-child": {
      mr: 0
    }
  };
});
var kbdTheme = (0, import_styled_system31.defineStyleConfig)({
  defaultProps: {
    variant: "solid"
  },
  variants: {
    basic: {
      opacity: 0.6
    },
    solid: variantSolid5
  }
});

// src/saas-ui/components/menu.ts
var import_anatomy23 = require("@chakra-ui/anatomy");
var import_styled_system32 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle21, defineMultiStyleConfig: defineMultiStyleConfig23 } = (0, import_styled_system32.createMultiStyleConfigHelpers)(import_anatomy23.menuAnatomy.keys);
var baseStyle16 = definePartsStyle21((props) => {
  return {
    list: {
      borderWidth: 1,
      borderColor: `blackAlpha.200`,
      boxShadow: `lg`,
      _dark: {
        borderWidth: 0,
        borderColor: `whiteAlpha.300`,
        boxShadow: `dark-lg`
      }
    },
    divider: {
      borderColor: `blackAlpha.200`,
      _dark: {
        borderColor: `whiteAlpha.300`
      }
    },
    groupTitle: {
      mx: 3
    }
  };
});
var variantDialog = definePartsStyle21(() => {
  return {
    item: {
      px: 6
    },
    groupTitle: {
      color: "muted",
      px: 3
    }
  };
});
var menuTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle16,
  variants: {
    dialog: variantDialog
  }
});

// src/saas-ui/components/modal.ts
var import_anatomy24 = require("@chakra-ui/anatomy");
var import_styled_system33 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle22, defineMultiStyleConfig: defineMultiStyleConfig24 } = (0, import_styled_system33.createMultiStyleConfigHelpers)(import_anatomy24.modalAnatomy.keys);
var baseStyle17 = definePartsStyle22((props) => {
  return {
    closeButton: {
      top: 4,
      insetEnd: 4
    }
  };
});
var modalTheme = defineMultiStyleConfig24({ baseStyle: baseStyle17 });

// src/saas-ui/components/progress.ts
var import_styled_system34 = require("@chakra-ui/styled-system");
var import_anatomy25 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle23, defineMultiStyleConfig: defineMultiStyleConfig25 } = (0, import_styled_system34.createMultiStyleConfigHelpers)(import_anatomy25.progressAnatomy.keys);
var progressTheme = defineMultiStyleConfig25({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle23((props) => {
    const { colorScheme } = props;
    return {
      track: {
        borderRadius: "md"
      },
      filledTrack: {
        bg: `${colorScheme}.500`
      }
    };
  })
});

// src/saas-ui/components/radio.ts
var import_styled_system35 = require("@chakra-ui/styled-system");
var import_anatomy26 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle24, defineMultiStyleConfig: defineMultiStyleConfig26 } = (0, import_styled_system35.createMultiStyleConfigHelpers)(import_anatomy26.radioAnatomy.keys);
var radioTheme = defineMultiStyleConfig26({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle24((props) => {
    const { colorScheme } = props;
    return {
      control: {
        _checked: {
          borderColor: `${colorScheme}.500`,
          bg: `${colorScheme}.500`,
          color: "white"
        }
      }
    };
  })
});

// src/saas-ui/components/slider.ts
var import_styled_system36 = require("@chakra-ui/styled-system");
var import_anatomy27 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle25, defineMultiStyleConfig: defineMultiStyleConfig27 } = (0, import_styled_system36.createMultiStyleConfigHelpers)(import_anatomy27.sliderAnatomy.keys);
var sliderTheme = defineMultiStyleConfig27({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle25((props) => {
    const { colorScheme } = props;
    return {
      filledTrack: {
        bg: `${colorScheme}.500`
      }
    };
  })
});

// src/saas-ui/components/switch.ts
var import_anatomy28 = require("@chakra-ui/anatomy");
var import_styled_system37 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle26, defineMultiStyleConfig: defineMultiStyleConfig28 } = (0, import_styled_system37.createMultiStyleConfigHelpers)(import_anatomy28.switchAnatomy.keys);
var switchTheme = defineMultiStyleConfig28({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle26((props) => {
    const { colorScheme } = props;
    return {
      track: {
        _checked: {
          bg: `${colorScheme}.500`
        }
      }
    };
  })
});

// src/saas-ui/components/tooltip.ts
var import_styled_system38 = require("@chakra-ui/styled-system");
var import_theme_tools7 = require("@chakra-ui/theme-tools");
var $bg3 = (0, import_theme_tools7.cssVar)("tooltip-bg");
var $fg = (0, import_theme_tools7.cssVar)("tooltip-fg");
var $arrowBg = (0, import_theme_tools7.cssVar)("popper-arrow-bg");
var baseStyle18 = (0, import_styled_system38.defineStyle)((props) => {
  return {
    display: "flex",
    [$bg3.variable]: "colors.white",
    [$fg.variable]: "colors.blackAlpha.900",
    _dark: {
      [$bg3.variable]: "colors.gray.700",
      [$fg.variable]: "colors.whiteAlpha.900"
    },
    px: "8px",
    py: "2px",
    bg: [$bg3.reference],
    [$arrowBg.variable]: [$bg3.reference],
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "xs",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip",
    borderWidth: "1px"
  };
});
var tooltipTheme = (0, import_styled_system38.defineStyleConfig)({
  baseStyle: baseStyle18
});

// src/saas-ui/components/stepper.ts
var import_styled_system39 = require("@chakra-ui/styled-system");
var import_theme_tools8 = require("@chakra-ui/theme-tools");
var $size = (0, import_styled_system39.cssVar)("stepper-indicator-size");
var $accentColor = (0, import_styled_system39.cssVar)("stepper-accent-color");
var $verticalSeperatorOffset = (0, import_styled_system39.cssVar)("stepper-vertical-seperator-offset");
var { defineMultiStyleConfig: defineMultiStyleConfig29, definePartsStyle: definePartsStyle27 } = (0, import_styled_system39.createMultiStyleConfigHelpers)([
  // saas ui parts
  "container",
  "item",
  "content",
  // default parts
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]);
var baseStyle19 = definePartsStyle27(({ colorScheme: c }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  item: {
    w: "full"
  },
  content: {
    ["&[data-orientation=vertical]"]: {
      mt: 2,
      ms: $verticalSeperatorOffset.reference,
      borderLeftWidth: "1px",
      ps: 6
    }
  },
  stepper: {
    gap: "2",
    [$verticalSeperatorOffset.variable]: `10px`,
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.500`
    }
  },
  separator: {
    transitionProperty: "common",
    transitionDuration: "normal",
    ["&[data-orientation=horizontal]"]: {
      height: "1px"
    },
    ["&[data-orientation=vertical]"]: {
      width: "1px"
    },
    [".sui-steps__item .chakra-step &[data-orientation=vertical]"]: {
      display: "none"
    },
    [".sui-steps__item &[data-orientation=vertical]"]: {
      position: "static",
      minH: 4,
      height: "auto",
      ms: $verticalSeperatorOffset.reference
    }
  },
  step: {
    ["&[data-orientation=vertical]"]: {
      alignItems: "center"
    }
  }
}));
var variantOutline6 = definePartsStyle27((props) => ({}));
var variantSolid6 = definePartsStyle27((props) => ({
  indicator: {
    "&[data-status=active]": {
      borderWidth: "0",
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "0",
      bg: "blackAlpha.200",
      _dark: {
        bg: "whiteAlpha.200"
      }
    }
  }
}));
var variantSubtle4 = definePartsStyle27((props) => {
  const { theme: theme3, colorScheme: c } = props;
  return {
    stepper: {
      [$accentColor.variable]: `colors.${c}.100`
    },
    indicator: {
      "&[data-status=active]": {
        borderWidth: "0",
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: (0, import_theme_tools8.transparentize)(`${c}.200`, 0.16)(theme3)
        }
      },
      "&[data-status=complete]": {
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: (0, import_theme_tools8.transparentize)(`${c}.200`, 0.24)(theme3),
          color: `${c}.200`
        }
      },
      "&[data-status=incomplete]": {
        borderWidth: "0",
        bg: "blackAlpha.200",
        color: "blackAlpha.700",
        _dark: {
          bg: "whiteAlpha.200",
          color: "whiteAlpha.600"
        }
      }
    }
  };
});
var stepperTheme = defineMultiStyleConfig29({
  defaultProps: {
    variant: "outline",
    colorScheme: "primary",
    size: "md"
  },
  baseStyle: baseStyle19,
  variants: {
    outline: variantOutline6,
    solid: variantSolid6,
    subtle: variantSubtle4
  },
  sizes: {
    xs: definePartsStyle27({
      stepper: {
        [$size.variable]: "sizes.4",
        [$verticalSeperatorOffset.variable]: `7px`
      }
    }),
    sm: definePartsStyle27({
      stepper: {
        [$size.variable]: "sizes.6",
        [$verticalSeperatorOffset.variable]: `11px`
      }
    }),
    md: definePartsStyle27({
      stepper: {
        [$size.variable]: "sizes.7",
        [$verticalSeperatorOffset.variable]: `14px`
      }
    }),
    lg: definePartsStyle27({
      stepper: {
        [$size.variable]: "sizes.8",
        [$verticalSeperatorOffset.variable]: `16px`
      }
    })
  }
});

// src/saas-ui/components/empty-state.ts
var import_styled_system40 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle28, defineMultiStyleConfig: defineMultiStyleConfig30 } = (0, import_styled_system40.createMultiStyleConfigHelpers)(emptyStateAnatomy.keys);
var baseStyle20 = definePartsStyle28((props) => {
  const { colorScheme: c } = props;
  return {
    icon: {
      boxSize: [10, null, 12],
      color: `${c}.500`,
      _dark: {
        color: `${c}.500`
      }
    }
  };
});
var emptyStateTheme2 = defineMultiStyleConfig30({
  baseStyle: baseStyle20
});

// src/saas-ui/components/nprogress.ts
var baseStyle21 = definePartsStyle9((props) => {
  const { colorScheme: c } = props;
  return {
    bar: {
      bg: `${c}.500`,
      _dark: {
        bg: `${c}.500`
      }
    }
  };
});
var nprogressTheme2 = defineMultiStyleConfig9({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: baseStyle21
});

// src/saas-ui/components/property.ts
var import_styled_system41 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle29, defineMultiStyleConfig: defineMultiStyleConfig31 } = (0, import_styled_system41.createMultiStyleConfigHelpers)(propertyAnatomy.keys);
var propertyTheme2 = defineMultiStyleConfig31({
  baseStyle: {
    label: {
      color: "muted",
      _dark: {
        color: "muted"
      }
    }
  }
});

// src/saas-ui/components/index.ts
var components2 = {
  Alert: alertTheme,
  Badge: badgeTheme,
  Button: buttonTheme,
  Card: cardTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Heading: headingTheme,
  Kbd: kbdTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Slider: sliderTheme,
  Switch: switchTheme,
  Stepper: stepperTheme,
  Tooltip: tooltipTheme,
  Input: inputTheme2,
  PinInput: pinInputTheme,
  FormLabel: formLabelTheme,
  NumberInput: numberInputTheme,
  Select: nativeSelectTheme,
  Textarea: textareaTheme,
  SuiEmptyState: emptyStateTheme2,
  SuiNProgress: nprogressTheme2,
  SuiProperty: propertyTheme2,
  SuiSelect: selectTheme2
};

// src/saas-ui/theme.ts
var theme2 = (0, import_react3.extendTheme)(
  {
    ...foundations,
    styles,
    components: components2
  },
  baseTheme2
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  baseTheme,
  theme
});
//# sourceMappingURL=index.js.map