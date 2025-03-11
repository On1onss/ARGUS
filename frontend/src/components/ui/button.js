import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AbsoluteCenter, Button as ChakraButton, Span, Spinner, } from "@chakra-ui/react";
import * as React from "react";
export const Button = React.forwardRef(function Button(props, ref) {
    const { loading, disabled, loadingText, children, ...rest } = props;
    return (_jsx(ChakraButton, { disabled: loading || disabled, ref: ref, ...rest, children: loading && !loadingText ? (_jsxs(_Fragment, { children: [_jsx(AbsoluteCenter, { display: "inline-flex", children: _jsx(Spinner, { size: "inherit", color: "inherit" }) }), _jsx(Span, { opacity: 0, children: children })] })) : loading && loadingText ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { size: "inherit", color: "inherit" }), loadingText] })) : (children) }));
});
