type Booleanish = boolean | "true" | "false";
declare const dataAttr: (guard: boolean | undefined) => Booleanish;
declare const ariaAttr: (guard: boolean | undefined) => "true" | undefined;
declare const matchAttr: (el: Element) => {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
    is: (key: string, value: string) => boolean;
};

export { ariaAttr, dataAttr, matchAttr };
