interface EventMap extends DocumentEventMap, WindowEventMap, HTMLElementEventMap {
}
type DOMTarget = Document | HTMLElement | EventTarget | null;
type AnyPointerEvent = MouseEvent | TouchEvent | PointerEvent;
type RefTarget = {
    current: HTMLElement | null;
};
type DOMEventTarget = (() => DOMTarget) | DOMTarget | RefTarget;
type EventListenerOptions = boolean | AddEventListenerOptions;
interface PointerEventInfo {
    point: {
        x: number;
        y: number;
    };
}
type EventListenerWithPointInfo<T extends AnyPointerEvent = AnyPointerEvent> = (event: T, info: PointerEventInfo) => void;
interface PointerNameMap {
    pointerdown: string;
    pointermove: string;
    pointerup: string;
    pointercancel: string;
    pointerover?: string;
    pointerout?: string;
    pointerenter?: string;
    pointerleave?: string;
}

export { AnyPointerEvent, DOMEventTarget, DOMTarget, EventListenerOptions, EventListenerWithPointInfo, EventMap, PointerEventInfo, PointerNameMap, RefTarget };
