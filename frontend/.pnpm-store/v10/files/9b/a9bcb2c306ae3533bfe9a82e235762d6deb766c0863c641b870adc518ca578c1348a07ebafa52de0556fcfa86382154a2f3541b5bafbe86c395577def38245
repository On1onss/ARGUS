import * as React$1 from 'react';
import React__default from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, UseFieldArrayReturn, RegisterOptions, UseFormReturn as UseFormReturn$1, UseFormProps, WatchObserver, SubmitHandler, SubmitErrorHandler, ResolverOptions, ResolverResult, FormProviderProps as FormProviderProps$1 } from 'react-hook-form';
export { BatchFieldArrayUpdate, ChangeHandler, Control, Controller, ControllerFieldState, ControllerProps, ControllerRenderProps, CriteriaMode, CustomElement, DeepMap, DeepPartial, DeepPartialSkipArrayKey, DefaultValues, DelayCallback, EmptyObject, ErrorOption, EventType, FieldArray, FieldArrayMethodProps, FieldArrayWithId, Field as FieldDef, FieldElement, FieldError, FieldErrors, FieldName, FieldNamesMarkedBoolean, FieldRefs, FieldValue, FieldValues, FormProviderProps, FormState, FormStateProxy, FormStateSubjectRef, GetIsDirty, InternalFieldErrors, InternalFieldName, InternalNameSet, IsAny, IsFlatObject, KeepStateOptions, LiteralUnion, Message, Mode, MultipleFieldErrors, Names, NativeFieldValue, NestedValue, NonUndefined, Noop, Primitive, ReadFormState, Ref, RefCallBack, RegisterOptions, Resolver, ResolverError, ResolverOptions, ResolverResult, ResolverSuccess, SetFieldValue, SetValueConfig, Subjects, SubmitErrorHandler, SubmitHandler, TriggerConfig, UnpackNestedValue, UseControllerProps, UseControllerReturn, UseFieldArrayProps, UseFieldArrayReturn, UseFormClearErrors, UseFormGetValues, UseFormHandleSubmit, UseFormProps, UseFormRegister, UseFormRegisterReturn, UseFormReset, UseFormResetField, UseFormReturn, UseFormSetError, UseFormSetFocus, UseFormSetValue, UseFormStateProps, UseFormStateReturn, UseFormTrigger, UseFormUnregister, UseFormWatch, UseWatchProps, Validate, ValidateResult, ValidationMode, ValidationRule, ValidationValue, ValidationValueMessage, WatchInternal, WatchObserver, appendErrors, useController, useFieldArray, useForm, useFormState, useWatch } from 'react-hook-form';
import * as _chakra_ui_react from '@chakra-ui/react';
import { NumberInputProps as NumberInputProps$1, NumberInputFieldProps as NumberInputFieldProps$1, InputProps, RadioProps, RadioGroupProps, SystemProps, StackDirection, MenuProps, ThemingProps, ButtonProps, MenuListProps, MenuItemOptionProps, SelectProps as SelectProps$1, TextareaProps, SwitchProps, CheckboxProps, UsePinInputProps, ResponsiveValue, FormLabelProps, SimpleGridProps, FormControlProps, HTMLChakraProps } from '@chakra-ui/react';
import { UseStepperReturn, UseStepperProps, StepsProps, StepsItemProps } from '@saas-ui/core';
import { MaybeRenderProp, FocusableElement } from '@chakra-ui/utils';

interface NumberInputOptions {
    /**
     * Hide the stepper. This will be true when `rightAddon` is provided.
     */
    hideStepper?: boolean;
    /**
     * Render a custom increment icon.
     */
    incrementIcon?: React$1.ReactNode;
    /**
     * Render a custom decrement icon.
     */
    decrementIcon?: React$1.ReactNode;
    /**
     * The placeholder text when no value is selected.
     */
    placeholder?: string;
    /**
     * Props to pass to the NumberInputField component.
     */
    fieldProps?: NumberInputFieldProps$1;
    /**
     * Either `InputLeftAddon` or `InputLeftElement`
     */
    leftAddon?: React$1.ReactNode;
    /**
     * Either `InputRightAddon` or `InputRightElement`
     */
    rightAddon?: React$1.ReactNode;
}
interface NumberInputProps extends NumberInputProps$1, NumberInputOptions {
}

interface PasswordOptions {
    viewIcon?: React__default.ReactNode;
    viewOffIcon?: React__default.ReactNode;
    leftAddon?: React__default.ReactNode;
}
interface PasswordInputProps extends InputProps, PasswordOptions {
}
declare const PasswordInput: _chakra_ui_react.ComponentWithAs<"div", PasswordInputProps>;

interface RadioOption extends Omit<RadioProps, 'value' | 'label'>, FieldOption {
}
type RadioOptions = FieldOptions<RadioOption>;
interface RadioInputOptions {
    options: RadioOptions;
    spacing?: SystemProps['margin'];
    direction?: StackDirection;
}
interface RadioInputProps extends Omit<RadioGroupProps, 'children'>, RadioInputOptions {
}
declare const RadioInput: _chakra_ui_react.ComponentWithAs<"div", RadioInputProps>;

