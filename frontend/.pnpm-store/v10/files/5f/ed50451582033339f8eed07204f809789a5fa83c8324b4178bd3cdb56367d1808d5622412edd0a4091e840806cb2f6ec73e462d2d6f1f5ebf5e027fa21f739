'use client'
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
  ArrayField: () => ArrayField,
  ArrayFieldAddButton: () => ArrayFieldAddButton,
  ArrayFieldContainer: () => ArrayFieldContainer,
  ArrayFieldProvider: () => ArrayFieldProvider,
  ArrayFieldRemoveButton: () => ArrayFieldRemoveButton,
  ArrayFieldRow: () => ArrayFieldRow,
  ArrayFieldRowContainer: () => ArrayFieldRowContainer,
  ArrayFieldRowFields: () => ArrayFieldRowFields,
  ArrayFieldRowProvider: () => ArrayFieldRowProvider,
  ArrayFieldRows: () => ArrayFieldRows,
  AutoFields: () => AutoFields,
  BaseField: () => BaseField,
  BaseForm: () => Form,
  CheckboxField: () => CheckboxField,
  Controller: () => import_react_hook_form9.Controller,
  DisplayField: () => DisplayField,
  DisplayIf: () => DisplayIf,
  Field: () => Field,
  FieldsProvider: () => FieldsProvider,
  Form: () => Form2,
  FormLayout: () => FormLayout,
  FormLegend: () => FormLegend,
  FormProvider: () => FormProvider,
  FormStep: () => FormStep,
  FormStepper: () => FormStepper,
  FormValue: () => FormValue,
  InputField: () => InputField,
  InputRightButton: () => InputRightButton,
  NativeSelect: () => NativeSelect,
  NativeSelectField: () => NativeSelectField,
  NextButton: () => NextButton,
  NumberInputField: () => NumberInputField2,
  ObjectField: () => ObjectField,
  PasswordInput: () => PasswordInput,
  PasswordInputField: () => PasswordInputField,
  PinField: () => PinField,
  PrevButton: () => PrevButton,
  RadioField: () => RadioField,
  RadioInput: () => RadioInput,
  Select: () => Select,
  SelectButton: () => SelectButton,
  SelectField: () => SelectField,
  SelectList: () => SelectList,
  SelectOption: () => SelectOption,
  StepForm: () => StepForm,
  StepFormProvider: () => StepFormProvider,
  SubmitButton: () => SubmitButton,
  SwitchField: () => SwitchField,
  TextareaField: () => TextareaField,
  WatchField: () => WatchField,
  appendErrors: () => import_react_hook_form9.appendErrors,
  createField: () => createField,
  createForm: () => createForm,
  createStepForm: () => createStepForm,
  defaultFieldTypes: () => defaultFieldTypes,
  objectFieldResolver: () => objectFieldResolver,
  useArrayField: () => useArrayField,
  useArrayFieldAddButton: () => useArrayFieldAddButton,
  useArrayFieldContext: () => useArrayFieldContext,
  useArrayFieldRemoveButton: () => useArrayFieldRemoveButton,
  useArrayFieldRow: () => useArrayFieldRow,
  useArrayFieldRowContext: () => useArrayFieldRowContext,
  useBaseField: () => useBaseField,
  useController: () => import_react_hook_form9.useController,
  useField: () => useField,
  useFieldArray: () => import_react_hook_form9.useFieldArray,
  useForm: () => import_react_hook_form9.useForm,
  useFormContext: () => useFormContext,
  useFormState: () => import_react_hook_form9.useFormState,
  useFormStep: () => useFormStep,
  useStepForm: () => useStepForm,
  useStepFormContext: () => useStepFormContext,
  useWatch: () => import_react_hook_form9.useWatch
});
module.exports = __toCommonJS(src_exports);

// src/form-context.tsx
var React = __toESM(require("react"));
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime = require("react/jsx-runtime");
var FormContext = React.createContext(null);
var useFormContext = () => {
  const context = React.useContext(FormContext);
  const hookContext = (0, import_react_hook_form.useFormContext)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hook_form.FormProvider, { ...rest, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormContext.Provider, { value: { fieldResolver, schema, fields }, children }) });
};

