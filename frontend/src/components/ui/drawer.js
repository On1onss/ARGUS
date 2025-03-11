import { jsx as _jsx } from "react/jsx-runtime";
import { Drawer as ChakraDrawer, Portal } from "@chakra-ui/react";
import * as React from "react";
import { CloseButton } from "./close-button";
export const DrawerContent = React.forwardRef(function DrawerContent(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props;
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraDrawer.Positioner, { padding: offset, children: _jsx(ChakraDrawer.Content, { ref: ref, ...rest, asChild: false, children: children }) }) }));
});
export const DrawerCloseTrigger = React.forwardRef(function DrawerCloseTrigger(props, ref) {
    return (_jsx(ChakraDrawer.CloseTrigger, { position: "absolute", top: "2", insetEnd: "2", ...props, asChild: true, children: _jsx(CloseButton, { size: "sm", ref: ref }) }));
});
export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerRoot = ChakraDrawer.Root;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
