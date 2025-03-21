import * as react_hook_form from 'react-hook-form';
import * as dist from 'dist';
import * as zod from 'zod';
import { z, AnyZodObject } from 'zod';
import { FieldProps, WithFields, FormProps, GetBaseField, CreateFormProps, CreateStepFormProps, StepsOptions, WithStepFields, UseStepFormProps } from '@saas-ui/forms';
import { zodResolver } from '@hookform/resolvers/zod';
export { zodResolver } from '@hookform/resolvers/zod';
import React$1 from 'react';

/**
 * A helper function to render forms automatically based on a Yup schema
 *
 * @param schema The Yup schema
 * @returns {FieldProps[]}
 */
declare const getFieldsFromSchema: (schema: zod.ZodTypeAny) => FieldProps[];
declare const getNestedSchema: (schema: zod.ZodTypeAny, path: string) => any;
declare const zodFieldResolver: <T extends zod.ZodTypeAny>(schema: T) => {
    getFields(): FieldProps[];
    getNestedFields(name: string): FieldProps[];
};
interface ZodMeta {
    /**
     * The label of the field
     */
    label: string;
    /**
     * The type of the field
     */
    type?: string;
    /**
     * The placeholder of the field
     */
    placeholder?: string;
    /**
     * The help text of the field
     */
    help?: string;
    /**
     * Object field column count
     */
    columns?: number;
    /**
     * Array field min rows
     */
    min?: number;
    /**
     * Array field max rows
     */
    max?: number;
    [key: string]: any;
}
declare const zodMeta: (meta: ZodMeta) => string;
declare const zodParseMeta: (meta: string) => any;

type ResolverArgs$1 = Parameters<typeof zodResolver>;
interface CreateZodFormProps<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> extends CreateFormProps<FieldDefs, TGetBaseField> {
    schemaOptions?: ResolverArgs$1[1];
    resolverOptions?: ResolverArgs$1[2];
}
type InferObjectSchema<T extends z.ZodTypeAny | z.ZodEffects<z.ZodTypeAny>> = T extends z.ZodEffects<infer TSchema> ? z.infer<TSchema> : z.infer<T>;
type ZodFormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object, Type extends 'zod' = 'zod'> = (<TSchema extends z.AnyZodObject | z.ZodEffects<z.AnyZodObject> = z.AnyZodObject, TFieldValues extends InferObjectSchema<TSchema> = InferObjectSchema<TSchema>, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext, ExtraFieldProps>, FieldDefs, ExtraOverrides> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React.ReactElement) & {
    displayName?: string;
    id?: string;
};
declare const createZodForm: <FieldDefs, TGetBaseField extends GetBaseField<any> = GetBaseField<any>>(options?: CreateZodFormProps<FieldDefs, TGetBaseField>) => ZodFormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object>;

type ResolverArgs = Parameters<typeof zodResolver>;
interface CreateZodStepFormProps<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> extends CreateStepFormProps<FieldDefs, TGetBaseField> {
    schemaOptions?: ResolverArgs[1];
    resolverOptions?: ResolverArgs[2];
}
type InferStepType<T extends Required<StepsOptions<AnyZodObject>>> = T extends [
    infer Step,
    ...infer Rest
] ? Step extends {
    schema: AnyZodObject;
} ? z.infer<Step['schema']> & (Rest extends Required<StepsOptions<AnyZodObject>> ? InferStepType<Rest> : object) : object : object;
type ZodStepFormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object> = (<TSteps extends Required<StepsOptions<AnyZodObject>> = Required<StepsOptions<AnyZodObject>>, TFieldValues extends InferStepType<TSteps> = InferStepType<TSteps>, TContext extends object = object>(props: WithStepFields<UseStepFormProps<TSteps, TFieldValues, TContext>, FieldDefs, ExtraOverrides> & {
    steps: TSteps;
    ref?: React$1.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React$1.ReactElement) & {
    displayName?: string;
    id?: string;
};
declare const createZodStepForm: <FieldDefs, TGetBaseField extends GetBaseField = GetBaseField>(options?: CreateZodStepFormProps<FieldDefs, TGetBaseField>) => ZodStepFormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object>;

declare const Form: ZodFormType<unknown, object, any, object, "zod">;
declare const StepForm: (<TSteps extends Required<dist.StepsOptions<zod.AnyZodObject>> = {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[], TFieldValues extends TSteps extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T ? T extends Rest ? T extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_1 ? T_1 extends Rest ? T_1 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_2 ? T_2 extends Rest ? T_2 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_3 ? T_3 extends Rest ? T_3 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_4 ? T_4 extends Rest ? T_4 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_5 ? T_5 extends Rest ? T_5 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_6 ? T_6 extends Rest ? T_6 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_7 ? T_7 extends Rest ? T_7 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_8 ? T_8 extends Rest ? T_8 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_9 ? T_9 extends Rest ? T_9 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? any : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object = TSteps extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T ? T extends Rest ? T extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_1 ? T_1 extends Rest ? T_1 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_2 ? T_2 extends Rest ? T_2 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_3 ? T_3 extends Rest ? T_3 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_4 ? T_4 extends Rest ? T_4 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_5 ? T_5 extends Rest ? T_5 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_6 ? T_6 extends Rest ? T_6 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_7 ? T_7 extends Rest ? T_7 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_8 ? T_8 extends Rest ? T_8 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? Rest extends infer T_9 ? T_9 extends Rest ? T_9 extends [infer Step, ...infer Rest] ? Step extends {
    schema: zod.AnyZodObject;
} ? zod.TypeOf<Step["schema"]> & (Rest extends {
    name: string;
    schema?: zod.AnyZodObject | undefined;
}[] ? any : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object, TContext extends object = object>(props: Omit<dist.UseStepFormProps<TSteps, TFieldValues, TContext>, "children" | "fields"> & {
    children?: dist.StepFormChildren<unknown, TSteps, TFieldValues, TContext>;
    fields?: (dist.FieldOverrides<unknown, TFieldValues, react_hook_form.Path<TFieldValues>> & {
        submit?: dist.SubmitButtonProps;
    } & object) | undefined;
} & {
    steps: TSteps;
    ref?: React.ForwardedRef<HTMLFormElement>;
} & object) => React.ReactElement) & {
    displayName?: string;
    id?: string;
};

export { Form, StepForm, type ZodFormType, type ZodMeta, createZodForm, createZodStepForm, getFieldsFromSchema, getNestedSchema, zodFieldResolver, zodMeta, zodParseMeta };
