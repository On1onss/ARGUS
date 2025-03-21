import type { ParserOptions } from "./options.js";
import type { $RefParser } from "./index";
export interface InventoryEntry {
    $ref: any;
    parent: any;
    key: any;
    pathFromRoot: any;
    depth: any;
    file: any;
    hash: any;
    value: any;
    circular: any;
    extended: any;
    external: any;
    indirections: any;
}
/**
 * Bundles all external JSON references into the main JSON schema, thus resulting in a schema that
 * only has *internal* references, not any *external* references.
 * This method mutates the JSON schema object, adding new references and re-mapping existing ones.
 *
 * @param parser
 * @param options
 */
declare function bundle(parser: $RefParser, options: ParserOptions): void;
export default bundle;