interface SelectOptions<Multiple extends boolean = false, Value = Multiple extends true ? string[] : string> {
    /**
     * The name of the input field in a native form.
     */
    name: string;
    /**
     * The value of the select field.
     */
    value?: Value;
    /**
     * The initial value of the select field.
     */
    defaultValue?: Value;
    /**
     * The callback invoked when the value of the select field changes.
     * @param value The value of the select field.
     */
    onChange?: (value: Value) => void;
    /**
     * The placeholder text when there's no value.
     */
    placeholder?: string;
    /**
     * If `true`, the select will be disabled.
     */
    isDisabled?: boolean;
    /**
     * An array of options
     * If you leave this empty the children prop will be rendered.
     */
    options?: FieldOptions<SelectOption>;
    /**
     * Enable multiple select.
     */
    multiple?: Multiple;
    /**
     * The function used to render the value of the select field.
     * @param value The value of the select field.
     * @returns The rendered value.
     */
    renderValue?: (value: Value) => React__default.ReactNode;
}

interface SelectProps<Multiple extends boolean = false, Value = Multiple extends true ? string[] : string> extends Omit<MenuProps, 'children' | 'variant' | 'size'>, ThemingProps<'SuiSelect'>, SelectOptions<Multiple, Value> {
    children: React$1.ReactNode;
}
interface SelectButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
}
/**
 * Button that opens the select menu and displays the selected value.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
declare const SelectButton: _chakra_ui_react.ComponentWithAs<"button", SelectButtonProps>;
/**
 * Allow users to select a value from a list of options.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
declare const Select: (<Multiple extends boolean = false>(props: SelectProps<Multiple> & {
    ref?: React$1.ForwardedRef<HTMLFormElement>;
}) => React$1.ReactElement) & {
    displayName?: string;
};
interface SelectListProps extends MenuListProps {
}
/**
 * The list of options to choose from.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
declare const SelectList: React$1.FC<SelectListProps>;
interface SelectOption extends Omit<MenuItemOptionProps, 'value'>, FieldOption {
}
/**
 * An option in a select list
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
declare const SelectOption: _chakra_ui_react.ComponentWithAs<"button", MenuItemOptionProps>;

interface Option$1 {
    value: string;
    label?: string;
}
interface NativeSelectOptions {
    options?: Option$1[];
}
interface NativeSelectProps extends SelectProps$1, NativeSelectOptions {
}
declare const NativeSelect: _chakra_ui_react.ComponentWithAs<"select", NativeSelectProps>;

interface InputFieldProps extends InputProps {
    type?: string;
    leftAddon?: React$1.ReactNode;
    rightAddon?: React$1.ReactNode;
}
declare const InputField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
interface NumberInputFieldProps extends NumberInputProps {
    type: 'number';
}
declare const NumberInputField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof NumberInputFieldProps> & NumberInputFieldProps>;
declare const PasswordInputField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof PasswordInputProps> & PasswordInputProps>;
interface TextareaFieldProps extends TextareaProps {
}
declare const TextareaField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof TextareaFieldProps> & TextareaFieldProps>;
interface SwitchFieldProps extends SwitchProps {
}
declare const SwitchField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof SwitchFieldProps> & SwitchFieldProps>;
interface SelectFieldProps extends SelectProps<boolean> {
    buttonProps?: SelectButtonProps;
    listProps?: SelectListProps;
}
declare const SelectField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof SelectFieldProps> & SelectFieldProps>;
type CheckboxFieldProps = CheckboxProps;
declare const CheckboxField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof CheckboxProps> & CheckboxProps>;
type RadioFieldProps = RadioInputProps;
declare const RadioField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof RadioInputProps> & RadioInputProps>;
type NativeSelectFieldProps = NativeSelectProps;
declare const NativeSelectField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof NativeSelectProps> & NativeSelectProps>;
interface PinFieldProps extends Omit<UsePinInputProps, 'type'> {
    pinLength?: number;
    pinType?: 'alphanumeric' | 'number';
    spacing?: SystemProps['margin'];
}
declare const PinField: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof PinFieldProps> & PinFieldProps>;
declare const defaultFieldTypes: {
    text: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
    email: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
    url: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
    phone: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
    time: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof InputFieldProps> & InputFieldProps>;
    number: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof NumberInputFieldProps> & NumberInputFieldProps>;
    password: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof PasswordInputProps> & PasswordInputProps>;
    textarea: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof TextareaFieldProps> & TextareaFieldProps>;
    switch: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof SwitchFieldProps> & SwitchFieldProps>;
    select: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof SelectFieldProps> & SelectFieldProps>;
    checkbox: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof CheckboxProps> & CheckboxProps>;
    radio: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof RadioInputProps> & RadioInputProps>;
    pin: React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof PinFieldProps> & PinFieldProps>;
    'native-select': React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof NativeSelectProps> & NativeSelectProps>;
};
type DefaultFields = typeof defaultFieldTypes;

interface SubmitButtonProps extends ButtonProps {
    /**
     * Disable the submit button if the form is untouched.
     */
    disableIfUntouched?: boolean;
    /**
     * Disable the submit button if the form is invalid.
     */
    disableIfInvalid?: boolean;
}
/**
 * A button with type submit and default color scheme primary and isLoading state when the form is submitting.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/form
 */
