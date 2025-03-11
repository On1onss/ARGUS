import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Image, Input } from "@chakra-ui/react";
import { 
// Link as RouterLink,
createFileRoute, redirect, } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { FiLock } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Field } from "../components/ui/field";
import { InputGroup } from "../components/ui/input-group";
import { PasswordInput } from "../components/ui/password-input";
import useAuth, { isLoggedIn } from "../hooks/useAuth";
import Logo from "../assets/logo.svg";
import { namePattern, passwordRules } from "../utils";
export const Route = createFileRoute("/login")({
    component: Login,
    beforeLoad: async () => {
        if (isLoggedIn()) {
            throw redirect({
                to: "/",
            });
        }
    },
});
function Login() {
    const { loginMutation, error, resetError } = useAuth();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const onSubmit = async (data) => {
        if (isSubmitting)
            return;
        resetError();
        try {
            await loginMutation.mutateAsync(data);
        }
        catch {
            // error is handled by useAuth hook
        }
    };
    return (_jsx(_Fragment, { children: _jsxs(Container, { as: "form", onSubmit: handleSubmit(onSubmit), h: "100vh", maxW: "sm", alignItems: "stretch", justifyContent: "center", gap: 4, centerContent: true, children: [_jsx(Image, { src: Logo, alt: "ARGUS logo", height: "auto", maxW: "2xs", alignSelf: "center", mb: 4 }), _jsx(Field, { invalid: !!errors.username, errorText: errors.username?.message || !!error, children: _jsx(InputGroup, { w: "100%", startElement: _jsx(FaUserAstronaut, {}), children: _jsx(Input, { id: "username", ...register("username", {
                                required: "Username is required",
                                pattern: namePattern,
                            }), placeholder: "Username", type: "text" }) }) }), _jsx(PasswordInput, { type: "password", startElement: _jsx(FiLock, {}), ...register("password", passwordRules()), placeholder: "Password", errors: errors }), _jsx(Button, { variant: "solid", type: "submit", loading: isSubmitting, size: "md", children: "Log In" })] }) }));
}
