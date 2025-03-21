interface AnatomyPart {
    selector: string;
    className: string;
    toString(): string;
}
type AnatomyInstance<T extends string> = Omit<Anatomy<T>, 'parts'>;
interface Anatomy<T extends string> {
    toPart: (part: string) => AnatomyPart;
    parts: <U extends string>(...parts: U[]) => AnatomyInstance<U>;
    extend: <V extends string>(...parts: V[]) => AnatomyInstance<T | V>;
    readonly keys: T[];
    selectors: () => Record<T, string>;
    classnames: () => Record<T, string>;
    __type: T;
}

declare const appShellAnatomy: AnatomyInstance<"container" | "inner" | "main">;
declare const emptyStateAnatomy: AnatomyInstance<"container" | "icon" | "title" | "body" | "footer" | "descripton" | "actions">;
declare const bannerAnatomy: AnatomyInstance<"container" | "icon" | "title" | "description" | "content" | "actions" | "close">;
declare const hotkeysAnantomy: AnatomyInstance<"container" | "item" | "groupTitle" | "command" | "group" | "then">;
declare const loadingOverlayAnatomy: AnatomyInstance<"overlay" | "text">;
declare const navGroupAnatomy: AnatomyInstance<"container" | "icon" | "title" | "content">;
declare const navItemAnatomy: AnatomyInstance<"icon" | "link" | "inner" | "label" | "item">;
declare const nprogressAnatomy: AnatomyInstance<"container" | "bar">;
declare const personaAnatomy: AnatomyInstance<"container" | "label" | "details" | "avatar" | "secondaryLabel" | "tertiaryLabel">;
declare const searchInputAnatomy: AnatomyInstance<"reset" | "input">;
declare const sidebarAnatomy: AnatomyInstance<"container" | "overlay" | "section" | "toggleWrapper" | "toggle">;
declare const stepperAnatomy: AnatomyInstance<"container" | "icon" | "title" | "content" | "separator" | "steps">;
declare const structuredListAnatomy: AnatomyInstance<"icon" | "button" | "cell" | "header" | "item" | "list">;
declare const propertyAnatomy: AnatomyInstance<"label" | "property" | "value">;
declare const selectAnatomy: AnatomyInstance<"element" | "addon" | "field">;
declare const timelineAnatomy: AnatomyInstance<"container" | "icon" | "content" | "dot" | "separator" | "item" | "track">;

export { appShellAnatomy, bannerAnatomy, emptyStateAnatomy, hotkeysAnantomy, loadingOverlayAnatomy, navGroupAnatomy, navItemAnatomy, nprogressAnatomy, personaAnatomy, propertyAnatomy, searchInputAnatomy, selectAnatomy, sidebarAnatomy, stepperAnatomy, structuredListAnatomy, timelineAnatomy };
