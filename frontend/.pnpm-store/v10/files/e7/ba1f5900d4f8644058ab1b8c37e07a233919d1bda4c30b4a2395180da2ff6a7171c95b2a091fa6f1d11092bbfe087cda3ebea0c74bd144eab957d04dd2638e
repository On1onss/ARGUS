import { AnyPointerEvent, EventMap, DOMEventTarget, PointerEventInfo } from './listener.types.js';

declare function extractInfo<T extends AnyPointerEvent = AnyPointerEvent>(event: T, type?: "page" | "client"): {
    point: {
        x: any;
        y: any;
    };
};
declare function addDomEvent<K extends keyof EventMap>(target: DOMEventTarget, eventName: K, handler: (event: EventMap[K]) => void, options?: boolean | AddEventListenerOptions): () => void;
declare function addPointerEvent<K extends keyof EventMap>(target: DOMEventTarget, event: K, listener: (event: EventMap[K], info: PointerEventInfo) => void, options?: boolean | AddEventListenerOptions): () => void;
declare function extractClientInfo(event: AnyPointerEvent): {
    point: {
        x: any;
        y: any;
    };
};
declare function getEventName(evt: keyof EventMap): keyof EventMap;

export { addDomEvent, addPointerEvent, extractClientInfo, extractInfo, getEventName };
