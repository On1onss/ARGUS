import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ApiError, OpenAPI } from "./client";
import { CustomProvider } from "./components/ui/provider";

// OpenAPI.BASE = import.meta.env.VITE_API_URL
// OpenAPI.BASE = "http://localhost:8000/"
OpenAPI.TOKEN = async () => {
    return localStorage.getItem("access_token") || ""
}

const handleApiError = (error: Error) => {
    if (error instanceof ApiError && [401, 403].includes(error.status)) {
        localStorage.removeItem("access_token")
        window.location.href = "/login"
    }
}
const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: handleApiError,
    }),
    mutationCache: new MutationCache({
        onError: handleApiError,
    }),
})

const router = createRouter({ routeTree })
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

export const App = () => {
    return (
        <CustomProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </CustomProvider>
    )
}