declare const SubmitButton: _chakra_ui_react.ComponentWithAs<"button", SubmitButtonProps>;

interface ObjectFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends BaseFieldProps {
    name: TName;
    children: React$1.ReactNode;
    columns?: ResponsiveValue<number>;
    spacing?: ResponsiveValue<string | number>;
}
declare const FormLegend: (props: FormLabelProps) => react_jsx_runtime.JSX.Element;
/**
 * The object field component.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/object-field
 */
declare const ObjectField: React$1.FC<ObjectFieldProps>;

interface FormLayoutProps extends ThemingProps<'SuiFormLayout'>, SimpleGridProps {
}
/**
 * Create consistent field spacing and positioning.
 *
 * Renders form items in a `SimpleGrid`
 * @see https://chakra-ui.com/docs/layout/simple-grid
 *
 * @see https://saas-ui.dev/docs/components/forms/form
 */
declare const FormLayout: {
    ({ children, ...props }: FormLayoutProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface UseArrayFieldReturn extends UseFieldArrayReturn {
    /**
     * The array field name
     */
    name: string;
    /**
     * The default value for new items
     */
    defaultValue: Record<string, any>;
    /**
     * Min amount of items
     */
    min?: number;
    /**
     * Max amount of items
     */
    max?: number;
}
declare const ArrayFieldProvider: React$1.Provider<UseArrayFieldReturn>;
declare const useArrayFieldContext: () => UseArrayFieldReturn;
interface UseArrayFieldRowReturn {
    /**
     * Name of the array field including the index, eg 'field.0'
     */
    name: string;
    /**
     * The field index
     */
    index: number;
    /**
     * Remove this array item
     */
    remove: () => void;
    /**
     * True if this is the first item
     */
    isFirst: boolean;
    /**
     * True if this is the last item
     */
    isLast: boolean;
}
declare const ArrayFieldRowProvider: React$1.Provider<UseArrayFieldRowReturn>;
declare const useArrayFieldRowContext: () => UseArrayFieldRowReturn;
interface ArrayFieldOptions<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    /**
     * The field name
     */
    name: TName;
    /**
     * Default value for new values in the array
     */
    defaultValue?: Record<string, any>;
    /**
     * Default key name for rows, change this if your data uses a different 'id' field
     * @default "id"
     */
    keyName?: string;
    min?: number;
    max?: number;
}
declare const useArrayField: ({ name, defaultValue, keyName, min, max, }: ArrayFieldOptions) => {
    name: string;
    defaultValue: Record<string, any>;
    min: number | undefined;
    max: number | undefined;
    swap: react_hook_form.UseFieldArraySwap;
    move: react_hook_form.UseFieldArrayMove;
    prepend: react_hook_form.UseFieldArrayPrepend<FieldValues, string>;
    append: react_hook_form.UseFieldArrayAppend<FieldValues, string>;
    remove: react_hook_form.UseFieldArrayRemove;
    insert: react_hook_form.UseFieldArrayInsert<FieldValues, string>;
    update: react_hook_form.UseFieldArrayUpdate<FieldValues, string>;
    replace: react_hook_form.UseFieldArrayReplace<FieldValues, string>;
    fields: Record<string, string>[];
};
interface UseArrayFieldRowProps {
    index: number;
}
declare const useArrayFieldRow: ({ index }: UseArrayFieldRowProps) => {
    index: number;
    isFirst: boolean;
    isLast: boolean;
    name: string;
    remove: () => void;
};
declare const useArrayFieldRemoveButton: () => {
    onClick: () => void;
    isDisabled: boolean;
};
declare const useArrayFieldAddButton: () => {
    onClick: () => void;
    isDisabled: boolean;
};

interface ArrayFieldButtonProps extends ButtonProps {
}
interface ArrayFieldRowProps extends FormLayoutProps {
    /**
     * Amount of field columns
     */
    columns?: ResponsiveValue<number>;
    /**
     * Spacing between fields
     */
    spacing?: ResponsiveValue<string | number>;
    /**
     * The array index
     */
    index: number;
    /**
     * The fields
     */
    children: React$1.ReactNode;
}
/**
 * Render prop component, to get access to the internal fields state. Must be a child of ArrayFieldContainer.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldRow: React$1.FC<ArrayFieldRowProps>;
interface ArrayFieldRowFieldsProps extends FormLayoutProps {
    /**
     * Amount of field columns
     */
    columns?: ResponsiveValue<number>;
    /**
     * Spacing between fields
     */
    spacing?: ResponsiveValue<string | number>;
    /**
     * The fields
     */
    children: React$1.ReactNode;
}
/**
 * Add the name prefix to the fields and acts as a horizontal form layout by default.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldRowFields: React$1.FC<ArrayFieldRowFieldsProps>;
/**
 * The row container component providers row context.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldRowContainer: React$1.FC<ArrayFieldRowProps>;
/**
 * The default remove button.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldRemoveButton: React$1.FC<ArrayFieldButtonProps>;
/**
 * The default add button.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldAddButton: React$1.FC<ArrayFieldButtonProps>;
interface ArrayFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends ArrayFieldOptions<TFieldValues, TName>, Omit<BaseFieldProps<TFieldValues, TName>, 'name' | 'defaultValue' | 'children'> {
    children: MaybeRenderProp<ArrayField[]>;
}
interface ArrayField {
    id: string;
    [key: string]: unknown;
}
/**
 * The wrapper component that composes the default ArrayField functionality.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayField: ((props: ArrayFieldProps & {
    ref?: React$1.ForwardedRef<UseArrayFieldReturn>;
}) => React$1.ReactElement) & {
    displayName: string;
};
interface ArrayFieldRowsProps {
    children: (fields: ArrayField[]) => React$1.ReactElement | null;
}
declare const ArrayFieldRows: {
    ({ children, }: ArrayFieldRowsProps): React$1.ReactElement | null;
    displayName: string;
};
interface ArrayFieldContainerProps extends Omit<ArrayFieldProps, 'children'> {
    children: React$1.ReactNode;
}
/**
 * The container component provides context and state management.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/array-field
 */
