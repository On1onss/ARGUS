type TypeaheadState = {
    keysSoFar: string;
    timer: number;
};
type TypeaheadOptions = {
    state: TypeaheadState;
    activeId: string | null;
    key: string;
    timeout?: number;
};
declare function findByTypeaheadImpl<T extends HTMLElement>(_items: T[], options: TypeaheadOptions): T | undefined;
declare const findByTypeahead: typeof findByTypeaheadImpl & {
    defaultOptions: {
        keysSoFar: string;
        timer: number;
    };
    isValidEvent: typeof isValidTypeaheadEvent;
};
declare function isValidTypeaheadEvent(event: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">): boolean;

export { TypeaheadOptions, TypeaheadState, findByTypeahead };
