"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const yargs = require("yargs");
const routerGenerator = require("@tanstack/router-generator");
const generate = require("./generate.cjs");
const watch = require("./watch.cjs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const yargs__namespace = /* @__PURE__ */ _interopNamespaceDefault(yargs);
main();
function main() {
  yargs__namespace.scriptName("tsr").usage("$0 <cmd> [args]").command("generate", "Generate the routes for a project", async () => {
    const config = routerGenerator.getConfig();
    await generate.generate(config, process.cwd());
  }).command(
    "watch",
    "Continuously watch and generate the routes for a project",
    () => {
      watch.watch(process.cwd());
    }
  ).help().argv;
}
exports.main = main;
//# sourceMappingURL=index.cjs.map