// src/display-field.tsx
var import_react = require("@chakra-ui/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var DisplayField = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react.FormControl, { ...props, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.FormLabel, { htmlFor: name, children: label }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Text, { fontSize: "md", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormValue, { name }) })
  ] });
};
DisplayField.displayName = "DisplayField";
var FormValue = ({ name }) => {
  const { getValues } = useFormContext();
  return getValues(name) || null;
};
FormValue.displayName = "FormValue";

// src/field.tsx
var React7 = __toESM(require("react"));

// src/fields-context.tsx
var import_react2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var FieldsContext = import_react2.default.createContext(null);
var FieldsProvider = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FieldsContext.Provider, { value: props.value, children: props.children });
};
var useFieldsContext = () => {
  return import_react2.default.useContext(FieldsContext);
};
var useField = (type, fallback) => {
  var _a;
  const context = import_react2.default.useContext(FieldsContext);
  return ((_a = context == null ? void 0 : context.fields) == null ? void 0 : _a[type]) || fallback;
};

// src/default-fields.tsx
var import_react14 = require("@chakra-ui/react");

// src/number-input/number-input.tsx
var import_react3 = require("@chakra-ui/react");
var import_core = require("@saas-ui/core");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Input = (0, import_react3.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NumberInputField, { ref, ...props }));
Input.displayName = "NumberInputField";
Input.id = "Input";
var NumberInput = (0, import_react3.forwardRef)((props, ref) => {
  const {
    hideStepper = false,
    incrementIcon = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core.ChevronUpIcon, {}),
    decrementIcon = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core.ChevronDownIcon, {}),
    leftAddon,
    rightAddon,
    placeholder,
    fieldProps: _fieldProps,
    ...rest
  } = props;
  const fieldProps = { placeholder, ..._fieldProps };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.NumberInput, { ...rest, ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.InputGroup, { children: [
      leftAddon,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Input, { ...fieldProps }),
      rightAddon
    ] }),
    !hideStepper && !rightAddon ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.NumberInputStepper, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NumberIncrementStepper, { children: incrementIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NumberDecrementStepper, { children: decrementIcon })
    ] }) : null
  ] });
});
NumberInput.displayName = "NumberInput";

// src/password-input/password-input.tsx
var import_react5 = require("react");
var import_react6 = require("@chakra-ui/react");
var import_icons = require("@saas-ui/core/icons");

// src/input-right-button/input-right-button.tsx
var import_react4 = require("@chakra-ui/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var InputRightButton = (0, import_react4.forwardRef)(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.InputRightElement, { w: "auto", px: "1", py: "1", alignItems: "stretch", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Button, { ref, height: "auto", ...props }) });
  }
);
InputRightButton.id = "InputRightElement";
InputRightButton.displayName = "InputRightButton";

