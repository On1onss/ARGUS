'use client'

// yup/src/yup-resolver.ts
import { reach } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
var getType = (field) => {
  var _a;
  if ((_a = field.spec.meta) == null ? void 0 : _a.type) {
    return field.spec.meta.type;
  }
  switch (field.type) {
    case "array":
      return "array";
    case "object":
      return "object";
    case "number":
      return "number";
    case "date":
      return "date";
    case "string":
    default:
      return "text";
  }
};
var getArrayOption = (field, name) => {
  var _a;
  for (const test of field.tests) {
    if ((_a = test.OPTIONS) == null ? void 0 : _a.params[name]) return test.OPTIONS.params[name];
  }
};
var getFieldsFromSchema = (schema) => {
  const fields = [];
  let schemaFields = {};
  if (schema.type === "array") {
    schemaFields = schema.innerType.fields;
  } else {
    schemaFields = schema.fields;
  }
  for (const name in schemaFields) {
    const field = schemaFields[name];
    const options = {};
    if (field.type === "array") {
      options.min = getArrayOption(field, "min");
      options.max = getArrayOption(field, "max");
    }
    fields.push({
      name,
      label: field.spec.label || name,
      type: getType(field),
      ...options
    });
  }
  return fields;
};
var getNestedSchema = (schema, path) => {
  return reach(schema, path);
};
var yupFieldResolver = (schema) => {
  return {
    getFields() {
      return getFieldsFromSchema(schema);
    },
    getNestedFields(name) {
      return getFieldsFromSchema(getNestedSchema(schema, name));
    }
  };
};

// yup/src/create-yup-form.ts
import {
  createForm
} from "@saas-ui/forms";
var createYupForm = (options) => {
  const YupForm = createForm({
    resolver: (schema) => yupResolver(
      schema,
      options == null ? void 0 : options.schemaOptions,
      options == null ? void 0 : options.resolverOptions
    ),
    fieldResolver: yupFieldResolver,
    ...options
  });
  YupForm.displayName = "YupForm";
  YupForm.id = "YupForm";
  return YupForm;
};

// yup/src/create-yup-step-form.ts
import {
  createStepForm
} from "@saas-ui/forms";
var createYupStepForm = (options) => {
  const YupStepForm = createStepForm({
    resolver: (schema) => yupResolver(
      schema,
      options == null ? void 0 : options.schemaOptions,
      options == null ? void 0 : options.resolverOptions
    ),
    fieldResolver: yupFieldResolver,
    ...options
  });
  YupStepForm.displayName = "YupStepForm";
  YupStepForm.id = "YupStepForm";
  return YupStepForm;
};

// yup/src/index.ts
var Form2 = createYupForm();
var StepForm = createYupStepForm();
export {
  Form2 as Form,
  StepForm,
  createYupForm,
  createYupStepForm,
  getFieldsFromSchema,
  getNestedSchema,
  yupFieldResolver,
  yupResolver
};
//# sourceMappingURL=index.mjs.map