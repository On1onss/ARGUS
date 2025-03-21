import * as React$1 from 'react';
import * as _chakra_ui_react from '@chakra-ui/react';
import { AlertDialogProps, ButtonProps, ButtonGroupProps, DrawerProps as DrawerProps$1, ModalHeaderProps, ModalContentProps, ModalFooterProps, MenuListProps } from '@chakra-ui/react';
import { MaybeRenderProp } from '@chakra-ui/utils';
import { B as BaseModalProps, F as FormDialogFieldOverrides, a as FormDialogProps } from './form-BtCUKHAs.mjs';
export { b as BaseModal, D as DefaultFormType, c as FormDialog, M as Modal, d as createFormDialog } from './form-BtCUKHAs.mjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _saas_ui_forms from '@saas-ui/forms';
import { FormType, WithFields, FormProps, FieldValues } from '@saas-ui/forms';
import { YupFormType, AnyObjectSchema } from '@saas-ui/forms/yup';
import { z } from 'zod';
import { InferType } from 'yup';
import { ZodFormType } from '@saas-ui/forms/zod';

interface ConfirmDialogProps extends Omit<AlertDialogProps, 'leastDestructiveRef'> {
    /**
     * The dialog title
     */
    title?: React$1.ReactNode;
    /**
     * The cancel button label
     */
    cancelLabel?: React$1.ReactNode;
    /**
     * The confirm button label
     */
    confirmLabel?: React$1.ReactNode;
    /**
     * The cancel button props
     */
    cancelProps?: ButtonProps;
    /**
     * The confirm button props
     */
    confirmProps?: ButtonProps;
    /**
     * The button group props
     */
    buttonGroupProps?: ButtonGroupProps;
    /**
     * Close the dialog on cancel
     * @default true
     */
    closeOnCancel?: boolean;
    /**
     * Close the dialog on confirm
     * @default true
     */
    closeOnConfirm?: boolean;
    /**
     * Defines which button gets initial focus
     * https://www.w3.org/TR/wai-aria-practices/#alertdialog
     */
    leastDestructiveFocus?: 'cancel' | 'confirm';
    /**
     * Function that's called when cancel is clicked
     */
    onCancel?: () => void;
    /**
     * Function that's called when confirm is clicked.
     */
    onConfirm?: () => Promise<void> | void;
}
declare const ConfirmDialog: React$1.FC<ConfirmDialogProps>;

interface BaseDrawerProps extends Omit<DrawerProps$1, 'children'> {
    /**
     * The drawer title
     */
    title: React$1.ReactNode;
    /**
     * The modal children
     */
    children: MaybeRenderProp<{
        isOpen: boolean;
        onClose: () => void;
    }>;
    /**
     * The modal footer
     */
    footer?: React$1.ReactNode;
    /**
     * Hide the close button
     */
    hideCloseButton?: boolean;
    /**
     * Hide the overflow
     */
    hideOverlay?: boolean;
    /**
     * Props for the modal header
     */
    headerProps?: ModalHeaderProps;
    /**
     * Props for the modal content
     */
    contentProps?: ModalContentProps;
    /**
     * Props for the modal footer
     */
    footerProps?: ModalFooterProps;
}
declare const BaseDrawer: React$1.FC<BaseDrawerProps>;
interface DrawerProps extends BaseDrawerProps {
    /**
     * Drawer footer content, wrapped with `DrawerFooter`
     */
    footer?: React$1.ReactNode;
}
declare const Drawer: React$1.FC<DrawerProps>;

interface MenuDialogProps extends BaseModalProps {
    /**
     * The modal footer, wrapped with `ModalFooter`
     */
    footer?: React$1.ReactNode;
}
declare const MenuDialog: React$1.FC<MenuDialogProps>;
interface MenuDialogListProps extends Omit<BaseModalProps, 'isOpen' | 'onClose' | 'children' | 'scrollBehavior'>, Omit<MenuListProps, 'title'> {
}
declare const MenuDialogList: _chakra_ui_react.ComponentWithAs<"div", MenuDialogListProps>;

