"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, HStack, IconButton, Input, Stack, mergeRefs, useControllableState, } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Field } from "./field";
import { InputGroup } from "./input-group";
export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
    const { rootProps, defaultVisible, visible: visibleProp, onVisibleChange, visibilityIcon = { on: _jsx(FiEye, {}), off: _jsx(FiEyeOff, {}) }, startElement, type, errors, ...rest } = props;
    const [visible, setVisible] = useControllableState({
        value: visibleProp,
        defaultValue: defaultVisible || false,
        onChange: onVisibleChange,
    });
    const inputRef = useRef(null);
    return (_jsx(Field, { invalid: !!errors[type], errorText: errors[type]?.message, alignSelf: "start", children: _jsx(InputGroup, { width: "100%", startElement: startElement, endElement: _jsx(VisibilityTrigger, { disabled: rest.disabled, onPointerDown: (e) => {
                    if (rest.disabled)
                        return;
                    if (e.button !== 0)
                        return;
                    e.preventDefault();
                    setVisible(!visible);
                }, children: visible ? visibilityIcon.off : visibilityIcon.on }), ...rootProps, children: _jsx(Input, { ...rest, ref: mergeRefs(ref, inputRef), type: visible ? "text" : "password" }) }) }));
});
const VisibilityTrigger = forwardRef(function VisibilityTrigger(props, ref) {
    return (_jsx(IconButton, { tabIndex: -1, ref: ref, me: "-2", aspectRatio: "square", size: "sm", variant: "ghost", height: "calc(100% - {spacing.2})", "aria-label": "Toggle password visibility", color: "inherit", ...props }));
});
export const PasswordStrengthMeter = forwardRef(function PasswordStrengthMeter(props, ref) {
    const { max = 4, value, ...rest } = props;
    const percent = (value / max) * 100;
    const { label, colorPalette } = getColorPalette(percent);
    return (_jsxs(Stack, { align: "flex-end", gap: "1", ref: ref, ...rest, children: [_jsx(HStack, { width: "full", ref: ref, ...rest, children: Array.from({ length: max }).map((_, index) => (_jsx(Box, { height: "1", flex: "1", rounded: "sm", "data-selected": index < value ? "" : undefined, layerStyle: "fill.subtle", colorPalette: "gray", _selected: {
                        colorPalette,
                        layerStyle: "fill.solid",
                    } }, index))) }), label && _jsx(HStack, { textStyle: "xs", children: label })] }));
});
function getColorPalette(percent) {
    switch (true) {
        case percent < 33:
            return { label: "Low", colorPalette: "red" };
        case percent < 66:
            return { label: "Medium", colorPalette: "orange" };
        default:
            return { label: "High", colorPalette: "green" };
    }
}
