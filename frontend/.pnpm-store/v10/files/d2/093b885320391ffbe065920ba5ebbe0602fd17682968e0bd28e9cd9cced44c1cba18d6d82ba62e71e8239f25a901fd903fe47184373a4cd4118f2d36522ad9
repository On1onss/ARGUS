'use client'
import {
  components,
  inputTheme,
  nprogressTheme
} from "./chunk-2FYJNEWC.mjs";
import {
  appShellAnatomy,
  bannerAnatomy,
  emptyStateAnatomy,
  hotkeysAnantomy,
  loadingOverlayAnatomy,
  navGroupAnatomy,
  navItemAnatomy,
  personaAnatomy,
  propertyAnatomy,
  searchInputAnatomy,
  selectAnatomy,
  sidebarAnatomy,
  structuredListAnatomy,
  timelineAnatomy
} from "./chunk-XTTLL5ZK.mjs";

// src/saas-ui/theme.ts
import { extendTheme as extendTheme2 } from "@chakra-ui/react";

// src/base/theme.ts
import { theme, extendTheme } from "@chakra-ui/react";

// src/base/components/app-shell.ts
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(appShellAnatomy.keys);
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
import { transparentize } from "@chakra-ui/theme-tools";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers2 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = createMultiStyleConfigHelpers2(bannerAnatomy.keys);
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
      _dark: { bg: transparentize(`${c}.200`, 0.16)(theme3) }
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers3 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = createMultiStyleConfigHelpers3(emptyStateAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers4 } from "@chakra-ui/styled-system";
import { formAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle4, defineMultiStyleConfig: defineMultiStyleConfig4 } = createMultiStyleConfigHelpers4(formAnatomy.keys);
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
import { defineStyleConfig } from "@chakra-ui/styled-system";
var formLayoutTheme = defineStyleConfig({
  defaultProps: {
    /* @ts-expect-error */
    spacing: 4
    // Chakra UI officially doesn't support custom default props yet, but this works.
  }
});

// src/base/components/form-legend.ts
import { defineStyleConfig as defineStyleConfig2 } from "@chakra-ui/styled-system";
var formLegendTheme = defineStyleConfig2({
  baseStyle: {
    fontWeight: "semibold",
    mb: 4
  }
});

