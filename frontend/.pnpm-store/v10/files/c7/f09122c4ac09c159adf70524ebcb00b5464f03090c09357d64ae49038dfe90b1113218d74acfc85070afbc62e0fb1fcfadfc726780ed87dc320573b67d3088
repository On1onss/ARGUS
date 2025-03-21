'use client'
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// yup/src/index.ts
var src_exports = {};
__export(src_exports, {
  Form: () => Form2,
  StepForm: () => StepForm,
  createYupForm: () => createYupForm,
  createYupStepForm: () => createYupStepForm,
  getFieldsFromSchema: () => getFieldsFromSchema,
  getNestedSchema: () => getNestedSchema,
  yupFieldResolver: () => yupFieldResolver,
  yupResolver: () => import_yup2.yupResolver
});
module.exports = __toCommonJS(src_exports);

// yup/src/yup-resolver.ts
var import_yup = require("yup");
var import_yup2 = require("@hookform/resolvers/yup");
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
  return (0, import_yup.reach)(schema, path);
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
var import_forms = require("@saas-ui/forms");
var createYupForm = (options) => {
  const YupForm = (0, import_forms.createForm)({
    resolver: (schema) => (0, import_yup2.yupResolver)(
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
var import_forms2 = require("@saas-ui/forms");
var createYupStepForm = (options) => {
  const YupStepForm = (0, import_forms2.createStepForm)({
    resolver: (schema) => (0, import_yup2.yupResolver)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Form,
  StepForm,
  createYupForm,
  createYupStepForm,
  getFieldsFromSchema,
  getNestedSchema,
  yupFieldResolver,
  yupResolver
});
//# sourceMappingURL=index.js.map