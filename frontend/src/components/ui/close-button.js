import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import * as React from "react";
import { LuX } from "react-icons/lu";
export const CloseButton = React.forwardRef(function CloseButton(props, ref) {
    return (_jsx(ChakraIconButton, { variant: "ghost", "aria-label": "Close", ref: ref, ...props, children: props.children ?? _jsx(LuX, {}) }));
});
