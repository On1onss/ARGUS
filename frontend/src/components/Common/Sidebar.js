import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerRoot, DrawerTrigger, } from "../ui/drawer";
import SidebarItems from "./SidebarItems";
const Sidebar = () => {
    const queryClient = useQueryClient();
    const currentUser = queryClient.getQueryData(["currentUser"]);
    const { logout } = useAuth();
    const [open, setOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs(DrawerRoot, { placement: "start", open: open, onOpenChange: (e) => setOpen(e.open), children: [_jsx(DrawerBackdrop, {}), _jsx(DrawerTrigger, { asChild: true, children: _jsx(IconButton, { variant: "ghost", color: "inherit", display: { base: "flex", md: "none" }, "aria-label": "Open Menu", position: "absolute", zIndex: "100", m: 4, children: _jsx(FaBars, {}) }) }), _jsxs(DrawerContent, { maxW: "xs", children: [_jsx(DrawerCloseTrigger, {}), _jsx(DrawerBody, { children: _jsxs(Flex, { flexDir: "column", justify: "space-between", children: [_jsxs(Box, { children: [_jsx(SidebarItems, {}), _jsxs(Flex, { as: "button", onClick: () => {
                                                        logout();
                                                    }, alignItems: "center", gap: 4, px: 4, py: 2, children: [_jsx(FiLogOut, {}), _jsx(Text, { children: "Log Out" })] })] }), currentUser?.username && (_jsxs(Text, { fontSize: "sm", p: 2, truncate: true, maxW: "sm", children: ["Logged in as: ", currentUser.username] }))] }) }), _jsx(DrawerCloseTrigger, {})] })] }), _jsx(Box, { display: { base: "none", md: "flex" }, position: "sticky", bg: "bg.subtle", top: 0, 
                // minW="2xs"
                h: "100vh", p: 4, w: "30vh", children: _jsx(Box, { w: "100%", children: _jsx(SidebarItems, {}) }) })] }));
};
export default Sidebar;
