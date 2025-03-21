import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';

interface HotkeysItemConfig {
    /**
     * Label describing the function of this keyboard shortcut
     */
    label: string;
    /**
     * The key combination.
     * Supports shorthands: ⌥ ⇧ ⌃ ⌘
     *
     * Shifted keys like ? and + are handled automatically
     */
    command: string | string[];
}
interface HotkeysGroupItems {
    [item: string]: HotkeysItemConfig;
}
interface HotkeysGroupConfig {
    /**
     * The group title
     */
    title?: string;
    /**
     * Hotkeys in this group
     */
    hotkeys: HotkeysGroupItems;
}
/**
 * The hotkeys configuration.
 * Supports shorthands: ⌥ ⇧ ⌃ ⌘
 *
 * Shifted keys like ? and + are handled automatically
 */
interface HotkeysConfig {
    [group: string]: HotkeysGroupConfig;
}
interface HotkeysContextValues<Config extends HotkeysConfig = HotkeysConfig> {
    hotkeys: Config;
}
interface HotkeysProviderProps {
    children: React.ReactNode;
    hotkeys: HotkeysConfig;
}
declare const HotkeysProvider: ({ children, hotkeys, }: HotkeysProviderProps) => react_jsx_runtime.JSX.Element;
declare const useHotkeysContext: () => HotkeysContextValues;

declare const splitKeys: (keys: string) => string[];
interface UseHotkeysOptions {
    /**
     * Whether to prevent the default behavior of the event.
     * Eg. to override browser hotkeys.
     * @default false
     **/
    preventDefault?: boolean;
    /**
     * The element to attach the event listener to.
     * @default window
     */
    targetElement?: HTMLElement | null;
    /**
     * Ignore hotkeys when the target is an input element.
     * @default ['INPUT', 'TEXTAREA', 'SELECT']
     */
    ignoreTags?: string[];
    /**
     * Whether to enable hotkeys when the target is a content editable element.
     * @default false
     */
    enableOnContentEditable?: boolean;
}
/**
 * useHotKeys React Hook
 *
 * Supports shifted keys like ?, =, >.
 *
 * ⌥ ⇧ ⌃ ⌘ shorthands are supported.
 *
 * @param keys The keys that trigger this hotkey
 * @param callback The function to execute when the keys are pressed
 * @param deps Deps for the callback function
 */
declare const useHotkeys: (keys: string | string[], callback: (event: KeyboardEvent) => void, options?: UseHotkeysOptions | Array<any>, deps?: Array<any>) => void;

/**
 * useHotkeysShortcut React Hook
 *
 * Accepts one key combination or a shortcut
 *
 * Shortcuts refer to a predefined hotkeys configuration.
 * @see https://www.saas-ui.dev/docs/navigation/hotkeys
 *
 * For example:
 * ctrl+f or general.search
 *
 * Supports shifted keys like ?, =, >.
 *
 * ⌥ ⇧ ⌃ ⌘ shorthands are supported.
 *
 * @param keyOrShortcut Key combinations or a hotkeys shortcut
 * @param callback The function to execute when the keys are pressed
 * @param deps Deps for the callback function
 * @returns The key combination(s)
 */
declare const useHotkeysShortcut: (keyOrShortcut: string | string[], callback: (event: KeyboardEvent) => void, options?: UseHotkeysOptions | Array<any>, deps?: Array<any>) => string;

interface HotkeyProps {
    /**
     * The key combination.
     * Supports shorthands: ⌥ ⇧ ⌃ ⌘
     *
     * Shifted keys like ? and + are handled automatically
     */
    command: string | string[];
    /**
     * Callback to be called when the key combination is pressed
     */
    callback: () => void;
    /**
     * Options for the useHotkeys hook
     */
    hotkeyOptions?: UseHotkeysOptions;
    /**
     * A single child or render prop function
     */
    children: string | React__default.ReactElement | ((props: {
        keys: string | string[];
        ariaKeyshortcuts?: string;
    }) => React__default.ReactNode);
}
/**
 * Registers a hotkey shortcut.
 * Supports shorthands: ⌥ ⇧ ⌃ ⌘
 * Shifted keys like ? and + are handled automatically
 *
 * Will pass `aria-keyshortcuts` to the child if it's a valid element, or render a span with the attribute
 */
declare const Hotkey: React__default.FC<HotkeyProps>;

type ExtractHotkeys<T extends HotkeysConfig> = {
    [Group in keyof T]: {
        [Item in keyof T[Group]['hotkeys']]: `${string & Group}.${string & Item}`;
    }[keyof T[Group]['hotkeys']];
}[keyof T];
declare const createHotkeys: <Config extends HotkeysConfig>(hotkeys: Config) => {
    hotkeys: Config;
    HotkeysProvider: (props: {
        children: React__default.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    useHotkeysContext: () => HotkeysContextValues<Config>;
    useHotkeys: (shortcut: ExtractHotkeys<Config>, callback: (event: KeyboardEvent) => void, options?: UseHotkeysOptions | Array<any>, deps?: Array<any>) => string;
    Hotkey: React__default.FC<Omit<HotkeyProps, "command"> & {
        command: ExtractHotkeys<Config>;
    }>;
};

export { Hotkey, type HotkeyProps, type HotkeysConfig, type HotkeysContextValues, type HotkeysGroupConfig, type HotkeysGroupItems, type HotkeysItemConfig, HotkeysProvider, type HotkeysProviderProps, type UseHotkeysOptions, createHotkeys, splitKeys, useHotkeys, useHotkeysContext, useHotkeysShortcut };
