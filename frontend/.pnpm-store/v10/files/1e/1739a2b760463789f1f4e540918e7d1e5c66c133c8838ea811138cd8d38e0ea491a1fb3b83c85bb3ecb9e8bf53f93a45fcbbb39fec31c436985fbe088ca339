import * as react_hook_form from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema, AnyObjectSchema as AnyObjectSchema$1, InferType } from 'yup';
import * as dist from 'dist';
import { FieldProps, GetFieldResolver, WithFields, FormProps, GetBaseField, CreateFormProps, CreateStepFormProps, StepsOptions, WithStepFields, UseStepFormProps } from '@saas-ui/forms';
import { yupResolver } from '@hookform/resolvers/yup';
export { yupResolver } from '@hookform/resolvers/yup';
import React$1 from 'react';

type AnyObjectSchema = ObjectSchema<any, any, any, ''> | ObjectSchema<any, any, any, 'd'> | ObjectSchema<any, any, any, 's'>;

type Options = {
    min?: number;
    max?: number;
};
/**
 * A helper function to render forms automatically based on a Yup schema
 *
 * @param schema The Yup schema
 * @returns {FieldProps[]}
 */
declare const getFieldsFromSchema: (schema: AnyObjectSchema) => FieldProps[];
declare const getNestedSchema: (schema: AnyObjectSchema, path: string) => AnyObjectSchema;
declare const yupFieldResolver: GetFieldResolver;

type ResolverArgs$1 = Parameters<typeof yupResolver>;
interface CreateYupFormProps$1<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> extends CreateFormProps<FieldDefs, TGetBaseField> {
    schemaOptions?: ResolverArgs$1[1];
    resolverOptions?: ResolverArgs$1[2];
}
type YupFormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object, Type extends 'yup' = 'yup'> = (<TSchema extends AnyObjectSchema$1 = AnyObjectSchema$1, TFieldValues extends Required<InferType<TSchema>> = Required<InferType<TSchema>>, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext, ExtraFieldProps>, FieldDefs, ExtraOverrides> & {
    ref?: React$1.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React$1.ReactElement) & {
    displayName?: string;
    id?: 'YupForm';
};
declare const createYupForm: <FieldDefs, TGetBaseField extends GetBaseField<any> = GetBaseField<any>>(options?: CreateYupFormProps$1<FieldDefs, TGetBaseField>) => YupFormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object>;

type ResolverArgs = Parameters<typeof yupResolver>;
interface CreateYupFormProps<FieldDefs, TGetBaseField extends GetBaseField = GetBaseField> extends CreateStepFormProps<FieldDefs, TGetBaseField> {
    schemaOptions?: ResolverArgs[1];
    resolverOptions?: ResolverArgs[2];
}
type InferStepType<T extends Required<StepsOptions<AnyObjectSchema>>> = T extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? InferType<Step['schema']> & (Rest extends Required<StepsOptions<AnyObjectSchema>> ? InferStepType<Rest> : object) : object : object;
type YupStepFormType<FieldDefs, ExtraProps = object, ExtraFieldProps extends object = object, ExtraOverrides = object> = (<TSteps extends Required<StepsOptions<AnyObjectSchema>> = Required<StepsOptions<AnyObjectSchema>>, TFieldValues extends InferStepType<TSteps> = InferStepType<TSteps>, TContext extends object = object>(props: WithStepFields<UseStepFormProps<TSteps, TFieldValues, TContext>, FieldDefs, ExtraOverrides> & {
    steps: TSteps;
    ref?: React$1.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React$1.ReactElement) & {
    displayName?: string;
    id?: string;
};
declare const createYupStepForm: <FieldDefs, TGetBaseField extends GetBaseField = GetBaseField>(options?: CreateYupFormProps<FieldDefs, TGetBaseField>) => YupStepFormType<FieldDefs, object, TGetBaseField extends GetBaseField<infer ExtraFieldProps extends object> ? ExtraFieldProps : object>;

declare const Form: YupFormType<unknown, object, any, object, "yup">;
declare const StepForm: (<TSteps extends Required<dist.StepsOptions<AnyObjectSchema>> = {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[], TFieldValues extends TSteps extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T ? T extends Rest ? T extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_1 ? T_1 extends Rest ? T_1 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_2 ? T_2 extends Rest ? T_2 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_3 ? T_3 extends Rest ? T_3 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_4 ? T_4 extends Rest ? T_4 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_5 ? T_5 extends Rest ? T_5 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_6 ? T_6 extends Rest ? T_6 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_7 ? T_7 extends Rest ? T_7 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_8 ? T_8 extends Rest ? T_8 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_9 ? T_9 extends Rest ? T_9 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? any : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object : never : never : object) : object : object = TSteps extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T ? T extends Rest ? T extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_1 ? T_1 extends Rest ? T_1 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_2 ? T_2 extends Rest ? T_2 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_3 ? T_3 extends Rest ? T_3 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_4 ? T_4 extends Rest ? T_4 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_5 ? T_5 extends Rest ? T_5 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_6 ? T_6 extends Rest ? T_6 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_7 ? T_7 extends Rest ? T_7 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_8 ? T_8 extends Rest ? T_8 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
}[] ? Rest extends infer T_9 ? T_9 extends Rest ? T_9 extends [infer Step, ...infer Rest] ? Step extends {
    schema: AnyObjectSchema;
} ? yup.Asserts<Step["schema"]> & (Rest extends {
    name: string;
    schema?: AnyObjectSchema | undefined;
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

export { type AnyObjectSchema, Form, type Options, StepForm, type YupFormType, createYupForm, createYupStepForm, getFieldsFromSchema, getNestedSchema, yupFieldResolver };
