import * as React from 'react';
import { ModalProps, ModalHeaderProps, ModalContentProps, ModalFooterProps, ButtonProps } from '@chakra-ui/react';
import { DefaultFieldOverrides, FieldValues, FieldProps, FormProps, FieldResolver, FormType } from '@saas-ui/forms';
import { MaybeRenderProp } from '@chakra-ui/utils';

interface BaseModalProps extends Omit<ModalProps, 'children'> {
    /**
     * The modal title
     */
    title?: React.ReactNode;
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
    footer?: React.ReactNode;
    /**
     * Hide the close button
     */
    hideCloseButton?: boolean;
    /**
     * Hide the overlay
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
declare const BaseModal: React.FC<BaseModalProps>;
declare const Modal: React.FC<BaseModalProps>;

type FormDialogFieldOverrides = DefaultFieldOverrides & {
    cancel?: ButtonProps;
};
interface FormDialogProps<TSchema = any, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TExtraFieldProps extends object = object, TFieldTypes = FieldProps<TFieldValues>> extends Omit<BaseModalProps, 'children'>, Pick<FormProps<TSchema, TFieldValues, TContext, TExtraFieldProps, TFieldTypes>, 'schema' | 'defaultValues' | 'values' | 'context' | 'onChange' | 'onSubmit' | 'onError' | 'resolver' | 'mode' | 'reValidateMode' | 'shouldFocusError' | 'shouldUnregister' | 'shouldUseNativeValidation' | 'criteriaMode' | 'delayError' | 'resetOptions' | 'formRef' | 'children'> {
    /**
     * The modal footer, will be wrapped with `ModalFooter`.
     * Defaults to a cancel and submit button.
     */
    footer?: React.ReactNode;
    /**
     * A schema field resolver used to auto generate form fields.
     */
    fieldResolver?: FieldResolver;
    /**
     * Field overrides
     */
    fields?: FormDialogFieldOverrides;
}
/**
 * @todo make this dynamic to support other schema types
 */
type MergeDialogProps<T> = T extends FormType<infer FieldDefs, infer ExtraProps, infer ExtraFieldProps, infer ExtraOverrides> ? FormType<FieldDefs, ExtraProps & Omit<BaseModalProps, 'children'>, ExtraFieldProps, ExtraOverrides & FormDialogFieldOverrides> : never;
type DefaultFormType<FieldDefs = any, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = FormDialogFieldOverrides> = (<TSchema = unknown, TFieldValues extends Record<string, any> = any, TContext extends object = object>(props: any) => React.ReactElement) & {
    displayName?: string;
    id?: string;
};
declare function createFormDialog<FieldDefs = any, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = FormDialogFieldOverrides, TFormType extends DefaultFormType<FieldDefs, ExtraProps, ExtraFieldProps, ExtraOverrides> = DefaultFormType<FieldDefs, ExtraProps, ExtraFieldProps, ExtraOverrides>>(Form: TFormType): MergeDialogProps<TFormType>;
/**
 * Can be used to quickly request information from people without leaving the current page.
 *
 * @see Docs https://saas-ui.dev/docs/components/overlay/form-dialog
 */
declare const FormDialog: FormType<unknown, object & Omit<BaseModalProps, "children">, any, object & DefaultFieldOverrides & {
    cancel?: ButtonProps;
}>;

export { type BaseModalProps as B, type DefaultFormType as D, type FormDialogFieldOverrides as F, Modal as M, type FormDialogProps as a, BaseModal as b, FormDialog as c, createFormDialog as d };
