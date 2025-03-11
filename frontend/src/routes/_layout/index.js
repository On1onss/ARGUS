import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Container, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import useAuth from "../../hooks/useAuth";
export const Route = createFileRoute("/_layout/")({
    component: Dashboard,
});
function Dashboard() {
    const { user: currentUser } = useAuth();
    return (_jsx(_Fragment, { children: _jsx(Container, { maxW: "full", children: _jsxs(Box, { pt: 12, m: 4, children: [_jsxs(Text, { fontSize: "2xl", truncate: true, maxW: "sm", children: ["Hi, ", currentUser?.username, " \uD83D\uDC4B\uD83C\uDFFC"] }), _jsx(Text, { children: "Welcome back, nice to see you again!" })] }) }) }));
}
