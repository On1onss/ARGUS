'use client'

// src/form-context.tsx
import * as React from "react";
import {
  FormProvider as HookFormProvider,
  useFormContext as useHookFormContext
} from "react-hook-form";
import { jsx } from "react/jsx-runtime";
var FormContext = React.createContext(null);
var useFormContext = () => {
  const context = React.useContext(FormContext);
  const hookContext = useHookFormContext();
  return {
    ...hookContext,
    ...context
  };
};
var useFieldProps = (name) => {
  var _a;
  const parsedName = name == null ? void 0 : name.replace(/\.[0-9]/g, ".$");
  const context = useFormContext();
  return ((_a = context == null ? void 0 : context.fields) == null ? void 0 : _a[parsedName]) || {};
};
var FormProvider = (props) => {
  const { children, fieldResolver, schema, fields, ...rest } = props;
  return /* @__PURE__ */ jsx(HookFormProvider, { ...rest, children: /* @__PURE__ */ jsx(FormContext.Provider, { value: { fieldResolver, schema, fields }, children }) });
};

// src/display-field.tsx
import {
  Text,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var DisplayField = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(FormControl, { ...props, children: [
    label ? /* @__PURE__ */ jsx2(FormLabel, { htmlFor: name, children: label }) : null,
    /* @__PURE__ */ jsx2(Text, { fontSize: "md", children: /* @__PURE__ */ jsx2(FormValue, { name }) })
  ] });
};
DisplayField.displayName = "DisplayField";
var FormValue = ({ name }) => {
  const { getValues } = useFormContext();
  return getValues(name) || null;
};
FormValue.displayName = "FormValue";

// src/field.tsx
import * as React7 from "react";

// src/fields-context.tsx
import React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var FieldsContext = React2.createContext(null);
var FieldsProvider = (props) => {
  return /* @__PURE__ */ jsx3(FieldsContext.Provider, { value: props.value, children: props.children });
};
var useFieldsContext = () => {
  return React2.useContext(FieldsContext);
};
var useField = (type, fallback) => {
  var _a;
  const context = React2.useContext(FieldsContext);
  return ((_a = context == null ? void 0 : context.fields) == null ? void 0 : _a[type]) || fallback;
};

// src/default-fields.tsx
import {
  forwardRef as forwardRef8,
  Input as Input3,
  Textarea,
  Checkbox,
  Switch,
  InputGroup as InputGroup3,
  PinInputField,
  HStack,
  PinInput
} from "@chakra-ui/react";

