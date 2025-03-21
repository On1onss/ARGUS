"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const routerGenerator = require("@tanstack/router-generator");
async function generate(config, root) {
  try {
    await routerGenerator.generator(config, root);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
exports.generate = generate;
//# sourceMappingURL=generate.cjs.map
