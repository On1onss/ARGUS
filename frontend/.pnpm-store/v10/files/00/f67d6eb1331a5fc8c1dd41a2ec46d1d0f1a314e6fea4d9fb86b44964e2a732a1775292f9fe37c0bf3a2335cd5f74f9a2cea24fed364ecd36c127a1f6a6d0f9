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

// src/yup/index.ts
var yup_exports = {};
__export(yup_exports, {
  FormDialog: () => FormDialog2,
  createYupFormDialog: () => createYupFormDialog
});
module.exports = __toCommonJS(yup_exports);
var import_yup = require("@saas-ui/forms/yup");

// src/form.tsx
var import_react2 = require("@chakra-ui/react");
var import_react_utils = require("@saas-ui/react-utils");
var import_forms = require("@saas-ui/forms");

// src/modal.tsx
var import_react = require("@chakra-ui/react");
var import_utils = require("@chakra-ui/utils");
var import_jsx_runtime = require("react/jsx-runtime");
var BaseModal = (props) => {
  const {
    title,
    footer,
    children,
    isOpen,
    onClose,
    hideCloseButton,
    hideOverlay,
    headerProps,
    contentProps,
    footerProps,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Modal, { isOpen, onClose, ...rest, children: [
    !hideOverlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.ModalContent, { ...contentProps, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalHeader, { ...headerProps, children: title }),
      !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalCloseButton, {}),
      (0, import_utils.runIfFn)(children, {
        isOpen,
        onClose
      }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalFooter, { ...footerProps, children: footer })
    ] })
  ] });
};

// src/form.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var useFormProps = (props) => {
  const {
    schema,
    resolver,
    fieldResolver,
    defaultValues,
    values,
    context,
    onChange,
    onSubmit,
    onError,
    mode,
    reValidateMode,
    shouldFocusError = true,
    shouldUnregister,
    shouldUseNativeValidation,
    criteriaMode,
    delayError = 100,
    fields,
    formRef,
    ...modalProps
  } = props;
  const formProps = {
    schema,
    resolver,
    defaultValues,
    values,
    context,
    onChange,
    onSubmit,
    onError,
    mode,
    reValidateMode,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    criteriaMode,
    delayError,
    fields,
    formRef
  };
  return { modalProps, formProps, fields };
};
function createFormDialog(Form3) {
  const Dialog = (0, import_react2.forwardRef)((props, ref) => {
    const { isOpen, onClose, footer, children, ...rest } = props;
    const { modalProps, formProps, fields } = useFormProps(rest);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BaseModal, { ...modalProps, isOpen, onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Form3,
      {
        ref,
        ...formProps,
        flex: "1",
        minHeight: "0px",
        display: "flex",
        flexDirection: "column",
        children: (form) => {
          var _a, _b;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ModalBody, { height: "100%", children: (0, import_react_utils.runIfFn)(children, form) || /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_forms.AutoFields, {}) }),
            footer || /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.ModalFooter, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_react2.Button,
                {
                  variant: "ghost",
                  mr: 3,
                  onClick: onClose,
                  ...fields == null ? void 0 : fields.cancel,
                  children: (_b = (_a = fields == null ? void 0 : fields.cancel) == null ? void 0 : _a.children) != null ? _b : "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_forms.SubmitButton, { ...fields == null ? void 0 : fields.submit })
            ] })
          ] });
        }
      }
    ) });
  });
  Dialog.displayName = `${Form3.displayName || Form3.name}Dialog`;
  Dialog.id = Form3.id;
  return Dialog;
}
var FormDialog = createFormDialog(import_forms.Form);

// src/yup/create-yup-form-dialog.ts
function createYupFormDialog(Form3) {
  return createFormDialog(Form3);
}

// src/yup/index.ts
var FormDialog2 = createYupFormDialog(import_yup.Form);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormDialog,
  createYupFormDialog
});
//# sourceMappingURL=index.js.map