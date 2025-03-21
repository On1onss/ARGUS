import { FieldResolver, CreateFormProps, WithFields, FormProps } from '@saas-ui/forms';
import { ajvResolver } from '@hookform/resolvers/ajv';
export { ajvResolver } from '@hookform/resolvers/ajv';
import { JTDDataType } from 'ajv/dist/jtd';
export { JTDDataType, JTDSchemaType } from 'ajv/dist/jtd';
import { JSONSchemaType } from 'ajv';

declare const ajvFieldResolver: (schema: JSONSchemaType<unknown>) => FieldResolver;

type ResolverArgs = Parameters<typeof ajvResolver>;
interface CreateAjvFormProps<FieldDefs> extends CreateFormProps<FieldDefs> {
    schemaOptions?: ResolverArgs[1];
    resolverOptions?: ResolverArgs[2];
}
type ParseJsonSchema<T> = T extends {
    type: 'object';
} ? JTDDataType<T> extends infer R ? R extends object ? R : never : never : never;
type AjvFormType<FieldDefs, ExtraProps = object, JsonSchema extends Record<string, any> = Record<string, any>> = (<TSchema extends JsonSchema = JsonSchema, TFieldValues extends ParseJsonSchema<TSchema> = ParseJsonSchema<TSchema>, TContext extends object = object>(props: WithFields<FormProps<TSchema, TFieldValues, TContext>, FieldDefs> & {
    ref?: React.ForwardedRef<HTMLFormElement>;
} & ExtraProps) => React.ReactElement) & {
    displayName?: string;
    id?: string;
};
/**
 * Create a Form component with AJV validation that accepts JSON Type Definition schema
 *
 * @see Docs https://saas-ui.dev/docs/components/forms/form
 * @see https://ajv.js.org/json-type-definition.html
 */
declare function createAjvForm<FieldDefs>(options?: CreateAjvFormProps<FieldDefs>): AjvFormType<FieldDefs>;

declare const Form: AjvFormType<unknown, object, Record<string, any>>;

export { type CreateAjvFormProps, Form, ajvFieldResolver, createAjvForm };
