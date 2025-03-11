"use client";
import { toaster } from "../components/ui/toaster";
const useCustomToast = () => {
    const showSuccessToast = (description) => {
        toaster.create({
            title: "Success!",
            description,
            type: "success",
        });
    };
    const showErrorToast = (description) => {
        toaster.create({
            title: "Something went wrong!",
            description,
            type: "error",
        });
    };
    return { showSuccessToast, showErrorToast };
};
export default useCustomToast;