// src/number-input/number-input.tsx
import {
  forwardRef,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@saas-ui/core";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef((props, ref) => /* @__PURE__ */ jsx4(NumberInputField, { ref, ...props }));
Input.displayName = "NumberInputField";
Input.id = "Input";
var NumberInput = forwardRef((props, ref) => {
  const {
    hideStepper = false,
    incrementIcon = /* @__PURE__ */ jsx4(ChevronUpIcon, {}),
    decrementIcon = /* @__PURE__ */ jsx4(ChevronDownIcon, {}),
    leftAddon,
    rightAddon,
    placeholder,
    fieldProps: _fieldProps,
    ...rest
  } = props;
  const fieldProps = { placeholder, ..._fieldProps };
  return /* @__PURE__ */ jsxs2(ChakraNumberInput, { ...rest, ref, children: [
    /* @__PURE__ */ jsxs2(InputGroup, { children: [
      leftAddon,
      /* @__PURE__ */ jsx4(Input, { ...fieldProps }),
      rightAddon
    ] }),
    !hideStepper && !rightAddon ? /* @__PURE__ */ jsxs2(NumberInputStepper, { children: [
      /* @__PURE__ */ jsx4(NumberIncrementStepper, { children: incrementIcon }),
      /* @__PURE__ */ jsx4(NumberDecrementStepper, { children: decrementIcon })
    ] }) : null
  ] });
});
NumberInput.displayName = "NumberInput";

// src/password-input/password-input.tsx
import { useState } from "react";
import { forwardRef as forwardRef3, InputGroup as InputGroup2, Input as Input2 } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@saas-ui/core/icons";

// src/input-right-button/input-right-button.tsx
import {
  Button,
  forwardRef as forwardRef2,
  InputRightElement as InputRightElement2
} from "@chakra-ui/react";
import { jsx as jsx5 } from "react/jsx-runtime";
var InputRightButton = forwardRef2(
  (props, ref) => {
    return /* @__PURE__ */ jsx5(InputRightElement2, { w: "auto", px: "1", py: "1", alignItems: "stretch", children: /* @__PURE__ */ jsx5(Button, { ref, height: "auto", ...props }) });
  }
);
InputRightButton.id = "InputRightElement";
InputRightButton.displayName = "InputRightButton";

// src/password-input/password-input.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var PasswordInput = forwardRef3(
  (props, ref) => {
    const {
      viewIcon,
      viewOffIcon,
      autoComplete,
      w,
      width,
      size,
      variant,
      leftAddon,
      ...inputProps
    } = props;
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const label = show ? "Hide password" : "Show password";
    let icon;
    if (show) {
      icon = viewIcon || /* @__PURE__ */ jsx6(ViewIcon, {});
    } else {
      icon = viewOffIcon || /* @__PURE__ */ jsx6(ViewOffIcon, {});
    }
    const groupProps = {
      width: w || width,
      size,
      variant
    };
    return /* @__PURE__ */ jsxs3(InputGroup2, { ...groupProps, children: [
      leftAddon,
      /* @__PURE__ */ jsx6(
        Input2,
        {
          ...inputProps,
          ref,
          type: show ? "text" : "password",
          autoComplete: show ? "off" : autoComplete
        }
      ),
      /* @__PURE__ */ jsx6(
        InputRightButton,
        {
          onClick: handleClick,
          "aria-label": label,
          variant: "ghost",
          children: icon
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";

// src/radio/radio-input.tsx
import {
  forwardRef as forwardRef4,
  Stack,
  RadioGroup,
  Radio
} from "@chakra-ui/react";

// src/utils.ts
import * as React4 from "react";
var mapNestedFields = (name, children) => {
  return React4.Children.map(children, (child) => {
    if (React4.isValidElement(child) && child.props.name) {
      let childName = child.props.name;
      if (childName.includes(".")) {
        childName = childName.replace(/^.*\.(.*)/, "$1");
      } else if (childName.includes(".$")) {
        childName = childName.replace(/^.*\.\$(.*)/, "$1");
      }
      return React4.cloneElement(child, {
        ...child.props,
        name: `${name}.${childName}`
      });
    }
    return child;
  });
};
var mapOptions = (options) => {
  return options.map((option) => {
    if (typeof option === "string") {
      return {
        label: option,
        value: option
      };
    }
    return option;
  });
};

// src/radio/radio-input.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var RadioInput = forwardRef4(
  ({ options: optionsProp, spacing, direction, ...props }, ref) => {
    const { onBlur, onChange, ...groupProps } = props;
    const options = mapOptions(optionsProp);
    return /* @__PURE__ */ jsx7(RadioGroup, { onChange, ...groupProps, children: /* @__PURE__ */ jsx7(Stack, { spacing, direction, children: options.map(({ value, label, ...radioProps }, i) => {
      return /* @__PURE__ */ jsx7(
        Radio,
        {
          onBlur,
          value,
          ref,
          ...radioProps,
          children: label || value
        },
        i
      );
    }) }) });
  }
);
RadioInput.displayName = "RadioInput";

// src/select/select.tsx
import {
  chakra,
  forwardRef as forwardRef5,
  Menu,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button as Button2,
  omitThemingProps,
  useMultiStyleConfig,
  useFormControlContext,
  useMenuButton
} from "@chakra-ui/react";
import { cx, dataAttr } from "@chakra-ui/utils";
import { ChevronDownIcon as ChevronDownIcon2 } from "@saas-ui/core";

// src/select/select-context.tsx
import {
  createStylesContext,
  useControllableState,
  useFormControl
} from "@chakra-ui/react";
import { createContext as createContext2 } from "@chakra-ui/utils";
import React5 from "react";
var [SelectStylesProvider, useSelectStyles] = createStylesContext("SuiSelect");
var [SelectProvider, useSelectContext] = createContext2({
  strict: true
});
var useSelect = (props) => {
  const {
    name,
    value,
    defaultValue,
    onChange,
    multiple,
    placeholder,
    options: optionsProp,
    isDisabled,
    renderValue = (value2) => typeof value2 === "string" ? value2 : value2 == null ? void 0 : value2.join(", ")
  } = props;
  const [currentValue, setCurrentValue] = useControllableState({
    value,
    defaultValue,
    onChange
  });
  const controlProps = useFormControl({ name });
  const options = React5.useMemo(
    () => optionsProp && mapOptions(optionsProp),
    [optionsProp]
  );
  const handleChange = (value2) => {
    setCurrentValue(value2);
  };
  const getDisplayValue = React5.useCallback(
    (value2) => {
      if (!options) {
        return value2;
      }
      for (const option of options) {
        if (option.value === value2) {
          return option.label || option.value;
        }
      }
      return value2;
    },
    [options]
  );
  const displayValue = React5.useMemo(
    () => currentValue ? (Array.isArray(currentValue) ? currentValue : [currentValue]).map(
      getDisplayValue
    ) : [],
    [currentValue, getDisplayValue]
  );
  return {
    defaultValue,
    value: currentValue,
    displayValue,
    renderValue,
    onChange: handleChange,
    options,
    multiple,
    controlProps,
    placeholder,
    isDisabled
  };
};

// src/select/select.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var SelectButton = forwardRef5(
  (props, ref) => {
    var _a, _b, _c, _d, _e;
    const {
      displayValue,
      renderValue,
      placeholder,
      isDisabled: isSelectDisabled
    } = useSelectContext();
    const context = useFormControlContext();
    const styles = useSelectStyles();
    const {
      isInvalid,
      isReadOnly,
      isDisabled,
      isFocused,
      isRequired,
      id,
      onBlur,
      onFocus
    } = context || {};
    const { rightIcon = /* @__PURE__ */ jsx8(ChevronDownIcon2, {}), ...rest } = props;
    const focusStyles = (_a = styles.field) == null ? void 0 : _a._focusVisible;
    const readOnlyStyles = (_b = styles.field) == null ? void 0 : _b._readOnly;
    const invalid = (_c = styles.field) == null ? void 0 : _c._invalid;
    const height = ((_d = styles.field) == null ? void 0 : _d.h) || ((_e = styles.field) == null ? void 0 : _e.height);
    const buttonStyles = {
      fontWeight: "normal",
      textAlign: "left",
      color: "inherit",
      _active: {
        bg: "transparent"
      },
      minH: height,
      _focus: focusStyles,
      _expanded: focusStyles,
      _readOnly: readOnlyStyles,
      _invalid: invalid,
      minW: 0,
      ...styles.field,
      h: "auto",
      ...props.sx
    };
    const buttonProps = useMenuButton(rest, ref);
    return /* @__PURE__ */ jsx8(
      Button2,
      {
        ...buttonProps,
        sx: buttonStyles,
        ...rest,
        onFocus,
        onBlur,
        isDisabled: isDisabled || isSelectDisabled,
        "data-invalid": dataAttr(isInvalid),
        "data-read-only": dataAttr(isReadOnly),
        "data-focus": dataAttr(isFocused),
        "data-required": dataAttr(isRequired),
        rightIcon,
        children: /* @__PURE__ */ jsx8(
          chakra.span,
          {
            __css: {
              display: "block",
              pointerEvents: "none",
              flex: "1 1 auto",
              minW: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            children: renderValue(displayValue) || placeholder
          }
        )
      }
    );
  }
);
SelectButton.displayName = "SelectButton";
var Select = forwardRef5((props, ref) => {
  const { name, children, isDisabled, multiple, ...rest } = props;
  const styles = useMultiStyleConfig("SuiSelect", props);
  const menuProps = omitThemingProps(rest);
  const context = useSelect(props);
  const { value, controlProps } = context;
  return /* @__PURE__ */ jsx8(SelectProvider, { value: context, children: /* @__PURE__ */ jsx8(SelectStylesProvider, { value: styles, children: /* @__PURE__ */ jsx8(Menu, { ...menuProps, closeOnSelect: !multiple, children: /* @__PURE__ */ jsxs4(chakra.div, { className: cx("sui-select"), children: [
    children,
    /* @__PURE__ */ jsx8(
      chakra.input,
      {
        ...controlProps,
        ref,
        name,
        type: "hidden",
        value: value || "",
        className: "saas-select__input"
      }
    )
  ] }) }) }) });
});
var SelectList = (props) => {
  const { defaultValue, value, options, multiple, onChange } = useSelectContext();
  return /* @__PURE__ */ jsx8(MenuList, { maxH: "100vh", overflowY: "auto", ...props, children: /* @__PURE__ */ jsx8(
    MenuOptionGroup,
    {
      defaultValue: defaultValue || value,
      value,
      onChange,
      type: multiple ? "checkbox" : "radio",
      children: options ? options.map(({ value: value2, label, ...rest }, i) => /* @__PURE__ */ jsx8(SelectOption, { value: value2, ...rest, children: label || value2 }, i)) : props.children
    }
  ) });
};
Select.displayName = "Select";
var SelectOption = forwardRef5(
  (props, ref) => {
    return /* @__PURE__ */ jsx8(MenuItemOption, { ref, ...props });
  }
);
SelectOption.id = "MenuItemOption";
SelectOption.displayName = "SelectOption";

// src/select/native-select.tsx
import {
  forwardRef as forwardRef6,
  Select as ChakraSelect
} from "@chakra-ui/react";
import { jsx as jsx9 } from "react/jsx-runtime";
var NativeSelect = forwardRef6(
  ({ options, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(ChakraSelect, { ref, ...props, children: children || (options == null ? void 0 : options.map(({ value, label }) => {
      return /* @__PURE__ */ jsx9("option", { value, children: label || value }, value);
    })) });
  }
);
NativeSelect.displayName = "NativeSelect";

// src/create-field.tsx
import * as React6 from "react";
import { Controller } from "react-hook-form";
import { forwardRef as forwardRef7, useMergeRefs } from "@chakra-ui/react";
import { callAllHandlers } from "@chakra-ui/utils";
import { splitProps as splitProps2 } from "@saas-ui/core";

// src/base-field.tsx
import { get } from "react-hook-form";
import {
  Box,
  FormControl as FormControl2,
  FormLabel as FormLabel2,
  FormHelperText,
  FormErrorMessage
} from "@chakra-ui/react";
import { splitProps } from "@saas-ui/core";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var getError = (name, formState) => {
  return get(formState.errors, name);
};
var isTouched = (name, formState) => {
  return get(formState.touchedFields, name);
};
var useBaseField = (props) => {
  const [fieldProps] = splitProps(props, ["name", "label", "help", "hideLabel"]);
  const [controlProps] = splitProps(props, [
    "id",
    "direction",
    "isDisabled",
    "isInvalid",
    "isReadOnly",
    "isRequired"
  ]);
  const { formState } = useFormContext();
  const error = getError(fieldProps.name, formState);
  const touched = isTouched(fieldProps.name, formState);
  return {
    ...fieldProps,
    controlProps,
    error,
    touched
  };
};
var BaseField = (props) => {
  const { controlProps, label, help, hideLabel, error } = useBaseField(props);
  const isInvalid = !!error || controlProps.isInvalid;
  const { direction, ...rest } = controlProps;
  return /* @__PURE__ */ jsxs5(
    FormControl2,
    {
      ...rest,
      isInvalid,
      variant: direction === "row" ? "horizontal" : void 0,
      children: [
        label && !hideLabel ? /* @__PURE__ */ jsx10(FormLabel2, { children: label }) : null,
        /* @__PURE__ */ jsxs5(Box, { children: [
          props.children,
          help && !(error == null ? void 0 : error.message) ? /* @__PURE__ */ jsx10(FormHelperText, { children: help }) : null,
          (error == null ? void 0 : error.message) && /* @__PURE__ */ jsx10(FormErrorMessage, { children: error == null ? void 0 : error.message })
        ] })
      ]
    }
  );
};
BaseField.displayName = "BaseField";

// src/create-field.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var _createField = (InputComponent, { displayName, hideLabel, getBaseField: getBaseFieldProp }) => {
  const Field2 = forwardRef7((props, ref) => {
    var _a;
    const { id, name, label, isRequired, rules } = props;
    const inputRules = {
      required: isRequired,
      ...rules
    };
    const fieldContext = useFieldsContext();
    const getBaseField = (_a = fieldContext == null ? void 0 : fieldContext.getBaseField) != null ? _a : getBaseFieldProp;
    const { extraProps, BaseField: BaseField2 } = React6.useMemo(
      () => getBaseField(),
      [getBaseField]
    );
    const [, inputProps] = splitProps2(
      props,
      [
        "children",
        "name",
        "label",
        "isRequired",
        "isDisabled",
        "isInvalid",
        "isReadOnly",
        "help",
        "hideLabel"
      ].concat(extraProps)
    );
    return /* @__PURE__ */ jsx11(BaseField2, { hideLabel, ...props, children: /* @__PURE__ */ jsx11(
      InputComponent,
      {
        ref,
        id,
        name,
        label: hideLabel ? label : void 0,
        ...inputProps,
        rules: inputRules
      }
    ) });
  });
  Field2.displayName = displayName;
  return Field2;
};
var withControlledInput = (InputComponent) => {
  return forwardRef7(
    ({ name, rules, ...inputProps }, ref) => {
      const { control } = useFormContext();
      const onChange = inputProps.onChange;
      return /* @__PURE__ */ jsx11(
        Controller,
        {
          name,
          control,
          rules,
          render: ({ field: { ref: _ref, ...field } }) => /* @__PURE__ */ jsx11(
            InputComponent,
            {
              ...field,
              ...inputProps,
              onChange: callAllHandlers(onChange, field.onChange),
              onBlur: callAllHandlers(inputProps.onBlur, field.onBlur),
              ref: useMergeRefs(ref, _ref)
            }
          )
        }
      );
    }
  );
};
var withUncontrolledInput = (InputComponent) => {
  return forwardRef7(
    ({ name, rules, ...inputProps }, ref) => {
      const { register } = useFormContext();
      const { ref: _ref, ...field } = register(name, rules);
      const onChange = inputProps.onChange;
      return /* @__PURE__ */ jsx11(
        InputComponent,
        {
          ...field,
          ...inputProps,
          onChange: callAllHandlers(onChange, field.onChange),
          onBlur: callAllHandlers(inputProps.onBlur, field.onBlur),
          ref: useMergeRefs(ref, _ref)
        }
      );
    }
  );
};
var createField = (component, options) => {
  var _a;
  let InputComponent;
  if (options == null ? void 0 : options.isControlled) {
    InputComponent = withControlledInput(component);
  } else {
    InputComponent = withUncontrolledInput(component);
  }
  const Field2 = _createField(InputComponent, {
    displayName: `${(_a = component.displayName) != null ? _a : "Custom"}Field`,
    hideLabel: options == null ? void 0 : options.hideLabel,
    getBaseField: () => ({
      extraProps: [],
      BaseField
    })
  });
  return Field2;
};

// src/default-fields.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var InputField = createField(
  forwardRef8(({ type = "text", leftAddon, rightAddon, size, ...rest }, ref) => {
    const input = /* @__PURE__ */ jsx12(Input3, { type, size, ...rest, ref });
    if (leftAddon || rightAddon) {
      return /* @__PURE__ */ jsxs6(InputGroup3, { size, children: [
        leftAddon,
        input,
        rightAddon
      ] });
    }
    return input;
  })
);
var NumberInputField2 = createField(
  NumberInput,
  {
    isControlled: true
  }
);
var PasswordInputField = createField(
  forwardRef8((props, ref) => /* @__PURE__ */ jsx12(PasswordInput, { ref, ...props }))
);
var TextareaField = createField(Textarea);
var SwitchField = createField(
  forwardRef8(({ type, value, ...rest }, ref) => {
    return /* @__PURE__ */ jsx12(Switch, { isChecked: !!value, ...rest, ref });
  }),
  {
    isControlled: true
  }
);
var SelectField = createField(
  forwardRef8((props, ref) => {
    const { buttonProps, listProps, ...rest } = props;
    return /* @__PURE__ */ jsxs6(Select, { ref, ...rest, children: [
      /* @__PURE__ */ jsx12(SelectButton, { ...buttonProps }),
      /* @__PURE__ */ jsx12(SelectList, { ...listProps })
    ] });
  }),
  {
    isControlled: true
  }
);
var CheckboxField = createField(
  forwardRef8(({ label, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx12(Checkbox, { ref, ...props, children: label });
  }),
  {
    hideLabel: true
  }
);
var RadioField = createField(RadioInput, {
  isControlled: true
});
var NativeSelectField = createField(
  NativeSelect,
  {
    isControlled: true
  }
);
var PinField = createField(
  forwardRef8((props, ref) => {
    const { pinLength = 4, pinType, spacing, ...inputProps } = props;
    const inputs = [];
    for (let i = 0; i < pinLength; i++) {
      inputs.push(/* @__PURE__ */ jsx12(PinInputField, { ref }, i));
    }
    return /* @__PURE__ */ jsx12(HStack, { spacing, children: /* @__PURE__ */ jsx12(PinInput, { ...inputProps, type: pinType, children: inputs }) });
  }),
  {
    isControlled: true
  }
);
var defaultFieldTypes = {
  text: InputField,
  email: InputField,
  url: InputField,
  phone: InputField,
  time: InputField,
  number: NumberInputField2,
  password: PasswordInputField,
  textarea: TextareaField,
  switch: SwitchField,
  select: SelectField,
  checkbox: CheckboxField,
  radio: RadioField,
  pin: PinField,
  "native-select": NativeSelectField
};

// src/field.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var defaultInputType = "text";
var Field = React7.forwardRef(
  (props, ref) => {
    const { type = defaultInputType, name } = props;
    const overrides = useFieldProps(name);
    const InputComponent = useField((overrides == null ? void 0 : overrides.type) || type, InputField);
    return /* @__PURE__ */ jsx13(InputComponent, { ref, ...props, ...overrides });
  }
);

// src/fields.tsx
import * as React10 from "react";

// src/layout.tsx
import {
  chakra as chakra2,
  omitThemingProps as omitThemingProps2,
  SimpleGrid,
  useStyleConfig,
  useTheme
} from "@chakra-ui/react";
import { cx as cx2 } from "@chakra-ui/utils";
import { jsx as jsx14 } from "react/jsx-runtime";
var FormLayoutItem = ({ children }) => {
  return /* @__PURE__ */ jsx14(chakra2.div, { children });
};
FormLayoutItem.displayName = "FormLayoutItem";
var FormLayout = ({ children, ...props }) => {
  var _a, _b, _c;
  const theme = useTheme();
  const defaultProps = (_c = (_b = (_a = theme.components) == null ? void 0 : _a.SuiFormLayout) == null ? void 0 : _b.defaultProps) != null ? _c : {
    spacing: 4
  };
  const styles = useStyleConfig("SuiFormLayout", props);
  const gridProps = omitThemingProps2({
    ...defaultProps,
    ...props
  });
  return /* @__PURE__ */ jsx14(
    SimpleGrid,
    {
      ...gridProps,
      className: cx2("sui-form__layout", props.className),
      sx: {
        ...styles,
        ...props.sx
      },
      children
    }
  );
};
FormLayout.displayName = "FormLayout";

// src/array-field.tsx
import * as React9 from "react";
import {
  chakra as chakra3,
  forwardRef as forwardRef11,
  Button as Button3
} from "@chakra-ui/react";
import { PlusIcon, MinusIcon } from "@saas-ui/core/icons";

// src/use-array-field.tsx
import * as React8 from "react";
import {
  useFieldArray
} from "react-hook-form";
import { createContext as createContext3 } from "@chakra-ui/utils";
var [ArrayFieldProvider, useArrayFieldContext] = createContext3({
  name: "ArrayFieldContext"
});
var [ArrayFieldRowProvider, useArrayFieldRowContext] = createContext3({
  name: "ArrayFieldRowContext"
});
var useArrayField = ({
  name,
  defaultValue = {},
  keyName,
  min,
  max
}) => {
  const { control } = useFormContext();
  const context = useFieldArray({
    control,
    name,
    keyName
  });
  return {
    ...context,
    name,
    defaultValue,
    min,
    max
  };
};
var useArrayFieldRow = ({ index }) => {
  const { clearErrors } = useFormContext();
  const { name, remove, fields } = useArrayFieldContext();
  React8.useEffect(() => {
    clearErrors(name);
  }, []);
  return {
    index,
    isFirst: index === 0,
    isLast: index === fields.length - 1,
    name: `${name}.${index}`,
    remove: React8.useCallback(() => {
      clearErrors(name);
      remove(index);
    }, [index])
  };
};
var useArrayFieldRemoveButton = () => {
  const { isFirst, remove } = useArrayFieldRowContext();
  const { min, fields } = useArrayFieldContext();
  const isDisabled = isFirst && !!(min && fields.length <= min);
  return {
    onClick: () => remove(),
    isDisabled
  };
};
var useArrayFieldAddButton = () => {
  const { append, defaultValue, max, fields } = useArrayFieldContext();
  const isDisabled = !!(max && fields.length >= max);
  return {
    onClick: () => append(defaultValue, {
      shouldFocus: false
    }),
    isDisabled
  };
};

// src/array-field.tsx
import { isFunction } from "@chakra-ui/utils";
import { Fragment, jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var ArrayFieldRow = ({
  children,
  index,
  ...rowFieldsProps
}) => {
  return /* @__PURE__ */ jsxs7(ArrayFieldRowContainer, { index, children: [
    /* @__PURE__ */ jsx15(ArrayFieldRowFields, { ...rowFieldsProps, children }),
    /* @__PURE__ */ jsx15(ArrayFieldRemoveButton, {})
  ] });
};
ArrayFieldRow.displayName = "ArrayFieldRow";
var ArrayFieldRowFields = ({
  children,
  ...layoutProps
}) => {
  const { name } = useArrayFieldRowContext();
  return /* @__PURE__ */ jsx15(FormLayout, { flex: "1", mr: "2", ...layoutProps, children: mapNestedFields(name, children) });
};
ArrayFieldRowFields.displayName = "ArrayFieldRowFields";
var ArrayFieldRowContainer = ({
  children,
  index,
  ...rest
}) => {
  const context = useArrayFieldRow({ index });
  const styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    mb: 4
  };
  return /* @__PURE__ */ jsx15(ArrayFieldRowProvider, { value: context, children: /* @__PURE__ */ jsx15(chakra3.div, { ...rest, __css: styles, children }) });
};
ArrayFieldRowContainer.displayName = "ArrayFieldRowContainer";
var ArrayFieldRemoveButton = (props) => {
  return /* @__PURE__ */ jsx15(Button3, { "aria-label": "Remove row", ...useArrayFieldRemoveButton(), ...props, children: props.children || /* @__PURE__ */ jsx15(MinusIcon, {}) });
};
ArrayFieldRemoveButton.displayName = "ArrayFieldRemoveButton";
var ArrayFieldAddButton = (props) => {
  return /* @__PURE__ */ jsx15(
    Button3,
    {
      "aria-label": "Add row",
      float: "right",
      ...useArrayFieldAddButton(),
      ...props,
      children: props.children || /* @__PURE__ */ jsx15(PlusIcon, {})
    }
  );
};
ArrayFieldAddButton.displayName = "ArrayFieldAddButton";
var ArrayField = forwardRef11(
  (props, ref) => {
    const { children, ...containerProps } = props;
    const rowFn = isFunction(children) ? children : (fields) => /* @__PURE__ */ jsx15(Fragment, { children: fields.map(({ id }, index) => /* @__PURE__ */ jsx15(ArrayFieldRow, { index, children }, id)) || null });
    return /* @__PURE__ */ jsxs7(ArrayFieldContainer, { ref, ...containerProps, children: [
      /* @__PURE__ */ jsx15(ArrayFieldRows, { children: rowFn }),
      /* @__PURE__ */ jsx15(ArrayFieldAddButton, {})
    ] });
  }
);
ArrayField.displayName = "ArrayField";
var ArrayFieldRows = ({
  children
}) => {
  const { fields } = useArrayFieldContext();
  return children(fields);
};
ArrayFieldRows.displayName = "ArrayFieldRows";
var ArrayFieldContainer = React9.forwardRef(
  ({
    name,
    defaultValue,
    keyName,
    min,
    max,
    children,
    ...fieldProps
  }, ref) => {
    const overrides = useFieldProps(name);
    const context = useArrayField({
      name,
      defaultValue,
      keyName,
      min: min || (overrides == null ? void 0 : overrides.min),
      max: max || (overrides == null ? void 0 : overrides.max)
    });
    React9.useImperativeHandle(ref, () => context, [ref, context]);
    return /* @__PURE__ */ jsx15(ArrayFieldProvider, { value: context, children: /* @__PURE__ */ jsx15(BaseField, { name, ...fieldProps, ...overrides, children }) });
  }
);
ArrayFieldContainer.displayName = "ArrayFieldContainer";

// src/object-field.tsx
import {
  FormControl as FormControl3,
  FormLabel as FormLabel3,
  useStyleConfig as useStyleConfig2
} from "@chakra-ui/react";
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
var FormLegend = (props) => {
  const styles = useStyleConfig2("SuiFormLegend");
  return /* @__PURE__ */ jsx16(FormLabel3, { as: "legend", sx: styles, ...props });
};
var ObjectField = (props) => {
  const {
    name,
    label,
    hideLabel: hideLabelProp,
    children,
    columns: columnsProp,
    spacing: spacingProp,
    ...fieldProps
  } = props;
  const { hideLabel, columns, spacing, ...overrides } = useFieldProps(
    name
  );
  return /* @__PURE__ */ jsxs8(FormControl3, { name, as: "fieldset", ...fieldProps, ...overrides, children: [
    /* @__PURE__ */ jsx16(FormLegend, { display: hideLabelProp || hideLabel ? "none" : "block", children: label }),
    /* @__PURE__ */ jsx16(
      FormLayout,
      {
        columns: columnsProp || columns,
        gridGap: spacingProp || spacing,
        children: mapNestedFields(name, children)
      }
    )
  ] });
};
ObjectField.displayName = "ObjectField";

// src/fields.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var mapNestedFields2 = (resolver, name) => {
  var _a;
  return (_a = resolver.getNestedFields(name)) == null ? void 0 : _a.map(
    ({ name: name2, type, ...nestedFieldProps }, i) => /* @__PURE__ */ jsx17(
      Field,
      {
        name: name2,
        type,
        ...nestedFieldProps
      },
      name2 || i
    )
  );
};
var AutoFields = ({
  schema: schemaProp,
  fieldResolver: fieldResolverProp,
  focusFirstField,
  ...props
}) => {
  const context = useFormContext();
  const schema = schemaProp || context.schema;
  const fieldResolver = fieldResolverProp || context.fieldResolver;
  const resolver = React10.useMemo(() => fieldResolver, [schema, fieldResolver]);
  const fields = React10.useMemo(() => resolver == null ? void 0 : resolver.getFields(), [resolver]);
  const form = useFormContext();
  React10.useEffect(() => {
    var _a;
    if (focusFirstField && ((_a = fields == null ? void 0 : fields[0]) == null ? void 0 : _a.name)) {
      form.setFocus(fields[0].name);
    }
  }, [schema, fieldResolver, focusFirstField]);
  if (!resolver) {
    return null;
  }
  return /* @__PURE__ */ jsx17(FormLayout, { ...props, children: fields == null ? void 0 : fields.map(
    ({
      name,
      type,
      defaultValue,
      ...fieldProps
    }) => {
      if (type === "array") {
        return /* @__PURE__ */ jsx17(ArrayField, { name, ...fieldProps, children: mapNestedFields2(resolver, name) }, name);
      } else if (type === "object") {
        return /* @__PURE__ */ jsx17(ObjectField, { name, ...fieldProps, children: mapNestedFields2(resolver, name) }, name);
      }
      return /* @__PURE__ */ jsx17(
        Field,
        {
          name,
          type,
          defaultValue,
          ...fieldProps
        },
        name
      );
    }
  ) });
};
AutoFields.displayName = "Fields";

// src/submit-button.tsx
import { useFormContext as useFormContext2 } from "react-hook-form";
import { Button as Button4, forwardRef as forwardRef12 } from "@chakra-ui/react";
import { jsx as jsx18 } from "react/jsx-runtime";
var SubmitButton = forwardRef12(
  (props, ref) => {
    const {
      variant = "primary",
      children = "Submit",
      disableIfUntouched: disableIfUntouchedProp = false,
      disableIfInvalid: disableIfInvalidProp = false,
      isDisabled: isDisabledProp,
      isLoading,
      ...rest
    } = props;
    const { formState } = useFormContext2();
    const field = useFieldProps("submit");
    const {
      disableIfUntouched: disableIfUntouchedOverride,
      disableIfInvalid: disableIfInvalidOverride,
      ...fieldProps
    } = field;
    const disableIfUntouched = disableIfUntouchedOverride != null ? disableIfUntouchedOverride : disableIfUntouchedProp;
    const disableIfInvalid = disableIfInvalidOverride != null ? disableIfInvalidOverride : disableIfInvalidProp;
    const isDisabled = disableIfUntouched && !formState.isDirty || disableIfInvalid && !formState.isValid || isDisabledProp;
    return /* @__PURE__ */ jsx18(
      Button4,
      {
        ref,
        variant,
        type: "submit",
        isLoading: formState.isSubmitting || isLoading,
        isDisabled,
        children,
        ...rest,
        ...fieldProps
      }
    );
  }
);
SubmitButton.displayName = "SubmitButton";

// src/display-if.tsx
import * as React11 from "react";
import {
  useWatch
} from "react-hook-form";
var DisplayIf = ({
  children,
  name,
  defaultValue,
  isDisabled,
  isExact,
  condition = (value) => !!value,
  onToggle
}) => {
  const initializedRef = React11.useRef(false);
  const matchesRef = React11.useRef(false);
  const value = useWatch({
    name,
    defaultValue,
    disabled: isDisabled,
    exact: isExact
  });
  const context = useFormContext();
  const matches = condition(value, context);
  React11.useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }
    if (matchesRef.current === matches) return;
    matchesRef.current = matches;
    onToggle == null ? void 0 : onToggle(matches, context);
  }, [value]);
  return matches ? children : null;
};
DisplayIf.displayName = "DisplayIf";

// src/step-form.tsx
import * as React13 from "react";
import {
  chakra as chakra4,
  Button as Button5
} from "@chakra-ui/react";
import { callAllHandlers as callAllHandlers2, cx as cx3 } from "@chakra-ui/utils";
import {
  Steps,
  StepsItem,
  useStepperContext
} from "@saas-ui/core";

// src/use-step-form.tsx
import * as React12 from "react";
import { createContext as createContext4 } from "@chakra-ui/utils";
import {
  useStepper,
  useStep
} from "@saas-ui/core";
var [StepFormProvider, useStepFormContext] = createContext4({
  name: "StepFormContext",
  errorMessage: "useStepFormContext: `context` is undefined. Seems you forgot to wrap step form components in `<StepForm />`"
});
function useStepForm(props) {
  const {
    onChange,
    steps: stepsOptions,
    resolver,
    fieldResolver,
    ...rest
  } = props;
  const stepper = useStepper(rest);
  const [options, setOptions] = React12.useState(stepsOptions);
  const { activeStep, isLastStep, nextStep } = stepper;
  const [steps, updateSteps] = React12.useState({});
  const mergedData = React12.useRef({});
  const onSubmitStep = React12.useCallback(
    async (data) => {
      var _a, _b;
      try {
        const step = steps[activeStep];
        mergedData.current = {
          ...mergedData.current,
          ...data
        };
        if (isLastStep) {
          await ((_a = props.onSubmit) == null ? void 0 : _a.call(props, mergedData.current));
          updateStep({
            ...step,
            isCompleted: true
          });
          nextStep();
          return;
        }
        await ((_b = step.onSubmit) == null ? void 0 : _b.call(step, data, stepper));
        nextStep();
      } catch (e) {
      }
    },
    [steps, activeStep, isLastStep, mergedData]
  );
  const getFormProps = React12.useCallback(() => {
    const step = steps[activeStep];
    return {
      onSubmit: onSubmitStep,
      schema: step == null ? void 0 : step.schema,
      resolver: (step == null ? void 0 : step.schema) ? (
        /* @todo fix resolver type */
        resolver == null ? void 0 : resolver(step.schema)
      ) : void 0,
      fieldResolver: (step == null ? void 0 : step.schema) ? fieldResolver == null ? void 0 : fieldResolver(step.schema) : void 0
    };
  }, [steps, onSubmitStep, activeStep, resolver, fieldResolver]);
  const updateStep = React12.useCallback(
    (step) => {
      const stepOptions = options == null ? void 0 : options.find((s) => s.name === step.name);
      updateSteps((steps2) => {
        return {
          ...steps2,
          [step.name]: {
            ...step,
            schema: stepOptions == null ? void 0 : stepOptions.schema
          }
        };
      });
    },
    [steps, options]
  );
  return {
    getFormProps,
    updateStep,
    steps,
    ...stepper
  };
}
function useFormStep(props) {
  const { name, schema, resolver, onSubmit } = props;
  const step = useStep({ name });
  const { steps, updateStep } = useStepFormContext();
  React12.useEffect(() => {
    updateStep({ name, schema, resolver, onSubmit });
  }, [name, schema]);
  return {
    ...step,
    ...steps[name] || { name, schema }
  };
}

// src/step-form.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var FormStepper = (props) => {
  const { activeIndex, setIndex } = useStepperContext();
  const {
    children,
    orientation,
    variant,
    colorScheme,
    size,
    onChange: onChangeProp,
    render,
    ...rest
  } = props;
  const elements = React13.Children.map(children, (child) => {
    if (React13.isValidElement(child) && (child == null ? void 0 : child.type) === FormStep) {
      const { isCompleted } = useFormStep(child.props);
      return /* @__PURE__ */ jsx19(
        StepsItem,
        {
          render,
          name: child.props.name,
          title: child.props.title,
          isCompleted,
          ...rest,
          children: child.props.children
        }
      );
    }
    return child;
  });
  const onChange = React13.useCallback((i) => {
    setIndex(i);
    onChangeProp == null ? void 0 : onChangeProp(i);
  }, []);
  return /* @__PURE__ */ jsx19(
    Steps,
    {
      orientation,
      step: activeIndex,
      variant,
      colorScheme,
      size,
      onChange,
      children: elements
    }
  );
};
var FormStep = (props) => {
  const { name, children, className, onSubmit, ...rest } = props;
  const step = useFormStep({ name, onSubmit });
  const { isActive } = step;
  return isActive ? /* @__PURE__ */ jsx19(chakra4.div, { ...rest, className: cx3("sui-form__step", className), children }) : null;
};
FormStep.displayName = "FormStep";
var PrevButton = (props) => {
  const { isFirstStep, isCompleted, prevStep } = useStepperContext();
  return /* @__PURE__ */ jsx19(
    Button5,
    {
      isDisabled: isFirstStep || isCompleted,
      children: "Back",
      ...props,
      className: cx3("sui-form__prev-button", props.className),
      onClick: callAllHandlers2(props.onClick, prevStep)
    }
  );
};
PrevButton.displayName = "PrevButton";
var NextButton = (props) => {
  const { label = "Next", submitLabel = "Complete", ...rest } = props;
  const { isLastStep, isCompleted } = useStepperContext();
  return /* @__PURE__ */ jsx19(
    SubmitButton,
    {
      ...rest,
      isDisabled: isCompleted,
      className: cx3("sui-form__next-button", props.className),
      children: isLastStep || isCompleted ? submitLabel : label
    }
  );
};
NextButton.displayName = "NextButton";

// src/field-resolver.ts
import { get as get2 } from "@chakra-ui/utils";
var mapFields = (schema) => schema && Object.entries(schema).map(([name, props]) => {
  const { items, label, title, ...field } = props;
  return {
    ...field,
    name,
    label: label || title || name
    // json schema compatibility
  };
});
var objectFieldResolver = (schema) => {
  const getFields = () => {
    return mapFields(schema);
  };
  const getNestedFields = (name) => {
    var _a;
    const field = get2(schema, name);
    if (!field) return [];
    if (((_a = field.items) == null ? void 0 : _a.type) === "object") {
      return mapFields(field.items.properties);
    } else if (field.type === "object") {
      return mapFields(field.properties);
    }
    return [field.items];
  };
  return { getFields, getNestedFields };
};

// src/watch-field.tsx
import { useWatch as useWatch2 } from "react-hook-form";
var WatchField = (props) => {
  const { name, defaultValue, isDisabled, isExact } = props;
  const form = useFormContext();
  const field = useWatch2({
    name,
    defaultValue,
    disabled: isDisabled,
    exact: isExact
  });
  return props.children(field, form) || null;
};

// src/create-form.tsx
import { useMemo as useMemo3 } from "react";
import { forwardRef as forwardRef14 } from "@chakra-ui/react";

// src/form.tsx
import * as React14 from "react";
import { chakra as chakra5, forwardRef as forwardRef13 } from "@chakra-ui/react";
import {
  cx as cx4,
  runIfFn
} from "@chakra-ui/utils";
import {
  useForm
} from "react-hook-form";
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var Form = forwardRef13(
  (props, ref) => {
    const {
      mode = "all",
      resolver,
      fieldResolver,
      fields,
      reValidateMode,
      shouldFocusError,
      shouldUnregister,
      shouldUseNativeValidation,
      criteriaMode,
      delayError,
      schema,
      defaultValues,
      values,
      context,
      resetOptions,
      onChange,
      onSubmit,
      onError,
      formRef,
      children,
      ...rest
    } = props;
    const form = {
      mode,
      resolver,
      defaultValues,
      values,
      reValidateMode,
      shouldFocusError,
      shouldUnregister,
      shouldUseNativeValidation,
      criteriaMode,
      delayError,
      context,
      resetOptions
    };
    const methods = useForm(form);
    const { handleSubmit } = methods;
    React14.useImperativeHandle(formRef, () => methods, [formRef, methods]);
    React14.useEffect(() => {
      let subscription;
      if (onChange) {
        subscription = methods.watch(onChange);
      }
      return () => subscription == null ? void 0 : subscription.unsubscribe();
    }, [methods, onChange]);
    let _children = children;
    if (!_children && fieldResolver) {
      _children = /* @__PURE__ */ jsxs9(FormLayout, { children: [
        /* @__PURE__ */ jsx20(AutoFields, {}),
        /* @__PURE__ */ jsx20(SubmitButton, { ...fields == null ? void 0 : fields.submit })
      ] });
    }
    return /* @__PURE__ */ jsx20(
      FormProvider,
      {
        ...methods,
        schema,
        fieldResolver,
        fields,
        children: /* @__PURE__ */ jsx20(
          chakra5.form,
          {
            ref,
            onSubmit: handleSubmit(onSubmit, onError),
            ...rest,
            className: cx4("sui-form", props.className),
            children: runIfFn(_children, {
              Field,
              DisplayIf,
              ArrayField,
              ObjectField,
              ...methods
            })
          }
        )
      }
    );
  }
);
Form.displayName = "Form";

// src/create-form.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function createForm({
  resolver,
  fieldResolver = objectFieldResolver,
  fields,
  getBaseField
} = {}) {
  const DefaultForm = forwardRef14(
    (props, ref) => {
      const {
        schema,
        resolver: resolverProp,
        fieldResolver: fieldResolverProp,
        ...rest
      } = props;
      const fieldsContext = useMemo3(
        () => ({
          fields: { ...defaultFieldTypes, ...fields },
          getBaseField
        }),
        [fields, getBaseField]
      );
      return /* @__PURE__ */ jsx21(FieldsProvider, { value: fieldsContext, children: /* @__PURE__ */ jsx21(
        Form,
        {
          ref,
          resolver: resolverProp != null ? resolverProp : resolver == null ? void 0 : resolver(props.schema),
          fieldResolver: fieldResolverProp != null ? fieldResolverProp : fieldResolver == null ? void 0 : fieldResolver(schema),
          ...rest
        }
      ) });
    }
  );
  DefaultForm.displayName = "Form";
  DefaultForm.id = "Form";
  return DefaultForm;
}

