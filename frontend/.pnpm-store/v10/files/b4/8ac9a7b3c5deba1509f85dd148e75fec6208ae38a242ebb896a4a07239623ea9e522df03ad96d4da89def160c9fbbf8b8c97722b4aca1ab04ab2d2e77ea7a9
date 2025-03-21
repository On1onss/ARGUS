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
  BaseDrawer: () => BaseDrawer,
  BaseModal: () => BaseModal,
  ConfirmDialog: () => ConfirmDialog,
  Drawer: () => Drawer,
  FormDialog: () => FormDialog,
  MenuDialog: () => MenuDialog,
  MenuDialogList: () => MenuDialogList,
  Modal: () => Modal,
  ModalsContext: () => ModalsContext,
  ModalsProvider: () => ModalsProvider,
  createFormDialog: () => createFormDialog,
  createModals: () => createModals,
  useModals: () => useModals,
  useModalsContext: () => useModalsContext
});
module.exports = __toCommonJS(src_exports);

// src/dialog.tsx
var React = __toESM(require("react"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ConfirmDialog = (props) => {
  const {
    title,
    cancelLabel = "Cancel",
    confirmLabel = "Confirm",
    cancelProps,
    confirmProps,
    buttonGroupProps,
    isOpen,
    closeOnCancel = true,
    closeOnConfirm = true,
    leastDestructiveFocus = "cancel",
    onClose,
    onCancel,
    onConfirm,
    children,
    ...rest
  } = props;
  const cancelRef = React.useRef(null);
  const confirmRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleConfirm = async () => {
    try {
      const result = onConfirm == null ? void 0 : onConfirm();
      if (typeof (result == null ? void 0 : result.then) === "function") {
        setIsLoading(true);
        await result;
      }
      closeOnConfirm && onClose();
    } catch (e) {
      throw e;
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.AlertDialog,
    {
      isOpen,
      onClose,
      ...rest,
      leastDestructiveRef: leastDestructiveFocus === "cancel" ? cancelRef : confirmRef,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.AlertDialogOverlay, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.AlertDialogContent, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.AlertDialogHeader, { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.AlertDialogBody, { children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.AlertDialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.ButtonGroup, { ...buttonGroupProps, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Button,
            {
              ref: cancelRef,
              ...cancelProps,
              onClick: () => {
                onCancel == null ? void 0 : onCancel();
                closeOnCancel && onClose();
              },
              children: (cancelProps == null ? void 0 : cancelProps.children) || cancelLabel
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Button,
            {
              ref: confirmRef,
              isLoading,
              ...confirmProps,
              onClick: handleConfirm,
              children: (confirmProps == null ? void 0 : confirmProps.children) || confirmLabel
            }
          )
        ] }) })
      ] }) })
    }
  );
};

// src/drawer.tsx
var import_react2 = require("@chakra-ui/react");
var import_utils = require("@chakra-ui/utils");
var import_jsx_runtime2 = require("react/jsx-runtime");
var BaseDrawer = (props) => {
  const {
    title,
    children,
    footer,
    isOpen,
    onClose,
    hideCloseButton,
    hideOverlay,
    headerProps,
    contentProps,
    footerProps,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Drawer, { isOpen, onClose, ...rest, children: [
    !hideOverlay && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.DrawerContent, { ...contentProps, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DrawerHeader, { ...headerProps, children: title }),
      !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DrawerCloseButton, {}),
      (0, import_utils.runIfFn)(children, {
        isOpen,
        onClose
      }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DrawerFooter, { ...footerProps, children: footer })
    ] })
  ] });
};
var Drawer = (props) => {
  const { children, isOpen, onClose, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BaseDrawer, { isOpen, onClose, ...rest, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DrawerBody, { children: (0, import_utils.runIfFn)(children, {
    isOpen,
    onClose
  }) }) });
};

// src/modal.tsx
var import_react3 = require("@chakra-ui/react");
var import_utils2 = require("@chakra-ui/utils");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Modal, { isOpen, onClose, ...rest, children: [
    !hideOverlay && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ModalOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.ModalContent, { ...contentProps, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ModalHeader, { ...headerProps, children: title }),
      !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ModalCloseButton, {}),
      (0, import_utils2.runIfFn)(children, {
        isOpen,
        onClose
      }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ModalFooter, { ...footerProps, children: footer })
    ] })
  ] });
};
var Modal = (props) => {
  const { children, isOpen, onClose, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BaseModal, { ...rest, isOpen, onClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ModalBody, { children: (0, import_utils2.runIfFn)(children, {
    isOpen,
    onClose
  }) }) });
};

