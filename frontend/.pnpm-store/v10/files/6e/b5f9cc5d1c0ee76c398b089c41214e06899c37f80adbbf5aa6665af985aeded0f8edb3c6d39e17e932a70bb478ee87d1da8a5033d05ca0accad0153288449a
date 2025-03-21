type Callback = (v: MutationRecord) => void;
declare function observeAttributes(node: Element | null, attributes: string | string[], fn: Callback): (() => void) | undefined;
declare function observeChildren(node: Element | null, fn: (v: MutationRecord[]) => void): (() => void) | undefined;

export { observeAttributes, observeChildren };