// src/create-step-form.tsx
import { useMemo as useMemo4 } from "react";
import { forwardRef as forwardRef15 } from "@chakra-ui/react";
import { StepperProvider } from "@saas-ui/core";
import { runIfFn as runIfFn2 } from "@chakra-ui/utils";
import { jsx as jsx22 } from "react/jsx-runtime";
function createStepForm({
  fields,
  resolver,
  fieldResolver,
  getBaseField
} = {}) {
  const StepForm2 = forwardRef15((props, ref) => {
    const { children, steps, ...rest } = props;
    const stepper = useStepForm({
      resolver,
      fieldResolver,
      ...props
    });
    const { getFormProps, ...ctx } = stepper;
    const context = useMemo4(() => ctx, [ctx]);
    const fieldsContext = {
      fields: {
        ...defaultFieldTypes,
        ...fields
      },
      getBaseField
    };
    return /* @__PURE__ */ jsx22(StepperProvider, { value: context, children: /* @__PURE__ */ jsx22(StepFormProvider, { value: context, children: /* @__PURE__ */ jsx22(FieldsProvider, { value: fieldsContext, children: /* @__PURE__ */ jsx22(Form, { ref, ...rest, ...getFormProps(), children: runIfFn2(children, {
      ...stepper,
      Field,
      FormStep,
      DisplayIf,
      ArrayField,
      ObjectField
    }) }) }) }) });
  });
  StepForm2.displayName = `Step${Form.displayName || Form.name}`;
  return StepForm2;
}

