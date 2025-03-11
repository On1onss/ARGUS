import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
const NotFound = () => {
    return (_jsx(_Fragment, { children: _jsxs(Flex, { height: "100vh", align: "center", justify: "center", flexDir: "column", "data-testid": "not-found", p: 4, children: [_jsx(Flex, { alignItems: "center", zIndex: 1, children: _jsxs(Flex, { flexDir: "column", ml: 4, align: "center", justify: "center", p: 4, children: [_jsx(Text, { fontSize: { base: "6xl", md: "8xl" }, fontWeight: "bold", lineHeight: "1", mb: 4, children: "404" }), _jsx(Text, { fontSize: "2xl", fontWeight: "bold", mb: 2, children: "Oops!" })] }) }), _jsx(Text, { fontSize: "lg", color: "gray.600", mb: 4, textAlign: "center", zIndex: 1, children: "The page you are looking for was not found." }), _jsx(Center, { zIndex: 1, children: _jsx(Link, { to: "/", children: _jsx(Button, { variant: "solid", mt: 4, alignSelf: "center", children: "Go Back" }) }) })] }) }));
};
export default NotFound;
