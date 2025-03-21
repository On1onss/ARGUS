import { HotkeysConfig } from '@saas-ui/use-hotkeys';
export { Hotkey, HotkeyProps, HotkeysConfig, HotkeysContextValues, HotkeysGroupConfig, HotkeysGroupItems, HotkeysItemConfig, HotkeysProvider, HotkeysProviderProps, UseHotkeysOptions, createHotkeys, splitKeys, useHotkeys, useHotkeysContext, useHotkeysShortcut } from '@saas-ui/use-hotkeys';
import * as _chakra_ui_react from '@chakra-ui/react';
import { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import * as React from 'react';
import { SearchInputProps } from '@saas-ui/core';

interface HotkeysOptions {
    hotkeys: HotkeysConfig;
}
interface UseHotkeysListReturn {
    query?: string;
    setQuery: (query: string) => void;
    hotkeys: HotkeysConfig;
}
interface HotkeysListProps extends HotkeysOptions, HTMLChakraProps<'div'>, ThemingProps<'SuiHotkeys'> {
}
declare const HotkeysList: _chakra_ui_react.ComponentWithAs<"div", HotkeysListProps>;
declare const useHotkeysSearch: () => UseHotkeysListReturn;
declare const HotkeysSearch: _chakra_ui_react.ComponentWithAs<"input", Omit<SearchInputProps, "as">>;
declare const HotkeysListItems: _chakra_ui_react.ComponentWithAs<"div", HTMLChakraProps<"div">>;
interface HotkeysGroupProps extends HTMLChakraProps<'div'> {
    title?: string;
}
declare const HotkeysGroup: React.FC<HotkeysGroupProps>;
declare const HotkeysCommand: React.FC<HTMLChakraProps<'span'>>;
interface HotkeysItemProps extends HTMLChakraProps<'div'> {
    command: string;
}
declare const HotkeysItem: React.FC<HotkeysItemProps>;

/**
 * @deprecated Use `HotkeysConfig` instead.
 */
type HotkeysListOptions = HotkeysConfig;

export { HotkeysCommand, HotkeysGroup, type HotkeysGroupProps, HotkeysItem, type HotkeysItemProps, HotkeysList, HotkeysListItems, type HotkeysListOptions, type HotkeysListProps, type HotkeysOptions, HotkeysSearch, type UseHotkeysListReturn, useHotkeysSearch };
