import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";
import NotFound from "../components/Common/NotFound";
const loadDevtools = () => Promise.all([
    import("@tanstack/router-devtools"),
    import("@tanstack/react-query-devtools"),
]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
        default: () => (_jsxs(_Fragment, { children: [_jsx(routerDevtools.TanStackRouterDevtools, {}), _jsx(reactQueryDevtools.ReactQueryDevtools, {})] })),
    };
});
const TanStackDevtools = process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools);
export const Route = createRootRoute({
    component: () => (_jsxs(_Fragment, { children: [_jsx(Outlet, {}), _jsx(Suspense, { children: _jsx(TanStackDevtools, {}) })] })),
    notFoundComponent: () => _jsx(NotFound, {}),
});