declare const ArrayFieldContainer: React$1.ForwardRefExoticComponent<ArrayFieldContainerProps & React$1.RefAttributes<UseArrayFieldReturn>>;

type FieldOption = {
    label?: string;
    value: string;
};
type FieldOptions<TOption extends FieldOption = FieldOption> = Array<string> | Array<TOption>;
type ValueOf<T> = T[keyof T];
type ShallowMerge<A, B> = Omit<A, keyof B> & B;
type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
type MapPath<T extends string[]> = T extends [infer U, ...infer R] ? U extends string ? `${U extends `${number}` ? '$' : U}${R[0] extends string ? '.' : ''}${R extends string[] ? MapPath<R> : ''}` : '' : '';
type TransformPath<T extends string> = MapPath<Split<T, '.'>>;
type ArrayFieldPath<Name extends string> = Name extends string ? TransformPath<Name> : never;
interface BaseFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends Omit<FormControlProps, 'label' | 'type' | 'onChange'> {
    /**
     * The field name
     */
    name: TName | ArrayFieldPath<TName>;
    /**
     * The field label
     */
    label?: string;
    /**
     * Hide the field label
     */
    hideLabel?: boolean;
    /**
     * Field help text
     */
    help?: string;
    /**
     * React hook form rules
     */
    rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    /**
     * Build-in types:
     * text, number, password, textarea, select, native-select, checkbox, radio, switch, pin
     *
     * Will default to a text field if there is no matching type.
     */
    type?: string;
    /**
     * The input placeholder
     */
    placeholder?: string;
    /**
     * Whether the label is positioned vertically or horizontally
     */
    direction?: 'row' | 'column';
}
type GetBaseField<TProps extends object = object> = () => {
    extraProps: string[];
    BaseField: React.FC<Omit<BaseFieldProps, 'name'> & {
        name: string;
        children: React.ReactNode;
    } & TProps>;
};
type FieldPathWithArray<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = TName | ArrayFieldPath<TName>;
type MergeFieldProps<FieldDefs, TFieldValues extends FieldValues = FieldValues, TExtraFieldProps extends object = object, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ValueOf<{
    [K in keyof FieldDefs]: FieldDefs[K] extends React.FC<infer Props> ? {
        type?: K;
    } & ShallowMerge<Props, BaseFieldProps<TFieldValues, TName>> & {
        [key in keyof TExtraFieldProps]: TExtraFieldProps[key];
    } : never;
}>;
type FieldProps<TFieldValues extends FieldValues = FieldValues, TExtraFieldProps extends object = object> = MergeFieldProps<DefaultFields, TFieldValues, TExtraFieldProps>;
type FormChildren<FieldDefs, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TExtraFieldProps extends object = object> = MaybeRenderProp<FormRenderContext<TFieldValues, TContext, MergeFieldProps<FieldDefs extends never ? DefaultFields : ShallowMerge<DefaultFields, FieldDefs>, TFieldValues, TExtraFieldProps>>>;
type DefaultFieldOverrides = {
    submit?: SubmitButtonProps;
    [key: string]: any;
};
type MergeOverrideFieldProps<FieldDefs, TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ValueOf<{
    [K in keyof FieldDefs]: FieldDefs[K] extends React.FC<infer Props> ? {
        type?: K;
    } & Omit<ShallowMerge<Props, BaseFieldProps<TFieldValues, TName>>, 'name'> : never;
}>;
type FieldOverrides<FieldDefs, TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    [K in FieldPathWithArray<TFieldValues, TName>]?: MergeOverrideFieldProps<FieldDefs extends never ? DefaultFields : ShallowMerge<DefaultFields, FieldDefs>, TFieldValues> | ({
        type?: 'object';
    } & Omit<ObjectFieldProps<TFieldValues>, 'name' | 'children'>) | ({
        type?: 'array';
    } & Omit<ArrayFieldProps<TFieldValues>, 'name' | 'children'>);
};
type WithFields<TFormProps extends FormProps<any, any, any, any, any>, FieldDefs, ExtraOverrides = object> = TFormProps extends FormProps<infer TSchema, infer TFieldValues, infer TContext, infer TExtraFieldProps> ? Omit<TFormProps, 'children' | 'fields'> & {
    children?: FormChildren<FieldDefs, TFieldValues, TContext, TExtraFieldProps>;
    fields?: FieldOverrides<FieldDefs, TFieldValues> & {
        submit?: SubmitButtonProps;
    } & ExtraOverrides;
} : never;
type StepFormChildren<FieldDefs, TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object> = MaybeRenderProp<StepFormRenderContext<TSteps, TFieldValues, TContext, MergeFieldProps<FieldDefs extends never ? DefaultFields : ShallowMerge<DefaultFields, FieldDefs>, TFieldValues>>>;
type WithStepFields<TStepFormProps extends UseStepFormProps<any, any, any>, FieldDefs, ExtraOverrides = object> = TStepFormProps extends UseStepFormProps<infer TSteps, infer TFieldValues, infer TContext> ? Omit<TStepFormProps, 'children' | 'fields'> & {
    children?: StepFormChildren<FieldDefs, TSteps, TFieldValues, TContext>;
    fields?: FieldOverrides<FieldDefs, TFieldValues> & {
        submit?: SubmitButtonProps;
    } & ExtraOverrides;
} : never;

