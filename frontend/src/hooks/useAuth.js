import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthService, } from "../client";
import { handleError } from "../utils";
const isLoggedIn = () => {
    return localStorage.getItem("access_token") !== null;
};
const useAuth = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data: user } = useQuery({
        queryKey: ["currentUser"],
        queryFn: AuthService.readCurrentUserApiV1AuthReadCurrentUserGet,
        enabled: isLoggedIn(),
    });
    const signUpMutation = useMutation({
        mutationFn: (data) => AuthService.createUserApiV1AuthRegisterPost({ body: data }),
        onSuccess: () => {
            navigate({ to: "/login" });
        },
        onError: (err) => {
            handleError(err);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
    const login = async (data) => {
        const response = await AuthService.tokenApiV1AuthTokenPost({
            body: data,
        });
        localStorage.setItem("access_token", response.access_token);
    };
    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate({ to: "/" });
        },
        onError: (err) => {
            handleError(err);
        },
    });
    const logout = () => {
        localStorage.removeItem("access_token");
        navigate({ to: "/login" });
    };
    return {
        signUpMutation,
        loginMutation,
        logout,
        user,
        error,
        resetError: () => setError(null),
    };
};
export { isLoggedIn };
export default useAuth;
