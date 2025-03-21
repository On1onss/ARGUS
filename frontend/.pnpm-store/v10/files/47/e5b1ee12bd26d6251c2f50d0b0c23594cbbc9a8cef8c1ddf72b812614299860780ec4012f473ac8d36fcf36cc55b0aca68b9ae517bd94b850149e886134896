type PointerLockHandlers = {
    onPointerLock?: VoidFunction;
    onPointerUnlock?: VoidFunction;
};
declare function addPointerlockChangeListener(doc: Document, fn: VoidFunction): () => void;
declare function addPointerlockErrorListener(doc: Document, fn: (e: Event) => void): () => void;
declare function requestPointerLock(doc: Document, handlers?: PointerLockHandlers): (() => void) | undefined;

export { addPointerlockChangeListener, addPointerlockErrorListener, requestPointerLock };
