'use client'

// src/modal.tsx
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { runIfFn } from "@chakra-ui/utils";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(ChakraModal, { isOpen, onClose, ...rest, children: [
    !hideOverlay && /* @__PURE__ */ jsx(ModalOverlay, {}),
    /* @__PURE__ */ jsxs(ModalContent, { ...contentProps, children: [
      title && /* @__PURE__ */ jsx(ModalHeader, { ...headerProps, children: title }),
      !hideCloseButton && /* @__PURE__ */ jsx(ModalCloseButton, {}),
      runIfFn(children, {
        isOpen,
        onClose
      }),
      footer && /* @__PURE__ */ jsx(ModalFooter, { ...footerProps, children: footer })
    ] })
  ] });
};
var Modal = (props) => {
  const { children, isOpen, onClose, ...rest } = props;
  return /* @__PURE__ */ jsx(BaseModal, { ...rest, isOpen, onClose, children: /* @__PURE__ */ jsx(ModalBody, { children: runIfFn(children, {
    isOpen,
    onClose
  }) }) });
};

// src/form.tsx
import {
  ModalBody as ModalBody2,
  ModalFooter as ModalFooter2,
  Button,
  forwardRef
} from "@chakra-ui/react";
import { runIfFn as runIfFn2 } from "@saas-ui/react-utils";
import {
  Form,
  AutoFields,
  SubmitButton
} from "@saas-ui/forms";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
function createFormDialog(Form2) {
  const Dialog = forwardRef((props, ref) => {
    const { isOpen, onClose, footer, children, ...rest } = props;
    const { modalProps, formProps, fields } = useFormProps(rest);
    return /* @__PURE__ */ jsx2(BaseModal, { ...modalProps, isOpen, onClose, children: /* @__PURE__ */ jsx2(
      Form2,
      {
        ref,
        ...formProps,
        flex: "1",
        minHeight: "0px",
        display: "flex",
        flexDirection: "column",
        children: (form) => {
          var _a, _b;
          return /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2(ModalBody2, { height: "100%", children: runIfFn2(children, form) || /* @__PURE__ */ jsx2(AutoFields, {}) }),
            footer || /* @__PURE__ */ jsxs2(ModalFooter2, { children: [
              /* @__PURE__ */ jsx2(
                Button,
                {
                  variant: "ghost",
                  mr: 3,
                  onClick: onClose,
                  ...fields == null ? void 0 : fields.cancel,
                  children: (_b = (_a = fields == null ? void 0 : fields.cancel) == null ? void 0 : _a.children) != null ? _b : "Cancel"
                }
              ),
              /* @__PURE__ */ jsx2(SubmitButton, { ...fields == null ? void 0 : fields.submit })
            ] })
          ] });
        }
      }
    ) });
  });
  Dialog.displayName = `${Form2.displayName || Form2.name}Dialog`;
  Dialog.id = Form2.id;
  return Dialog;
}
var FormDialog = createFormDialog(Form);

export {
  BaseModal,
  Modal,
  createFormDialog,
  FormDialog
};
//# sourceMappingURL=chunk-FRC2HTO7.mjs.map