type FieldResolver = {
    getFields(): BaseFieldProps[];
    getNestedFields(name: string): BaseFieldProps[];
};
type GetFieldResolver<TSchema = any> = (schema: TSchema) => FieldResolver;
type FieldTypes<FieldDefs = DefaultFields> = ValueOf<{
    [K in keyof FieldDefs]: FieldDefs[K] extends React.FC<infer Props> ? {
        type?: K;
    } & Omit<Props, 'name'> : never;
}>;
type SchemaField<FieldDefs = DefaultFields> = FieldTypes<FieldDefs> | (Omit<ObjectFieldProps, 'name' | 'children'> & {
    type: 'object';
    properties?: Record<string, SchemaField<FieldDefs>>;
}) | (Omit<ArrayFieldProps, 'name' | 'children'> & {
    type: 'array';
    items?: SchemaField<FieldDefs>;
});
type ObjectSchema<FieldDefs = DefaultFields> = Record<string, SchemaField<FieldDefs>>;
declare const objectFieldResolver: GetFieldResolver<ObjectSchema>;

interface DisplayIfProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    children: React$1.ReactElement;
    name: TName;
    defaultValue?: unknown;
    isDisabled?: boolean;
    isExact?: boolean;
    condition?: (value: unknown, context: UseFormReturn$1<TFieldValues>) => boolean;
    onToggle?: (conditionMatched: boolean, context: UseFormReturn$1<TFieldValues>) => void;
}
/**
 * Conditionally render parts of a form.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/form
 */
declare const DisplayIf: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ children, name, defaultValue, isDisabled, isExact, condition, onToggle, }: DisplayIfProps<TFieldValues, TName>): React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | null;
    displayName: string;
};

interface FormRenderContext<TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TFieldTypes = FieldProps<TFieldValues>> extends UseFormReturn$1<TFieldValues, TContext> {
    Field: React$1.FC<TFieldTypes & React$1.RefAttributes<FocusableElement>>;
    DisplayIf: React$1.FC<DisplayIfProps<TFieldValues>>;
    ArrayField: React$1.FC<ArrayFieldProps<TFieldValues> & React$1.RefAttributes<UseArrayFieldReturn>>;
    ObjectField: React$1.FC<ObjectFieldProps<TFieldValues>>;
}
interface FormOptions<TSchema = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TExtraFieldProps extends object = object, TFieldTypes = FieldProps<TFieldValues, TExtraFieldProps>> {
    /**
     * The form schema.
     */
    schema?: TSchema;
    /**
     * Triggers when any of the field change.
     */
    onChange?: WatchObserver<TFieldValues>;
    /**
     * The submit handler.
     */
    onSubmit: SubmitHandler<TFieldValues>;
    /**
     * Triggers when there are validation errors.
     */
    onError?: SubmitErrorHandler<TFieldValues>;
    /**
     * The Hook Form state ref.
     */
    formRef?: React$1.Ref<UseFormReturn$1<TFieldValues, TContext>>;
    /**
     * The form children, can be a render prop or a ReactNode.
     */
    children?: MaybeRenderProp<FormRenderContext<TFieldValues, TContext, TFieldTypes>>;
    /**
     * The field resolver, used to resolve the fields from schemas.
     */
    fieldResolver?: FieldResolver;
    /**
     * Field overrides
     */
    fields?: DefaultFieldOverrides;
}
interface FormProps<TSchema = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TExtraFieldProps extends object = object, TFieldTypes = FieldProps<TFieldValues, TExtraFieldProps>> extends UseFormProps<TFieldValues, TContext>, Omit<HTMLChakraProps<'form'>, 'children' | 'onChange' | 'onSubmit' | 'onError'>, FormOptions<TSchema, TFieldValues, TContext, TExtraFieldProps, TFieldTypes> {
}
/**
 * The wrapper component provides context, state, and focus management.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/form
 */