// src/menu.tsx
var import_react4 = require("@chakra-ui/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var [StylesProvider] = (0, import_react4.createStylesContext)("SuiMenuDialog");
var MenuDialog = (props) => {
  const { onClose, onCloseComplete, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react4.Menu,
    {
      variant: "dialog",
      onClose: () => {
        onClose == null ? void 0 : onClose();
        onCloseComplete == null ? void 0 : onCloseComplete();
      },
      ...rest
    }
  );
};
var MenuDialogList = (0, import_react4.forwardRef)(
  (props, forwardedRef) => {
    const {
      rootProps,
      title,
      footer,
      initialFocusRef,
      hideCloseButton,
      motionPreset = "slideInBottom",
      isCentered: isCenteredProp,
      ...rest
    } = props;
    const { isOpen, onClose, menuRef } = (0, import_react4.useMenuContext)();
    const { ref, ...ownProps } = (0, import_react4.useMenuList)(rest, forwardedRef);
    const styles = (0, import_react4.useMultiStyleConfig)("Menu", props);
    const isCentered = (0, import_react4.useBreakpointValue)({ base: true, md: false });
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      BaseModal,
      {
        isOpen,
        onClose,
        initialFocusRef: initialFocusRef || menuRef,
        title,
        hideCloseButton,
        motionPreset,
        isCentered: isCenteredProp != null ? isCenteredProp : isCentered,
        contentProps: { mx: 4 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.chakra.div,
            {
              ...ownProps,
              ref,
              __css: {
                outline: 0,
                maxHeight: "80vh",
                // can override this in theme
                overflowY: "auto",
                // can override this in theme
                ...styles.list,
                boxShadow: "none",
                border: 0,
                _dark: {
                  /* @ts-expect-error */
                  ...styles.list._dark || {},
                  boxShadow: "none"
                }
              }
            }
          ) }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.ModalFooter, { children: footer })
        ]
      }
    );
  }
);

