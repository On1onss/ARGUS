'use client'

// ajv/src/ajv-resolver.ts
import { ajvResolver } from "@hookform/resolvers/ajv";
import { objectFieldResolver } from "@saas-ui/forms";
var ajvFieldResolver = (schema) => {
  return objectFieldResolver(schema.properties);
};

// ajv/src/create-ajv-form.ts
import {
  createForm
} from "@saas-ui/forms";
function createAjvForm(options) {
  return createForm({
    resolver: (schema) => ajvResolver(schema, options == null ? void 0 : options.schemaOptions, options == null ? void 0 : options.resolverOptions),
    fieldResolver: ajvFieldResolver,
    ...options
  });
}

// ajv/src/index.ts
var Form = createAjvForm();
export {
  Form,
  ajvFieldResolver,
  ajvResolver,
  createAjvForm
};
//# sourceMappingURL=index.mjs.map