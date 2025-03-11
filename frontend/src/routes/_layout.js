import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import Navbar from "../components/Common/Navbar";
import Sidebar from "../components/Common/Sidebar";
import { isLoggedIn } from "../hooks/useAuth";
export const Route = createFileRoute("/_layout")({
    component: Layout,
    beforeLoad: async () => {
        if (!isLoggedIn()) {
            throw redirect({
                to: "/login",
            });
        }
    },
});
function Layout() {
    return (_jsxs(Flex, { direction: "column", h: "100vh", children: [_jsx(Navbar, {}), _jsxs(Flex, { flex: "1", overflow: "hidden", children: [_jsx(Sidebar, {}), _jsx(Flex, { flex: "1", direction: "column", p: 4, overflowY: "auto", children: _jsx(Outlet, {}) })] })] }));
}
export default Layout;