// src/base/components/hotkeys.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers5 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = createMultiStyleConfigHelpers5(hotkeysAnantomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers6 } from "@chakra-ui/styled-system";
var { defineMultiStyleConfig: defineMultiStyleConfig6, definePartsStyle: definePartsStyle6 } = createMultiStyleConfigHelpers6(loadingOverlayAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers7 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = createMultiStyleConfigHelpers7(navGroupAnatomy.keys);
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
import { transparentize as transparentize2 } from "@chakra-ui/theme-tools";
import { theme as baseTheme } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers8 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers8(navItemAnatomy.keys);
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
    bg: transparentize2(`${c}.500`, 0.3)(theme3),
    fontWeight: "semibold",
    color: `${c}.600`,
    _dark: {
      bg: transparentize2(`${c}.500`, 0.3)(theme3),
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
      link: (_a = baseTheme.components.Button.sizes) == null ? void 0 : _a.xs,
      icon: {
        me: 1,
        fontSize: "xs"
      }
    },
    sm: {
      link: (_b = baseTheme.components.Button.sizes) == null ? void 0 : _b.sm,
      icon: {
        me: 2,
        fontSize: "sm"
      }
    },
    md: {
      link: (_c = baseTheme.components.Button.sizes) == null ? void 0 : _c.md,
      icon: {
        me: 2,
        fontSize: "md"
      }
    },
    lg: {
      link: (_d = baseTheme.components.Button.sizes) == null ? void 0 : _d.lg,
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

// src/base/components/persona.ts
import {
  createMultiStyleConfigHelpers as createMultiStyleConfigHelpers9,
  defineStyle
} from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = createMultiStyleConfigHelpers9(personaAnatomy.keys);
var baseStyleLabel = defineStyle((props) => {
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
var baseStyle7 = definePartsStyle9((props) => {
  return {
    details: {
      minW: 0
    },
    secondaryLabel: baseStyleLabel(props),
    tertiaryLabel: baseStyleLabel(props)
  };
});
var sizes = {
  "2xs": definePartsStyle9({
    details: { ms: 2 },
    label: {
      fontSize: "xs"
    },
    secondaryLabel: { display: "none" },
    tertiaryLabel: { display: "none" }
  }),
  xs: definePartsStyle9({
    details: { ms: 2 },
    label: {
      fontSize: "md"
    },
    secondaryLabel: { display: "none" },
    tertiaryLabel: { display: "none" }
  }),
  sm: definePartsStyle9({
    details: { ms: 2 },
    label: { fontSize: "md" },
    secondaryLabel: { fontSize: "sm" },
    tertiaryLabel: { display: "none" }
  }),
  md: definePartsStyle9({
    details: { ms: 2 },
    label: {
      fontSize: "md"
    },
    secondaryLabel: {
      fontSize: "sm"
    },
    tertiaryLabel: { display: "none" }
  }),
  lg: definePartsStyle9({
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
  xl: definePartsStyle9({
    details: { ms: 3 },
    label: {
      fontSize: "xl"
    },
    secondaryLabel: {
      fontSize: "md"
    },
    tertiaryLabel: { fontSize: "md" }
  }),
  "2xl": definePartsStyle9({
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
var personaTheme = defineMultiStyleConfig9({
  defaultProps: {
    size: "md"
  },
  baseStyle: baseStyle7,
  sizes
});

// src/base/components/property.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers10 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = createMultiStyleConfigHelpers10(propertyAnatomy.keys);
var propertyTheme = defineMultiStyleConfig10({
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers11 } from "@chakra-ui/styled-system";
var { defineMultiStyleConfig: defineMultiStyleConfig11 } = createMultiStyleConfigHelpers11(
  searchInputAnatomy.keys
);
var searchInputTheme = defineMultiStyleConfig11({
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers12 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig12 } = createMultiStyleConfigHelpers12(sidebarAnatomy.keys);
var baseStyle8 = definePartsStyle11((props) => {
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
var variantDefault = definePartsStyle11((props) => {
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
var variantCondensed = definePartsStyle11((props) => {
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
var sidebarTheme = defineMultiStyleConfig12({
  defaultProps: {
    variant: "default"
  },
  baseStyle: baseStyle8,
  variants: {
    default: variantDefault,
    compact: variantCondensed
  }
});

// src/base/components/select.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers13 } from "@chakra-ui/styled-system";
var { defineMultiStyleConfig: defineMultiStyleConfig13 } = createMultiStyleConfigHelpers13(
  selectAnatomy.keys
);
var selectTheme = defineMultiStyleConfig13({
  defaultProps: inputTheme.defaultProps,
  baseStyle: inputTheme.baseStyle,
  sizes: inputTheme.sizes,
  variants: inputTheme.variants
});

// src/base/components/structured-list.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers14 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle12, defineMultiStyleConfig: defineMultiStyleConfig14 } = createMultiStyleConfigHelpers14(structuredListAnatomy.keys);
var baseStyle9 = definePartsStyle12((props) => {
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
var structuredListTheme = defineMultiStyleConfig14({
  defaultProps: {
    size: "md"
  },
  baseStyle: baseStyle9,
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
import {
  createMultiStyleConfigHelpers as createMultiStyleConfigHelpers15,
  cssVar
} from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle13, defineMultiStyleConfig: defineMultiStyleConfig15 } = createMultiStyleConfigHelpers15(timelineAnatomy.keys);
var $rowStart = cssVar("timeline-row-start", "minmax(0,1fr)");
var $rowEnd = cssVar("timeline-row-end", "minmax(0,1fr)");
var $colStart = cssVar("timeline-col-start", "minmax(0,1fr)");
var $colEnd = cssVar("timeline-col-end", "minmax(0,1fr)");
var baseStyle10 = definePartsStyle13((props) => {
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
var variantSolid3 = definePartsStyle13((props) => {
  return {
    icon: {}
  };
});
var variantOutline = definePartsStyle13((props) => {
  return {
    dot: {
      bg: "transparent",
      borderColor: "currentColor",
      borderWidth: "2px"
    }
  };
});
var timelineTheme = defineMultiStyleConfig15({
  defaultProps: { variant: "solid", size: "sm" },
  baseStyle: baseStyle10,
  variants: {
    solid: variantSolid3,
    outline: variantOutline
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
import { defineStyleConfig as defineStyleConfig3 } from "@chakra-ui/styled-system";
var iconBadgeTheme = defineStyleConfig3({
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
import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers16, cssVar as cssVar2 } from "@chakra-ui/styled-system";
var parts = anatomy("navbar").parts(
  "container",
  "inner",
  "brand",
  "content",
  "item",
  "link"
);
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers16(parts.keys);
var $bg = cssVar2("navbar-bg");
var $color = cssVar2("navbar-text-color", "currentColor");
var $linkBg = cssVar2("navbar-link-bg", "transparent");
var accessibleColors = ["yellow", "cyan"];
var navbarTheme = defineMultiStyleConfig16({
  baseStyle: definePartsStyle14(({ colorScheme }) => {
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
var components2 = {
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
var baseTheme2 = extendTheme({
  colors: {
    primary: theme.colors.blue
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
  components: components2
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
var sizes2 = {
  container: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
  }
};
var sizes_default = sizes2;

// src/saas-ui/foundations/shadows.ts
import { transparentize as transparentize3 } from "@chakra-ui/theme-tools";
var shadows = {
  outline: `0 0 0 2px ${transparentize3(colors_default.primary[500], 0.6)({ colors: colors_default })}`
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

// src/saas-ui/theme.ts
var theme2 = extendTheme2(
  {
    ...foundations,
    styles,
    components
  },
  baseTheme2
);
export {
  baseTheme2 as baseTheme,
  theme2 as theme
};
//# sourceMappingURL=index.mjs.map