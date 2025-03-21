declare function isDocument(el: any): el is Document;
declare function isShadowRoot(el: any): el is ShadowRoot;
declare function isWindow(value: any): value is Window;
declare function isFrame(element: Element): element is HTMLIFrameElement;
declare const isWithinShadowRoot: (node: HTMLElement) => boolean;
declare function getDocument(el: Element | Window | Node | Document | null): Document;
declare function getRootNode(el: Node): Document | ShadowRoot;
declare function getWindow(el: HTMLElement): Window & typeof globalThis;
declare function getDocumentElement(el: HTMLElement | Window): HTMLElement;
declare function getNodeName(node: HTMLElement | Window | null): string;
declare function getEventWindow(event: UIEvent): Window;
declare function getEventTarget<T extends EventTarget>(event: Event): T | null;
declare function getActiveElement(el: HTMLElement): HTMLElement | null;
declare function getActiveDescendant(node: HTMLElement | null): HTMLElement | null;
declare function getParent(el: HTMLElement): HTMLElement;
type Ctx = {
    getRootNode?: () => Document | ShadowRoot | Node;
};
declare function defineDomHelpers<T>(helpers: T): {
    getRootNode: (ctx: Ctx) => Document | ShadowRoot;
    getDoc: (ctx: Ctx) => Document;
    getWin: (ctx: Ctx) => Window & typeof globalThis;
    getActiveElement: (ctx: Ctx) => HTMLElement | null;
    getById: <T_1 = HTMLElement>(ctx: Ctx, id: string) => T_1 | null;
} & T;
declare function contains(parent: HTMLElement | EventTarget | null | undefined, child: HTMLElement | EventTarget | null): boolean;
declare function isHTMLElement(v: any): v is HTMLElement;
declare const isDisabled: (el: HTMLElement | null) => boolean;
declare function isElementEditable(el: HTMLElement | EventTarget | null): boolean;
declare function isVisible(el: Element): boolean;

export { contains, defineDomHelpers, getActiveDescendant, getActiveElement, getDocument, getDocumentElement, getEventTarget, getEventWindow, getNodeName, getParent, getRootNode, getWindow, isDisabled, isDocument, isElementEditable, isFrame, isHTMLElement, isShadowRoot, isVisible, isWindow, isWithinShadowRoot };