type FormDialogHandler<T> = T extends YupFormType<infer FieldDefs, infer ExtraProps, infer ExtraOverrides, 'yup'> ? YupHandler<FieldDefs, object, ExtraOverrides & FormDialogFieldOverrides> : T extends ZodFormType<infer FieldDefs, infer ExtraProps, infer ExtraOverrides, 'zod'> ? ZodHandler<FieldDefs, object, ExtraOverrides & FormDialogFieldOverrides> : T extends FormType<infer FieldDefs, infer ExtraProps, infer ExtraOverrides> ? FormHandler<FieldDefs, object, ExtraOverrides & FormDialogFieldOverrides> : never;
type ZodHandler<FieldDefs, ExtraProps = object, ExtraOverrides = object, Type extends 'zod' = 'zod'> = <TSchema extends z.AnyZodObject = z.AnyZodObject, TFieldValues extends z.infer<TSchema> = z.infer<TSchema>, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext>, FieldDefs, ExtraOverrides> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => ModalId;
type FormHandler<FieldDefs, ExtraProps = object, ExtraOverrides = object> = <TSchema = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext>, FieldDefs, ExtraOverrides> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => ModalId;
type YupHandler<FieldDefs, ExtraProps = object, ExtraOverrides = object, Type extends 'yup' = 'yup'> = <TSchema extends AnyObjectSchema = AnyObjectSchema, TFieldValues extends InferType<TSchema> = InferType<TSchema>, // placeholder
TContext extends object = object>(props: WithFields<FormProps<TFieldValues, TContext, TSchema>, FieldDefs, ExtraOverrides> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => ModalId;

interface ModalsContextValue<TModals extends Record<string, React$1.FC<any>> = Record<string, React$1.FC<any>>, TTypes extends Extract<keyof TModals, string> = Extract<keyof TModals, string>> {
    open: <T extends OpenOptions<TTypes>>(componentOrOptions: T extends {
        component: infer TComponent extends React$1.FC<any>;
    } ? WithModalOptions<React$1.ComponentPropsWithRef<TComponent>> : T extends {
        type: infer TType extends keyof TModals;
    } ? WithModalOptions<React$1.ComponentPropsWithRef<TModals[TType]>> : T, options?: T extends React$1.FC<any> ? WithModalOptions<React$1.ComponentPropsWithRef<T>> : never) => ModalId;
    drawer: (options: DrawerOptions) => ModalId;
    alert: (options: ConfirmDialogOptions) => ModalId;
    confirm: (options: ConfirmDialogOptions) => ModalId;
    menu: (options: MenuDialogOptions) => ModalId;
    form: FormDialogHandler<TModals['form']>;
    close: (id: ModalId) => void;
    closeAll: () => void;
}
declare const ModalsContext: React$1.Context<ModalsContextValue<{
    alert: React$1.FC<ConfirmDialogProps>;
    confirm: React$1.FC<ConfirmDialogProps>;
    drawer: React$1.FC<DrawerProps>;
    modal: React$1.FC<BaseModalProps>;
    menu: React$1.FC<MenuDialogProps>;
    form: FormType<unknown, object & Omit<BaseModalProps, "children">, any, object & _saas_ui_forms.DefaultFieldOverrides & {
        cancel?: _chakra_ui_react.ButtonProps;
    }>;
}, "confirm" | "form" | "menu" | "alert" | "modal" | "drawer"> | null>;
interface ModalsProviderProps<TModals extends Record<string, React$1.FC<any>> = Record<string, React$1.FC<any>>> {
    children: React$1.ReactNode;
    modals?: TModals;
}
type ModalId = string | number;
type WithModalOptions<T> = Omit<T, 'isOpen' | 'onClose'> & ModalOptions;
interface ModalOptions extends Omit<BaseModalProps, 'isOpen' | 'onClose' | 'children'> {
    onClose?: (args: {
        force?: boolean;
    }) => Promise<boolean | undefined> | void;
    [key: string]: any;
}
interface DrawerOptions extends ModalOptions, Omit<DrawerProps, 'onClose' | 'isOpen' | 'children' | 'title' | 'size'> {
}
interface ConfirmDialogOptions extends ModalOptions, Omit<ConfirmDialogProps, 'onClose' | 'isOpen' | 'children'> {
}
interface MenuDialogOptions extends ModalOptions, Omit<MenuDialogProps, 'onClose' | 'isOpen' | 'children'> {
}
interface FormDialogOptions extends ModalOptions, Omit<FormDialogProps, 'onClose' | 'isOpen' | 'children'> {
}
interface OpenOptions<TModalTypes extends string> extends ModalOptions {
    type?: TModalTypes;
    scope?: ModalScopes;
}
type ModalScopes = 'modal' | 'alert';
interface ModalConfig<TModalOptions extends ModalOptions = ModalOptions, TModalTypes extends string = string> {
    /**
     * The modal id, autogenerated when not set.
     * Can be used to close modals.
     */
    id?: ModalId | null;
    /**
     * The modal props
     */
    props?: TModalOptions | null;
    /**
     * The modal scope
     * Modals can only have one level per scope.
     * The default scopes are 'modal' and 'alert', alerts can be openend above modals.
     */
    scope?: ModalScopes | string;
    /**
     * The modal type to open.
     * Build in types are 'modal', 'drawer', 'alert', 'confirm'
     *
     * Custom types can be configured using the `modals` prop of `ModalProvider`
     */
    type?: TModalTypes;
    /**
     * Render a custom modal component.
     * This will ignore the `type` param.
     */
    component?: React$1.FC<BaseModalProps>;
    /**
     * Whether the modal is open or not.
     * This is used internally to keep track of the modal state.
     */
    isOpen?: boolean;
}
declare function ModalsProvider({ children, modals }: ModalsProviderProps): react_jsx_runtime.JSX.Element;
declare const useModalsContext: () => ModalsContextValue<{
    alert: React$1.FC<ConfirmDialogProps>;
    confirm: React$1.FC<ConfirmDialogProps>;
    drawer: React$1.FC<DrawerProps>;
    modal: React$1.FC<BaseModalProps>;
    menu: React$1.FC<MenuDialogProps>;
    form: FormType<unknown, object & Omit<BaseModalProps, "children">, any, object & _saas_ui_forms.DefaultFieldOverrides & {
        cancel?: _chakra_ui_react.ButtonProps;
    }>;
}, "confirm" | "form" | "menu" | "alert" | "modal" | "drawer"> | null;
declare const useModals: () => ModalsContextValue<{
    alert: React$1.FC<ConfirmDialogProps>;
    confirm: React$1.FC<ConfirmDialogProps>;
    drawer: React$1.FC<DrawerProps>;
    modal: React$1.FC<BaseModalProps>;
    menu: React$1.FC<MenuDialogProps>;
    form: FormType<unknown, object & Omit<BaseModalProps, "children">, any, object & _saas_ui_forms.DefaultFieldOverrides & {
        cancel?: _chakra_ui_react.ButtonProps;
    }>;
}, "confirm" | "form" | "menu" | "alert" | "modal" | "drawer">;

interface CreateModalsOptions<TModalDefs extends Record<string, React.FC<any>>> {
    modals: TModalDefs;
}
declare const createModals: <TModalDefs extends Record<string, React.FC<any>>>(options: CreateModalsOptions<TModalDefs>) => {
    ModalsProvider: (props: Omit<ModalsProviderProps, "modals">) => react_jsx_runtime.JSX.Element;
    useModals: () => ModalsContextValue<{
        alert: React$1.FC<ConfirmDialogProps>;
        confirm: React$1.FC<ConfirmDialogProps>;
        drawer: React$1.FC<DrawerProps>;
        modal: React$1.FC<BaseModalProps>;
        menu: React$1.FC<MenuDialogProps>;
        form: _saas_ui_forms.FormType<unknown, object & Omit<BaseModalProps, "children">, any, object & _saas_ui_forms.DefaultFieldOverrides & {
            cancel?: _chakra_ui_react.ButtonProps;
        }>;
    } & TModalDefs>;
};

export { BaseDrawer, type BaseDrawerProps, BaseModalProps, ConfirmDialog, type ConfirmDialogOptions, type ConfirmDialogProps, type CreateModalsOptions, Drawer, type DrawerOptions, type DrawerProps, FormDialogFieldOverrides, type FormDialogOptions, FormDialogProps, MenuDialog, MenuDialogList, type MenuDialogListProps, type MenuDialogOptions, type MenuDialogProps, type ModalConfig, type ModalId, type ModalScopes, ModalsContext, type ModalsContextValue, ModalsProvider, type ModalsProviderProps, type OpenOptions, createModals, useModals, useModalsContext };