// src/form.tsx
var import_react5 = require("@chakra-ui/react");
var import_react_utils = require("@saas-ui/react-utils");
var import_forms = require("@saas-ui/forms");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  const Dialog = (0, import_react5.forwardRef)((props, ref) => {
    const { isOpen, onClose, footer, children, ...rest } = props;
    const { modalProps, formProps, fields } = useFormProps(rest);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BaseModal, { ...modalProps, isOpen, onClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.ModalBody, { height: "100%", children: (0, import_react_utils.runIfFn)(children, form) || /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_forms.AutoFields, {}) }),
            footer || /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.ModalFooter, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_react5.Button,
                {
                  variant: "ghost",
                  mr: 3,
                  onClick: onClose,
                  ...fields == null ? void 0 : fields.cancel,
                  children: (_b = (_a = fields == null ? void 0 : fields.cancel) == null ? void 0 : _a.children) != null ? _b : "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_forms.SubmitButton, { ...fields == null ? void 0 : fields.submit })
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
var FormDialog = createFormDialog(import_forms.Form);

// src/provider.tsx
var React2 = __toESM(require("react"));

// src/default-modals.ts
var defaultModals = {
  alert: ConfirmDialog,
  confirm: ConfirmDialog,
  drawer: Drawer,
  modal: Modal,
  menu: MenuDialog,
  form: FormDialog
};

// src/provider.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var ModalsContext = React2.createContext(null);
var initialModalState = {
  id: null,
  props: null,
  type: "modal"
};
function ModalsProvider({ children, modals }) {
  const _instances = React2.useMemo(() => /* @__PURE__ */ new Set(), []);
  const [activeModals, setActiveModals] = React2.useState({
    modal: initialModalState
  });
  const getModalComponent = React2.useMemo(() => {
    const _modals = {
      ...defaultModals,
      ...modals
    };
    return (type = "modal") => {
      const component = _modals[type] || _modals.modal;
      return component;
    };
  }, [modals]);
  const setActiveModal = (modal, scope) => {
    if (!scope) {
      return setActiveModals({
        modal
      });
    }
    setActiveModals((prevState) => ({
      ...prevState,
      [scope]: modal
    }));
  };
  const open = (componentOrOptions, options) => {
    let _options;
    if (typeof componentOrOptions === "function") {
      _options = {
        component: componentOrOptions,
        ...options
      };
    } else {
      _options = componentOrOptions;
    }
    const {
      id = _instances.size + 1,
      type = "modal",
      scope = "modal",
      component,
      ...props
    } = _options;
    const modal = {
      id,
      props,
      type,
      scope,
      component,
      isOpen: true
    };
    _instances.add(modal);
    setActiveModal(modal, scope);
    return id;
  };
  const drawer = (options) => {
    return open({
      ...options,
      type: "drawer"
    });
  };
  const alert = (options) => {
    return open({
      ...options,
      scope: "alert",
      type: "alert",
      cancelProps: {
        display: "none"
      },
      confirmProps: {
        label: "OK"
      },
      leastDestructiveFocus: "confirm"
    });
  };
  const confirm = (options) => {
    return open({
      ...options,
      scope: "alert",
      type: "confirm"
    });
  };
  const menu = (options) => {
    return open({
      ...options,
      type: "menu"
    });
  };
  const form = (options) => {
    return open({
      ...options,
      type: "form"
    });
  };
  const close = async (id, force) => {
    var _a, _b;
    const modals2 = [...Array.from(_instances)];
    const modal = modals2.filter((modal2) => modal2.id === id)[0];
    if (!modal) {
      return;
    }
    const shouldClose = await ((_b = (_a = modal.props) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a, { force }));
    if (shouldClose === false) {
      return;
    }
    const scoped = modals2.filter(({ scope }) => scope === modal.scope);
    if (scoped.length === 1) {
      setActiveModal(
        {
          ...modal,
          isOpen: false
        },
        modal.scope
      );
    } else if (scoped.length > 1) {
      setActiveModal(scoped[scoped.length - 2], modal.scope);
    } else {
      setActiveModal(
        {
          id: null,
          props: null,
          type: modal.type
          // Keep type same as last modal type to make sure the animation isn't interrupted
        },
        modal.scope
      );
    }
    setTimeout(() => closeComplete(id), 200);
  };
  const closeComplete = (id) => {
    const modals2 = [...Array.from(_instances)];
    const modal = modals2.filter((modal2) => modal2.id === id)[0];
    _instances.delete(modal);
    const scoped = modal && modals2.filter(({ scope }) => scope === modal.scope);
    if ((scoped == null ? void 0 : scoped.length) === 1) {
      setActiveModal(initialModalState, modal.scope);
    }
  };
  const closeAll = () => {
    _instances.forEach((modal) => {
      var _a, _b;
      return (_b = (_a = modal.props) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a, { force: true });
    });
    _instances.clear();
    setActiveModal(initialModalState);
  };
  const context = {
    open,
    drawer,
    alert,
    confirm,
    menu,
    form,
    close,
    closeAll
  };
  const content = React2.useMemo(
    () => Object.entries(activeModals).map(([scope, config]) => {
      const Component = config.component || getModalComponent(config.type);
      const { title, body, children: children2, ...props } = config.props || {};
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Component,
        {
          title,
          children: body || children2,
          ...props,
          isOpen: !!config.isOpen,
          onClose: () => close(config.id),
          onCloseComplete: () => closeComplete(config.id)
        },
        scope
      );
    }),
    [activeModals]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ModalsContext.Provider, { value: context, children: [
    content,
    children
  ] });
}
var useModalsContext = () => React2.useContext(ModalsContext);
var useModals = () => {
  const modals = useModalsContext();
  if (!modals) {
    throw new Error("useModals must be used within a ModalsProvider");
  }
  return modals;
};

// src/create-modals.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var createModals = (options) => {
  const modals = {
    ...defaultModals,
    ...options.modals
  };
  const Provider = (props) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ModalsProvider, { children: props.children, modals });
  };
  return {
    ModalsProvider: Provider,
    useModals
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseDrawer,
  BaseModal,
  ConfirmDialog,
  Drawer,
  FormDialog,
  MenuDialog,
  MenuDialogList,
  Modal,
  ModalsContext,
  ModalsProvider,
  createFormDialog,
  createModals,
  useModals,
  useModalsContext
});
//# sourceMappingURL=index.js.map