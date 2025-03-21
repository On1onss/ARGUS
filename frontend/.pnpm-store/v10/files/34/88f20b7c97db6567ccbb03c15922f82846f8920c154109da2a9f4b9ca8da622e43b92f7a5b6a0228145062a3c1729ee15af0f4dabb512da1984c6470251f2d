'use client'
import {
  BaseModal,
  FormDialog,
  Modal,
  createFormDialog
} from "./chunk-FRC2HTO7.mjs";

// src/dialog.tsx
import * as React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  ButtonGroup,
  Button
} from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    AlertDialog,
    {
      isOpen,
      onClose,
      ...rest,
      leastDestructiveRef: leastDestructiveFocus === "cancel" ? cancelRef : confirmRef,
      children: /* @__PURE__ */ jsx(AlertDialogOverlay, { children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
        /* @__PURE__ */ jsx(AlertDialogHeader, { children: title }),
        /* @__PURE__ */ jsx(AlertDialogBody, { children }),
        /* @__PURE__ */ jsx(AlertDialogFooter, { children: /* @__PURE__ */ jsxs(ButtonGroup, { ...buttonGroupProps, children: [
          /* @__PURE__ */ jsx(
            Button,
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
          /* @__PURE__ */ jsx(
            Button,
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
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton
} from "@chakra-ui/react";
import { runIfFn } from "@chakra-ui/utils";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(ChakraDrawer, { isOpen, onClose, ...rest, children: [
    !hideOverlay && /* @__PURE__ */ jsx2(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs2(DrawerContent, { ...contentProps, children: [
      title && /* @__PURE__ */ jsx2(DrawerHeader, { ...headerProps, children: title }),
      !hideCloseButton && /* @__PURE__ */ jsx2(DrawerCloseButton, {}),
      runIfFn(children, {
        isOpen,
        onClose
      }),
      footer && /* @__PURE__ */ jsx2(DrawerFooter, { ...footerProps, children: footer })
    ] })
  ] });
};
var Drawer = (props) => {
  const { children, isOpen, onClose, ...rest } = props;
  return /* @__PURE__ */ jsx2(BaseDrawer, { isOpen, onClose, ...rest, children: /* @__PURE__ */ jsx2(DrawerBody, { children: runIfFn(children, {
    isOpen,
    onClose
  }) }) });
};

// src/menu.tsx
import {
  ModalFooter,
  chakra,
  forwardRef,
  useMenuContext,
  useMenuList,
  createStylesContext,
  useMultiStyleConfig,
  Menu,
  useBreakpointValue
} from "@chakra-ui/react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var [StylesProvider] = createStylesContext("SuiMenuDialog");
var MenuDialog = (props) => {
  const { onClose, onCloseComplete, ...rest } = props;
  return /* @__PURE__ */ jsx3(
    Menu,
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
var MenuDialogList = forwardRef(
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
    const { isOpen, onClose, menuRef } = useMenuContext();
    const { ref, ...ownProps } = useMenuList(rest, forwardedRef);
    const styles = useMultiStyleConfig("Menu", props);
    const isCentered = useBreakpointValue({ base: true, md: false });
    return /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsx3(StylesProvider, { value: styles, children: /* @__PURE__ */ jsx3(
            chakra.div,
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
          footer && /* @__PURE__ */ jsx3(ModalFooter, { children: footer })
        ]
      }
    );
  }
);

// src/provider.tsx
import * as React2 from "react";

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
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsxs4(ModalsContext.Provider, { value: context, children: [
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
import { jsx as jsx5 } from "react/jsx-runtime";
var createModals = (options) => {
  const modals = {
    ...defaultModals,
    ...options.modals
  };
  const Provider = (props) => {
    return /* @__PURE__ */ jsx5(ModalsProvider, { children: props.children, modals });
  };
  return {
    ModalsProvider: Provider,
    useModals
  };
};
export {
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
};
//# sourceMappingURL=index.mjs.map