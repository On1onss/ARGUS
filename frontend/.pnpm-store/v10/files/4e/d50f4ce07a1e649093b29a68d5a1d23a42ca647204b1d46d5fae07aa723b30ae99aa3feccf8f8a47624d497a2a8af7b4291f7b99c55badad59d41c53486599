type Dict = Record<string, any>;
type PredicateFn<T> = (key: T) => boolean;
interface SplitPropsFn {
    <T extends Dict, K extends keyof T>(props: T, keys: K[]): [Pick<T, K>, Omit<T, K>];
    <T extends Dict, K extends PredicateFn<keyof T>>(props: T, keys: K): [Dict, Dict];
}
declare const splitProps: SplitPropsFn;
declare const createSplitProps: <T>(keys: (keyof T)[]) => <Props extends T>(props: Props) => [T, Omit<Props, keyof T>];

export { type SplitPropsFn as S, createSplitProps as c, splitProps as s };
