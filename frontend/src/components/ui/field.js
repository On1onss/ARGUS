import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";
export const Field = React.forwardRef(function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } = props;
    return (_jsxs(ChakraField.Root, { ref: ref, ...rest, children: [label && (_jsxs(ChakraField.Label, { children: [label, _jsx(ChakraField.RequiredIndicator, { fallback: optionalText })] })), children, helperText && (_jsx(ChakraField.HelperText, { children: helperText })), errorText && (_jsx(ChakraField.ErrorText, { children: errorText }))] }));
});
