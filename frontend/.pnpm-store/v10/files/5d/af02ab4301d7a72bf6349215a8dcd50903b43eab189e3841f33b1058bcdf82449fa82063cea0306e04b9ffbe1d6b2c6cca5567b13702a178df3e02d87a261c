import { JSX } from '@zag-js/types';

declare function isKeyboardClick(e: Pick<MouseEvent, "detail" | "clientX" | "clientY">): boolean;
declare function isPrintableKey(e: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">): boolean;
declare function isVirtualPointerEvent(event: PointerEvent): boolean;
declare function isVirtualClick(event: MouseEvent | PointerEvent): boolean;
type NativeEvent<E> = JSX.ChangeEvent<any> extends E ? InputEvent : E extends JSX.SyntheticEvent<any, infer T> ? T : never;
declare function getNativeEvent<E>(e: E): NativeEvent<E>;
declare function isSelfEvent(event: Pick<Event, "currentTarget" | "target">): boolean;
declare const supportsPointerEvent: () => boolean;
declare const supportsTouchEvent: () => boolean;
declare const supportsMouseEvent: () => boolean;
declare const isMouseEvent: (v: any) => v is MouseEvent;
declare const isTouchEvent: (v: any) => v is TouchEvent;
declare const isLeftClick: (v: {
    button: number;
}) => boolean;
declare const isContextMenuEvent: (e: Pick<MouseEvent, "button" | "ctrlKey" | "metaKey">) => boolean;
declare const isRightClick: (v: {
    button: number;
}) => boolean;
declare const isModifiedEvent: (v: Pick<KeyboardEvent, "ctrlKey" | "metaKey" | "altKey">) => boolean;
declare const isCtrlKey: (v: Pick<KeyboardEvent, "ctrlKey" | "metaKey">) => boolean;

export { getNativeEvent, isContextMenuEvent, isCtrlKey, isKeyboardClick, isLeftClick, isModifiedEvent, isMouseEvent, isPrintableKey, isRightClick, isSelfEvent, isTouchEvent, isVirtualClick, isVirtualPointerEvent, supportsMouseEvent, supportsPointerEvent, supportsTouchEvent };
