import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Link as RouterLink } from "@tanstack/react-router";
import { FiHome, FiSettings, FiUsers } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";
const items = [
    { icon: FiHome, title: "Dashboard", path: "/" },
    { icon: FaChartBar, title: "Charts", path: "/charts" },
    { icon: FiSettings, title: "User Settings", path: "/settings" },
];
const SidebarItems = ({ onClose }) => {
    const queryClient = useQueryClient();
    const currentUser = queryClient.getQueryData(["currentUser"]);
    const finalItems = currentUser?.is_admin
        ? [...items, { icon: FiUsers, title: "Admin", path: "/admin" }]
        : items;
    const listItems = finalItems.map(({ icon, title, path }) => (_jsx(RouterLink, { to: path, onClick: onClose, children: _jsxs(Flex, { gap: 4, px: 4, py: 2, _hover: {
                background: "gray.subtle",
            }, alignItems: "center", fontSize: "sx", children: [_jsx(Icon, { as: icon, alignSelf: "center" }), _jsx(Text, { ml: 2, children: title })] }) }, title)));
    return (_jsxs(_Fragment, { children: [_jsx(Text, { fontSize: "xs", px: 4, py: 2, fontWeight: "bold", children: "Menu" }), _jsx(Box, { children: listItems })] }));
};
export default SidebarItems;
