type Root = Document | Element | null | undefined;
declare function queryAll<T extends HTMLElement = HTMLElement>(root: Root, selector: string): T[];
declare function query<T extends HTMLElement = HTMLElement>(root: Root, selector: string): T | null | undefined;
declare function itemById<T extends HTMLElement>(v: T[], id: string): T | undefined;
declare function indexOfId<T extends HTMLElement>(v: T[], id: string): number;
declare function nextById<T extends HTMLElement>(v: T[], id: string, loop?: boolean): T;
declare function prevById<T extends HTMLElement>(v: T[], id: string, loop?: boolean): T | null;
declare function findByText<T extends HTMLElement>(v: T[], text: string, currentId?: string | null): T | undefined;
declare function sortByTreeOrder<T extends HTMLElement>(v: T[]): T[];

export { findByText, indexOfId, itemById, nextById, prevById, query, queryAll, sortByTreeOrder };