// src/index.ts
import {
  appendErrors,
  useController,
  useFieldArray as useFieldArray2,
  useForm as useForm2,
  useFormState,
  useWatch as useWatch3,
  Controller as Controller2
} from "react-hook-form";
var Form2 = createForm();
var StepForm = createStepForm();
export {
  ArrayField,
  ArrayFieldAddButton,
  ArrayFieldContainer,
  ArrayFieldProvider,
  ArrayFieldRemoveButton,
  ArrayFieldRow,
  ArrayFieldRowContainer,
  ArrayFieldRowFields,
  ArrayFieldRowProvider,
  ArrayFieldRows,
  AutoFields,
  BaseField,
  Form as BaseForm,
  CheckboxField,
  Controller2 as Controller,
  DisplayField,
  DisplayIf,
  Field,
  FieldsProvider,
  Form2 as Form,
  FormLayout,
  FormLegend,
  FormProvider,
  FormStep,
  FormStepper,
  FormValue,
  InputField,
  InputRightButton,
  NativeSelect,
  NativeSelectField,
  NextButton,
  NumberInputField2 as NumberInputField,
  ObjectField,
  PasswordInput,
  PasswordInputField,
  PinField,
  PrevButton,
  RadioField,
  RadioInput,
  Select,
  SelectButton,
  SelectField,
  SelectList,
  SelectOption,
  StepForm,
  StepFormProvider,
  SubmitButton,
  SwitchField,
  TextareaField,
  WatchField,
  appendErrors,
  createField,
  createForm,
  createStepForm,
  defaultFieldTypes,
  objectFieldResolver,
  useArrayField,
  useArrayFieldAddButton,
  useArrayFieldContext,
  useArrayFieldRemoveButton,
  useArrayFieldRow,
  useArrayFieldRowContext,
  useBaseField,
  useController,
  useField,
  useFieldArray2 as useFieldArray,
  useForm2 as useForm,
  useFormContext,
  useFormState,
  useFormStep,
  useStepForm,
  useStepFormContext,
  useWatch3 as useWatch
};
//# sourceMappingURL=index.mjs.map