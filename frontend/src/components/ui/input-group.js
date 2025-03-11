import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Group, InputElement } from "@chakra-ui/react";
import * as React from "react";
export const InputGroup = React.forwardRef(function InputGroup(props, ref) {
    const { startElement, startElementProps, endElement, endElementProps, children, startOffset = "6px", endOffset = "6px", ...rest } = props;
    const child = React.Children.only(children);
    return (_jsxs(Group, { ref: ref, ...rest, children: [startElement && (_jsx(InputElement, { pointerEvents: "none", ...startElementProps, children: startElement })), React.cloneElement(child, {
                ...(startElement && {
                    ps: `calc(var(--input-height) - ${startOffset})`,
                }),
                ...(endElement && { pe: `calc(var(--input-height) - ${endOffset})` }),
                ...children.props,
            }), endElement && (_jsx(InputElement, { placement: "end", ...endElementProps, children: endElement }))] }));
});
