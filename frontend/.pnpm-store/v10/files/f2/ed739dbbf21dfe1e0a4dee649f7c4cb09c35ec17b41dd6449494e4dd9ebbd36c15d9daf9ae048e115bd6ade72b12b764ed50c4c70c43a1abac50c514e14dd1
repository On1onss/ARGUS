import React$1 from 'react';

interface UsePromise {
    error?: Error | null;
    data?: any;
    isLoading: boolean;
    isResolved: boolean;
    isRejected: boolean;
}
type CallbackFn = (...args: any[]) => Promise<any>;
/**
 * @deprecated
 */
declare function usePromise<C extends CallbackFn>(fn: C): [UsePromise, C];

interface UseLocalStorageOptions<T> {
    serialize?<T>(value: T): string;
    deserialize?(value?: string): T;
}
/**
 * Works like useState but stores the value as JSON in localStorage.
 * Updates work across multiple tabs using StorageEvent.
 *
 * Setting undefined will remote the localStorage item.
 */
declare const useLocalStorage: <T = string>(key: string, defaultValue: T, options?: UseLocalStorageOptions<T>) => readonly [T, React$1.Dispatch<React$1.SetStateAction<T>>];

type Step = {
    id: string;
};
type UseStepsProps<S> = {
    steps: S[];
    initialStep?: number;
};
declare const useSteps: <S extends {
    id: string;
} = Step>({ steps, initialStep, }: UseStepsProps<S>) => {
    setComplete: (completeStep?: number | string) => void;
    completed: string[];
    index: number;
    isLast: boolean;
    navigation: {
        next: () => void;
        prev: () => void;
        go: (nextStep: number | string) => void;
    };
    step: S;
    setUncomplete: (uncompleteStep?: number | string) => void;
    reset: (resetStep?: number) => void;
};

type Status = 'idle' | 'loading' | 'ready' | 'error';
type ScriptElt = HTMLScriptElement | null;
declare const useScript: (src: string) => Status;

type ScrollValue = {
    x: any;
    y: any;
};
interface UseScrollPositionOptions {
    /**
     * The wait time in milliseconds before triggering the callback.
     * @default 30
     */
    delay?: number;
    /**
     * Whether the scroll position should be tracked or not.
     * @default true
     */
    isEnabled?: boolean;
    /**
     * The element to track the scroll position for.
     */
    elementRef?: React.RefObject<HTMLElement> | null;
    /**
     * The callback function to be called when the scroll position changes.
     */
    callback?: ({ prevPos, currPos, }: {
        prevPos: ScrollValue;
        currPos: ScrollValue;
    }) => void;
}
declare const useScrollPosition: (props: UseScrollPositionOptions) => ScrollValue;

interface UseOutsideClickProps {
    /**
     * Whether the hook is enabled
     */
    enabled?: boolean;
    /**
     * The reference to a DOM element.
     */
    ref: React.RefObject<HTMLElement>;
    /**
     * Function invoked when a click is triggered outside the referenced element.
     */
    handler?: (e: Event) => void;
}
/**
 * Example, used in components like Dialogs and Popovers, so they can close
 * when a user clicks outside them.
 */
declare function useOutsideClick(props: UseOutsideClickProps): void;

export { type ScriptElt, type Status, type UseLocalStorageOptions, type UseOutsideClickProps, type UsePromise, useLocalStorage, useOutsideClick, usePromise, useScript, useScrollPosition, useSteps };
