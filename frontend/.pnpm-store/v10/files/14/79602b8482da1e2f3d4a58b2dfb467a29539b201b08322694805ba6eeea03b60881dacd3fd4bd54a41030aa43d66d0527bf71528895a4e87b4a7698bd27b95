import { JSX } from '@zag-js/types';

type EventKey = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight" | "Space" | "Enter" | "Comma" | "Escape" | "Backspace" | "Delete" | "Home" | "End" | "Tab" | "PageUp" | "PageDown" | (string & {});
type EventKeyMap = Partial<Record<EventKey, (event: JSX.KeyboardEvent) => void>>;
type EventKeyOptions = {
    dir?: "ltr" | "rtl";
    orientation?: "horizontal" | "vertical";
};
/**
 * Determine the event key based on text direction.
 */
declare function getEventKey(event: Pick<KeyboardEvent, "key">, options?: EventKeyOptions): string;
/**
 * Determine the step factor for keyboard events
 */
declare function getEventStep(event: Pick<KeyboardEvent, "ctrlKey" | "metaKey" | "key" | "shiftKey">): 1 | 10 | 0.1;

export { EventKeyMap, getEventKey, getEventStep };