declare const Form$1: FormComponent;
type FormComponent = (<TSchema = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TExtraFieldProps extends object = object, TFieldTypes = FieldProps<TFieldValues>>(props: FormProps<TSchema, TFieldValues, TContext, TExtraFieldProps, TFieldTypes> & {
    ref?: React$1.ForwardedRef<HTMLFormElement>;
}) => React$1.ReactElement) & {
    displayName?: string;
};
type GetResolver = <TFieldValues extends FieldValues, TContext extends object>(schema: unknown) => (values: TFieldValues, context: TContext | undefined, options: ResolverOptions<TFieldValues>) => Promise<ResolverResult<TFieldValues>>;

interface StepState {
    name: string;
    schema?: any;
    resolver?: any;
    isActive?: boolean;
    isCompleted?: boolean;
    onSubmit?: FormStepSubmitHandler;
}
type FormStepSubmitHandler<TFieldValues extends FieldValues = FieldValues> = (data: TFieldValues, stepper: UseStepperReturn) => Promise<void>;
interface StepFormContext extends UseStepperReturn {
    updateStep(state: StepState): void;
    steps: Record<string, StepState>;
}
declare const StepFormProvider: React$1.Provider<StepFormContext>;
declare const useStepFormContext: () => StepFormContext;

type StepName<T extends {
    [k: number]: {
        readonly name: string;
    };
}> = T[number]['name'];
interface StepFormRenderContext<TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TFieldTypes = FieldProps<TFieldValues>> extends UseStepFormReturn<TFieldValues> {
    Field: React$1.FC<TFieldTypes & React$1.RefAttributes<FocusableElement>>;
    FormStep: React$1.FC<FormStepProps<StepName<TSteps>>>;
    DisplayIf: React$1.FC<DisplayIfProps<TFieldValues>>;
    ArrayField: React$1.FC<ArrayFieldProps<TFieldValues> & React$1.RefAttributes<UseArrayFieldReturn>>;
    ObjectField: React$1.FC<ObjectFieldProps<TFieldValues>>;
}
interface UseStepFormProps<TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object> extends Omit<UseStepperProps, 'onChange'>, Omit<FormProps<any, TFieldValues, TContext>, 'children'> {
    steps?: TSteps;
    children: StepFormChildren<any, TSteps, TFieldValues, TContext>;
}
interface UseStepFormReturn<TFieldValues extends FieldValues = FieldValues> extends UseStepperReturn {
    getFormProps(): {
        onSubmit: SubmitHandler<TFieldValues>;
        schema?: any;
        resolver?: any;
    };
    updateStep(step: any): void;
    steps: Record<string, any>;
}
declare function useStepForm<TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(props: UseStepFormProps<TSteps, TFieldValues, TContext>): UseStepFormReturn<TFieldValues>;
interface UseFormStepProps {
    name: string;
    schema?: any;
    resolver?: any;
    onSubmit?: FormStepSubmitHandler;
}
declare function useFormStep(props: UseFormStepProps): StepState;

type StepsOptions<TSchema, TName extends string = string> = {
    /**
     * The step name
     */
    name: TName;
    /**
     * Schema
     */
    schema?: TSchema;
}[];
interface StepFormProps<TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object> extends UseStepFormProps<TSteps, TFieldValues, TContext> {
}
interface FormStepOptions<TName extends string = string> {
    /**
     * The step name
     */
    name: TName;
    /**
     * Schema
     */
    schema?: any;
    /**
     * Hook Form Resolver
     */
    resolver?: any;
}
interface FormStepperProps extends StepsProps, ThemingProps<'Stepper'> {
    render?: StepsItemProps['render'];
}
/**
 * Renders a stepper that displays progress above the form.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/step-form
 */
declare const FormStepper: React$1.FC<FormStepperProps>;
interface FormStepProps<TName extends string = string> extends FormStepOptions<TName>, Omit<HTMLChakraProps<'div'>, 'onSubmit'> {
    onSubmit?: FormStepSubmitHandler;
}
/**
 * The form step containing fields for a specific step.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/step-form
 */
