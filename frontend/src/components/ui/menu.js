"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AbsoluteCenter, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
export const MenuContent = React.forwardRef(function MenuContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraMenu.Positioner, { children: _jsx(ChakraMenu.Content, { ref: ref, ...rest }) }) }));
});
export const MenuArrow = React.forwardRef(function MenuArrow(props, ref) {
    return (_jsx(ChakraMenu.Arrow, { ref: ref, ...props, children: _jsx(ChakraMenu.ArrowTip, {}) }));
});
export const MenuCheckboxItem = React.forwardRef(function MenuCheckboxItem(props, ref) {
    return (_jsxs(ChakraMenu.CheckboxItem, { ps: "8", ref: ref, ...props, children: [_jsx(AbsoluteCenter, { axis: "horizontal", insetStart: "4", asChild: true, children: _jsx(ChakraMenu.ItemIndicator, { children: _jsx(LuCheck, {}) }) }), props.children] }));
});
export const MenuRadioItem = React.forwardRef(function MenuRadioItem(props, ref) {
    const { children, ...rest } = props;
    return (_jsxs(ChakraMenu.RadioItem, { ps: "8", ref: ref, ...rest, children: [_jsx(AbsoluteCenter, { axis: "horizontal", insetStart: "4", asChild: true, children: _jsx(ChakraMenu.ItemIndicator, { children: _jsx(LuCheck, {}) }) }), _jsx(ChakraMenu.ItemText, { children: children })] }));
});
export const MenuItemGroup = React.forwardRef(function MenuItemGroup(props, ref) {
    const { title, children, ...rest } = props;
    return (_jsxs(ChakraMenu.ItemGroup, { ref: ref, ...rest, children: [title && (_jsx(ChakraMenu.ItemGroupLabel, { userSelect: "none", children: title })), children] }));
});
export const MenuTriggerItem = React.forwardRef(function MenuTriggerItem(props, ref) {
    const { startIcon, children, ...rest } = props;
    return (_jsxs(ChakraMenu.TriggerItem, { ref: ref, ...rest, children: [startIcon, children, _jsx(LuChevronRight, {})] }));
});
export const MenuRadioItemGroup = ChakraMenu.RadioItemGroup;
export const MenuContextTrigger = ChakraMenu.ContextTrigger;
export const MenuRoot = ChakraMenu.Root;
export const MenuSeparator = ChakraMenu.Separator;
export const MenuItem = ChakraMenu.Item;
export const MenuItemText = ChakraMenu.ItemText;
export const MenuItemCommand = ChakraMenu.ItemCommand;
export const MenuTrigger = ChakraMenu.Trigger;
