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

// src/saas-ui/components/index.ts
var components_exports = {};
__export(components_exports, {
  Alert: () => alertTheme,
  Badge: () => badgeTheme,
  Button: () => buttonTheme,
  Card: () => cardTheme,
  Checkbox: () => checkboxTheme,
  CloseButton: () => closeButtonTheme,
  FormLabel: () => formLabelTheme,
  Heading: () => headingTheme,
  Input: () => inputTheme,
  Kbd: () => kbdTheme,
  Menu: () => menuTheme,
  Modal: () => modalTheme,
  NumberInput: () => numberInputTheme,
  PinInput: () => pinInputTheme,
  Progress: () => progressTheme,
  Radio: () => radioTheme,
  Select: () => nativeSelectTheme,
  Slider: () => sliderTheme,
  SuiEmptyState: () => emptyStateTheme,
  SuiNProgress: () => nprogressTheme2,
  SuiProperty: () => propertyTheme,
  SuiSelect: () => selectTheme,
  SuiStepper: () => stepperTheme,
  Switch: () => switchTheme,
  Textarea: () => textareaTheme,
  Tooltip: () => tooltipTheme,
  components: () => components
});
module.exports = __toCommonJS(components_exports);

// src/saas-ui/components/alert.ts
var import_anatomy = require("@chakra-ui/anatomy");
var import_styled_system = require("@chakra-ui/styled-system");
var { definePartsStyle, defineMultiStyleConfig } = (0, import_styled_system.createMultiStyleConfigHelpers)(import_anatomy.alertAnatomy.keys);
var variantSnackbar = definePartsStyle((props) => {
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
var baseStyle = definePartsStyle({
  container: {
    borderRadius: "md"
  }
});
var alertTheme = defineMultiStyleConfig({
  defaultProps: {
    size: "sm"
  },
  baseStyle,
  variants: {
    snackbar: variantSnackbar
  }
});

// src/saas-ui/components/badge.ts
var import_styled_system2 = require("@chakra-ui/styled-system");
var import_theme_tools = require("@chakra-ui/theme-tools");
var vars = (0, import_styled_system2.defineCssVars)("badge", ["bg", "color", "shadow", "border"]);
var variantOutline = (0, import_styled_system2.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
  const darkColor = (0, import_theme_tools.transparentize)(`${c}.200`, 0.8)(theme);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var badgeTheme = (0, import_styled_system2.defineStyleConfig)({
  variants: {
    outline: (props) => {
      const styles = variantOutline(props);
      return {
        ...styles,
        _dark: {
          ...styles == null ? void 0 : styles._dark,
          [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.border.reference}`,
          [vars.color.variable]: `colors.${props.colorScheme}.200`,
          [vars.border.variable]: `colors.${props.colorScheme}.500`
        }
      };
    },
    ghost: (props) => {
      const styles = variantOutline(props);
      return {
        ...styles,
        shadow: "none",
        _dark: {
          ...styles == null ? void 0 : styles._dark,
          [vars.color.variable]: `colors.${props.colorScheme}.200`
        }
      };
    }
  }
});

// src/saas-ui/components/button.ts
var import_styled_system3 = require("@chakra-ui/styled-system");
var import_theme_tools2 = require("@chakra-ui/theme-tools");
var getStateColors = (props) => {
  const { colorScheme: c } = props;
  if (c === "gray") {
    return {
      base: (0, import_theme_tools2.mode)("gray.100", "whiteAlpha.300")(props),
      hover: (0, import_theme_tools2.mode)("gray.200", "whiteAlpha.400")(props),
      active: (0, import_theme_tools2.mode)("gray.300", "whiteAlpha.500")(props)
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
    base: (0, import_theme_tools2.mode)(`${c}.500`, `${c}.500`)(props),
    hover: (0, import_theme_tools2.mode)(`${c}.600`, `${c}.600`)(props),
    active: (0, import_theme_tools2.mode)(`${c}.700`, `${c}.700`)(props)
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
var variantSolid = (0, import_styled_system3.defineStyle)((props) => {
  var _a2;
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
    color = c === "gray" ? (0, import_theme_tools2.mode)("black", "white")(props) : "white",
    bg = base,
    hoverBg = hover,
    activeBg = active
  } = (_a2 = accessibleColorMap[c]) != null ? _a2 : {};
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
var variantElevated = (0, import_styled_system3.defineStyle)((props) => {
  return {
    shadow: "md",
    ...variantSolid(props)
  };
});
var variantOutline2 = (0, import_styled_system3.defineStyle)((props) => {
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
var variantGhost = (0, import_styled_system3.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
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
  const darkHoverBg = (0, import_theme_tools2.transparentize)(`${c}.200`, 0.12)(theme);
  const darkActiveBg = (0, import_theme_tools2.transparentize)(`${c}.200`, 0.24)(theme);
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
var variantSubtle = (0, import_styled_system3.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
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
  const bgColor = c === "white" ? "white" : (0, import_theme_tools2.mode)(`${c}.500`, `${c}.200`)(props);
  const bg = (0, import_theme_tools2.transparentize)(bgColor, 0.1)(theme);
  const hoverBg = (0, import_theme_tools2.transparentize)(bgColor, 0.16)(theme);
  const activeBg = (0, import_theme_tools2.transparentize)(bgColor, 0.24)(theme);
  return {
    color: c === "white" ? "white" : (0, import_theme_tools2.mode)(`${c}.600`, `${c}.200`)(props),
    bg,
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    }
  };
});
var variantLink = (0, import_styled_system3.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: c === "white" ? "white" : (0, import_theme_tools2.mode)(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: c === "white" ? "whiteAlpha.800" : (0, import_theme_tools2.mode)(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantPrimary = (0, import_styled_system3.defineStyle)((props) => {
  let { colorScheme } = props;
  if (colorScheme === "gray") {
    colorScheme = "primary";
  }
  return variantSolid({
    ...props,
    variant: "solid",
    colorScheme
  });
});
var variantSecondary = (0, import_styled_system3.defineStyle)((props) => {
  return variantSolid({
    ...props,
    variant: "solid"
  });
});
var variantTertiary = (0, import_styled_system3.defineStyle)((props) => {
  return variantOutline2({
    ...props,
    variant: "outline"
  });
});
var buttonTheme = (0, import_styled_system3.defineStyleConfig)({
  defaultProps: {
    size: "sm"
  },
  variants: {
    solid: variantSolid,
    ghost: variantGhost,
    outline: variantOutline2,
    subtle: variantSubtle,
    elevated: variantElevated,
    link: variantLink,
    primary: variantPrimary,
    secondary: variantSecondary,
    tertiary: variantTertiary
  }
});

// src/saas-ui/components/card.ts
var import_anatomy2 = require("@chakra-ui/anatomy");
var import_styled_system4 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = (0, import_styled_system4.createMultiStyleConfigHelpers)(import_anatomy2.cardAnatomy.keys);
var $bg = (0, import_styled_system4.cssVar)("card-bg");
var $padding = (0, import_styled_system4.cssVar)("card-padding");
var $shadow = (0, import_styled_system4.cssVar)("card-shadow");
var $radius = (0, import_styled_system4.cssVar)("card-radius");
var $border = (0, import_styled_system4.cssVar)("card-border-width", "0");
var $borderColor = (0, import_styled_system4.cssVar)("card-border-color");
var baseStyle2 = definePartsStyle2(() => {
  return {
    container: {
      transitionProperty: "common",
      transitionDuration: "normal"
    }
  };
});
var variantElevated2 = definePartsStyle2((props) => {
  return {
    container: {
      [$bg.variable]: "colors.white",
      [$borderColor.variable]: "colors.blackAlpha.200",
      [$border.variable]: "1px",
      [$shadow.variable]: "shadows.sm",
      _dark: {
        [$bg.variable]: "colors.whiteAlpha.200",
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
var variantFilled = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const color = c ? "white" : "inherit";
  return {
    container: {
      [$border.variable]: "0",
      [$shadow.variable]: "none",
      [$bg.variable]: c ? `${c}.500` : `colors.blackAlpha.100`,
      color,
      "&.chakra-linkbox:hover": {
        [$bg.variable]: c ? `${c}.600` : `colors.blackAlpha.200`
      },
      _dark: {
        [$bg.variable]: c ? `${c}.500` : `colors.whiteAlpha.100`,
        "&.chakra-linkbox:hover": {
          [$bg.variable]: c ? `${c}.600` : `colors.whiteAlpha.200`
        }
      }
    }
  };
});
var variantOutline3 = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$border.variable]: "1px",
      [$shadow.variable]: "none",
      [$borderColor.variable]: c ? `${c}.500` : `colors.blackAlpha.200`,
      [$bg.variable]: "transparent",
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
var sizes = {
  sm: definePartsStyle2({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3"
    }
  }),
  md: definePartsStyle2({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.4"
    }
  }),
  lg: definePartsStyle2({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.6"
    }
  })
};
var cardTheme = defineMultiStyleConfig2({
  defaultProps: {
    variant: "elevated"
  },
  baseStyle: baseStyle2,
  variants: {
    elevated: variantElevated2,
    outline: variantOutline3,
    filled: variantFilled
  },
  sizes
});

// src/saas-ui/components/checkbox.ts
var import_styled_system5 = require("@chakra-ui/styled-system");
var import_anatomy3 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = (0, import_styled_system5.createMultiStyleConfigHelpers)(import_anatomy3.checkboxAnatomy.keys);
var baseStyle3 = definePartsStyle3((props) => {
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
var checkboxTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  defaultProps: {
    colorScheme: "primary"
  }
});

// src/saas-ui/components/close-button.ts
var import_styled_system6 = require("@chakra-ui/styled-system");
var closeButtonTheme = (0, import_styled_system6.defineStyleConfig)({
  defaultProps: {
    size: "sm"
  }
});

// src/saas-ui/components/form.ts
var import_anatomy4 = require("@chakra-ui/anatomy");
var import_styled_system7 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle4, defineMultiStyleConfig: defineMultiStyleConfig4 } = (0, import_styled_system7.createMultiStyleConfigHelpers)(import_anatomy4.inputAnatomy.keys);
var $height = (0, import_styled_system7.cssVar)("input-height");
var $padding2 = (0, import_styled_system7.cssVar)("input-padding");
var $borderRadius = (0, import_styled_system7.cssVar)("input-border-radius");
var inputSizes = {
  sm: definePartsStyle4({
    field: {
      [$borderRadius.variable]: "radii.md"
    },
    group: {
      [$borderRadius.variable]: "radii.md"
    }
  }),
  md: definePartsStyle4({
    field: {
      [$padding2.variable]: "space.3",
      [$height.variable]: "sizes.9"
    },
    group: {
      [$padding2.variable]: "space.3",
      [$height.variable]: "sizes.9"
    }
  }),
  lg: definePartsStyle4({
    field: {
      [$padding2.variable]: "space.3",
      [$height.variable]: "sizes.10"
    },
    group: {
      [$padding2.variable]: "space.3",
      [$height.variable]: "sizes.10"
    }
  })
};
var outlineVariant = definePartsStyle4((props) => {
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
var Input = defineMultiStyleConfig4({
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
var inputTheme = Input;
var numberInputTheme = Input;
var pinInputTheme = (0, import_styled_system7.defineStyleConfig)({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  },
  sizes: inputSizes
});
var textareaTheme = (0, import_styled_system7.defineStyleConfig)({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: (0, import_styled_system7.defineStyle)(
      (props) => {
        var _a2, _b2;
        return (_b2 = (_a2 = inputTheme.variants) == null ? void 0 : _a2.outline(props).field) != null ? _b2 : {};
      }
    )
  }
});
var nativeSelectTheme = (0, import_styled_system7.defineStyleConfig)(Input);

// src/saas-ui/components/select.ts
var import_styled_system9 = require("@chakra-ui/styled-system");

// ../../node_modules/@chakra-ui/theme/dist/esm/components/input.mjs
var import_anatomy5 = require("@chakra-ui/anatomy");
var import_styled_system8 = require("@chakra-ui/styled-system");
var import_theme_tools3 = require("@chakra-ui/theme-tools");
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = (0, import_styled_system8.createMultiStyleConfigHelpers)(import_anatomy5.inputAnatomy.keys);
var $height2 = (0, import_styled_system8.cssVar)("input-height");
var $fontSize = (0, import_styled_system8.cssVar)("input-font-size");
var $padding3 = (0, import_styled_system8.cssVar)("input-padding");
var $borderRadius2 = (0, import_styled_system8.cssVar)("input-border-radius");
var baseStyle4 = definePartsStyle5({
  addon: {
    height: $height2.reference,
    fontSize: $fontSize.reference,
    px: $padding3.reference,
    borderRadius: $borderRadius2.reference
  },
  field: {
    width: "100%",
    height: $height2.reference,
    fontSize: $fontSize.reference,
    px: $padding3.reference,
    borderRadius: $borderRadius2.reference,
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
  lg: (0, import_styled_system8.defineStyle)({
    [$fontSize.variable]: "fontSizes.lg",
    [$padding3.variable]: "space.4",
    [$borderRadius2.variable]: "radii.md",
    [$height2.variable]: "sizes.12"
  }),
  md: (0, import_styled_system8.defineStyle)({
    [$fontSize.variable]: "fontSizes.md",
    [$padding3.variable]: "space.4",
    [$borderRadius2.variable]: "radii.md",
    [$height2.variable]: "sizes.10"
  }),
  sm: (0, import_styled_system8.defineStyle)({
    [$fontSize.variable]: "fontSizes.sm",
    [$padding3.variable]: "space.3",
    [$borderRadius2.variable]: "radii.sm",
    [$height2.variable]: "sizes.8"
  }),
  xs: (0, import_styled_system8.defineStyle)({
    [$fontSize.variable]: "fontSizes.xs",
    [$padding3.variable]: "space.2",
    [$borderRadius2.variable]: "radii.sm",
    [$height2.variable]: "sizes.6"
  })
};
var sizes2 = {
  lg: definePartsStyle5({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle5({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle5({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle5({
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
var variantOutline4 = definePartsStyle5((props) => {
  const { theme } = props;
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
        borderColor: (0, import_theme_tools3.getColor)(theme, ec),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(theme, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: (0, import_theme_tools3.getColor)(theme, fc),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(theme, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: (0, import_theme_tools3.mode)("inherit", "whiteAlpha.50")(props),
      bg: (0, import_theme_tools3.mode)("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled2 = definePartsStyle5((props) => {
  const { theme } = props;
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
        borderColor: (0, import_theme_tools3.getColor)(theme, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: (0, import_theme_tools3.getColor)(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools3.mode)("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle5((props) => {
  const { theme } = props;
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
        borderColor: (0, import_theme_tools3.getColor)(theme, ec),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools3.getColor)(theme, ec)}`
      },
      _focusVisible: {
        borderColor: (0, import_theme_tools3.getColor)(theme, fc),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools3.getColor)(theme, fc)}`
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
var variantUnstyled = definePartsStyle5({
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
  outline: variantOutline4,
  filled: variantFilled2,
  flushed: variantFlushed,
  unstyled: variantUnstyled
};
var inputTheme2 = defineMultiStyleConfig5({
  baseStyle: baseStyle4,
  sizes: sizes2,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// src/saas-ui/components/select.ts
var _a, _b;
var selectTheme = (0, import_styled_system9.defineStyleConfig)({
  ...inputTheme2,
  defaultProps: inputTheme.defaultProps,
  variants: {
    outline: (0, import_styled_system9.defineStyle)((props) => {
      var _a2, _b2;
      return {
        ...(_b2 = (_a2 = inputTheme.variants) == null ? void 0 : _a2.outline(props)) != null ? _b2 : {}
      };
    }),
    flushed: (0, import_styled_system9.defineStyle)((props) => {
      var _a2, _b2;
      return (_b2 = (_a2 = inputTheme2.variants) == null ? void 0 : _a2.flushed(props)) != null ? _b2 : {};
    }),
    filled: (0, import_styled_system9.defineStyle)((props) => {
      var _a2, _b2;
      return (_b2 = (_a2 = inputTheme2.variants) == null ? void 0 : _a2.filled(props)) != null ? _b2 : {};
    }),
    unstyled: (_b = (_a = inputTheme2.variants) == null ? void 0 : _a.unstyled) != null ? _b : {}
  },
  sizes: inputTheme.sizes
});

// src/saas-ui/components/heading.ts
var import_styled_system10 = require("@chakra-ui/styled-system");
var headingTheme = (0, import_styled_system10.defineStyleConfig)({
  defaultProps: {
    size: "lg"
  }
});

// src/saas-ui/components/kbd.ts
var import_styled_system11 = require("@chakra-ui/styled-system");
var variantSolid2 = (0, import_styled_system11.defineStyle)((props) => {
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
var kbdTheme = (0, import_styled_system11.defineStyleConfig)({
  defaultProps: {
    variant: "solid"
  },
  variants: {
    basic: {
      opacity: 0.6
    },
    solid: variantSolid2
  }
});

// src/saas-ui/components/menu.ts
var import_anatomy6 = require("@chakra-ui/anatomy");
var import_styled_system12 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = (0, import_styled_system12.createMultiStyleConfigHelpers)(import_anatomy6.menuAnatomy.keys);
var baseStyle5 = definePartsStyle6((props) => {
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
var variantDialog = definePartsStyle6(() => {
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
var menuTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle5,
  variants: {
    dialog: variantDialog
  }
});

// src/saas-ui/components/modal.ts
var import_anatomy7 = require("@chakra-ui/anatomy");
var import_styled_system13 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = (0, import_styled_system13.createMultiStyleConfigHelpers)(import_anatomy7.modalAnatomy.keys);
var baseStyle6 = definePartsStyle7((props) => {
  return {
    closeButton: {
      top: 4,
      insetEnd: 4
    }
  };
});
var modalTheme = defineMultiStyleConfig7({ baseStyle: baseStyle6 });

// src/saas-ui/components/progress.ts
var import_styled_system14 = require("@chakra-ui/styled-system");
var import_anatomy8 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = (0, import_styled_system14.createMultiStyleConfigHelpers)(import_anatomy8.progressAnatomy.keys);
var progressTheme = defineMultiStyleConfig8({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle8((props) => {
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
var import_styled_system15 = require("@chakra-ui/styled-system");
var import_anatomy9 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = (0, import_styled_system15.createMultiStyleConfigHelpers)(import_anatomy9.radioAnatomy.keys);
var radioTheme = defineMultiStyleConfig9({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle9((props) => {
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
var import_styled_system16 = require("@chakra-ui/styled-system");
var import_anatomy10 = require("@chakra-ui/anatomy");
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = (0, import_styled_system16.createMultiStyleConfigHelpers)(import_anatomy10.sliderAnatomy.keys);
var sliderTheme = defineMultiStyleConfig10({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle10((props) => {
    const { colorScheme } = props;
    return {
      filledTrack: {
        bg: `${colorScheme}.500`
      }
    };
  })
});

// src/saas-ui/components/switch.ts
var import_anatomy11 = require("@chakra-ui/anatomy");
var import_styled_system17 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig11 } = (0, import_styled_system17.createMultiStyleConfigHelpers)(import_anatomy11.switchAnatomy.keys);
var switchTheme = defineMultiStyleConfig11({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: definePartsStyle11((props) => {
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
var import_styled_system18 = require("@chakra-ui/styled-system");
var import_theme_tools4 = require("@chakra-ui/theme-tools");
var $bg2 = (0, import_theme_tools4.cssVar)("tooltip-bg");
var $fg = (0, import_theme_tools4.cssVar)("tooltip-fg");
var $arrowBg = (0, import_theme_tools4.cssVar)("popper-arrow-bg");
var baseStyle7 = (0, import_styled_system18.defineStyle)((props) => {
  return {
    display: "flex",
    [$bg2.variable]: "colors.white",
    [$fg.variable]: "colors.blackAlpha.900",
    _dark: {
      [$bg2.variable]: "colors.gray.700",
      [$fg.variable]: "colors.whiteAlpha.900"
    },
    px: "8px",
    py: "2px",
    bg: [$bg2.reference],
    [$arrowBg.variable]: [$bg2.reference],
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "xs",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip",
    borderWidth: "1px"
  };
});
var tooltipTheme = (0, import_styled_system18.defineStyleConfig)({
  baseStyle: baseStyle7
});

// src/saas-ui/components/stepper.ts
var import_styled_system19 = require("@chakra-ui/styled-system");
var import_theme_tools5 = require("@chakra-ui/theme-tools");
var $size = (0, import_styled_system19.cssVar)("stepper-indicator-size");
var $accentColor = (0, import_styled_system19.cssVar)("stepper-accent-color");
var $verticalSeperatorOffset = (0, import_styled_system19.cssVar)("stepper-vertical-seperator-offset");
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = (0, import_styled_system19.createMultiStyleConfigHelpers)([
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
var baseStyle8 = definePartsStyle12(({ colorScheme: c }) => ({
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
var variantOutline5 = definePartsStyle12((props) => ({}));
var variantSolid3 = definePartsStyle12((props) => ({
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
var variantSubtle2 = definePartsStyle12((props) => {
  const { theme, colorScheme: c } = props;
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
          bg: (0, import_theme_tools5.transparentize)(`${c}.200`, 0.16)(theme)
        }
      },
      "&[data-status=complete]": {
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: (0, import_theme_tools5.transparentize)(`${c}.200`, 0.24)(theme),
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
var stepperTheme = defineMultiStyleConfig12({
  defaultProps: {
    variant: "outline",
    colorScheme: "primary",
    size: "md"
  },
  baseStyle: baseStyle8,
  variants: {
    outline: variantOutline5,
    solid: variantSolid3,
    subtle: variantSubtle2
  },
  sizes: {
    xs: definePartsStyle12({
      stepper: {
        [$size.variable]: "sizes.4",
        [$verticalSeperatorOffset.variable]: `7px`
      }
    }),
    sm: definePartsStyle12({
      stepper: {
        [$size.variable]: "sizes.6",
        [$verticalSeperatorOffset.variable]: `11px`
      }
    }),
    md: definePartsStyle12({
      stepper: {
        [$size.variable]: "sizes.7",
        [$verticalSeperatorOffset.variable]: `14px`
      }
    }),
    lg: definePartsStyle12({
      stepper: {
        [$size.variable]: "sizes.8",
        [$verticalSeperatorOffset.variable]: `16px`
      }
    })
  }
});

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
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
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
    parts,
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

// src/saas-ui/components/empty-state.ts
var import_styled_system20 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle13, defineMultiStyleConfig: defineMultiStyleConfig13 } = (0, import_styled_system20.createMultiStyleConfigHelpers)(emptyStateAnatomy.keys);
var baseStyle9 = definePartsStyle13((props) => {
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
var emptyStateTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle9
});

// src/base/components/nprogress.ts
var import_styled_system21 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle14, defineMultiStyleConfig: defineMultiStyleConfig14 } = (0, import_styled_system21.createMultiStyleConfigHelpers)(nprogressAnatomy.keys);
var baseStyle10 = definePartsStyle14((props) => {
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
var nprogressTheme = defineMultiStyleConfig14({
  defaultProps: {
    colorScheme: "teal"
  },
  baseStyle: baseStyle10
});

// src/saas-ui/components/nprogress.ts
var baseStyle11 = definePartsStyle14((props) => {
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
var nprogressTheme2 = defineMultiStyleConfig14({
  defaultProps: {
    colorScheme: "primary"
  },
  baseStyle: baseStyle11
});

// src/saas-ui/components/property.ts
var import_styled_system22 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle15, defineMultiStyleConfig: defineMultiStyleConfig15 } = (0, import_styled_system22.createMultiStyleConfigHelpers)(propertyAnatomy.keys);
var propertyTheme = defineMultiStyleConfig15({
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
var components = {
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
  Input: inputTheme,
  PinInput: pinInputTheme,
  FormLabel: formLabelTheme,
  NumberInput: numberInputTheme,
  Select: nativeSelectTheme,
  Textarea: textareaTheme,
  SuiEmptyState: emptyStateTheme,
  SuiNProgress: nprogressTheme2,
  SuiProperty: propertyTheme,
  SuiSelect: selectTheme
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  CloseButton,
  FormLabel,
  Heading,
  Input,
  Kbd,
  Menu,
  Modal,
  NumberInput,
  PinInput,
  Progress,
  Radio,
  Select,
  Slider,
  SuiEmptyState,
  SuiNProgress,
  SuiProperty,
  SuiSelect,
  SuiStepper,
  Switch,
  Textarea,
  Tooltip,
  components
});
//# sourceMappingURL=index.js.map