declare const FormStep: {
    <TName extends string = string>(props: FormStepProps<TName>): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
/**
 * A button that this opens the previous step when clicked. Disabled on the first step.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/step-form
 */
declare const PrevButton: React$1.FC<ButtonProps>;
interface NextButtonProps extends Omit<ButtonProps, 'children'> {
    submitLabel?: string;
    label?: string;
}
/**
 * A button that submits the active step.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/step-form
 */
declare const NextButton: React$1.FC<NextButtonProps>;

type StepFormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object> = (<TSteps extends StepsOptions<any> = StepsOptions<any>, TFieldValues extends FieldValues = FieldValues, TContext extends object = object, TFieldTypes = FieldProps<TFieldValues, ExtraFieldProps>>(props: WithStepFields<UseStepFormProps<TSteps, TFieldValues, TContext>, FieldDefs, ExtraOverrides> & {
    ref?: React__default.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React__default.ReactElement) & {
    displayName?: string;
    id?: string;
};
interface CreateStepFormProps<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> {
    resolver?: GetResolver;
    fieldResolver?: GetFieldResolver;
    fields?: FieldDefs extends Record<string, React__default.FC<any>> ? FieldDefs : never;
    getBaseField?: TGetBaseField;
}
declare function createStepForm<FieldDefs, TGetBaseField extends GetBaseField<any> = GetBaseField<any>>({ fields, resolver, fieldResolver, getBaseField, }?: CreateStepFormProps<FieldDefs, TGetBaseField>): StepFormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object, object>;

interface CreateFormProps<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> {
    resolver?: GetResolver;
    fieldResolver?: GetFieldResolver;
    fields?: FieldDefs extends Record<string, React__default.FC<any>> ? FieldDefs : never;
    getBaseField?: TGetBaseField;
}
type FormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object> = (<TSchema = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext, ExtraFieldProps>, FieldDefs, ExtraOverrides> & {
    ref?: React__default.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React__default.ReactElement) & {
    displayName?: string;
    id?: string;
};
declare function createForm<FieldDefs, TGetBaseField extends GetBaseField<any> = GetBaseField<any>>({ resolver, fieldResolver, fields, getBaseField, }?: CreateFormProps<FieldDefs, TGetBaseField>): FormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object, object>;

interface DisplayFieldProps extends Omit<FormControlProps, 'onChange'>, Omit<FieldProps, 'type' | 'label' | 'onChange'> {
}
/**
 * Display a field value.
 *
 * @see Docs https://saas-ui.dev/
 */
declare const DisplayField: React$1.FC<DisplayFieldProps>;
declare const FormValue: React$1.FC<{
    name: string;
}>;

interface Option {
    value: string;
    label?: string;
    [key: string]: unknown;
}
type FieldRules = Pick<RegisterOptions, 'required' | 'min' | 'max' | 'maxLength' | 'minLength' | 'pattern'>;
/**
 * Form field component.
 *
 * Build-in types:
 * text, number, password, textarea, select, native-select, checkbox, radio, switch, pin
 *
 * Will default to a text field if there is no matching type.

 * @see Docs https://saas-ui.dev/docs/components/forms/field
 */
declare const Field: (<TFieldValues extends FieldValues>(props: FieldProps<TFieldValues> & {
    ref?: React$1.ForwardedRef<FocusableElement>;
}) => React$1.ReactElement) & {
    displayName?: string;
};

interface FieldsProps<TSchema = any> {
    schema?: TSchema;
    fieldResolver?: FieldResolver;
    focusFirstField?: boolean;
}
declare const AutoFields: React$1.FC<FieldsProps>;

interface FieldsContextValue {
    fields: Record<string, React__default.FC<any>>;
    getBaseField?: GetBaseField<any>;
}
declare const FieldsProvider: React__default.FC<{
    value: FieldsContextValue;
    children: React__default.ReactNode;
}>;
declare const useField: (type: string, fallback: React__default.FC<any>) => React__default.FC<any>;

type FormProviderProps<TFieldValues extends FieldValues = FieldValues, TContext = any, TSchema = any> = FormProviderProps$1<TFieldValues, TContext> & {
    fieldResolver?: FieldResolver;
    schema?: TSchema;
    fields?: {
        [key: string]: unknown;
    };
};
declare const useFormContext: <TFieldValues extends FieldValues = FieldValues, TContext = any, TSchema = any>() => {
    fieldResolver?: FieldResolver;
    schema?: any;
    fields?: {
        [key: string]: unknown;
    };
    watch: react_hook_form.UseFormWatch<TFieldValues>;
    getValues: react_hook_form.UseFormGetValues<TFieldValues>;
    getFieldState: react_hook_form.UseFormGetFieldState<TFieldValues>;
    setError: react_hook_form.UseFormSetError<TFieldValues>;
    clearErrors: react_hook_form.UseFormClearErrors<TFieldValues>;
    setValue: react_hook_form.UseFormSetValue<TFieldValues>;
    trigger: react_hook_form.UseFormTrigger<TFieldValues>;
    formState: react_hook_form.FormState<TFieldValues>;
    resetField: react_hook_form.UseFormResetField<TFieldValues>;
    reset: react_hook_form.UseFormReset<TFieldValues>;
    handleSubmit: react_hook_form.UseFormHandleSubmit<TFieldValues, undefined>;
    unregister: react_hook_form.UseFormUnregister<TFieldValues>;
    control: react_hook_form.Control<TFieldValues, TContext>;
    register: react_hook_form.UseFormRegister<TFieldValues>;
    setFocus: react_hook_form.UseFormSetFocus<TFieldValues>;
};
type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any, TSchema = any> = ReturnType<typeof useFormContext<TFieldValues, TContext, TSchema>>;
declare const FormProvider: <TFieldValues extends FieldValues = FieldValues, TContext = any, TSchema = any>(props: FormProviderProps<TFieldValues, TContext, TSchema>) => react_jsx_runtime.JSX.Element;

interface WatchFieldProps<Value = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object> {
    name: string;
    defaultValue?: Value;
    isDisabled?: boolean;
    isExact?: boolean;
    children: (value: Value, form: UseFormReturn<TFieldValues, TContext>) => React.ReactElement | void;
}
declare const WatchField: <Value = unknown, TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(props: WatchFieldProps<Value, TFieldValues, TContext>) => React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | null;

type InputRightButtonProps = ButtonProps;
declare const InputRightButton: _chakra_ui_react.ComponentWithAs<"div", ButtonProps>;

declare const useBaseField: (props: BaseFieldProps) => {
    controlProps: Pick<BaseFieldProps<react_hook_form.FieldValues, string>, "id" | "direction" | "isRequired" | "isDisabled" | "isInvalid" | "isReadOnly">;
    error: any;
    touched: any;
    name: string;
    label?: string | undefined;
    hideLabel?: boolean | undefined;
    help?: string | undefined;
};
/**
 * The default BaseField component
 * Composes the Chakra UI FormControl component, with FormLabel, FormHelperText and FormErrorMessage.
 */
declare const BaseField: React$1.FC<BaseFieldProps>;

interface CreateFieldOptions<TProps extends object> {
    isControlled?: boolean;
    hideLabel?: boolean;
    BaseField?: React$1.FC<any>;
}
/**
 * Register a new field type
 * @param type The name for this field in kebab-case, eg `email` or `array-field`
 * @param component The React component
 * @param options
 * @param options.isControlled Set this to true if this is a controlled field.
 * @param options.hideLabel Hide the field label, for example for the checkbox field.
 */
declare const createField: <TProps extends object>(component: React$1.FC<TProps>, options?: CreateFieldOptions<TProps>) => React$1.FC<Omit<BaseFieldProps<react_hook_form.FieldValues, string>, keyof TProps> & TProps>;

/**
 * Form component.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/form
 */
declare const Form: FormType<unknown, object, any, object>;
/**
 * Multi-step form component.
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/step-form
 */
declare const StepForm: StepFormType<unknown, object, any, object>;

export { ArrayField, ArrayFieldAddButton, type ArrayFieldButtonProps, ArrayFieldContainer, type ArrayFieldContainerProps, type ArrayFieldOptions, type ArrayFieldPath, type ArrayFieldProps, ArrayFieldProvider, ArrayFieldRemoveButton, ArrayFieldRow, ArrayFieldRowContainer, ArrayFieldRowFields, type ArrayFieldRowFieldsProps, ArrayFieldRowProvider, ArrayFieldRows, type ArrayFieldRowsProps, AutoFields, BaseField, type BaseFieldProps, Form$1 as BaseForm, CheckboxField, type CheckboxFieldProps, type CreateFieldOptions, type CreateFormProps, type CreateStepFormProps, type DefaultFieldOverrides, type DefaultFields, DisplayField, type DisplayFieldProps, DisplayIf, type DisplayIfProps, Field, type FieldOption, type FieldOptions, type FieldOverrides, type FieldProps, type FieldResolver, type FieldRules, type FieldsProps, FieldsProvider, Form, type FormChildren, type FormComponent, FormLayout, type FormLayoutProps, FormLegend, type FormProps, FormProvider, type FormRenderContext, FormStep, type FormStepOptions, type FormStepProps, type FormStepSubmitHandler, FormStepper, type FormStepperProps, type FormType, FormValue, type GetBaseField, type GetFieldResolver, InputField, type InputFieldProps, InputRightButton, type InputRightButtonProps, type MergeFieldProps, NativeSelect, NativeSelectField, type NativeSelectFieldProps, type NativeSelectProps, NextButton, type NextButtonProps, NumberInputField, type NumberInputFieldProps, ObjectField, type ObjectFieldProps, type ObjectSchema, type Option, PasswordInput, PasswordInputField, type PasswordInputProps, PinField, type PinFieldProps, PrevButton, RadioField, type RadioFieldProps, RadioInput, type RadioInputProps, type RadioOption, type RadioOptions, Select, SelectButton, type SelectButtonProps, SelectField, type SelectFieldProps, SelectList, type SelectListProps, SelectOption, type SelectProps, type ShallowMerge, StepForm, type StepFormChildren, type StepFormContext, type StepFormProps, StepFormProvider, type StepFormRenderContext, type StepState, type StepsOptions, SubmitButton, type SubmitButtonProps, SwitchField, type SwitchFieldProps, TextareaField, type TextareaFieldProps, type UseArrayFieldReturn, type UseArrayFieldRowProps, type UseArrayFieldRowReturn, type UseFormStepProps, type UseStepFormProps, type UseStepFormReturn, type ValueOf, WatchField, type WatchFieldProps, type WithFields, type WithStepFields, createField, createForm, createStepForm, defaultFieldTypes, objectFieldResolver, useArrayField, useArrayFieldAddButton, useArrayFieldContext, useArrayFieldRemoveButton, useArrayFieldRow, useArrayFieldRowContext, useBaseField, useField, useFormContext, useFormStep, useStepForm, useStepFormContext };
