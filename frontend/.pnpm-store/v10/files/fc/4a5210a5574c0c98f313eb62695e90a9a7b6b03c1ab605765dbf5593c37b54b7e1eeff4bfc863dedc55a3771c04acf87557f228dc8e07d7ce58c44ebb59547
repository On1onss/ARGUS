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

// ajv/src/index.ts
var src_exports = {};
__export(src_exports, {
  Form: () => Form,
  ajvFieldResolver: () => ajvFieldResolver,
  ajvResolver: () => import_ajv.ajvResolver,
  createAjvForm: () => createAjvForm
});
module.exports = __toCommonJS(src_exports);

// ajv/src/ajv-resolver.ts
var import_ajv = require("@hookform/resolvers/ajv");
var import_forms = require("@saas-ui/forms");
var ajvFieldResolver = (schema) => {
  return (0, import_forms.objectFieldResolver)(schema.properties);
};

// ajv/src/create-ajv-form.ts
var import_forms2 = require("@saas-ui/forms");
function createAjvForm(options) {
  return (0, import_forms2.createForm)({
    resolver: (schema) => (0, import_ajv.ajvResolver)(schema, options == null ? void 0 : options.schemaOptions, options == null ? void 0 : options.resolverOptions),
    fieldResolver: ajvFieldResolver,
    ...options
  });
}

// ajv/src/index.ts
var Form = createAjvForm();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Form,
  ajvFieldResolver,
  ajvResolver,
  createAjvForm
});
//# sourceMappingURL=index.js.map