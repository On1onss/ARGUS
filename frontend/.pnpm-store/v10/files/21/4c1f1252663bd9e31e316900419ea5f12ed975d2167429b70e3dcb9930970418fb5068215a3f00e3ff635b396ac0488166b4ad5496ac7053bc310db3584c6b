'use client'
import {
  emptyStateAnatomy,
  nprogressAnatomy,
  propertyAnatomy
} from "./chunk-XTTLL5ZK.mjs";

// src/saas-ui/components/alert.ts
import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);
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
import {
  defineCssVars,
  defineStyle,
  defineStyleConfig
} from "@chakra-ui/styled-system";
import { transparentize } from "@chakra-ui/theme-tools";
var vars = defineCssVars("badge", ["bg", "color", "shadow", "border"]);
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var badgeTheme = defineStyleConfig({
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
import { defineStyle as defineStyle2, defineStyleConfig as defineStyleConfig2 } from "@chakra-ui/styled-system";
import { mode, transparentize as transparentize2 } from "@chakra-ui/theme-tools";
var getStateColors = (props) => {
  const { colorScheme: c } = props;
  if (c === "gray") {
    return {
      base: mode("gray.100", "whiteAlpha.300")(props),
      hover: mode("gray.200", "whiteAlpha.400")(props),
      active: mode("gray.300", "whiteAlpha.500")(props)
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
    base: mode(`${c}.500`, `${c}.500`)(props),
    hover: mode(`${c}.600`, `${c}.600`)(props),
    active: mode(`${c}.700`, `${c}.700`)(props)
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
var variantSolid = defineStyle2((props) => {
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
    color = c === "gray" ? mode("black", "white")(props) : "white",
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
var variantElevated = defineStyle2((props) => {
  return {
    shadow: "md",
    ...variantSolid(props)
  };
});
var variantOutline2 = defineStyle2((props) => {
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
var variantGhost = defineStyle2((props) => {
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
  const darkHoverBg = transparentize2(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize2(`${c}.200`, 0.24)(theme);
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
var variantSubtle = defineStyle2((props) => {
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
  const bgColor = c === "white" ? "white" : mode(`${c}.500`, `${c}.200`)(props);
  const bg = transparentize2(bgColor, 0.1)(theme);
  const hoverBg = transparentize2(bgColor, 0.16)(theme);
  const activeBg = transparentize2(bgColor, 0.24)(theme);
  return {
    color: c === "white" ? "white" : mode(`${c}.600`, `${c}.200`)(props),
    bg,
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    }
  };
});
var variantLink = defineStyle2((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: c === "white" ? "white" : mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: c === "white" ? "whiteAlpha.800" : mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantPrimary = defineStyle2((props) => {
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
var variantSecondary = defineStyle2((props) => {
  return variantSolid({
    ...props,
    variant: "solid"
  });
});
var variantTertiary = defineStyle2((props) => {
  return variantOutline2({
    ...props,
    variant: "outline"
  });
});
var buttonTheme = defineStyleConfig2({
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
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers2, cssVar } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = createMultiStyleConfigHelpers2(cardAnatomy.keys);
var $bg = cssVar("card-bg");
var $padding = cssVar("card-padding");
var $shadow = cssVar("card-shadow");
var $radius = cssVar("card-radius");
var $border = cssVar("card-border-width", "0");
var $borderColor = cssVar("card-border-color");
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers3 } from "@chakra-ui/styled-system";
import { checkboxAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = createMultiStyleConfigHelpers3(checkboxAnatomy.keys);
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
import { defineStyleConfig as defineStyleConfig3 } from "@chakra-ui/styled-system";
var closeButtonTheme = defineStyleConfig3({
  defaultProps: {
    size: "sm"
  }
});

// src/saas-ui/components/form.ts
import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers as createMultiStyleConfigHelpers4,
  cssVar as cssVar2,
  defineStyle as defineStyle3,
  defineStyleConfig as defineStyleConfig4
} from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle4, defineMultiStyleConfig: defineMultiStyleConfig4 } = createMultiStyleConfigHelpers4(inputAnatomy.keys);
var $height = cssVar2("input-height");
var $padding2 = cssVar2("input-padding");
var $borderRadius = cssVar2("input-border-radius");
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
var pinInputTheme = defineStyleConfig4({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  },
  sizes: inputSizes
});
var textareaTheme = defineStyleConfig4({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: defineStyle3(
      (props) => {
        var _a2, _b2;
        return (_b2 = (_a2 = inputTheme.variants) == null ? void 0 : _a2.outline(props).field) != null ? _b2 : {};
      }
    )
  }
});
var nativeSelectTheme = defineStyleConfig4(Input);

// src/saas-ui/components/select.ts
import { defineStyle as defineStyle5, defineStyleConfig as defineStyleConfig5 } from "@chakra-ui/styled-system";

// ../../node_modules/@chakra-ui/theme/dist/esm/components/input.mjs
import { inputAnatomy as inputAnatomy2 } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers5, cssVar as cssVar3, defineStyle as defineStyle4 } from "@chakra-ui/styled-system";
import { mode as mode2, getColor } from "@chakra-ui/theme-tools";
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = createMultiStyleConfigHelpers5(inputAnatomy2.keys);
var $height2 = cssVar3("input-height");
var $fontSize = cssVar3("input-font-size");
var $padding3 = cssVar3("input-padding");
var $borderRadius2 = cssVar3("input-border-radius");
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
  lg: defineStyle4({
    [$fontSize.variable]: "fontSizes.lg",
    [$padding3.variable]: "space.4",
    [$borderRadius2.variable]: "radii.md",
    [$height2.variable]: "sizes.12"
  }),
  md: defineStyle4({
    [$fontSize.variable]: "fontSizes.md",
    [$padding3.variable]: "space.4",
    [$borderRadius2.variable]: "radii.md",
    [$height2.variable]: "sizes.10"
  }),
  sm: defineStyle4({
    [$fontSize.variable]: "fontSizes.sm",
    [$padding3.variable]: "space.3",
    [$borderRadius2.variable]: "radii.sm",
    [$height2.variable]: "sizes.8"
  }),
  xs: defineStyle4({
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
    focusBorderColor: fc || mode2("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode2("red.500", "red.300")(props)
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
        borderColor: mode2("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode2("inherit", "whiteAlpha.50")(props),
      bg: mode2("gray.100", "whiteAlpha.300")(props)
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
      bg: mode2("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode2("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode2("gray.100", "whiteAlpha.50")(props)
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
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`
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
var selectTheme = defineStyleConfig5({
  ...inputTheme2,
  defaultProps: inputTheme.defaultProps,
  variants: {
    outline: defineStyle5((props) => {
      var _a2, _b2;
      return {
        ...(_b2 = (_a2 = inputTheme.variants) == null ? void 0 : _a2.outline(props)) != null ? _b2 : {}
      };
    }),
    flushed: defineStyle5((props) => {
      var _a2, _b2;
      return (_b2 = (_a2 = inputTheme2.variants) == null ? void 0 : _a2.flushed(props)) != null ? _b2 : {};
    }),
    filled: defineStyle5((props) => {
      var _a2, _b2;
      return (_b2 = (_a2 = inputTheme2.variants) == null ? void 0 : _a2.filled(props)) != null ? _b2 : {};
    }),
    unstyled: (_b = (_a = inputTheme2.variants) == null ? void 0 : _a.unstyled) != null ? _b : {}
  },
  sizes: inputTheme.sizes
});

// src/saas-ui/components/heading.ts
import { defineStyleConfig as defineStyleConfig6 } from "@chakra-ui/styled-system";
var headingTheme = defineStyleConfig6({
  defaultProps: {
    size: "lg"
  }
});

// src/saas-ui/components/kbd.ts
import { defineStyle as defineStyle6, defineStyleConfig as defineStyleConfig7 } from "@chakra-ui/styled-system";
var variantSolid2 = defineStyle6((props) => {
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
var kbdTheme = defineStyleConfig7({
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
import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers6 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers6(menuAnatomy.keys);
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
import { modalAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers7 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = createMultiStyleConfigHelpers7(modalAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers8 } from "@chakra-ui/styled-system";
import { progressAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers8(progressAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers9 } from "@chakra-ui/styled-system";
import { radioAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = createMultiStyleConfigHelpers9(radioAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers10 } from "@chakra-ui/styled-system";
import { sliderAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = createMultiStyleConfigHelpers10(sliderAnatomy.keys);
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
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers11 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig11 } = createMultiStyleConfigHelpers11(switchAnatomy.keys);
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
import { defineStyle as defineStyle7, defineStyleConfig as defineStyleConfig8 } from "@chakra-ui/styled-system";
import { cssVar as cssVar4 } from "@chakra-ui/theme-tools";
var $bg2 = cssVar4("tooltip-bg");
var $fg = cssVar4("tooltip-fg");
var $arrowBg = cssVar4("popper-arrow-bg");
var baseStyle7 = defineStyle7((props) => {
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
var tooltipTheme = defineStyleConfig8({
  baseStyle: baseStyle7
});

// src/saas-ui/components/stepper.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers12, cssVar as cssVar5 } from "@chakra-ui/styled-system";
import { transparentize as transparentize3 } from "@chakra-ui/theme-tools";
var $size = cssVar5("stepper-indicator-size");
var $accentColor = cssVar5("stepper-accent-color");
var $verticalSeperatorOffset = cssVar5("stepper-vertical-seperator-offset");
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers12([
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
          bg: transparentize3(`${c}.200`, 0.16)(theme)
        }
      },
      "&[data-status=complete]": {
        bg: $accentColor.reference,
        color: `${c}.500`,
        _dark: {
          bg: transparentize3(`${c}.200`, 0.24)(theme),
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

// src/saas-ui/components/empty-state.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers13 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle13, defineMultiStyleConfig: defineMultiStyleConfig13 } = createMultiStyleConfigHelpers13(emptyStateAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers14 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle14, defineMultiStyleConfig: defineMultiStyleConfig14 } = createMultiStyleConfigHelpers14(nprogressAnatomy.keys);
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
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers15 } from "@chakra-ui/styled-system";
var { definePartsStyle: definePartsStyle15, defineMultiStyleConfig: defineMultiStyleConfig15 } = createMultiStyleConfigHelpers15(propertyAnatomy.keys);
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

export {
  nprogressTheme,
  inputTheme2 as inputTheme,
  alertTheme,
  badgeTheme,
  buttonTheme,
  cardTheme,
  checkboxTheme,
  closeButtonTheme,
  formLabelTheme,
  inputTheme as inputTheme2,
  numberInputTheme,
  pinInputTheme,
  textareaTheme,
  nativeSelectTheme,
  selectTheme,
  headingTheme,
  kbdTheme,
  menuTheme,
  modalTheme,
  progressTheme,
  radioTheme,
  sliderTheme,
  switchTheme,
  tooltipTheme,
  stepperTheme,
  emptyStateTheme,
  nprogressTheme2,
  propertyTheme,
  components
};
//# sourceMappingURL=chunk-2FYJNEWC.mjs.map