import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { FaUserAstronaut } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
const UserMenu = () => {
    const { user, logout } = useAuth();
    const handleLogout = async () => {
        logout();
    };
    return (_jsx(_Fragment, { children: _jsx(Flex, { children: _jsxs(MenuRoot, { children: [_jsx(MenuTrigger, { asChild: true, p: 2, children: _jsxs(Button, { "data-testid": "user-menu", variant: "solid", maxW: "sm", truncate: true, children: [_jsx(FaUserAstronaut, { fontSize: "18" }), _jsx(Text, { children: user?.username || "User" })] }) }), _jsxs(MenuContent, { children: [_jsx(Link, { to: "settings", children: _jsxs(MenuItem, { closeOnSelect: true, value: "user-settings", gap: 2, py: 2, style: { cursor: "pointer" }, children: [_jsx(FiUser, { fontSize: "18px" }), _jsx(Box, { flex: "1", children: "My Profile" })] }) }), _jsxs(MenuItem, { value: "logout", gap: 2, py: 2, onClick: handleLogout, style: { cursor: "pointer" }, children: [_jsx(FiLogOut, {}), "Log Out"] })] })] }) }) }));
};
export default UserMenu;
