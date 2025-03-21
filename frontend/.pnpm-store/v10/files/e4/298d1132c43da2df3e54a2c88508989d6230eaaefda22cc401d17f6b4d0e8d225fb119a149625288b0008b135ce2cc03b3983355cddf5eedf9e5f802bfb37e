type IncludeContainerType = boolean | "if-empty";
declare const focusableSelector: string;
/**
 * Returns the focusable elements within the element
 */
declare const getFocusables: (container: Pick<HTMLElement, "querySelectorAll"> | null, includeContainer?: IncludeContainerType) => HTMLElement[];
/**
 * Whether this element is focusable
 */
declare function isFocusable(element: HTMLElement | null): element is HTMLElement;
declare function getFirstFocusable(container: HTMLElement, includeContainer?: IncludeContainerType): HTMLElement;
/**
 * Returns the tabbable elements within the element
 */
declare function getTabbables(container: HTMLElement | null, includeContainer?: IncludeContainerType): HTMLElement[];
/**
 * Whether this element is tabbable
 */
declare function isTabbable(el: HTMLElement | null): el is HTMLElement;
declare function getFirstTabbable(container: HTMLElement | null, includeContainer?: IncludeContainerType): HTMLElement;
declare function getLastTabbable(container: HTMLElement | null, includeContainer?: IncludeContainerType): HTMLElement;

export { focusableSelector, getFirstFocusable, getFirstTabbable, getFocusables, getLastTabbable, getTabbables, isFocusable, isTabbable };
