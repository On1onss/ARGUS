import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import Logo from "../../assets/logo_mini.png";
import UserMenu from "./UserMenu";
function Navbar() {
    const display = useBreakpointValue({ base: "none", md: "flex" });
    return (_jsxs(Flex, { display: display, justify: "space-between", position: "sticky", color: "white", align: "center", bg: "bg.muted", w: "100%", top: 0, p: 4, children: [_jsx(Link, { to: "/", children: _jsx(Image, { src: Logo, alt: "Logo", maxW: "30", maxH: "20" }) }), _jsx(Flex, { gap: 2, alignItems: "center", children: _jsx(UserMenu, {}) })] }));
}
export default Navbar;
