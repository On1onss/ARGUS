declare function nextTick(fn: VoidFunction): () => void;
declare function raf(fn: VoidFunction): () => void;
type SchedulerFn = (fn: VoidFunction) => VoidFunction;
type DisposableVoidFunction = () => VoidFunction | undefined | void;
declare function disposable(type: SchedulerFn | undefined, fn: DisposableVoidFunction): () => void;
declare function disposableRaf(fn: DisposableVoidFunction): () => void;
declare function disposableNextTick(fn: DisposableVoidFunction): () => void;

export { disposable, disposableNextTick, disposableRaf, nextTick, raf };
