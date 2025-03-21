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

// zod/src/index.ts
var src_exports = {};
__export(src_exports, {
  Form: () => Form,
  StepForm: () => StepForm,
  createZodForm: () => createZodForm,
  createZodStepForm: () => createZodStepForm,
  getFieldsFromSchema: () => getFieldsFromSchema,
  getNestedSchema: () => getNestedSchema,
  zodFieldResolver: () => zodFieldResolver,
  zodMeta: () => zodMeta,
  zodParseMeta: () => zodParseMeta,
  zodResolver: () => import_zod.zodResolver
});
module.exports = __toCommonJS(src_exports);

// zod/src/zod-resolver.ts
var import_zod = require("@hookform/resolvers/zod");
var import_utils = require("@chakra-ui/utils");
var getType = (field) => {
  if (["ZodDefault", "ZodOptional"].includes(field._def.typeName)) {
    return getType(field._def.innerType);
  }
  switch (field._def.typeName) {
    case "ZodArray":
      return "array";
    case "ZodObject":
      return "object";
    case "ZodNumber":
      return "number";
    case "ZodDate":
      return "date";
    case "ZodNativeEnum":
    case "ZodEnum":
      return "select";
    case "ZodString":
    default:
      return "text";
  }
};
var getArrayOption = (field, name) => {
  var _a;
  return (_a = field._def[name]) == null ? void 0 : _a.value;
};
var getFieldsFromSchema = (schema) => {
  var _a, _b;
  const fields = [];
  let schemaFields = {};
  if (schema._def.typeName === "ZodArray") {
    schemaFields = schema._def.type.shape;
  } else if (schema._def.typeName === "ZodObject") {
    schemaFields = schema._def.shape();
  } else {
    return fields;
  }
  for (const name in schemaFields) {
    const field = schemaFields[name];
    const def = field._def.typeName === "ZodDefault" ? field._def.innerType._def : field._def;
    const props = {};
    if (def.typeName === "ZodArray") {
      props.min = getArrayOption(field, "minLength");
      props.max = getArrayOption(field, "maxLength");
    } else if (def.typeName === "ZodEnum") {
      props.options = def.values.map((value) => {
        return { label: value, value };
      });
    } else if (def.typeName === "ZodNativeEnum") {
      props.options = Object.entries(def.values).map(([label, value]) => ({
        label,
        value
      }));
    }
    const meta = field.description && zodParseMeta(field.description);
    fields.push({
      name,
      label: (meta == null ? void 0 : meta.label) || field.description || name,
      type: (meta == null ? void 0 : meta.type) || getType(field),
      help: meta == null ? void 0 : meta.help,
      placeholder: meta == null ? void 0 : meta.placeholder,
      defaultValue: (_b = (_a = field._def).defaultValue) == null ? void 0 : _b.call(_a),
      ...props
    });
  }
  return fields;
};
var getNestedSchema = (schema, path) => {
  return (0, import_utils.get)(schema._def.shape(), path);
};
var zodFieldResolver = (schema) => {
  return {
    getFields() {
      return getFieldsFromSchema(schema);
    },
    getNestedFields(name) {
      return getFieldsFromSchema(getNestedSchema(schema, name));
    }
  };
};
var zodMeta = (meta) => {
  return JSON.stringify(meta);
};
var zodParseMeta = (meta) => {
  try {
    return JSON.parse(meta);
  } catch (e) {
    return meta;
  }
};

// zod/src/create-zod-form.ts
var import_forms = require("@saas-ui/forms");
var createZodForm = (options) => {
  const ZodForm = (0, import_forms.createForm)({
    resolver: (schema) => (0, import_zod.zodResolver)(schema, options == null ? void 0 : options.schemaOptions, options == null ? void 0 : options.resolverOptions),
    fieldResolver: zodFieldResolver,
    ...options
  });
  ZodForm.displayName = "ZodForm";
  ZodForm.id = "ZodForm";
  return ZodForm;
};

// zod/src/create-zod-step-form.ts
var import_forms2 = require("@saas-ui/forms");
var createZodStepForm = (options) => {
  const ZodStepForm = (0, import_forms2.createStepForm)({
    resolver: (schema) => (0, import_zod.zodResolver)(schema, options == null ? void 0 : options.schemaOptions, options == null ? void 0 : options.resolverOptions),
    fieldResolver: zodFieldResolver,
    ...options
  });
  ZodStepForm.displayName = "ZodStepForm";
  ZodStepForm.id = "ZodStepForm";
  return ZodStepForm;
};

// zod/src/index.ts
var Form = createZodForm();
var StepForm = createZodStepForm();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Form,
  StepForm,
  createZodForm,
  createZodStepForm,
  getFieldsFromSchema,
  getNestedSchema,
  zodFieldResolver,
  zodMeta,
  zodParseMeta,
  zodResolver
});
//# sourceMappingURL=index.js.map