// src/password-input/password-input.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var PasswordInput = (0, import_react6.forwardRef)(
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
    const [show, setShow] = (0, import_react5.useState)(false);
    const handleClick = () => setShow(!show);
    const label = show ? "Hide password" : "Show password";
    let icon;
    if (show) {
      icon = viewIcon || /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons.ViewIcon, {});
    } else {
      icon = viewOffIcon || /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons.ViewOffIcon, {});
    }
    const groupProps = {
      width: w || width,
      size,
      variant
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react6.InputGroup, { ...groupProps, children: [
      leftAddon,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react6.Input,
        {
          ...inputProps,
          ref,
          type: show ? "text" : "password",
          autoComplete: show ? "off" : autoComplete
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_react7 = require("@chakra-ui/react");

// src/utils.ts
var React4 = __toESM(require("react"));
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var RadioInput = (0, import_react7.forwardRef)(
  ({ options: optionsProp, spacing, direction, ...props }, ref) => {
    const { onBlur, onChange, ...groupProps } = props;
    const options = mapOptions(optionsProp);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react7.RadioGroup, { onChange, ...groupProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react7.Stack, { spacing, direction, children: options.map(({ value, label, ...radioProps }, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react7.Radio,
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
var import_react10 = require("@chakra-ui/react");
var import_utils4 = require("@chakra-ui/utils");
var import_core2 = require("@saas-ui/core");

// src/select/select-context.tsx
var import_react8 = require("@chakra-ui/react");
var import_utils2 = require("@chakra-ui/utils");
var import_react9 = __toESM(require("react"));
var [SelectStylesProvider, useSelectStyles] = (0, import_react8.createStylesContext)("SuiSelect");
var [SelectProvider, useSelectContext] = (0, import_utils2.createContext)({
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
  const [currentValue, setCurrentValue] = (0, import_react8.useControllableState)({
    value,
    defaultValue,
    onChange
  });
  const controlProps = (0, import_react8.useFormControl)({ name });
  const options = import_react9.default.useMemo(
    () => optionsProp && mapOptions(optionsProp),
    [optionsProp]
  );
  const handleChange = (value2) => {
    setCurrentValue(value2);
  };
  const getDisplayValue = import_react9.default.useCallback(
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
  const displayValue = import_react9.default.useMemo(
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var SelectButton = (0, import_react10.forwardRef)(
  (props, ref) => {
    var _a, _b, _c, _d, _e;
    const {
      displayValue,
      renderValue,
      placeholder,
      isDisabled: isSelectDisabled
    } = useSelectContext();
    const context = (0, import_react10.useFormControlContext)();
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
    const { rightIcon = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core2.ChevronDownIcon, {}), ...rest } = props;
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
    const buttonProps = (0, import_react10.useMenuButton)(rest, ref);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_react10.Button,
      {
        ...buttonProps,
        sx: buttonStyles,
        ...rest,
        onFocus,
        onBlur,
        isDisabled: isDisabled || isSelectDisabled,
        "data-invalid": (0, import_utils4.dataAttr)(isInvalid),
        "data-read-only": (0, import_utils4.dataAttr)(isReadOnly),
        "data-focus": (0, import_utils4.dataAttr)(isFocused),
        "data-required": (0, import_utils4.dataAttr)(isRequired),
        rightIcon,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react10.chakra.span,
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
var Select = (0, import_react10.forwardRef)((props, ref) => {
  const { name, children, isDisabled, multiple, ...rest } = props;
  const styles = (0, import_react10.useMultiStyleConfig)("SuiSelect", props);
  const menuProps = (0, import_react10.omitThemingProps)(rest);
  const context = useSelect(props);
  const { value, controlProps } = context;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectStylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react10.Menu, { ...menuProps, closeOnSelect: !multiple, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react10.chakra.div, { className: (0, import_utils4.cx)("sui-select"), children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_react10.chakra.input,
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react10.MenuList, { maxH: "100vh", overflowY: "auto", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react10.MenuOptionGroup,
    {
      defaultValue: defaultValue || value,
      value,
      onChange,
      type: multiple ? "checkbox" : "radio",
      children: options ? options.map(({ value: value2, label, ...rest }, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectOption, { value: value2, ...rest, children: label || value2 }, i)) : props.children
    }
  ) });
};
Select.displayName = "Select";
var SelectOption = (0, import_react10.forwardRef)(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react10.MenuItemOption, { ref, ...props });
  }
);
SelectOption.id = "MenuItemOption";
SelectOption.displayName = "SelectOption";

// src/select/native-select.tsx
var import_react11 = require("@chakra-ui/react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var NativeSelect = (0, import_react11.forwardRef)(
  ({ options, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.Select, { ref, ...props, children: children || (options == null ? void 0 : options.map(({ value, label }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value, children: label || value }, value);
    })) });
  }
);
NativeSelect.displayName = "NativeSelect";

// src/create-field.tsx
var React6 = __toESM(require("react"));
var import_react_hook_form3 = require("react-hook-form");
var import_react13 = require("@chakra-ui/react");
var import_utils5 = require("@chakra-ui/utils");
var import_core4 = require("@saas-ui/core");

// src/base-field.tsx
var import_react_hook_form2 = require("react-hook-form");
var import_react12 = require("@chakra-ui/react");
var import_core3 = require("@saas-ui/core");
var import_jsx_runtime10 = require("react/jsx-runtime");
var getError = (name, formState) => {
  return (0, import_react_hook_form2.get)(formState.errors, name);
};
var isTouched = (name, formState) => {
  return (0, import_react_hook_form2.get)(formState.touchedFields, name);
};
var useBaseField = (props) => {
  const [fieldProps] = (0, import_core3.splitProps)(props, ["name", "label", "help", "hideLabel"]);
  const [controlProps] = (0, import_core3.splitProps)(props, [
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_react12.FormControl,
    {
      ...rest,
      isInvalid,
      variant: direction === "row" ? "horizontal" : void 0,
      children: [
        label && !hideLabel ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react12.FormLabel, { children: label }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react12.Box, { children: [
          props.children,
          help && !(error == null ? void 0 : error.message) ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react12.FormHelperText, { children: help }) : null,
          (error == null ? void 0 : error.message) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react12.FormErrorMessage, { children: error == null ? void 0 : error.message })
        ] })
      ]
    }
  );
};
BaseField.displayName = "BaseField";

// src/create-field.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var _createField = (InputComponent, { displayName, hideLabel, getBaseField: getBaseFieldProp }) => {
  const Field2 = (0, import_react13.forwardRef)((props, ref) => {
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
    const [, inputProps] = (0, import_core4.splitProps)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BaseField2, { hideLabel, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return (0, import_react13.forwardRef)(
    ({ name, rules, ...inputProps }, ref) => {
      const { control } = useFormContext();
      const onChange = inputProps.onChange;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_react_hook_form3.Controller,
        {
          name,
          control,
          rules,
          render: ({ field: { ref: _ref, ...field } }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            InputComponent,
            {
              ...field,
              ...inputProps,
              onChange: (0, import_utils5.callAllHandlers)(onChange, field.onChange),
              onBlur: (0, import_utils5.callAllHandlers)(inputProps.onBlur, field.onBlur),
              ref: (0, import_react13.useMergeRefs)(ref, _ref)
            }
          )
        }
      );
    }
  );
};
var withUncontrolledInput = (InputComponent) => {
  return (0, import_react13.forwardRef)(
    ({ name, rules, ...inputProps }, ref) => {
      const { register } = useFormContext();
      const { ref: _ref, ...field } = register(name, rules);
      const onChange = inputProps.onChange;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        InputComponent,
        {
          ...field,
          ...inputProps,
          onChange: (0, import_utils5.callAllHandlers)(onChange, field.onChange),
          onBlur: (0, import_utils5.callAllHandlers)(inputProps.onBlur, field.onBlur),
          ref: (0, import_react13.useMergeRefs)(ref, _ref)
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
var import_jsx_runtime12 = require("react/jsx-runtime");
var InputField = createField(
  (0, import_react14.forwardRef)(({ type = "text", leftAddon, rightAddon, size, ...rest }, ref) => {
    const input = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.Input, { type, size, ...rest, ref });
    if (leftAddon || rightAddon) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react14.InputGroup, { size, children: [
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
  (0, import_react14.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PasswordInput, { ref, ...props }))
);
var TextareaField = createField(import_react14.Textarea);
var SwitchField = createField(
  (0, import_react14.forwardRef)(({ type, value, ...rest }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.Switch, { isChecked: !!value, ...rest, ref });
  }),
  {
    isControlled: true
  }
);
var SelectField = createField(
  (0, import_react14.forwardRef)((props, ref) => {
    const { buttonProps, listProps, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Select, { ref, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectButton, { ...buttonProps }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectList, { ...listProps })
    ] });
  }),
  {
    isControlled: true
  }
);
var CheckboxField = createField(
  (0, import_react14.forwardRef)(({ label, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.Checkbox, { ref, ...props, children: label });
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
  (0, import_react14.forwardRef)((props, ref) => {
    const { pinLength = 4, pinType, spacing, ...inputProps } = props;
    const inputs = [];
    for (let i = 0; i < pinLength; i++) {
      inputs.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.PinInputField, { ref }, i));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.HStack, { spacing, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react14.PinInput, { ...inputProps, type: pinType, children: inputs }) });
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
var import_jsx_runtime13 = require("react/jsx-runtime");
var defaultInputType = "text";
var Field = React7.forwardRef(
  (props, ref) => {
    const { type = defaultInputType, name } = props;
    const overrides = useFieldProps(name);
    const InputComponent = useField((overrides == null ? void 0 : overrides.type) || type, InputField);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(InputComponent, { ref, ...props, ...overrides });
  }
);

// src/fields.tsx
var React10 = __toESM(require("react"));

// src/layout.tsx
var import_react15 = require("@chakra-ui/react");
var import_utils6 = require("@chakra-ui/utils");
var import_jsx_runtime14 = require("react/jsx-runtime");
var FormLayoutItem = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react15.chakra.div, { children });
};
FormLayoutItem.displayName = "FormLayoutItem";
var FormLayout = ({ children, ...props }) => {
  var _a, _b, _c;
  const theme = (0, import_react15.useTheme)();
  const defaultProps = (_c = (_b = (_a = theme.components) == null ? void 0 : _a.SuiFormLayout) == null ? void 0 : _b.defaultProps) != null ? _c : {
    spacing: 4
  };
  const styles = (0, import_react15.useStyleConfig)("SuiFormLayout", props);
  const gridProps = (0, import_react15.omitThemingProps)({
    ...defaultProps,
    ...props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_react15.SimpleGrid,
    {
      ...gridProps,
      className: (0, import_utils6.cx)("sui-form__layout", props.className),
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
var React9 = __toESM(require("react"));
var import_react16 = require("@chakra-ui/react");
var import_icons2 = require("@saas-ui/core/icons");

// src/use-array-field.tsx
var React8 = __toESM(require("react"));
var import_react_hook_form4 = require("react-hook-form");
var import_utils7 = require("@chakra-ui/utils");
var [ArrayFieldProvider, useArrayFieldContext] = (0, import_utils7.createContext)({
  name: "ArrayFieldContext"
});
var [ArrayFieldRowProvider, useArrayFieldRowContext] = (0, import_utils7.createContext)({
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
  const context = (0, import_react_hook_form4.useFieldArray)({
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
var import_utils9 = require("@chakra-ui/utils");
var import_jsx_runtime15 = require("react/jsx-runtime");
var ArrayFieldRow = ({
  children,
  index,
  ...rowFieldsProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ArrayFieldRowContainer, { index, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldRowFields, { ...rowFieldsProps, children }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldRemoveButton, {})
  ] });
};
ArrayFieldRow.displayName = "ArrayFieldRow";
var ArrayFieldRowFields = ({
  children,
  ...layoutProps
}) => {
  const { name } = useArrayFieldRowContext();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormLayout, { flex: "1", mr: "2", ...layoutProps, children: mapNestedFields(name, children) });
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldRowProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react16.chakra.div, { ...rest, __css: styles, children }) });
};
ArrayFieldRowContainer.displayName = "ArrayFieldRowContainer";
var ArrayFieldRemoveButton = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react16.Button, { "aria-label": "Remove row", ...useArrayFieldRemoveButton(), ...props, children: props.children || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_icons2.MinusIcon, {}) });
};
ArrayFieldRemoveButton.displayName = "ArrayFieldRemoveButton";
var ArrayFieldAddButton = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_react16.Button,
    {
      "aria-label": "Add row",
      float: "right",
      ...useArrayFieldAddButton(),
      ...props,
      children: props.children || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_icons2.PlusIcon, {})
    }
  );
};
ArrayFieldAddButton.displayName = "ArrayFieldAddButton";
var ArrayField = (0, import_react16.forwardRef)(
  (props, ref) => {
    const { children, ...containerProps } = props;
    const rowFn = (0, import_utils9.isFunction)(children) ? children : (fields) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: fields.map(({ id }, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldRow, { index, children }, id)) || null });
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ArrayFieldContainer, { ref, ...containerProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldRows, { children: rowFn }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldAddButton, {})
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ArrayFieldProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BaseField, { name, ...fieldProps, ...overrides, children }) });
  }
);
ArrayFieldContainer.displayName = "ArrayFieldContainer";

// src/object-field.tsx
var import_react17 = require("@chakra-ui/react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var FormLegend = (props) => {
  const styles = (0, import_react17.useStyleConfig)("SuiFormLegend");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react17.FormLabel, { as: "legend", sx: styles, ...props });
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react17.FormControl, { name, as: "fieldset", ...fieldProps, ...overrides, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FormLegend, { display: hideLabelProp || hideLabel ? "none" : "block", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_jsx_runtime17 = require("react/jsx-runtime");
var mapNestedFields2 = (resolver, name) => {
  var _a;
  return (_a = resolver.getNestedFields(name)) == null ? void 0 : _a.map(
    ({ name: name2, type, ...nestedFieldProps }, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(FormLayout, { ...props, children: fields == null ? void 0 : fields.map(
    ({
      name,
      type,
      defaultValue,
      ...fieldProps
    }) => {
      if (type === "array") {
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ArrayField, { name, ...fieldProps, children: mapNestedFields2(resolver, name) }, name);
      } else if (type === "object") {
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ObjectField, { name, ...fieldProps, children: mapNestedFields2(resolver, name) }, name);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_react_hook_form5 = require("react-hook-form");
var import_react18 = require("@chakra-ui/react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var SubmitButton = (0, import_react18.forwardRef)(
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
    const { formState } = (0, import_react_hook_form5.useFormContext)();
    const field = useFieldProps("submit");
    const {
      disableIfUntouched: disableIfUntouchedOverride,
      disableIfInvalid: disableIfInvalidOverride,
      ...fieldProps
    } = field;
    const disableIfUntouched = disableIfUntouchedOverride != null ? disableIfUntouchedOverride : disableIfUntouchedProp;
    const disableIfInvalid = disableIfInvalidOverride != null ? disableIfInvalidOverride : disableIfInvalidProp;
    const isDisabled = disableIfUntouched && !formState.isDirty || disableIfInvalid && !formState.isValid || isDisabledProp;
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_react18.Button,
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
var React11 = __toESM(require("react"));
var import_react_hook_form6 = require("react-hook-form");
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
  const value = (0, import_react_hook_form6.useWatch)({
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
var React13 = __toESM(require("react"));
var import_react19 = require("@chakra-ui/react");
var import_utils12 = require("@chakra-ui/utils");
var import_core6 = require("@saas-ui/core");

// src/use-step-form.tsx
var React12 = __toESM(require("react"));
var import_utils11 = require("@chakra-ui/utils");
var import_core5 = require("@saas-ui/core");
var [StepFormProvider, useStepFormContext] = (0, import_utils11.createContext)({
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
  const stepper = (0, import_core5.useStepper)(rest);
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
  const step = (0, import_core5.useStep)({ name });
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
var import_jsx_runtime19 = require("react/jsx-runtime");
var FormStepper = (props) => {
  const { activeIndex, setIndex } = (0, import_core6.useStepperContext)();
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
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        import_core6.StepsItem,
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_core6.Steps,
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
  return isActive ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react19.chakra.div, { ...rest, className: (0, import_utils12.cx)("sui-form__step", className), children }) : null;
};
FormStep.displayName = "FormStep";
var PrevButton = (props) => {
  const { isFirstStep, isCompleted, prevStep } = (0, import_core6.useStepperContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_react19.Button,
    {
      isDisabled: isFirstStep || isCompleted,
      children: "Back",
      ...props,
      className: (0, import_utils12.cx)("sui-form__prev-button", props.className),
      onClick: (0, import_utils12.callAllHandlers)(props.onClick, prevStep)
    }
  );
};
PrevButton.displayName = "PrevButton";
var NextButton = (props) => {
  const { label = "Next", submitLabel = "Complete", ...rest } = props;
  const { isLastStep, isCompleted } = (0, import_core6.useStepperContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SubmitButton,
    {
      ...rest,
      isDisabled: isCompleted,
      className: (0, import_utils12.cx)("sui-form__next-button", props.className),
      children: isLastStep || isCompleted ? submitLabel : label
    }
  );
};
NextButton.displayName = "NextButton";

// src/field-resolver.ts
var import_utils13 = require("@chakra-ui/utils");
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
    const field = (0, import_utils13.get)(schema, name);
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
var import_react_hook_form7 = require("react-hook-form");
var WatchField = (props) => {
  const { name, defaultValue, isDisabled, isExact } = props;
  const form = useFormContext();
  const field = (0, import_react_hook_form7.useWatch)({
    name,
    defaultValue,
    disabled: isDisabled,
    exact: isExact
  });
  return props.children(field, form) || null;
};

// src/create-form.tsx
var import_react21 = require("react");
var import_react22 = require("@chakra-ui/react");

// src/form.tsx
var React14 = __toESM(require("react"));
var import_react20 = require("@chakra-ui/react");
var import_utils14 = require("@chakra-ui/utils");
var import_react_hook_form8 = require("react-hook-form");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Form = (0, import_react20.forwardRef)(
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
    const methods = (0, import_react_hook_form8.useForm)(form);
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
      _children = /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(FormLayout, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AutoFields, {}),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SubmitButton, { ...fields == null ? void 0 : fields.submit })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      FormProvider,
      {
        ...methods,
        schema,
        fieldResolver,
        fields,
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_react20.chakra.form,
          {
            ref,
            onSubmit: handleSubmit(onSubmit, onError),
            ...rest,
            className: (0, import_utils14.cx)("sui-form", props.className),
            children: (0, import_utils14.runIfFn)(_children, {
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
var import_jsx_runtime21 = require("react/jsx-runtime");
function createForm({
  resolver,
  fieldResolver = objectFieldResolver,
  fields,
  getBaseField
} = {}) {
  const DefaultForm = (0, import_react22.forwardRef)(
    (props, ref) => {
      const {
        schema,
        resolver: resolverProp,
        fieldResolver: fieldResolverProp,
        ...rest
      } = props;
      const fieldsContext = (0, import_react21.useMemo)(
        () => ({
          fields: { ...defaultFieldTypes, ...fields },
          getBaseField
        }),
        [fields, getBaseField]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FieldsProvider, { value: fieldsContext, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_react23 = require("react");
var import_react24 = require("@chakra-ui/react");
var import_core7 = require("@saas-ui/core");
var import_utils15 = require("@chakra-ui/utils");
var import_jsx_runtime22 = require("react/jsx-runtime");
function createStepForm({
  fields,
  resolver,
  fieldResolver,
  getBaseField
} = {}) {
  const StepForm2 = (0, import_react24.forwardRef)((props, ref) => {
    const { children, steps, ...rest } = props;
    const stepper = useStepForm({
      resolver,
      fieldResolver,
      ...props
    });
    const { getFormProps, ...ctx } = stepper;
    const context = (0, import_react23.useMemo)(() => ctx, [ctx]);
    const fieldsContext = {
      fields: {
        ...defaultFieldTypes,
        ...fields
      },
      getBaseField
    };
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_core7.StepperProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(StepFormProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FieldsProvider, { value: fieldsContext, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Form, { ref, ...rest, ...getFormProps(), children: (0, import_utils15.runIfFn)(children, {
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
var import_react_hook_form9 = require("react-hook-form");
var Form2 = createForm();
var StepForm = createStepForm();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  BaseForm,
  CheckboxField,
  Controller,
  DisplayField,
  DisplayIf,
  Field,
  FieldsProvider,
  Form,
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
  NumberInputField,
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
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useFormStep,
  useStepForm,
  useStepFormContext,
  useWatch
});
//# sourceMappingURL=index.js.map