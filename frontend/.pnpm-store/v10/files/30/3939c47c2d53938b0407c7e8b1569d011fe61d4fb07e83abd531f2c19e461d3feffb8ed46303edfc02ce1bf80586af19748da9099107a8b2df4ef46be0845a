import { PointerEventInfo, AnyPointerEvent } from './listener.types.js';

declare function trackPointerDown(doc: Document, onPointerDown: (el: HTMLElement) => void): () => void;
type TrackPointerMoveOptions = {
    onPointerUp: VoidFunction;
    onPointerMove: (info: PointerEventInfo, event: AnyPointerEvent) => void;
};
declare function trackPointerMove(doc: Document, opts: TrackPointerMoveOptions): () => void;

export { trackPointerDown, trackPointerMove };
