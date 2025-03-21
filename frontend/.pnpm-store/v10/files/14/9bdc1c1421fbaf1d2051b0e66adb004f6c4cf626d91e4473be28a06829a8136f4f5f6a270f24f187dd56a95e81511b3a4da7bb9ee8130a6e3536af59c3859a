import * as React$1 from 'react';
import React__default from 'react';
import * as _chakra_ui_react from '@chakra-ui/react';
import { HTMLChakraProps, SystemStyleObject, SystemProps, ThemingProps, IconProps, TextProps, ButtonGroupProps, ChakraProviderProps, ChakraProps, CloseButtonProps, LinkProps, ThemeTypings, SpinnerProps, MenuProps, MenuListProps, AvatarProps, ListProps, IconButtonProps, StackProps, TooltipProps, UseDisclosureReturn, ResponsiveValue, InputProps, UseToastOptions, CreateToastFnReturn, ToastId, AlertProps, ToastPosition, CreateStandAloneToastParam, CreateStandaloneToastReturn, StepperProps } from '@chakra-ui/react';
export { LinkProps } from '@chakra-ui/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dict, PropGetter, MaybeRenderProp } from '@chakra-ui/utils';
import * as framer_motion from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import * as csstype from 'csstype';
import * as _chakra_ui_styled_system from '@chakra-ui/styled-system';
export { CalendarIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon, FilterIcon, HamburgerIcon, MinusIcon, PlusIcon, SearchIcon, ViewIcon, ViewOffIcon } from './icons/index.mjs';
export { s as splitProps } from './split-props-D6Izg7QS.mjs';

/**
 * Command
 * A command is used to show which key or combination of keys performs a given action.
 *
 * All single letters A-Z are uppercase.
 * For non-letter keys such as enter, esc and shift, stick to lowercase.
 * Use symbols (⌥ ⇧ ⌃ ⌘) as opposed to spelling things out.
 */
declare const Command: React$1.FC<HTMLChakraProps<'span'>>;

declare const Br: React$1.FC<HTMLChakraProps<'span'>>;

declare const useEmptyStateStyles: () => Record<string, SystemStyleObject>;
interface EmptyStateProps extends Omit<EmptyStateContainerProps, 'title'> {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    icon?: React$1.ElementType;
    actions?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    children?: React$1.ReactNode;
    spacing?: SystemProps['margin'];
}
/**
 * Display actionable feedback when no data is available.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/empty-state
 */
declare const EmptyState: React$1.FC<EmptyStateProps>;
interface EmptyStateContainerProps extends HTMLChakraProps<'div'>, ThemingProps<'SuiEmptyState'> {
    children?: React$1.ReactNode;
    spacing?: SystemProps['margin'];
}
declare const EmptyStateContainer: React$1.FC<EmptyStateContainerProps>;
declare const EmptyStateIcon: _chakra_ui_react.ComponentWithAs<_chakra_ui_react.ComponentWithAs<"svg", IconProps>, IconProps>;
interface EmptyStateTitleProps extends HTMLChakraProps<'h3'> {
}
declare const EmptyStateTitle: React$1.FC<EmptyStateTitleProps>;
declare const EmptyStateDescription: React$1.FC<TextProps>;
interface EmptyStateBodyProps extends HTMLChakraProps<'div'> {
    spacing?: SystemProps['margin'];
}
declare const EmptyStateBody: React$1.FC<EmptyStateBodyProps>;
declare const EmptyStateActions: React$1.FC<ButtonGroupProps>;
declare const EmptyStateFooter: React$1.FC<HTMLChakraProps<'footer'>>;

interface SaasContextValue {
    linkComponent?: React$1.ElementType<any>;
    onError?: (error: Error, errorInfo: React$1.ErrorInfo) => void;
}
declare const SaasContext: React$1.Context<SaasContextValue>;
interface SaasProviderProps extends ChakraProviderProps {
    theme?: Dict;
    linkComponent?: React$1.ElementType<any>;
    children: React$1.ReactNode;
    onError?: (error: Error, errorInfo: React$1.ErrorInfo) => void;
}
declare function SaasProvider(props: SaasProviderProps): react_jsx_runtime.JSX.Element;
declare const useSaas: () => SaasContextValue;

declare function useLink(): React__default.ElementType<any>;

interface ErrorBoundaryProps {
    fallback?: React$1.ReactNode;
    children: React$1.ReactNode;
    onError?: (error: Error, errorInfo: React$1.ErrorInfo) => void;
}
interface ErrorBoundaryState {
    error?: Error | null;
    errorInfo?: any;
}
/**
 * A container component that catches errors and displays a fallback UI.
 *
 * @see Docs https://saas-ui.dev/docs/components/utils/error-boundary
 */
declare class ErrorBoundary extends React$1.Component<ErrorBoundaryProps> {
    state: ErrorBoundaryState;
    static contextType: React$1.Context<SaasContextValue>;
    context: React$1.ContextType<typeof SaasContext>;
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    onError: (error: Error, errorInfo: any) => void;
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): string | number | boolean | Iterable<React$1.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;
}

interface AppShellProps extends HTMLChakraProps<'div'>, ThemingProps<'SuiAppShell'> {
    /**
     * The top header navigation
     */
    navbar?: React$1.ReactNode;
    /**
     * Main sidebar, positioned on the left
     */
    sidebar?: React$1.ReactElement;
    /**
     * Secondary sidebar, positioned on the right
     */
    aside?: React$1.ReactNode;
    /**
     * The footer
     */
    footer?: React$1.ReactNode;
    /**
     * The main content
     */
    children: React$1.ReactNode;
    mainRef?: React$1.RefObject<HTMLDivElement>;
}
/**
 * The App Shell defines the main structure of your app.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/app-shell
 */
declare const AppShell: _chakra_ui_react.ComponentWithAs<"div", AppShellProps>;

declare function CheckIcon(props: IconProps): react_jsx_runtime.JSX.Element;
declare function InfoIcon(props: IconProps): react_jsx_runtime.JSX.Element;
declare function WarningIcon(props: IconProps): react_jsx_runtime.JSX.Element;

type BannerMotion = 'slideOutTop' | 'slideOutBottom' | 'fade' | 'scale' | 'none';
interface BannerTransitionProps extends Omit<HTMLMotionProps<'div'>, 'color' | 'transition'>, ChakraProps {
    motionPreset: BannerMotion;
}

declare const STATUSES: {
    info: {
        icon: typeof InfoIcon;
        colorScheme: string;
    };
    warning: {
        icon: typeof WarningIcon;
        colorScheme: string;
    };
    success: {
        icon: typeof CheckIcon;
        colorScheme: string;
    };
    error: {
        icon: typeof WarningIcon;
        colorScheme: string;
    };
};
type BannerStatus = keyof typeof STATUSES;
interface BannerOptions {
    /**
     * The status of the banner.
     */
    status?: BannerStatus;
    /**
     * Show or hide the banner.
     */
    isOpen?: boolean;
    /**
     * Callback fired when the close button is clicked.
     */
    onClose?: () => void;
    /**
     * Customize the close animation.
     * @default 'slideOutTop'
     * @type 'slideOutTop', 'slideOutBottom', 'fade', 'scale', 'none'
     */
    motionPreset?: BannerMotion;
}
interface BannerProps extends Omit<BannerTransitionProps, 'motionPreset'>, BannerOptions, ThemingProps<'SuiBanner'> {
}
/**
 * Banner is used to communicate the state or status of a
 * page, feature or action
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const Banner: _chakra_ui_react.ComponentWithAs<"div", BannerProps>;
interface BannerContentProps extends HTMLChakraProps<'div'> {
}
/**
 * The wrapper for the banner title and description.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerContent: _chakra_ui_react.ComponentWithAs<"div", BannerContentProps>;
interface BannerTitleProps extends HTMLChakraProps<'div'> {
}
/**
 * The title of the banner to be announced by screen readers.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerTitle: _chakra_ui_react.ComponentWithAs<"div", BannerTitleProps>;
interface BannerDescriptionProps extends HTMLChakraProps<'div'> {
}
interface BannerDescriptionProps extends HTMLChakraProps<'div'> {
}
/**
 * The description of the banner to be announced by screen readers.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerDescription: _chakra_ui_react.ComponentWithAs<"div", BannerDescriptionProps>;
interface BannerActionsProps extends HTMLChakraProps<'div'>, ButtonGroupProps {
}
/**
 * The banner actions, renders a ButtonGroup.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerActions: _chakra_ui_react.ComponentWithAs<"div", BannerActionsProps>;
interface BannerIconProps extends HTMLChakraProps<'span'> {
    icon?: React$1.ElementType;
}
/**
 * The visual icon for the banner.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerIcon: React$1.FC<BannerIconProps>;
/**
 * The close button.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/banner
 */
declare const BannerCloseButton: _chakra_ui_react.ComponentWithAs<"button", CloseButtonProps>;

declare const CollapseProvider: React$1.Provider<UseCollapseReturn>;
declare const useCollapseContext: () => UseCollapseReturn;
interface UseCollapse {
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    isCollapsible?: boolean;
}
declare const useCollapse: (props?: UseCollapse) => {
    isCollapsible: boolean;
    isOpen: boolean;
    getToggleProps: PropGetter;
    getCollapseProps: (props?: any) => any;
    onToggle: () => void;
    onOpen: () => void;
    onClose: () => void;
};
interface UseCollapseReturn extends ReturnType<typeof useCollapse> {
}

interface StructuredListOptions {
    /**
     * An array of list items
     */
    items?: Array<StructuredListItemProps>;
}
interface StructuredListProps extends StructuredListOptions, HTMLChakraProps<'ul'>, ThemingProps<'SuiStructuredList'> {
}
/**
 * React component to render lists of data
 */
declare const StructuredList: _chakra_ui_react.ComponentWithAs<"ul", StructuredListProps>;
interface StructuredListHeaderProps extends HTMLChakraProps<'li'> {
    /**
     * Action rendered next to the title
     */
    action?: React$1.ReactNode;
    /**
     * The aria-level
     */
    level?: number;
}
declare const StructuredListHeader: _chakra_ui_react.ComponentWithAs<"li", StructuredListHeaderProps>;
interface StructuredListItemProps extends HTMLChakraProps<'li'> {
    onClick?: (e: React$1.MouseEvent) => void;
    href?: string | object;
    isDisabled?: boolean;
}
/**
 * Adding `onClick` or `href` props will wrap the content in a `StructuredListButton`
 */
declare const StructuredListItem: _chakra_ui_react.ComponentWithAs<"li", StructuredListItemProps>;
interface StructuredListButtonProps extends HTMLChakraProps<'div'> {
    onClick?: (e: React$1.MouseEvent) => void;
    as?: React$1.ElementType;
    isDisabled?: boolean;
}
/**
 * Behaves like a button by default.
 * Use the 'as' prop to render a link.
 *
 * <StructuredListItemButton as="a" href="/page" />
 *
 * or
 *
 * <StructuredListItemButton as={Link} href={{path: '/page}} />
 */
declare const StructuredListButton: _chakra_ui_react.ComponentWithAs<"div", StructuredListButtonProps>;
interface StructuredListIconProps extends HTMLChakraProps<'div'> {
    /**
     * The icon size
     * @default 5
     */
    size?: SystemProps['boxSize'];
    /**
     * The icon spacing, ltr supported
     */
    spacing?: SystemProps['margin'];
}
declare const StructuredListIcon: React$1.FC<StructuredListIconProps>;
interface StructuredListCellProps extends HTMLChakraProps<'div'> {
}
declare const StructuredListCell: React$1.FC<StructuredListCellProps>;

/**
 * Chakra UI `Link` component wrapped in a router specific link component.
 * Falls back to a plain `Link` if no Saas UI context is available or no `linkComponent` is configured
 * The router link component can be configured in `SaasProvider`.
 * @see https://saas-ui.dev/docs/core/getting-started
 */
declare const Link: _chakra_ui_react.ComponentWithAs<"a", LinkProps>;

type Variants$1 = 'fill' | 'overlay' | 'fullscreen';
interface LoadingOverlayProps extends HTMLChakraProps<'div'>, ThemingProps<'SuiLoadingOverlay'> {
    /**
     * Show or hide the LoadingOverlay.
     * @default true
     */
    isLoading?: boolean;
    /**
     * The transition that should be used for the overlay
     * @default "fade"
     */
    motionPreset?: 'none' | 'fade';
    /**
     * Spacing between children
     */
    spacing?: SystemProps['margin'];
    /**
     * @type "fill" | "overlay" | "fullscreen"
     * @default "fill"
     */
    variant?: 'SuiLoadingOverlay' extends keyof ThemeTypings['components'] ? ThemeTypings['components']['SuiLoadingOverlay']['variants'] : Variants$1;
}
declare const LoadingOverlay: React__default.FC<LoadingOverlayProps>;
declare const LoadingSpinner: _chakra_ui_react.ComponentWithAs<"div", SpinnerProps>;
type LoadingSpinnerProps = SpinnerProps;
interface LoadingTextProps extends HTMLChakraProps<'p'> {
}
declare const LoadingText: React__default.FC<LoadingTextProps>;

interface OverflowMenuProps extends Omit<MenuProps, 'size'> {
    /**
     * The button (aria) label.
     */
    label?: string;
    /**
     * The MenuButton variant.
     */
    variant?: 'Button' extends keyof ThemeTypings['components'] ? ThemeTypings['components']['Button']['variants'] : string;
    /**
     * The MenuButton size
     */
    size?: 'IconButton' extends keyof ThemeTypings['components'] ? ThemeTypings['components']['IconButton']['sizes'] : string;
    /**
     * Props passed to the MenuList.
     */
    menuListProps?: MenuListProps;
    /**
     * Render a custom icon.
     */
    icon?: React$1.ReactElement;
    children: React$1.ReactNode;
}
declare const OverflowMenu: React$1.FC<OverflowMenuProps>;

type Anchor = {
    x: number;
    y: number;
};
type AnyPointerEvent = MouseEvent | TouchEvent | PointerEvent;
interface UseContextMenuReturn {
    isOpen: boolean;
    anchor: Anchor;
    triggerRef: React$1.RefObject<HTMLSpanElement>;
    menuRef: React$1.RefObject<HTMLDivElement>;
    onClose: () => void;
    onOpen: (event: AnyPointerEvent) => void;
}
declare const ContextMenuProvider: React$1.Provider<UseContextMenuReturn>;
declare const useContextMenuContext: () => UseContextMenuReturn;
interface UseContextMenuProps extends ContextMenuProps {
    onClose?: () => void;
}
declare const useContextMenu: (props: UseContextMenuProps) => {
    isOpen: boolean;
    anchor: Anchor;
    triggerRef: React$1.RefObject<HTMLSpanElement>;
    menuRef: React$1.RefObject<HTMLDivElement>;
    onClose: () => void;
    onOpen: (event: AnyPointerEvent) => void;
};
interface ContextMenuProps extends MenuProps {
}
declare const ContextMenu: React$1.FC<ContextMenuProps>;
interface ContextMenuTriggerProps extends HTMLChakraProps<'span'> {
    /**
     * If `true`, the long press gesture is disabled.
     */
    longPressDisabled?: boolean;
}
declare const ContextMenuTrigger: _chakra_ui_react.ComponentWithAs<"span", ContextMenuTriggerProps>;
interface ContextMenuListProps extends MenuListProps {
}
declare const ContextMenuList: React$1.FC<ContextMenuListProps>;
declare const ContextMenuItem: _chakra_ui_react.ComponentWithAs<"button", _chakra_ui_react.MenuItemProps>;

interface PresenceOptions {
    [presence: string]: {
        label: string;
        color: string;
    };
}
/**
 * The presence configuration object.
 *
 * Default presence values: online, offline, busy, dnd, away
 *
 * You can overwrite colors in the theme semantic tokens.
 * theme.semanticTokens.colors['presence.online'] = 'cyan.500'
 *
 * Or add a custom presence value
 * theme.semanticTokens.colors['presence.vacay'] = 'blue.500'
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const Presence: PresenceOptions;
/**
 * Fallback when theme tokens aren't configured
 */
declare const defaultPresenceTokens: {
    online: string;
    offline: string;
    busy: string;
    dnd: string;
    away: string;
};
interface PersonaOptions {
    /**
     * The name of the person in the avatar.
     *
     * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
     * - If `src` is not loaded, the name will be used to create the initials
     */
    name?: string;
    /**
     * The presence status of the person
     *
     * If set will add an AvatarBadge with color configured in `Presence`
     * Default presence options:
     * - online
     * - offline
     * - busy
     * - dnd
     * - away
     */
    presence?: string;
    /**
     * The icon shown in the AvatarBadge
     */
    presenceIcon?: React$1.ReactNode;
    /**
     * Indicates that a person is out of office. Changes the presence badge style.
     */
    isOutOfOffice?: boolean;
    /**
     * Primary label of the persona, defaults to the name
     */
    label?: React$1.ReactNode;
    /**
     * Secondary label, usually the role of the person
     * Only visible from md size and up.
     */
    secondaryLabel?: React$1.ReactNode;
    /**
     * Tertiary label, usually the status of the person.
     * Only visible from lg size and up.
     */
    tertiaryLabel?: React$1.ReactNode;
    /**
     * Hide the persona details next to the avatar.
     */
    hideDetails?: boolean;
}
interface PersonaProps extends PersonaOptions, Omit<PresenceAvatarProps, 'size' | 'variant'>, ThemingProps<'SuiPersona'> {
}
/**
 * The wrapper component that handles default composition.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const Persona: React$1.FC<PersonaProps>;
interface PersonaContainerProps extends HTMLChakraProps<'div'>, ThemingProps<'SuiPersona'> {
}
/**
 * The container component that provides context and styles.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaContainer: _chakra_ui_react.ComponentWithAs<"div", PersonaContainerProps>;
interface PresenceAvatarOptions {
    /**
     * The name of the person in the avatar.
     *
     * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
     * - If `src` is not loaded, the name will be used to create the initials
     */
    name?: string;
    /**
     * The presence status of the person
     *
     * If set will add an AvatarBadge with color configured in `Presence`
     * Default presence options:
     * - online
     * - offline
     * - busy
     * - dnd
     * - away
     */
    presence?: string;
    /**
     * The textual presence status of the person.
     * Online, Offline, Busy, Do-not-disturb or Away
     */
    presenceLabel?: string;
    /**
     * The icon shown in the AvatarBadge
     */
    presenceIcon?: React$1.ReactNode;
    /**
     * The badge size. Defaults to 1em. Use em value to keep the size relative to the avatar.
     */
    badgeSize?: SystemProps['boxSize'];
    /**
     * Indicates that a person is out of office. Changes the presence badge style.
     */
    isOutOfOffice?: boolean;
}
interface PresenceAvatarProps extends PresenceAvatarOptions, AvatarProps {
}
/**
 * An avatar with optional status badge.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaAvatar: _chakra_ui_react.ComponentWithAs<"span", PresenceAvatarProps>;
/**
 * Wrapper component for the labels.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaDetails: _chakra_ui_react.ComponentWithAs<"div", PersonaProps>;
/**
 * The main label, usually a name.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaLabel: _chakra_ui_react.ComponentWithAs<"span", HTMLChakraProps<"span">>;
/**
 * The secondary label, usually the role of a person.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaSecondaryLabel: _chakra_ui_react.ComponentWithAs<"span", HTMLChakraProps<"span">>;
/**
 * The tertiary label, typically a status message.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/persona
 */
declare const PersonaTertiaryLabel: _chakra_ui_react.ComponentWithAs<"span", HTMLChakraProps<"span">>;

interface PropertyOptions {
    label?: React$1.ReactNode;
    value?: React$1.ReactNode;
    labelWidth?: SystemProps['width'];
    spacing?: SystemProps['margin'];
}
interface PropertyProps extends PropertyOptions, HTMLChakraProps<'dl'>, ThemingProps<'SuiProperty'> {
}
/**
 * The wrapper component that handles default composition.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/property
 */
declare const Property: _chakra_ui_react.ComponentWithAs<"dl", PropertyProps>;
interface PropertyLabelProps extends HTMLChakraProps<'dt'> {
}
/**
 * The property label.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/property
 */
declare const PropertyLabel: _chakra_ui_react.ComponentWithAs<"dt", PropertyProps>;
interface PropertyValueProps extends HTMLChakraProps<'dd'> {
}
/**
 * The property value.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/property
 */
declare const PropertyValue: _chakra_ui_react.ComponentWithAs<"dd", PropertyValueProps>;
interface PropertyListProps extends Omit<ListProps, 'items'> {
}
/**
 * Render a list of properties.
 * Will set the `as` prop of it's children to `div`,
 * in order to render a semantically correct `dl` list.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/property
 */
declare const PropertyList: React$1.FC<PropertyListProps>;

interface NavbarBrandProps extends HTMLChakraProps<'div'> {
    children?: React.ReactNode | React.ReactNode[];
}
declare const NavbarBrand: _chakra_ui_react.ComponentWithAs<"div", NavbarBrandProps>;

interface NavbarContentProps extends HTMLChakraProps<'ul'> {
    /**
     * Typically the `NavbarItem` component
     */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * Spacing between each navbar item
     */
    spacing?: SystemProps['margin'];
}
declare const NavbarContent: _chakra_ui_react.ComponentWithAs<"ul", NavbarContentProps>;

interface NavbarItemProps extends HTMLChakraProps<'li'> {
    children?: React.ReactNode;
    /**
     * Whether the item is active or not.
     * @default false
     */
    isActive?: boolean;
}
declare const NavbarItem: _chakra_ui_react.ComponentWithAs<"li", NavbarItemProps>;

type MotionProps = Pick<HTMLMotionProps<'div'>, 'animate' | 'initial' | 'variants' | 'onAnimationStart' | 'onAnimationComplete' | 'onDrag' | 'onDragStart' | 'onDragEnd'>;
interface NavbarProps extends Omit<UseNavbarProps, 'hideOnScroll' | 'ref'>, Omit<HTMLChakraProps<'div'>, keyof MotionProps | 'height'>, MotionProps, ThemingProps<'SuiNavbar'> {
    children?: React__default.ReactNode | React__default.ReactNode[];
}
interface UseNavbarProps {
    /**
     * Ref to the DOM node.
     */
    ref: React__default.ForwardedRef<HTMLElement>;
    /**
     * The parent element where the navbar is placed within.
     * This is used to determine the scroll position and whether the navbar should be hidden or not.
     * @default `window`
     */
    parentRef?: React__default.RefObject<HTMLElement>;
    /**
     * The height of the navbar.
     * @default "3.5rem" (56px)
     */
    height?: number | string;
    /**
     * Whether the navbar should hide on scroll or not.
     * @default false
     */
    shouldHideOnScroll?: boolean;
    /**
     * Whether the navbar parent scroll event should be listened to or not.
     * @default false
     */
    disableScrollHandler?: boolean;
    /**
     * The props to modify the framer motion animation. Use the `variants` API to create your own animation.
     * This motion is only available if the `shouldHideOnScroll` prop is set to `true`.
     */
    motionProps?: MotionProps;
    /**
     * The scroll event handler for the navbar. The event fires when the navbar parent element is scrolled.
     * it only works if `disableScrollHandler` is set to `false` or `shouldHideOnScroll` is set to `true`.
     */
    onScrollPositionChange?: (scrollPosition: number) => void;
    /**
     * Style props to be applied to the navbar container.
     */
    style?: React__default.CSSProperties;
}
declare function useNavbar(props: UseNavbarProps): {
    containerRef: React__default.RefObject<HTMLElement>;
    height: string | number;
    isHidden: boolean;
    shouldHideOnScroll: boolean;
    motionProps: MotionProps | undefined;
    getContainerProps: (props?: NavbarProps) => {
        'data-hidden': boolean | "true" | "false";
        ref: React__default.RefObject<HTMLElement>;
        style: {
            accentColor?: csstype.Property.AccentColor | undefined;
            alignContent?: csstype.Property.AlignContent | undefined;
            alignItems?: csstype.Property.AlignItems | undefined;
            alignSelf?: csstype.Property.AlignSelf | undefined;
            alignTracks?: csstype.Property.AlignTracks | undefined;
            animationComposition?: csstype.Property.AnimationComposition | undefined;
            animationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            animationDirection?: csstype.Property.AnimationDirection | undefined;
            animationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            animationFillMode?: csstype.Property.AnimationFillMode | undefined;
            animationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            animationName?: csstype.Property.AnimationName | undefined;
            animationPlayState?: csstype.Property.AnimationPlayState | undefined;
            animationRangeEnd?: csstype.Property.AnimationRangeEnd<string | number> | undefined;
            animationRangeStart?: csstype.Property.AnimationRangeStart<string | number> | undefined;
            animationTimeline?: csstype.Property.AnimationTimeline | undefined;
            animationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            appearance?: csstype.Property.Appearance | undefined;
            aspectRatio?: csstype.Property.AspectRatio | undefined;
            backdropFilter?: csstype.Property.BackdropFilter | undefined;
            backfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            backgroundAttachment?: csstype.Property.BackgroundAttachment | undefined;
            backgroundBlendMode?: csstype.Property.BackgroundBlendMode | undefined;
            backgroundClip?: csstype.Property.BackgroundClip | undefined;
            backgroundColor?: csstype.Property.BackgroundColor | undefined;
            backgroundImage?: csstype.Property.BackgroundImage | undefined;
            backgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            backgroundPositionX?: csstype.Property.BackgroundPositionX<string | number> | undefined;
            backgroundPositionY?: csstype.Property.BackgroundPositionY<string | number> | undefined;
            backgroundRepeat?: csstype.Property.BackgroundRepeat | undefined;
            backgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            blockOverflow?: csstype.Property.BlockOverflow | undefined;
            blockSize?: csstype.Property.BlockSize<string | number> | undefined;
            borderBlockColor?: csstype.Property.BorderBlockColor | undefined;
            borderBlockEndColor?: csstype.Property.BorderBlockEndColor | undefined;
            borderBlockEndStyle?: csstype.Property.BorderBlockEndStyle | undefined;
            borderBlockEndWidth?: csstype.Property.BorderBlockEndWidth<string | number> | undefined;
            borderBlockStartColor?: csstype.Property.BorderBlockStartColor | undefined;
            borderBlockStartStyle?: csstype.Property.BorderBlockStartStyle | undefined;
            borderBlockStartWidth?: csstype.Property.BorderBlockStartWidth<string | number> | undefined;
            borderBlockStyle?: csstype.Property.BorderBlockStyle | undefined;
            borderBlockWidth?: csstype.Property.BorderBlockWidth<string | number> | undefined;
            borderBottomColor?: csstype.Property.BorderBottomColor | undefined;
            borderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            borderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            borderBottomStyle?: csstype.Property.BorderBottomStyle | undefined;
            borderBottomWidth?: csstype.Property.BorderBottomWidth<string | number> | undefined;
            borderCollapse?: csstype.Property.BorderCollapse | undefined;
            borderEndEndRadius?: csstype.Property.BorderEndEndRadius<string | number> | undefined;
            borderEndStartRadius?: csstype.Property.BorderEndStartRadius<string | number> | undefined;
            borderImageOutset?: csstype.Property.BorderImageOutset<string | number> | undefined;
            borderImageRepeat?: csstype.Property.BorderImageRepeat | undefined;
            borderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            borderImageSource?: csstype.Property.BorderImageSource | undefined;
            borderImageWidth?: csstype.Property.BorderImageWidth<string | number> | undefined;
            borderInlineColor?: csstype.Property.BorderInlineColor | undefined;
            borderInlineEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            borderInlineEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            borderInlineEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            borderInlineStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            borderInlineStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            borderInlineStartWidth?: csstype.Property.BorderInlineStartWidth<string | number> | undefined;
            borderInlineStyle?: csstype.Property.BorderInlineStyle | undefined;
            borderInlineWidth?: csstype.Property.BorderInlineWidth<string | number> | undefined;
            borderLeftColor?: csstype.Property.BorderLeftColor | undefined;
            borderLeftStyle?: csstype.Property.BorderLeftStyle | undefined;
            borderLeftWidth?: csstype.Property.BorderLeftWidth<string | number> | undefined;
            borderRightColor?: csstype.Property.BorderRightColor | undefined;
            borderRightStyle?: csstype.Property.BorderRightStyle | undefined;
            borderRightWidth?: csstype.Property.BorderRightWidth<string | number> | undefined;
            borderSpacing?: csstype.Property.BorderSpacing<string | number> | undefined;
            borderStartEndRadius?: csstype.Property.BorderStartEndRadius<string | number> | undefined;
            borderStartStartRadius?: csstype.Property.BorderStartStartRadius<string | number> | undefined;
            borderTopColor?: csstype.Property.BorderTopColor | undefined;
            borderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            borderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            borderTopStyle?: csstype.Property.BorderTopStyle | undefined;
            borderTopWidth?: csstype.Property.BorderTopWidth<string | number> | undefined;
            bottom?: csstype.Property.Bottom<string | number> | undefined;
            boxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            boxShadow?: csstype.Property.BoxShadow | undefined;
            boxSizing?: csstype.Property.BoxSizing | undefined;
            breakAfter?: csstype.Property.BreakAfter | undefined;
            breakBefore?: csstype.Property.BreakBefore | undefined;
            breakInside?: csstype.Property.BreakInside | undefined;
            captionSide?: csstype.Property.CaptionSide | undefined;
            caretColor?: csstype.Property.CaretColor | undefined;
            caretShape?: csstype.Property.CaretShape | undefined;
            clear?: csstype.Property.Clear | undefined;
            clipPath?: csstype.Property.ClipPath | undefined;
            color?: csstype.Property.Color | undefined;
            colorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            colorScheme?: csstype.Property.ColorScheme | undefined;
            columnCount?: csstype.Property.ColumnCount | undefined;
            columnFill?: csstype.Property.ColumnFill | undefined;
            columnGap?: csstype.Property.ColumnGap<string | number> | undefined;
            columnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            columnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            columnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            columnSpan?: csstype.Property.ColumnSpan | undefined;
            columnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            contain?: csstype.Property.Contain | undefined;
            containIntrinsicBlockSize?: csstype.Property.ContainIntrinsicBlockSize<string | number> | undefined;
            containIntrinsicHeight?: csstype.Property.ContainIntrinsicHeight<string | number> | undefined;
            containIntrinsicInlineSize?: csstype.Property.ContainIntrinsicInlineSize<string | number> | undefined;
            containIntrinsicWidth?: csstype.Property.ContainIntrinsicWidth<string | number> | undefined;
            containerName?: csstype.Property.ContainerName | undefined;
            containerType?: csstype.Property.ContainerType | undefined;
            content?: csstype.Property.Content | undefined;
            contentVisibility?: csstype.Property.ContentVisibility | undefined;
            counterIncrement?: csstype.Property.CounterIncrement | undefined;
            counterReset?: csstype.Property.CounterReset | undefined;
            counterSet?: csstype.Property.CounterSet | undefined;
            cursor?: csstype.Property.Cursor | undefined;
            direction?: csstype.Property.Direction | undefined;
            display?: csstype.Property.Display | undefined;
            emptyCells?: csstype.Property.EmptyCells | undefined;
            filter?: csstype.Property.Filter | undefined;
            flexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            flexDirection?: csstype.Property.FlexDirection | undefined;
            flexGrow?: csstype.Property.FlexGrow | undefined;
            flexShrink?: csstype.Property.FlexShrink | undefined;
            flexWrap?: csstype.Property.FlexWrap | undefined;
            float?: csstype.Property.Float | undefined;
            fontFamily?: csstype.Property.FontFamily | undefined;
            fontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            fontKerning?: csstype.Property.FontKerning | undefined;
            fontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            fontOpticalSizing?: csstype.Property.FontOpticalSizing | undefined;
            fontPalette?: csstype.Property.FontPalette | undefined;
            fontSize?: csstype.Property.FontSize<string | number> | undefined;
            fontSizeAdjust?: csstype.Property.FontSizeAdjust | undefined;
            fontSmooth?: csstype.Property.FontSmooth<string | number> | undefined;
            fontStretch?: csstype.Property.FontStretch | undefined;
            fontStyle?: csstype.Property.FontStyle | undefined;
            fontSynthesis?: csstype.Property.FontSynthesis | undefined;
            fontSynthesisPosition?: csstype.Property.FontSynthesisPosition | undefined;
            fontSynthesisSmallCaps?: csstype.Property.FontSynthesisSmallCaps | undefined;
            fontSynthesisStyle?: csstype.Property.FontSynthesisStyle | undefined;
            fontSynthesisWeight?: csstype.Property.FontSynthesisWeight | undefined;
            fontVariant?: csstype.Property.FontVariant | undefined;
            fontVariantAlternates?: csstype.Property.FontVariantAlternates | undefined;
            fontVariantCaps?: csstype.Property.FontVariantCaps | undefined;
            fontVariantEastAsian?: csstype.Property.FontVariantEastAsian | undefined;
            fontVariantEmoji?: csstype.Property.FontVariantEmoji | undefined;
            fontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            fontVariantNumeric?: csstype.Property.FontVariantNumeric | undefined;
            fontVariantPosition?: csstype.Property.FontVariantPosition | undefined;
            fontVariationSettings?: csstype.Property.FontVariationSettings | undefined;
            fontWeight?: csstype.Property.FontWeight | undefined;
            forcedColorAdjust?: csstype.Property.ForcedColorAdjust | undefined;
            gridAutoColumns?: csstype.Property.GridAutoColumns<string | number> | undefined;
            gridAutoFlow?: csstype.Property.GridAutoFlow | undefined;
            gridAutoRows?: csstype.Property.GridAutoRows<string | number> | undefined;
            gridColumnEnd?: csstype.Property.GridColumnEnd | undefined;
            gridColumnStart?: csstype.Property.GridColumnStart | undefined;
            gridRowEnd?: csstype.Property.GridRowEnd | undefined;
            gridRowStart?: csstype.Property.GridRowStart | undefined;
            gridTemplateAreas?: csstype.Property.GridTemplateAreas | undefined;
            gridTemplateColumns?: csstype.Property.GridTemplateColumns<string | number> | undefined;
            gridTemplateRows?: csstype.Property.GridTemplateRows<string | number> | undefined;
            hangingPunctuation?: csstype.Property.HangingPunctuation | undefined;
            height?: csstype.Property.Height<string | number> | undefined;
            hyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            hyphenateLimitChars?: csstype.Property.HyphenateLimitChars | undefined;
            hyphens?: csstype.Property.Hyphens | undefined;
            imageOrientation?: csstype.Property.ImageOrientation | undefined;
            imageRendering?: csstype.Property.ImageRendering | undefined;
            imageResolution?: csstype.Property.ImageResolution | undefined;
            initialLetter?: csstype.Property.InitialLetter | undefined;
            inlineSize?: csstype.Property.InlineSize<string | number> | undefined;
            inputSecurity?: csstype.Property.InputSecurity | undefined;
            insetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            insetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            insetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            insetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            isolation?: csstype.Property.Isolation | undefined;
            justifyContent?: csstype.Property.JustifyContent | undefined;
            justifyItems?: csstype.Property.JustifyItems | undefined;
            justifySelf?: csstype.Property.JustifySelf | undefined;
            justifyTracks?: csstype.Property.JustifyTracks | undefined;
            left?: csstype.Property.Left<string | number> | undefined;
            letterSpacing?: csstype.Property.LetterSpacing<string | number> | undefined;
            lineBreak?: csstype.Property.LineBreak | undefined;
            lineHeight?: csstype.Property.LineHeight<string | number> | undefined;
            lineHeightStep?: csstype.Property.LineHeightStep<string | number> | undefined;
            listStyleImage?: csstype.Property.ListStyleImage | undefined;
            listStylePosition?: csstype.Property.ListStylePosition | undefined;
            listStyleType?: csstype.Property.ListStyleType | undefined;
            marginBlockEnd?: csstype.Property.MarginBlockEnd<string | number> | undefined;
            marginBlockStart?: csstype.Property.MarginBlockStart<string | number> | undefined;
            marginBottom?: csstype.Property.MarginBottom<string | number> | undefined;
            marginInlineEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            marginInlineStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            marginLeft?: csstype.Property.MarginLeft<string | number> | undefined;
            marginRight?: csstype.Property.MarginRight<string | number> | undefined;
            marginTop?: csstype.Property.MarginTop<string | number> | undefined;
            marginTrim?: csstype.Property.MarginTrim | undefined;
            maskBorderMode?: csstype.Property.MaskBorderMode | undefined;
            maskBorderOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            maskBorderRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            maskBorderSlice?: csstype.Property.MaskBorderSlice | undefined;
            maskBorderSource?: csstype.Property.MaskBorderSource | undefined;
            maskBorderWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            maskClip?: csstype.Property.MaskClip | undefined;
            maskComposite?: csstype.Property.MaskComposite | undefined;
            maskImage?: csstype.Property.MaskImage | undefined;
            maskMode?: csstype.Property.MaskMode | undefined;
            maskOrigin?: csstype.Property.MaskOrigin | undefined;
            maskPosition?: csstype.Property.MaskPosition<string | number> | undefined;
            maskRepeat?: csstype.Property.MaskRepeat | undefined;
            maskSize?: csstype.Property.MaskSize<string | number> | undefined;
            maskType?: csstype.Property.MaskType | undefined;
            masonryAutoFlow?: csstype.Property.MasonryAutoFlow | undefined;
            mathDepth?: csstype.Property.MathDepth | undefined;
            mathShift?: csstype.Property.MathShift | undefined;
            mathStyle?: csstype.Property.MathStyle | undefined;
            maxBlockSize?: csstype.Property.MaxBlockSize<string | number> | undefined;
            maxHeight?: csstype.Property.MaxHeight<string | number> | undefined;
            maxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            maxLines?: csstype.Property.MaxLines | undefined;
            maxWidth?: csstype.Property.MaxWidth<string | number> | undefined;
            minBlockSize?: csstype.Property.MinBlockSize<string | number> | undefined;
            minHeight?: csstype.Property.MinHeight<string | number> | undefined;
            minInlineSize?: csstype.Property.MinInlineSize<string | number> | undefined;
            minWidth?: csstype.Property.MinWidth<string | number> | undefined;
            mixBlendMode?: csstype.Property.MixBlendMode | undefined;
            motionDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            motionPath?: csstype.Property.OffsetPath | undefined;
            motionRotation?: csstype.Property.OffsetRotate | undefined;
            objectFit?: csstype.Property.ObjectFit | undefined;
            objectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            offsetAnchor?: csstype.Property.OffsetAnchor<string | number> | undefined;
            offsetDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            offsetPath?: csstype.Property.OffsetPath | undefined;
            offsetPosition?: csstype.Property.OffsetPosition<string | number> | undefined;
            offsetRotate?: csstype.Property.OffsetRotate | undefined;
            offsetRotation?: csstype.Property.OffsetRotate | undefined;
            opacity?: csstype.Property.Opacity | undefined;
            order?: csstype.Property.Order | undefined;
            orphans?: csstype.Property.Orphans | undefined;
            outlineColor?: csstype.Property.OutlineColor | undefined;
            outlineOffset?: csstype.Property.OutlineOffset<string | number> | undefined;
            outlineStyle?: csstype.Property.OutlineStyle | undefined;
            outlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            overflowAnchor?: csstype.Property.OverflowAnchor | undefined;
            overflowBlock?: csstype.Property.OverflowBlock | undefined;
            overflowClipBox?: csstype.Property.OverflowClipBox | undefined;
            overflowClipMargin?: csstype.Property.OverflowClipMargin<string | number> | undefined;
            overflowInline?: csstype.Property.OverflowInline | undefined;
            overflowWrap?: csstype.Property.OverflowWrap | undefined;
            overflowX?: csstype.Property.OverflowX | undefined;
            overflowY?: csstype.Property.OverflowY | undefined;
            overlay?: csstype.Property.Overlay | undefined;
            overscrollBehaviorBlock?: csstype.Property.OverscrollBehaviorBlock | undefined;
            overscrollBehaviorInline?: csstype.Property.OverscrollBehaviorInline | undefined;
            overscrollBehaviorX?: csstype.Property.OverscrollBehaviorX | undefined;
            overscrollBehaviorY?: csstype.Property.OverscrollBehaviorY | undefined;
            paddingBlockEnd?: csstype.Property.PaddingBlockEnd<string | number> | undefined;
            paddingBlockStart?: csstype.Property.PaddingBlockStart<string | number> | undefined;
            paddingBottom?: csstype.Property.PaddingBottom<string | number> | undefined;
            paddingInlineEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            paddingInlineStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            paddingLeft?: csstype.Property.PaddingLeft<string | number> | undefined;
            paddingRight?: csstype.Property.PaddingRight<string | number> | undefined;
            paddingTop?: csstype.Property.PaddingTop<string | number> | undefined;
            page?: csstype.Property.Page | undefined;
            pageBreakAfter?: csstype.Property.PageBreakAfter | undefined;
            pageBreakBefore?: csstype.Property.PageBreakBefore | undefined;
            pageBreakInside?: csstype.Property.PageBreakInside | undefined;
            paintOrder?: csstype.Property.PaintOrder | undefined;
            perspective?: csstype.Property.Perspective<string | number> | undefined;
            perspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            pointerEvents?: csstype.Property.PointerEvents | undefined;
            position?: csstype.Property.Position | undefined;
            printColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            quotes?: csstype.Property.Quotes | undefined;
            resize?: csstype.Property.Resize | undefined;
            right?: csstype.Property.Right<string | number> | undefined;
            rotate?: csstype.Property.Rotate | undefined;
            rowGap?: csstype.Property.RowGap<string | number> | undefined;
            rubyAlign?: csstype.Property.RubyAlign | undefined;
            rubyMerge?: csstype.Property.RubyMerge | undefined;
            rubyPosition?: csstype.Property.RubyPosition | undefined;
            scale?: csstype.Property.Scale | undefined;
            scrollBehavior?: csstype.Property.ScrollBehavior | undefined;
            scrollMarginBlockEnd?: csstype.Property.ScrollMarginBlockEnd<string | number> | undefined;
            scrollMarginBlockStart?: csstype.Property.ScrollMarginBlockStart<string | number> | undefined;
            scrollMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollMarginInlineEnd?: csstype.Property.ScrollMarginInlineEnd<string | number> | undefined;
            scrollMarginInlineStart?: csstype.Property.ScrollMarginInlineStart<string | number> | undefined;
            scrollMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollPaddingBlockEnd?: csstype.Property.ScrollPaddingBlockEnd<string | number> | undefined;
            scrollPaddingBlockStart?: csstype.Property.ScrollPaddingBlockStart<string | number> | undefined;
            scrollPaddingBottom?: csstype.Property.ScrollPaddingBottom<string | number> | undefined;
            scrollPaddingInlineEnd?: csstype.Property.ScrollPaddingInlineEnd<string | number> | undefined;
            scrollPaddingInlineStart?: csstype.Property.ScrollPaddingInlineStart<string | number> | undefined;
            scrollPaddingLeft?: csstype.Property.ScrollPaddingLeft<string | number> | undefined;
            scrollPaddingRight?: csstype.Property.ScrollPaddingRight<string | number> | undefined;
            scrollPaddingTop?: csstype.Property.ScrollPaddingTop<string | number> | undefined;
            scrollSnapAlign?: csstype.Property.ScrollSnapAlign | undefined;
            scrollSnapMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollSnapMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollSnapMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollSnapMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollSnapStop?: csstype.Property.ScrollSnapStop | undefined;
            scrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            scrollTimelineAxis?: csstype.Property.ScrollTimelineAxis | undefined;
            scrollTimelineName?: csstype.Property.ScrollTimelineName | undefined;
            scrollbarColor?: csstype.Property.ScrollbarColor | undefined;
            scrollbarGutter?: csstype.Property.ScrollbarGutter | undefined;
            scrollbarWidth?: csstype.Property.ScrollbarWidth | undefined;
            shapeImageThreshold?: csstype.Property.ShapeImageThreshold | undefined;
            shapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            shapeOutside?: csstype.Property.ShapeOutside | undefined;
            tabSize?: csstype.Property.TabSize<string | number> | undefined;
            tableLayout?: csstype.Property.TableLayout | undefined;
            textAlign?: csstype.Property.TextAlign | undefined;
            textAlignLast?: csstype.Property.TextAlignLast | undefined;
            textCombineUpright?: csstype.Property.TextCombineUpright | undefined;
            textDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            textDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            textDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            textDecorationSkipInk?: csstype.Property.TextDecorationSkipInk | undefined;
            textDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            textDecorationThickness?: csstype.Property.TextDecorationThickness<string | number> | undefined;
            textEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            textEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            textEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            textIndent?: csstype.Property.TextIndent<string | number> | undefined;
            textJustify?: csstype.Property.TextJustify | undefined;
            textOrientation?: csstype.Property.TextOrientation | undefined;
            textOverflow?: csstype.Property.TextOverflow | undefined;
            textRendering?: csstype.Property.TextRendering | undefined;
            textShadow?: csstype.Property.TextShadow | undefined;
            textSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            textTransform?: csstype.Property.TextTransform | undefined;
            textUnderlineOffset?: csstype.Property.TextUnderlineOffset<string | number> | undefined;
            textUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            textWrap?: csstype.Property.TextWrap | undefined;
            timelineScope?: csstype.Property.TimelineScope | undefined;
            top?: csstype.Property.Top<string | number> | undefined;
            touchAction?: csstype.Property.TouchAction | undefined;
            transform?: csstype.Property.Transform | undefined;
            transformBox?: csstype.Property.TransformBox | undefined;
            transformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            transformStyle?: csstype.Property.TransformStyle | undefined;
            transitionBehavior?: csstype.Property.TransitionBehavior | undefined;
            transitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            transitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            transitionProperty?: csstype.Property.TransitionProperty | undefined;
            transitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            translate?: csstype.Property.Translate<string | number> | undefined;
            unicodeBidi?: csstype.Property.UnicodeBidi | undefined;
            userSelect?: csstype.Property.UserSelect | undefined;
            verticalAlign?: csstype.Property.VerticalAlign<string | number> | undefined;
            viewTimelineAxis?: csstype.Property.ViewTimelineAxis | undefined;
            viewTimelineInset?: csstype.Property.ViewTimelineInset<string | number> | undefined;
            viewTimelineName?: csstype.Property.ViewTimelineName | undefined;
            viewTransitionName?: csstype.Property.ViewTransitionName | undefined;
            visibility?: csstype.Property.Visibility | undefined;
            whiteSpace?: csstype.Property.WhiteSpace | undefined;
            whiteSpaceCollapse?: csstype.Property.WhiteSpaceCollapse | undefined;
            whiteSpaceTrim?: csstype.Property.WhiteSpaceTrim | undefined;
            widows?: csstype.Property.Widows | undefined;
            width?: csstype.Property.Width<string | number> | undefined;
            willChange?: csstype.Property.WillChange | undefined;
            wordBreak?: csstype.Property.WordBreak | undefined;
            wordSpacing?: csstype.Property.WordSpacing<string | number> | undefined;
            wordWrap?: csstype.Property.WordWrap | undefined;
            writingMode?: csstype.Property.WritingMode | undefined;
            zIndex?: csstype.Property.ZIndex | undefined;
            zoom?: csstype.Property.Zoom | undefined;
            all?: csstype.Property.All | undefined;
            animation?: csstype.Property.Animation<string & {}> | undefined;
            animationRange?: csstype.Property.AnimationRange<string | number> | undefined;
            background?: csstype.Property.Background<string | number> | undefined;
            backgroundPosition?: csstype.Property.BackgroundPosition<string | number> | undefined;
            border?: csstype.Property.Border<string | number> | undefined;
            borderBlock?: csstype.Property.BorderBlock<string | number> | undefined;
            borderBlockEnd?: csstype.Property.BorderBlockEnd<string | number> | undefined;
            borderBlockStart?: csstype.Property.BorderBlockStart<string | number> | undefined;
            borderBottom?: csstype.Property.BorderBottom<string | number> | undefined;
            borderColor?: csstype.Property.BorderColor | undefined;
            borderImage?: csstype.Property.BorderImage | undefined;
            borderInline?: csstype.Property.BorderInline<string | number> | undefined;
            borderInlineEnd?: csstype.Property.BorderInlineEnd<string | number> | undefined;
            borderInlineStart?: csstype.Property.BorderInlineStart<string | number> | undefined;
            borderLeft?: csstype.Property.BorderLeft<string | number> | undefined;
            borderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            borderRight?: csstype.Property.BorderRight<string | number> | undefined;
            borderStyle?: csstype.Property.BorderStyle | undefined;
            borderTop?: csstype.Property.BorderTop<string | number> | undefined;
            borderWidth?: csstype.Property.BorderWidth<string | number> | undefined;
            caret?: csstype.Property.Caret | undefined;
            columnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            columns?: csstype.Property.Columns<string | number> | undefined;
            containIntrinsicSize?: csstype.Property.ContainIntrinsicSize<string | number> | undefined;
            container?: csstype.Property.Container | undefined;
            flex?: csstype.Property.Flex<string | number> | undefined;
            flexFlow?: csstype.Property.FlexFlow | undefined;
            font?: csstype.Property.Font | undefined;
            gap?: csstype.Property.Gap<string | number> | undefined;
            grid?: csstype.Property.Grid | undefined;
            gridArea?: csstype.Property.GridArea | undefined;
            gridColumn?: csstype.Property.GridColumn | undefined;
            gridRow?: csstype.Property.GridRow | undefined;
            gridTemplate?: csstype.Property.GridTemplate | undefined;
            inset?: csstype.Property.Inset<string | number> | undefined;
            insetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            insetInline?: csstype.Property.InsetInline<string | number> | undefined;
            lineClamp?: csstype.Property.LineClamp | undefined;
            listStyle?: csstype.Property.ListStyle | undefined;
            margin?: csstype.Property.Margin<string | number> | undefined;
            marginBlock?: csstype.Property.MarginBlock<string | number> | undefined;
            marginInline?: csstype.Property.MarginInline<string | number> | undefined;
            mask?: csstype.Property.Mask<string | number> | undefined;
            maskBorder?: csstype.Property.MaskBorder | undefined;
            motion?: csstype.Property.Offset<string | number> | undefined;
            offset?: csstype.Property.Offset<string | number> | undefined;
            outline?: csstype.Property.Outline<string | number> | undefined;
            overflow?: csstype.Property.Overflow | undefined;
            overscrollBehavior?: csstype.Property.OverscrollBehavior | undefined;
            padding?: csstype.Property.Padding<string | number> | undefined;
            paddingBlock?: csstype.Property.PaddingBlock<string | number> | undefined;
            paddingInline?: csstype.Property.PaddingInline<string | number> | undefined;
            placeContent?: csstype.Property.PlaceContent | undefined;
            placeItems?: csstype.Property.PlaceItems | undefined;
            placeSelf?: csstype.Property.PlaceSelf | undefined;
            scrollMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollMarginBlock?: csstype.Property.ScrollMarginBlock<string | number> | undefined;
            scrollMarginInline?: csstype.Property.ScrollMarginInline<string | number> | undefined;
            scrollPadding?: csstype.Property.ScrollPadding<string | number> | undefined;
            scrollPaddingBlock?: csstype.Property.ScrollPaddingBlock<string | number> | undefined;
            scrollPaddingInline?: csstype.Property.ScrollPaddingInline<string | number> | undefined;
            scrollSnapMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollTimeline?: csstype.Property.ScrollTimeline | undefined;
            textDecoration?: csstype.Property.TextDecoration<string | number> | undefined;
            textEmphasis?: csstype.Property.TextEmphasis | undefined;
            transition?: csstype.Property.Transition<string & {}> | undefined;
            viewTimeline?: csstype.Property.ViewTimeline | undefined;
            MozAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            MozAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            MozAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            MozAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            MozAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            MozAnimationName?: csstype.Property.AnimationName | undefined;
            MozAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            MozAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            MozAppearance?: csstype.Property.MozAppearance | undefined;
            MozBinding?: csstype.Property.MozBinding | undefined;
            MozBorderBottomColors?: csstype.Property.MozBorderBottomColors | undefined;
            MozBorderEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            MozBorderEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            MozBorderEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            MozBorderLeftColors?: csstype.Property.MozBorderLeftColors | undefined;
            MozBorderRightColors?: csstype.Property.MozBorderRightColors | undefined;
            MozBorderStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            MozBorderStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            MozBorderTopColors?: csstype.Property.MozBorderTopColors | undefined;
            MozBoxSizing?: csstype.Property.BoxSizing | undefined;
            MozColumnCount?: csstype.Property.ColumnCount | undefined;
            MozColumnFill?: csstype.Property.ColumnFill | undefined;
            MozColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            MozColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            MozColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            MozColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            MozContextProperties?: csstype.Property.MozContextProperties | undefined;
            MozFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            MozFontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            MozHyphens?: csstype.Property.Hyphens | undefined;
            MozImageRegion?: csstype.Property.MozImageRegion | undefined;
            MozMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            MozMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            MozOrient?: csstype.Property.MozOrient | undefined;
            MozOsxFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            MozOutlineRadiusBottomleft?: csstype.Property.MozOutlineRadiusBottomleft<string | number> | undefined;
            MozOutlineRadiusBottomright?: csstype.Property.MozOutlineRadiusBottomright<string | number> | undefined;
            MozOutlineRadiusTopleft?: csstype.Property.MozOutlineRadiusTopleft<string | number> | undefined;
            MozOutlineRadiusTopright?: csstype.Property.MozOutlineRadiusTopright<string | number> | undefined;
            MozPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            MozPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            MozStackSizing?: csstype.Property.MozStackSizing | undefined;
            MozTabSize?: csstype.Property.TabSize<string | number> | undefined;
            MozTextBlink?: csstype.Property.MozTextBlink | undefined;
            MozTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            MozUserFocus?: csstype.Property.MozUserFocus | undefined;
            MozUserModify?: csstype.Property.MozUserModify | undefined;
            MozUserSelect?: csstype.Property.UserSelect | undefined;
            MozWindowDragging?: csstype.Property.MozWindowDragging | undefined;
            MozWindowShadow?: csstype.Property.MozWindowShadow | undefined;
            msAccelerator?: csstype.Property.MsAccelerator | undefined;
            msBlockProgression?: csstype.Property.MsBlockProgression | undefined;
            msContentZoomChaining?: csstype.Property.MsContentZoomChaining | undefined;
            msContentZoomLimitMax?: csstype.Property.MsContentZoomLimitMax | undefined;
            msContentZoomLimitMin?: csstype.Property.MsContentZoomLimitMin | undefined;
            msContentZoomSnapPoints?: csstype.Property.MsContentZoomSnapPoints | undefined;
            msContentZoomSnapType?: csstype.Property.MsContentZoomSnapType | undefined;
            msContentZooming?: csstype.Property.MsContentZooming | undefined;
            msFilter?: csstype.Property.MsFilter | undefined;
            msFlexDirection?: csstype.Property.FlexDirection | undefined;
            msFlexPositive?: csstype.Property.FlexGrow | undefined;
            msFlowFrom?: csstype.Property.MsFlowFrom | undefined;
            msFlowInto?: csstype.Property.MsFlowInto | undefined;
            msGridColumns?: csstype.Property.MsGridColumns<string | number> | undefined;
            msGridRows?: csstype.Property.MsGridRows<string | number> | undefined;
            msHighContrastAdjust?: csstype.Property.MsHighContrastAdjust | undefined;
            msHyphenateLimitChars?: csstype.Property.MsHyphenateLimitChars | undefined;
            msHyphenateLimitLines?: csstype.Property.MsHyphenateLimitLines | undefined;
            msHyphenateLimitZone?: csstype.Property.MsHyphenateLimitZone<string | number> | undefined;
            msHyphens?: csstype.Property.Hyphens | undefined;
            msImeAlign?: csstype.Property.MsImeAlign | undefined;
            msLineBreak?: csstype.Property.LineBreak | undefined;
            msOrder?: csstype.Property.Order | undefined;
            msOverflowStyle?: csstype.Property.MsOverflowStyle | undefined;
            msOverflowX?: csstype.Property.OverflowX | undefined;
            msOverflowY?: csstype.Property.OverflowY | undefined;
            msScrollChaining?: csstype.Property.MsScrollChaining | undefined;
            msScrollLimitXMax?: csstype.Property.MsScrollLimitXMax<string | number> | undefined;
            msScrollLimitXMin?: csstype.Property.MsScrollLimitXMin<string | number> | undefined;
            msScrollLimitYMax?: csstype.Property.MsScrollLimitYMax<string | number> | undefined;
            msScrollLimitYMin?: csstype.Property.MsScrollLimitYMin<string | number> | undefined;
            msScrollRails?: csstype.Property.MsScrollRails | undefined;
            msScrollSnapPointsX?: csstype.Property.MsScrollSnapPointsX | undefined;
            msScrollSnapPointsY?: csstype.Property.MsScrollSnapPointsY | undefined;
            msScrollSnapType?: csstype.Property.MsScrollSnapType | undefined;
            msScrollTranslation?: csstype.Property.MsScrollTranslation | undefined;
            msScrollbar3dlightColor?: csstype.Property.MsScrollbar3dlightColor | undefined;
            msScrollbarArrowColor?: csstype.Property.MsScrollbarArrowColor | undefined;
            msScrollbarBaseColor?: csstype.Property.MsScrollbarBaseColor | undefined;
            msScrollbarDarkshadowColor?: csstype.Property.MsScrollbarDarkshadowColor | undefined;
            msScrollbarFaceColor?: csstype.Property.MsScrollbarFaceColor | undefined;
            msScrollbarHighlightColor?: csstype.Property.MsScrollbarHighlightColor | undefined;
            msScrollbarShadowColor?: csstype.Property.MsScrollbarShadowColor | undefined;
            msScrollbarTrackColor?: csstype.Property.MsScrollbarTrackColor | undefined;
            msTextAutospace?: csstype.Property.MsTextAutospace | undefined;
            msTextCombineHorizontal?: csstype.Property.TextCombineUpright | undefined;
            msTextOverflow?: csstype.Property.TextOverflow | undefined;
            msTouchAction?: csstype.Property.TouchAction | undefined;
            msTouchSelect?: csstype.Property.MsTouchSelect | undefined;
            msTransform?: csstype.Property.Transform | undefined;
            msTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            msTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            msTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            msTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            msTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            msUserSelect?: csstype.Property.MsUserSelect | undefined;
            msWordBreak?: csstype.Property.WordBreak | undefined;
            msWrapFlow?: csstype.Property.MsWrapFlow | undefined;
            msWrapMargin?: csstype.Property.MsWrapMargin<string | number> | undefined;
            msWrapThrough?: csstype.Property.MsWrapThrough | undefined;
            msWritingMode?: csstype.Property.WritingMode | undefined;
            WebkitAlignContent?: csstype.Property.AlignContent | undefined;
            WebkitAlignItems?: csstype.Property.AlignItems | undefined;
            WebkitAlignSelf?: csstype.Property.AlignSelf | undefined;
            WebkitAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            WebkitAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            WebkitAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            WebkitAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            WebkitAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            WebkitAnimationName?: csstype.Property.AnimationName | undefined;
            WebkitAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            WebkitAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            WebkitAppearance?: csstype.Property.WebkitAppearance | undefined;
            WebkitBackdropFilter?: csstype.Property.BackdropFilter | undefined;
            WebkitBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            WebkitBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            WebkitBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            WebkitBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            WebkitBorderBeforeColor?: csstype.Property.WebkitBorderBeforeColor | undefined;
            WebkitBorderBeforeStyle?: csstype.Property.WebkitBorderBeforeStyle | undefined;
            WebkitBorderBeforeWidth?: csstype.Property.WebkitBorderBeforeWidth<string | number> | undefined;
            WebkitBorderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            WebkitBorderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            WebkitBorderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            WebkitBorderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            WebkitBorderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            WebkitBoxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            WebkitBoxReflect?: csstype.Property.WebkitBoxReflect<string | number> | undefined;
            WebkitBoxShadow?: csstype.Property.BoxShadow | undefined;
            WebkitBoxSizing?: csstype.Property.BoxSizing | undefined;
            WebkitClipPath?: csstype.Property.ClipPath | undefined;
            WebkitColumnCount?: csstype.Property.ColumnCount | undefined;
            WebkitColumnFill?: csstype.Property.ColumnFill | undefined;
            WebkitColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            WebkitColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            WebkitColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            WebkitColumnSpan?: csstype.Property.ColumnSpan | undefined;
            WebkitColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            WebkitFilter?: csstype.Property.Filter | undefined;
            WebkitFlexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            WebkitFlexDirection?: csstype.Property.FlexDirection | undefined;
            WebkitFlexGrow?: csstype.Property.FlexGrow | undefined;
            WebkitFlexShrink?: csstype.Property.FlexShrink | undefined;
            WebkitFlexWrap?: csstype.Property.FlexWrap | undefined;
            WebkitFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            WebkitFontKerning?: csstype.Property.FontKerning | undefined;
            WebkitFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            WebkitFontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            WebkitHyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            WebkitHyphens?: csstype.Property.Hyphens | undefined;
            WebkitInitialLetter?: csstype.Property.InitialLetter | undefined;
            WebkitJustifyContent?: csstype.Property.JustifyContent | undefined;
            WebkitLineBreak?: csstype.Property.LineBreak | undefined;
            WebkitLineClamp?: csstype.Property.WebkitLineClamp | undefined;
            WebkitMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            WebkitMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            WebkitMaskAttachment?: csstype.Property.WebkitMaskAttachment | undefined;
            WebkitMaskBoxImageOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            WebkitMaskBoxImageRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            WebkitMaskBoxImageSlice?: csstype.Property.MaskBorderSlice | undefined;
            WebkitMaskBoxImageSource?: csstype.Property.MaskBorderSource | undefined;
            WebkitMaskBoxImageWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            WebkitMaskClip?: csstype.Property.WebkitMaskClip | undefined;
            WebkitMaskComposite?: csstype.Property.WebkitMaskComposite | undefined;
            WebkitMaskImage?: csstype.Property.WebkitMaskImage | undefined;
            WebkitMaskOrigin?: csstype.Property.WebkitMaskOrigin | undefined;
            WebkitMaskPosition?: csstype.Property.WebkitMaskPosition<string | number> | undefined;
            WebkitMaskPositionX?: csstype.Property.WebkitMaskPositionX<string | number> | undefined;
            WebkitMaskPositionY?: csstype.Property.WebkitMaskPositionY<string | number> | undefined;
            WebkitMaskRepeat?: csstype.Property.WebkitMaskRepeat | undefined;
            WebkitMaskRepeatX?: csstype.Property.WebkitMaskRepeatX | undefined;
            WebkitMaskRepeatY?: csstype.Property.WebkitMaskRepeatY | undefined;
            WebkitMaskSize?: csstype.Property.WebkitMaskSize<string | number> | undefined;
            WebkitMaxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            WebkitOrder?: csstype.Property.Order | undefined;
            WebkitOverflowScrolling?: csstype.Property.WebkitOverflowScrolling | undefined;
            WebkitPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            WebkitPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            WebkitPerspective?: csstype.Property.Perspective<string | number> | undefined;
            WebkitPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            WebkitPrintColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            WebkitRubyPosition?: csstype.Property.RubyPosition | undefined;
            WebkitScrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            WebkitShapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            WebkitTapHighlightColor?: csstype.Property.WebkitTapHighlightColor | undefined;
            WebkitTextCombine?: csstype.Property.TextCombineUpright | undefined;
            WebkitTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            WebkitTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            WebkitTextDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            WebkitTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            WebkitTextEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            WebkitTextEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            WebkitTextEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            WebkitTextFillColor?: csstype.Property.WebkitTextFillColor | undefined;
            WebkitTextOrientation?: csstype.Property.TextOrientation | undefined;
            WebkitTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            WebkitTextStrokeColor?: csstype.Property.WebkitTextStrokeColor | undefined;
            WebkitTextStrokeWidth?: csstype.Property.WebkitTextStrokeWidth<string | number> | undefined;
            WebkitTextUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            WebkitTouchCallout?: csstype.Property.WebkitTouchCallout | undefined;
            WebkitTransform?: csstype.Property.Transform | undefined;
            WebkitTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            WebkitTransformStyle?: csstype.Property.TransformStyle | undefined;
            WebkitTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            WebkitTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            WebkitTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            WebkitTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitUserModify?: csstype.Property.WebkitUserModify | undefined;
            WebkitUserSelect?: csstype.Property.UserSelect | undefined;
            WebkitWritingMode?: csstype.Property.WritingMode | undefined;
            MozAnimation?: csstype.Property.Animation<string & {}> | undefined;
            MozBorderImage?: csstype.Property.BorderImage | undefined;
            MozColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            MozColumns?: csstype.Property.Columns<string | number> | undefined;
            MozOutlineRadius?: csstype.Property.MozOutlineRadius<string | number> | undefined;
            msContentZoomLimit?: csstype.Property.MsContentZoomLimit | undefined;
            msContentZoomSnap?: csstype.Property.MsContentZoomSnap | undefined;
            msFlex?: csstype.Property.Flex<string | number> | undefined;
            msScrollLimit?: csstype.Property.MsScrollLimit | undefined;
            msScrollSnapX?: csstype.Property.MsScrollSnapX | undefined;
            msScrollSnapY?: csstype.Property.MsScrollSnapY | undefined;
            msTransition?: csstype.Property.Transition<string & {}> | undefined;
            WebkitAnimation?: csstype.Property.Animation<string & {}> | undefined;
            WebkitBorderBefore?: csstype.Property.WebkitBorderBefore<string | number> | undefined;
            WebkitBorderImage?: csstype.Property.BorderImage | undefined;
            WebkitBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            WebkitColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            WebkitColumns?: csstype.Property.Columns<string | number> | undefined;
            WebkitFlex?: csstype.Property.Flex<string | number> | undefined;
            WebkitFlexFlow?: csstype.Property.FlexFlow | undefined;
            WebkitMask?: csstype.Property.WebkitMask<string | number> | undefined;
            WebkitMaskBoxImage?: csstype.Property.MaskBorder | undefined;
            WebkitTextEmphasis?: csstype.Property.TextEmphasis | undefined;
            WebkitTextStroke?: csstype.Property.WebkitTextStroke<string | number> | undefined;
            WebkitTransition?: csstype.Property.Transition<string & {}> | undefined;
            azimuth?: csstype.Property.Azimuth | undefined;
            boxAlign?: csstype.Property.BoxAlign | undefined;
            boxDirection?: csstype.Property.BoxDirection | undefined;
            boxFlex?: csstype.Property.BoxFlex | undefined;
            boxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            boxLines?: csstype.Property.BoxLines | undefined;
            boxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            boxOrient?: csstype.Property.BoxOrient | undefined;
            boxPack?: csstype.Property.BoxPack | undefined;
            clip?: csstype.Property.Clip | undefined;
            gridColumnGap?: csstype.Property.GridColumnGap<string | number> | undefined;
            gridGap?: csstype.Property.GridGap<string | number> | undefined;
            gridRowGap?: csstype.Property.GridRowGap<string | number> | undefined;
            imeMode?: csstype.Property.ImeMode | undefined;
            offsetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            offsetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            offsetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            offsetInline?: csstype.Property.InsetInline<string | number> | undefined;
            offsetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            offsetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            scrollSnapCoordinate?: csstype.Property.ScrollSnapCoordinate<string | number> | undefined;
            scrollSnapDestination?: csstype.Property.ScrollSnapDestination<string | number> | undefined;
            scrollSnapPointsX?: csstype.Property.ScrollSnapPointsX | undefined;
            scrollSnapPointsY?: csstype.Property.ScrollSnapPointsY | undefined;
            scrollSnapTypeX?: csstype.Property.ScrollSnapTypeX | undefined;
            scrollSnapTypeY?: csstype.Property.ScrollSnapTypeY | undefined;
            KhtmlBoxAlign?: csstype.Property.BoxAlign | undefined;
            KhtmlBoxDirection?: csstype.Property.BoxDirection | undefined;
            KhtmlBoxFlex?: csstype.Property.BoxFlex | undefined;
            KhtmlBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            KhtmlBoxLines?: csstype.Property.BoxLines | undefined;
            KhtmlBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            KhtmlBoxOrient?: csstype.Property.BoxOrient | undefined;
            KhtmlBoxPack?: csstype.Property.BoxPack | undefined;
            KhtmlLineBreak?: csstype.Property.LineBreak | undefined;
            KhtmlOpacity?: csstype.Property.Opacity | undefined;
            KhtmlUserSelect?: csstype.Property.UserSelect | undefined;
            MozBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            MozBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            MozBackgroundInlinePolicy?: csstype.Property.BoxDecorationBreak | undefined;
            MozBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            MozBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            MozBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            MozBorderRadiusBottomleft?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            MozBorderRadiusBottomright?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            MozBorderRadiusTopleft?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            MozBorderRadiusTopright?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            MozBoxAlign?: csstype.Property.BoxAlign | undefined;
            MozBoxDirection?: csstype.Property.BoxDirection | undefined;
            MozBoxFlex?: csstype.Property.BoxFlex | undefined;
            MozBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            MozBoxOrient?: csstype.Property.BoxOrient | undefined;
            MozBoxPack?: csstype.Property.BoxPack | undefined;
            MozBoxShadow?: csstype.Property.BoxShadow | undefined;
            MozFloatEdge?: csstype.Property.MozFloatEdge | undefined;
            MozForceBrokenImageIcon?: csstype.Property.MozForceBrokenImageIcon | undefined;
            MozOpacity?: csstype.Property.Opacity | undefined;
            MozOutline?: csstype.Property.Outline<string | number> | undefined;
            MozOutlineColor?: csstype.Property.OutlineColor | undefined;
            MozOutlineStyle?: csstype.Property.OutlineStyle | undefined;
            MozOutlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            MozPerspective?: csstype.Property.Perspective<string | number> | undefined;
            MozPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            MozTextAlignLast?: csstype.Property.TextAlignLast | undefined;
            MozTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            MozTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            MozTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            MozTransform?: csstype.Property.Transform | undefined;
            MozTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            MozTransformStyle?: csstype.Property.TransformStyle | undefined;
            MozTransition?: csstype.Property.Transition<string & {}> | undefined;
            MozTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            MozTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            MozTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            MozTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            MozUserInput?: csstype.Property.MozUserInput | undefined;
            msImeMode?: csstype.Property.ImeMode | undefined;
            OAnimation?: csstype.Property.Animation<string & {}> | undefined;
            OAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            OAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            OAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            OAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            OAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            OAnimationName?: csstype.Property.AnimationName | undefined;
            OAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            OAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            OBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            OBorderImage?: csstype.Property.BorderImage | undefined;
            OObjectFit?: csstype.Property.ObjectFit | undefined;
            OObjectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            OTabSize?: csstype.Property.TabSize<string | number> | undefined;
            OTextOverflow?: csstype.Property.TextOverflow | undefined;
            OTransform?: csstype.Property.Transform | undefined;
            OTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            OTransition?: csstype.Property.Transition<string & {}> | undefined;
            OTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            OTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            OTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            OTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitBoxAlign?: csstype.Property.BoxAlign | undefined;
            WebkitBoxDirection?: csstype.Property.BoxDirection | undefined;
            WebkitBoxFlex?: csstype.Property.BoxFlex | undefined;
            WebkitBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            WebkitBoxLines?: csstype.Property.BoxLines | undefined;
            WebkitBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            WebkitBoxOrient?: csstype.Property.BoxOrient | undefined;
            WebkitBoxPack?: csstype.Property.BoxPack | undefined;
            alignmentBaseline?: csstype.Property.AlignmentBaseline | undefined;
            baselineShift?: csstype.Property.BaselineShift<string | number> | undefined;
            clipRule?: csstype.Property.ClipRule | undefined;
            colorInterpolation?: csstype.Property.ColorInterpolation | undefined;
            colorRendering?: csstype.Property.ColorRendering | undefined;
            dominantBaseline?: csstype.Property.DominantBaseline | undefined;
            fill?: csstype.Property.Fill | undefined;
            fillOpacity?: csstype.Property.FillOpacity | undefined;
            fillRule?: csstype.Property.FillRule | undefined;
            floodColor?: csstype.Property.FloodColor | undefined;
            floodOpacity?: csstype.Property.FloodOpacity | undefined;
            glyphOrientationVertical?: csstype.Property.GlyphOrientationVertical | undefined;
            lightingColor?: csstype.Property.LightingColor | undefined;
            marker?: csstype.Property.Marker | undefined;
            markerEnd?: csstype.Property.MarkerEnd | undefined;
            markerMid?: csstype.Property.MarkerMid | undefined;
            markerStart?: csstype.Property.MarkerStart | undefined;
            shapeRendering?: csstype.Property.ShapeRendering | undefined;
            stopColor?: csstype.Property.StopColor | undefined;
            stopOpacity?: csstype.Property.StopOpacity | undefined;
            stroke?: csstype.Property.Stroke | undefined;
            strokeDasharray?: csstype.Property.StrokeDasharray<string | number> | undefined;
            strokeDashoffset?: csstype.Property.StrokeDashoffset<string | number> | undefined;
            strokeLinecap?: csstype.Property.StrokeLinecap | undefined;
            strokeLinejoin?: csstype.Property.StrokeLinejoin | undefined;
            strokeMiterlimit?: csstype.Property.StrokeMiterlimit | undefined;
            strokeOpacity?: csstype.Property.StrokeOpacity | undefined;
            strokeWidth?: csstype.Property.StrokeWidth<string | number> | undefined;
            textAnchor?: csstype.Property.TextAnchor | undefined;
            vectorEffect?: csstype.Property.VectorEffect | undefined;
            '--navbar-height': string | number;
        };
        animate?: framer_motion.AnimationControls | framer_motion.TargetAndTransition | framer_motion.VariantLabels | boolean;
        onDrag?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragEnd?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragStart?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onAnimationStart?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
        variants?: framer_motion.Variants;
        initial?: boolean | framer_motion.Target | framer_motion.VariantLabels;
        onAnimationComplete?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
    };
};

declare const NavbarProvider: React$1.Provider<{
    containerRef: React$1.RefObject<HTMLElement>;
    height: string | number;
    isHidden: boolean;
    shouldHideOnScroll: boolean;
    motionProps: {
        animate?: (framer_motion.AnimationControls | framer_motion.TargetAndTransition | framer_motion.VariantLabels | boolean) | undefined;
        onDrag?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragEnd?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragStart?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onAnimationStart?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
        variants?: framer_motion.Variants | undefined;
        initial?: (boolean | framer_motion.Target | framer_motion.VariantLabels) | undefined;
        onAnimationComplete?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
    } | undefined;
    getContainerProps: (props?: NavbarProps) => {
        'data-hidden': boolean | "true" | "false";
        ref: React$1.RefObject<HTMLElement>;
        style: {
            accentColor?: csstype.Property.AccentColor | undefined;
            alignContent?: csstype.Property.AlignContent | undefined;
            alignItems?: csstype.Property.AlignItems | undefined;
            alignSelf?: csstype.Property.AlignSelf | undefined;
            alignTracks?: csstype.Property.AlignTracks | undefined;
            animationComposition?: csstype.Property.AnimationComposition | undefined;
            animationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            animationDirection?: csstype.Property.AnimationDirection | undefined;
            animationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            animationFillMode?: csstype.Property.AnimationFillMode | undefined;
            animationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            animationName?: csstype.Property.AnimationName | undefined;
            animationPlayState?: csstype.Property.AnimationPlayState | undefined;
            animationRangeEnd?: csstype.Property.AnimationRangeEnd<string | number> | undefined;
            animationRangeStart?: csstype.Property.AnimationRangeStart<string | number> | undefined;
            animationTimeline?: csstype.Property.AnimationTimeline | undefined;
            animationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            appearance?: csstype.Property.Appearance | undefined;
            aspectRatio?: csstype.Property.AspectRatio | undefined;
            backdropFilter?: csstype.Property.BackdropFilter | undefined;
            backfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            backgroundAttachment?: csstype.Property.BackgroundAttachment | undefined;
            backgroundBlendMode?: csstype.Property.BackgroundBlendMode | undefined;
            backgroundClip?: csstype.Property.BackgroundClip | undefined;
            backgroundColor?: csstype.Property.BackgroundColor | undefined;
            backgroundImage?: csstype.Property.BackgroundImage | undefined;
            backgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            backgroundPositionX?: csstype.Property.BackgroundPositionX<string | number> | undefined;
            backgroundPositionY?: csstype.Property.BackgroundPositionY<string | number> | undefined;
            backgroundRepeat?: csstype.Property.BackgroundRepeat | undefined;
            backgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            blockOverflow?: csstype.Property.BlockOverflow | undefined;
            blockSize?: csstype.Property.BlockSize<string | number> | undefined;
            borderBlockColor?: csstype.Property.BorderBlockColor | undefined;
            borderBlockEndColor?: csstype.Property.BorderBlockEndColor | undefined;
            borderBlockEndStyle?: csstype.Property.BorderBlockEndStyle | undefined;
            borderBlockEndWidth?: csstype.Property.BorderBlockEndWidth<string | number> | undefined;
            borderBlockStartColor?: csstype.Property.BorderBlockStartColor | undefined;
            borderBlockStartStyle?: csstype.Property.BorderBlockStartStyle | undefined;
            borderBlockStartWidth?: csstype.Property.BorderBlockStartWidth<string | number> | undefined;
            borderBlockStyle?: csstype.Property.BorderBlockStyle | undefined;
            borderBlockWidth?: csstype.Property.BorderBlockWidth<string | number> | undefined;
            borderBottomColor?: csstype.Property.BorderBottomColor | undefined;
            borderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            borderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            borderBottomStyle?: csstype.Property.BorderBottomStyle | undefined;
            borderBottomWidth?: csstype.Property.BorderBottomWidth<string | number> | undefined;
            borderCollapse?: csstype.Property.BorderCollapse | undefined;
            borderEndEndRadius?: csstype.Property.BorderEndEndRadius<string | number> | undefined;
            borderEndStartRadius?: csstype.Property.BorderEndStartRadius<string | number> | undefined;
            borderImageOutset?: csstype.Property.BorderImageOutset<string | number> | undefined;
            borderImageRepeat?: csstype.Property.BorderImageRepeat | undefined;
            borderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            borderImageSource?: csstype.Property.BorderImageSource | undefined;
            borderImageWidth?: csstype.Property.BorderImageWidth<string | number> | undefined;
            borderInlineColor?: csstype.Property.BorderInlineColor | undefined;
            borderInlineEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            borderInlineEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            borderInlineEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            borderInlineStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            borderInlineStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            borderInlineStartWidth?: csstype.Property.BorderInlineStartWidth<string | number> | undefined;
            borderInlineStyle?: csstype.Property.BorderInlineStyle | undefined;
            borderInlineWidth?: csstype.Property.BorderInlineWidth<string | number> | undefined;
            borderLeftColor?: csstype.Property.BorderLeftColor | undefined;
            borderLeftStyle?: csstype.Property.BorderLeftStyle | undefined;
            borderLeftWidth?: csstype.Property.BorderLeftWidth<string | number> | undefined;
            borderRightColor?: csstype.Property.BorderRightColor | undefined;
            borderRightStyle?: csstype.Property.BorderRightStyle | undefined;
            borderRightWidth?: csstype.Property.BorderRightWidth<string | number> | undefined;
            borderSpacing?: csstype.Property.BorderSpacing<string | number> | undefined;
            borderStartEndRadius?: csstype.Property.BorderStartEndRadius<string | number> | undefined;
            borderStartStartRadius?: csstype.Property.BorderStartStartRadius<string | number> | undefined;
            borderTopColor?: csstype.Property.BorderTopColor | undefined;
            borderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            borderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            borderTopStyle?: csstype.Property.BorderTopStyle | undefined;
            borderTopWidth?: csstype.Property.BorderTopWidth<string | number> | undefined;
            bottom?: csstype.Property.Bottom<string | number> | undefined;
            boxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            boxShadow?: csstype.Property.BoxShadow | undefined;
            boxSizing?: csstype.Property.BoxSizing | undefined;
            breakAfter?: csstype.Property.BreakAfter | undefined;
            breakBefore?: csstype.Property.BreakBefore | undefined;
            breakInside?: csstype.Property.BreakInside | undefined;
            captionSide?: csstype.Property.CaptionSide | undefined;
            caretColor?: csstype.Property.CaretColor | undefined;
            caretShape?: csstype.Property.CaretShape | undefined;
            clear?: csstype.Property.Clear | undefined;
            clipPath?: csstype.Property.ClipPath | undefined;
            color?: csstype.Property.Color | undefined;
            colorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            colorScheme?: csstype.Property.ColorScheme | undefined;
            columnCount?: csstype.Property.ColumnCount | undefined;
            columnFill?: csstype.Property.ColumnFill | undefined;
            columnGap?: csstype.Property.ColumnGap<string | number> | undefined;
            columnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            columnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            columnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            columnSpan?: csstype.Property.ColumnSpan | undefined;
            columnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            contain?: csstype.Property.Contain | undefined;
            containIntrinsicBlockSize?: csstype.Property.ContainIntrinsicBlockSize<string | number> | undefined;
            containIntrinsicHeight?: csstype.Property.ContainIntrinsicHeight<string | number> | undefined;
            containIntrinsicInlineSize?: csstype.Property.ContainIntrinsicInlineSize<string | number> | undefined;
            containIntrinsicWidth?: csstype.Property.ContainIntrinsicWidth<string | number> | undefined;
            containerName?: csstype.Property.ContainerName | undefined;
            containerType?: csstype.Property.ContainerType | undefined;
            content?: csstype.Property.Content | undefined;
            contentVisibility?: csstype.Property.ContentVisibility | undefined;
            counterIncrement?: csstype.Property.CounterIncrement | undefined;
            counterReset?: csstype.Property.CounterReset | undefined;
            counterSet?: csstype.Property.CounterSet | undefined;
            cursor?: csstype.Property.Cursor | undefined;
            direction?: csstype.Property.Direction | undefined;
            display?: csstype.Property.Display | undefined;
            emptyCells?: csstype.Property.EmptyCells | undefined;
            filter?: csstype.Property.Filter | undefined;
            flexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            flexDirection?: csstype.Property.FlexDirection | undefined;
            flexGrow?: csstype.Property.FlexGrow | undefined;
            flexShrink?: csstype.Property.FlexShrink | undefined;
            flexWrap?: csstype.Property.FlexWrap | undefined;
            float?: csstype.Property.Float | undefined;
            fontFamily?: csstype.Property.FontFamily | undefined;
            fontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            fontKerning?: csstype.Property.FontKerning | undefined;
            fontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            fontOpticalSizing?: csstype.Property.FontOpticalSizing | undefined;
            fontPalette?: csstype.Property.FontPalette | undefined;
            fontSize?: csstype.Property.FontSize<string | number> | undefined;
            fontSizeAdjust?: csstype.Property.FontSizeAdjust | undefined;
            fontSmooth?: csstype.Property.FontSmooth<string | number> | undefined;
            fontStretch?: csstype.Property.FontStretch | undefined;
            fontStyle?: csstype.Property.FontStyle | undefined;
            fontSynthesis?: csstype.Property.FontSynthesis | undefined;
            fontSynthesisPosition?: csstype.Property.FontSynthesisPosition | undefined;
            fontSynthesisSmallCaps?: csstype.Property.FontSynthesisSmallCaps | undefined;
            fontSynthesisStyle?: csstype.Property.FontSynthesisStyle | undefined;
            fontSynthesisWeight?: csstype.Property.FontSynthesisWeight | undefined;
            fontVariant?: csstype.Property.FontVariant | undefined;
            fontVariantAlternates?: csstype.Property.FontVariantAlternates | undefined;
            fontVariantCaps?: csstype.Property.FontVariantCaps | undefined;
            fontVariantEastAsian?: csstype.Property.FontVariantEastAsian | undefined;
            fontVariantEmoji?: csstype.Property.FontVariantEmoji | undefined;
            fontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            fontVariantNumeric?: csstype.Property.FontVariantNumeric | undefined;
            fontVariantPosition?: csstype.Property.FontVariantPosition | undefined;
            fontVariationSettings?: csstype.Property.FontVariationSettings | undefined;
            fontWeight?: csstype.Property.FontWeight | undefined;
            forcedColorAdjust?: csstype.Property.ForcedColorAdjust | undefined;
            gridAutoColumns?: csstype.Property.GridAutoColumns<string | number> | undefined;
            gridAutoFlow?: csstype.Property.GridAutoFlow | undefined;
            gridAutoRows?: csstype.Property.GridAutoRows<string | number> | undefined;
            gridColumnEnd?: csstype.Property.GridColumnEnd | undefined;
            gridColumnStart?: csstype.Property.GridColumnStart | undefined;
            gridRowEnd?: csstype.Property.GridRowEnd | undefined;
            gridRowStart?: csstype.Property.GridRowStart | undefined;
            gridTemplateAreas?: csstype.Property.GridTemplateAreas | undefined;
            gridTemplateColumns?: csstype.Property.GridTemplateColumns<string | number> | undefined;
            gridTemplateRows?: csstype.Property.GridTemplateRows<string | number> | undefined;
            hangingPunctuation?: csstype.Property.HangingPunctuation | undefined;
            height?: csstype.Property.Height<string | number> | undefined;
            hyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            hyphenateLimitChars?: csstype.Property.HyphenateLimitChars | undefined;
            hyphens?: csstype.Property.Hyphens | undefined;
            imageOrientation?: csstype.Property.ImageOrientation | undefined;
            imageRendering?: csstype.Property.ImageRendering | undefined;
            imageResolution?: csstype.Property.ImageResolution | undefined;
            initialLetter?: csstype.Property.InitialLetter | undefined;
            inlineSize?: csstype.Property.InlineSize<string | number> | undefined;
            inputSecurity?: csstype.Property.InputSecurity | undefined;
            insetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            insetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            insetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            insetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            isolation?: csstype.Property.Isolation | undefined;
            justifyContent?: csstype.Property.JustifyContent | undefined;
            justifyItems?: csstype.Property.JustifyItems | undefined;
            justifySelf?: csstype.Property.JustifySelf | undefined;
            justifyTracks?: csstype.Property.JustifyTracks | undefined;
            left?: csstype.Property.Left<string | number> | undefined;
            letterSpacing?: csstype.Property.LetterSpacing<string | number> | undefined;
            lineBreak?: csstype.Property.LineBreak | undefined;
            lineHeight?: csstype.Property.LineHeight<string | number> | undefined;
            lineHeightStep?: csstype.Property.LineHeightStep<string | number> | undefined;
            listStyleImage?: csstype.Property.ListStyleImage | undefined;
            listStylePosition?: csstype.Property.ListStylePosition | undefined;
            listStyleType?: csstype.Property.ListStyleType | undefined;
            marginBlockEnd?: csstype.Property.MarginBlockEnd<string | number> | undefined;
            marginBlockStart?: csstype.Property.MarginBlockStart<string | number> | undefined;
            marginBottom?: csstype.Property.MarginBottom<string | number> | undefined;
            marginInlineEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            marginInlineStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            marginLeft?: csstype.Property.MarginLeft<string | number> | undefined;
            marginRight?: csstype.Property.MarginRight<string | number> | undefined;
            marginTop?: csstype.Property.MarginTop<string | number> | undefined;
            marginTrim?: csstype.Property.MarginTrim | undefined;
            maskBorderMode?: csstype.Property.MaskBorderMode | undefined;
            maskBorderOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            maskBorderRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            maskBorderSlice?: csstype.Property.MaskBorderSlice | undefined;
            maskBorderSource?: csstype.Property.MaskBorderSource | undefined;
            maskBorderWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            maskClip?: csstype.Property.MaskClip | undefined;
            maskComposite?: csstype.Property.MaskComposite | undefined;
            maskImage?: csstype.Property.MaskImage | undefined;
            maskMode?: csstype.Property.MaskMode | undefined;
            maskOrigin?: csstype.Property.MaskOrigin | undefined;
            maskPosition?: csstype.Property.MaskPosition<string | number> | undefined;
            maskRepeat?: csstype.Property.MaskRepeat | undefined;
            maskSize?: csstype.Property.MaskSize<string | number> | undefined;
            maskType?: csstype.Property.MaskType | undefined;
            masonryAutoFlow?: csstype.Property.MasonryAutoFlow | undefined;
            mathDepth?: csstype.Property.MathDepth | undefined;
            mathShift?: csstype.Property.MathShift | undefined;
            mathStyle?: csstype.Property.MathStyle | undefined;
            maxBlockSize?: csstype.Property.MaxBlockSize<string | number> | undefined;
            maxHeight?: csstype.Property.MaxHeight<string | number> | undefined;
            maxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            maxLines?: csstype.Property.MaxLines | undefined;
            maxWidth?: csstype.Property.MaxWidth<string | number> | undefined;
            minBlockSize?: csstype.Property.MinBlockSize<string | number> | undefined;
            minHeight?: csstype.Property.MinHeight<string | number> | undefined;
            minInlineSize?: csstype.Property.MinInlineSize<string | number> | undefined;
            minWidth?: csstype.Property.MinWidth<string | number> | undefined;
            mixBlendMode?: csstype.Property.MixBlendMode | undefined;
            motionDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            motionPath?: csstype.Property.OffsetPath | undefined;
            motionRotation?: csstype.Property.OffsetRotate | undefined;
            objectFit?: csstype.Property.ObjectFit | undefined;
            objectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            offsetAnchor?: csstype.Property.OffsetAnchor<string | number> | undefined;
            offsetDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            offsetPath?: csstype.Property.OffsetPath | undefined;
            offsetPosition?: csstype.Property.OffsetPosition<string | number> | undefined;
            offsetRotate?: csstype.Property.OffsetRotate | undefined;
            offsetRotation?: csstype.Property.OffsetRotate | undefined;
            opacity?: csstype.Property.Opacity | undefined;
            order?: csstype.Property.Order | undefined;
            orphans?: csstype.Property.Orphans | undefined;
            outlineColor?: csstype.Property.OutlineColor | undefined;
            outlineOffset?: csstype.Property.OutlineOffset<string | number> | undefined;
            outlineStyle?: csstype.Property.OutlineStyle | undefined;
            outlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            overflowAnchor?: csstype.Property.OverflowAnchor | undefined;
            overflowBlock?: csstype.Property.OverflowBlock | undefined;
            overflowClipBox?: csstype.Property.OverflowClipBox | undefined;
            overflowClipMargin?: csstype.Property.OverflowClipMargin<string | number> | undefined;
            overflowInline?: csstype.Property.OverflowInline | undefined;
            overflowWrap?: csstype.Property.OverflowWrap | undefined;
            overflowX?: csstype.Property.OverflowX | undefined;
            overflowY?: csstype.Property.OverflowY | undefined;
            overlay?: csstype.Property.Overlay | undefined;
            overscrollBehaviorBlock?: csstype.Property.OverscrollBehaviorBlock | undefined;
            overscrollBehaviorInline?: csstype.Property.OverscrollBehaviorInline | undefined;
            overscrollBehaviorX?: csstype.Property.OverscrollBehaviorX | undefined;
            overscrollBehaviorY?: csstype.Property.OverscrollBehaviorY | undefined;
            paddingBlockEnd?: csstype.Property.PaddingBlockEnd<string | number> | undefined;
            paddingBlockStart?: csstype.Property.PaddingBlockStart<string | number> | undefined;
            paddingBottom?: csstype.Property.PaddingBottom<string | number> | undefined;
            paddingInlineEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            paddingInlineStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            paddingLeft?: csstype.Property.PaddingLeft<string | number> | undefined;
            paddingRight?: csstype.Property.PaddingRight<string | number> | undefined;
            paddingTop?: csstype.Property.PaddingTop<string | number> | undefined;
            page?: csstype.Property.Page | undefined;
            pageBreakAfter?: csstype.Property.PageBreakAfter | undefined;
            pageBreakBefore?: csstype.Property.PageBreakBefore | undefined;
            pageBreakInside?: csstype.Property.PageBreakInside | undefined;
            paintOrder?: csstype.Property.PaintOrder | undefined;
            perspective?: csstype.Property.Perspective<string | number> | undefined;
            perspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            pointerEvents?: csstype.Property.PointerEvents | undefined;
            position?: csstype.Property.Position | undefined;
            printColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            quotes?: csstype.Property.Quotes | undefined;
            resize?: csstype.Property.Resize | undefined;
            right?: csstype.Property.Right<string | number> | undefined;
            rotate?: csstype.Property.Rotate | undefined;
            rowGap?: csstype.Property.RowGap<string | number> | undefined;
            rubyAlign?: csstype.Property.RubyAlign | undefined;
            rubyMerge?: csstype.Property.RubyMerge | undefined;
            rubyPosition?: csstype.Property.RubyPosition | undefined;
            scale?: csstype.Property.Scale | undefined;
            scrollBehavior?: csstype.Property.ScrollBehavior | undefined;
            scrollMarginBlockEnd?: csstype.Property.ScrollMarginBlockEnd<string | number> | undefined;
            scrollMarginBlockStart?: csstype.Property.ScrollMarginBlockStart<string | number> | undefined;
            scrollMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollMarginInlineEnd?: csstype.Property.ScrollMarginInlineEnd<string | number> | undefined;
            scrollMarginInlineStart?: csstype.Property.ScrollMarginInlineStart<string | number> | undefined;
            scrollMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollPaddingBlockEnd?: csstype.Property.ScrollPaddingBlockEnd<string | number> | undefined;
            scrollPaddingBlockStart?: csstype.Property.ScrollPaddingBlockStart<string | number> | undefined;
            scrollPaddingBottom?: csstype.Property.ScrollPaddingBottom<string | number> | undefined;
            scrollPaddingInlineEnd?: csstype.Property.ScrollPaddingInlineEnd<string | number> | undefined;
            scrollPaddingInlineStart?: csstype.Property.ScrollPaddingInlineStart<string | number> | undefined;
            scrollPaddingLeft?: csstype.Property.ScrollPaddingLeft<string | number> | undefined;
            scrollPaddingRight?: csstype.Property.ScrollPaddingRight<string | number> | undefined;
            scrollPaddingTop?: csstype.Property.ScrollPaddingTop<string | number> | undefined;
            scrollSnapAlign?: csstype.Property.ScrollSnapAlign | undefined;
            scrollSnapMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollSnapMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollSnapMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollSnapMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollSnapStop?: csstype.Property.ScrollSnapStop | undefined;
            scrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            scrollTimelineAxis?: csstype.Property.ScrollTimelineAxis | undefined;
            scrollTimelineName?: csstype.Property.ScrollTimelineName | undefined;
            scrollbarColor?: csstype.Property.ScrollbarColor | undefined;
            scrollbarGutter?: csstype.Property.ScrollbarGutter | undefined;
            scrollbarWidth?: csstype.Property.ScrollbarWidth | undefined;
            shapeImageThreshold?: csstype.Property.ShapeImageThreshold | undefined;
            shapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            shapeOutside?: csstype.Property.ShapeOutside | undefined;
            tabSize?: csstype.Property.TabSize<string | number> | undefined;
            tableLayout?: csstype.Property.TableLayout | undefined;
            textAlign?: csstype.Property.TextAlign | undefined;
            textAlignLast?: csstype.Property.TextAlignLast | undefined;
            textCombineUpright?: csstype.Property.TextCombineUpright | undefined;
            textDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            textDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            textDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            textDecorationSkipInk?: csstype.Property.TextDecorationSkipInk | undefined;
            textDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            textDecorationThickness?: csstype.Property.TextDecorationThickness<string | number> | undefined;
            textEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            textEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            textEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            textIndent?: csstype.Property.TextIndent<string | number> | undefined;
            textJustify?: csstype.Property.TextJustify | undefined;
            textOrientation?: csstype.Property.TextOrientation | undefined;
            textOverflow?: csstype.Property.TextOverflow | undefined;
            textRendering?: csstype.Property.TextRendering | undefined;
            textShadow?: csstype.Property.TextShadow | undefined;
            textSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            textTransform?: csstype.Property.TextTransform | undefined;
            textUnderlineOffset?: csstype.Property.TextUnderlineOffset<string | number> | undefined;
            textUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            textWrap?: csstype.Property.TextWrap | undefined;
            timelineScope?: csstype.Property.TimelineScope | undefined;
            top?: csstype.Property.Top<string | number> | undefined;
            touchAction?: csstype.Property.TouchAction | undefined;
            transform?: csstype.Property.Transform | undefined;
            transformBox?: csstype.Property.TransformBox | undefined;
            transformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            transformStyle?: csstype.Property.TransformStyle | undefined;
            transitionBehavior?: csstype.Property.TransitionBehavior | undefined;
            transitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            transitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            transitionProperty?: csstype.Property.TransitionProperty | undefined;
            transitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            translate?: csstype.Property.Translate<string | number> | undefined;
            unicodeBidi?: csstype.Property.UnicodeBidi | undefined;
            userSelect?: csstype.Property.UserSelect | undefined;
            verticalAlign?: csstype.Property.VerticalAlign<string | number> | undefined;
            viewTimelineAxis?: csstype.Property.ViewTimelineAxis | undefined;
            viewTimelineInset?: csstype.Property.ViewTimelineInset<string | number> | undefined;
            viewTimelineName?: csstype.Property.ViewTimelineName | undefined;
            viewTransitionName?: csstype.Property.ViewTransitionName | undefined;
            visibility?: csstype.Property.Visibility | undefined;
            whiteSpace?: csstype.Property.WhiteSpace | undefined;
            whiteSpaceCollapse?: csstype.Property.WhiteSpaceCollapse | undefined;
            whiteSpaceTrim?: csstype.Property.WhiteSpaceTrim | undefined;
            widows?: csstype.Property.Widows | undefined;
            width?: csstype.Property.Width<string | number> | undefined;
            willChange?: csstype.Property.WillChange | undefined;
            wordBreak?: csstype.Property.WordBreak | undefined;
            wordSpacing?: csstype.Property.WordSpacing<string | number> | undefined;
            wordWrap?: csstype.Property.WordWrap | undefined;
            writingMode?: csstype.Property.WritingMode | undefined;
            zIndex?: csstype.Property.ZIndex | undefined;
            zoom?: csstype.Property.Zoom | undefined;
            all?: csstype.Property.All | undefined;
            animation?: csstype.Property.Animation<string & {}> | undefined;
            animationRange?: csstype.Property.AnimationRange<string | number> | undefined;
            background?: csstype.Property.Background<string | number> | undefined;
            backgroundPosition?: csstype.Property.BackgroundPosition<string | number> | undefined;
            border?: csstype.Property.Border<string | number> | undefined;
            borderBlock?: csstype.Property.BorderBlock<string | number> | undefined;
            borderBlockEnd?: csstype.Property.BorderBlockEnd<string | number> | undefined;
            borderBlockStart?: csstype.Property.BorderBlockStart<string | number> | undefined;
            borderBottom?: csstype.Property.BorderBottom<string | number> | undefined;
            borderColor?: csstype.Property.BorderColor | undefined;
            borderImage?: csstype.Property.BorderImage | undefined;
            borderInline?: csstype.Property.BorderInline<string | number> | undefined;
            borderInlineEnd?: csstype.Property.BorderInlineEnd<string | number> | undefined;
            borderInlineStart?: csstype.Property.BorderInlineStart<string | number> | undefined;
            borderLeft?: csstype.Property.BorderLeft<string | number> | undefined;
            borderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            borderRight?: csstype.Property.BorderRight<string | number> | undefined;
            borderStyle?: csstype.Property.BorderStyle | undefined;
            borderTop?: csstype.Property.BorderTop<string | number> | undefined;
            borderWidth?: csstype.Property.BorderWidth<string | number> | undefined;
            caret?: csstype.Property.Caret | undefined;
            columnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            columns?: csstype.Property.Columns<string | number> | undefined;
            containIntrinsicSize?: csstype.Property.ContainIntrinsicSize<string | number> | undefined;
            container?: csstype.Property.Container | undefined;
            flex?: csstype.Property.Flex<string | number> | undefined;
            flexFlow?: csstype.Property.FlexFlow | undefined;
            font?: csstype.Property.Font | undefined;
            gap?: csstype.Property.Gap<string | number> | undefined;
            grid?: csstype.Property.Grid | undefined;
            gridArea?: csstype.Property.GridArea | undefined;
            gridColumn?: csstype.Property.GridColumn | undefined;
            gridRow?: csstype.Property.GridRow | undefined;
            gridTemplate?: csstype.Property.GridTemplate | undefined;
            inset?: csstype.Property.Inset<string | number> | undefined;
            insetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            insetInline?: csstype.Property.InsetInline<string | number> | undefined;
            lineClamp?: csstype.Property.LineClamp | undefined;
            listStyle?: csstype.Property.ListStyle | undefined;
            margin?: csstype.Property.Margin<string | number> | undefined;
            marginBlock?: csstype.Property.MarginBlock<string | number> | undefined;
            marginInline?: csstype.Property.MarginInline<string | number> | undefined;
            mask?: csstype.Property.Mask<string | number> | undefined;
            maskBorder?: csstype.Property.MaskBorder | undefined;
            motion?: csstype.Property.Offset<string | number> | undefined;
            offset?: csstype.Property.Offset<string | number> | undefined;
            outline?: csstype.Property.Outline<string | number> | undefined;
            overflow?: csstype.Property.Overflow | undefined;
            overscrollBehavior?: csstype.Property.OverscrollBehavior | undefined;
            padding?: csstype.Property.Padding<string | number> | undefined;
            paddingBlock?: csstype.Property.PaddingBlock<string | number> | undefined;
            paddingInline?: csstype.Property.PaddingInline<string | number> | undefined;
            placeContent?: csstype.Property.PlaceContent | undefined;
            placeItems?: csstype.Property.PlaceItems | undefined;
            placeSelf?: csstype.Property.PlaceSelf | undefined;
            scrollMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollMarginBlock?: csstype.Property.ScrollMarginBlock<string | number> | undefined;
            scrollMarginInline?: csstype.Property.ScrollMarginInline<string | number> | undefined;
            scrollPadding?: csstype.Property.ScrollPadding<string | number> | undefined;
            scrollPaddingBlock?: csstype.Property.ScrollPaddingBlock<string | number> | undefined;
            scrollPaddingInline?: csstype.Property.ScrollPaddingInline<string | number> | undefined;
            scrollSnapMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollTimeline?: csstype.Property.ScrollTimeline | undefined;
            textDecoration?: csstype.Property.TextDecoration<string | number> | undefined;
            textEmphasis?: csstype.Property.TextEmphasis | undefined;
            transition?: csstype.Property.Transition<string & {}> | undefined;
            viewTimeline?: csstype.Property.ViewTimeline | undefined;
            MozAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            MozAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            MozAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            MozAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            MozAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            MozAnimationName?: csstype.Property.AnimationName | undefined;
            MozAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            MozAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            MozAppearance?: csstype.Property.MozAppearance | undefined;
            MozBinding?: csstype.Property.MozBinding | undefined;
            MozBorderBottomColors?: csstype.Property.MozBorderBottomColors | undefined;
            MozBorderEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            MozBorderEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            MozBorderEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            MozBorderLeftColors?: csstype.Property.MozBorderLeftColors | undefined;
            MozBorderRightColors?: csstype.Property.MozBorderRightColors | undefined;
            MozBorderStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            MozBorderStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            MozBorderTopColors?: csstype.Property.MozBorderTopColors | undefined;
            MozBoxSizing?: csstype.Property.BoxSizing | undefined;
            MozColumnCount?: csstype.Property.ColumnCount | undefined;
            MozColumnFill?: csstype.Property.ColumnFill | undefined;
            MozColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            MozColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            MozColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            MozColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            MozContextProperties?: csstype.Property.MozContextProperties | undefined;
            MozFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            MozFontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            MozHyphens?: csstype.Property.Hyphens | undefined;
            MozImageRegion?: csstype.Property.MozImageRegion | undefined;
            MozMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            MozMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            MozOrient?: csstype.Property.MozOrient | undefined;
            MozOsxFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            MozOutlineRadiusBottomleft?: csstype.Property.MozOutlineRadiusBottomleft<string | number> | undefined;
            MozOutlineRadiusBottomright?: csstype.Property.MozOutlineRadiusBottomright<string | number> | undefined;
            MozOutlineRadiusTopleft?: csstype.Property.MozOutlineRadiusTopleft<string | number> | undefined;
            MozOutlineRadiusTopright?: csstype.Property.MozOutlineRadiusTopright<string | number> | undefined;
            MozPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            MozPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            MozStackSizing?: csstype.Property.MozStackSizing | undefined;
            MozTabSize?: csstype.Property.TabSize<string | number> | undefined;
            MozTextBlink?: csstype.Property.MozTextBlink | undefined;
            MozTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            MozUserFocus?: csstype.Property.MozUserFocus | undefined;
            MozUserModify?: csstype.Property.MozUserModify | undefined;
            MozUserSelect?: csstype.Property.UserSelect | undefined;
            MozWindowDragging?: csstype.Property.MozWindowDragging | undefined;
            MozWindowShadow?: csstype.Property.MozWindowShadow | undefined;
            msAccelerator?: csstype.Property.MsAccelerator | undefined;
            msBlockProgression?: csstype.Property.MsBlockProgression | undefined;
            msContentZoomChaining?: csstype.Property.MsContentZoomChaining | undefined;
            msContentZoomLimitMax?: csstype.Property.MsContentZoomLimitMax | undefined;
            msContentZoomLimitMin?: csstype.Property.MsContentZoomLimitMin | undefined;
            msContentZoomSnapPoints?: csstype.Property.MsContentZoomSnapPoints | undefined;
            msContentZoomSnapType?: csstype.Property.MsContentZoomSnapType | undefined;
            msContentZooming?: csstype.Property.MsContentZooming | undefined;
            msFilter?: csstype.Property.MsFilter | undefined;
            msFlexDirection?: csstype.Property.FlexDirection | undefined;
            msFlexPositive?: csstype.Property.FlexGrow | undefined;
            msFlowFrom?: csstype.Property.MsFlowFrom | undefined;
            msFlowInto?: csstype.Property.MsFlowInto | undefined;
            msGridColumns?: csstype.Property.MsGridColumns<string | number> | undefined;
            msGridRows?: csstype.Property.MsGridRows<string | number> | undefined;
            msHighContrastAdjust?: csstype.Property.MsHighContrastAdjust | undefined;
            msHyphenateLimitChars?: csstype.Property.MsHyphenateLimitChars | undefined;
            msHyphenateLimitLines?: csstype.Property.MsHyphenateLimitLines | undefined;
            msHyphenateLimitZone?: csstype.Property.MsHyphenateLimitZone<string | number> | undefined;
            msHyphens?: csstype.Property.Hyphens | undefined;
            msImeAlign?: csstype.Property.MsImeAlign | undefined;
            msLineBreak?: csstype.Property.LineBreak | undefined;
            msOrder?: csstype.Property.Order | undefined;
            msOverflowStyle?: csstype.Property.MsOverflowStyle | undefined;
            msOverflowX?: csstype.Property.OverflowX | undefined;
            msOverflowY?: csstype.Property.OverflowY | undefined;
            msScrollChaining?: csstype.Property.MsScrollChaining | undefined;
            msScrollLimitXMax?: csstype.Property.MsScrollLimitXMax<string | number> | undefined;
            msScrollLimitXMin?: csstype.Property.MsScrollLimitXMin<string | number> | undefined;
            msScrollLimitYMax?: csstype.Property.MsScrollLimitYMax<string | number> | undefined;
            msScrollLimitYMin?: csstype.Property.MsScrollLimitYMin<string | number> | undefined;
            msScrollRails?: csstype.Property.MsScrollRails | undefined;
            msScrollSnapPointsX?: csstype.Property.MsScrollSnapPointsX | undefined;
            msScrollSnapPointsY?: csstype.Property.MsScrollSnapPointsY | undefined;
            msScrollSnapType?: csstype.Property.MsScrollSnapType | undefined;
            msScrollTranslation?: csstype.Property.MsScrollTranslation | undefined;
            msScrollbar3dlightColor?: csstype.Property.MsScrollbar3dlightColor | undefined;
            msScrollbarArrowColor?: csstype.Property.MsScrollbarArrowColor | undefined;
            msScrollbarBaseColor?: csstype.Property.MsScrollbarBaseColor | undefined;
            msScrollbarDarkshadowColor?: csstype.Property.MsScrollbarDarkshadowColor | undefined;
            msScrollbarFaceColor?: csstype.Property.MsScrollbarFaceColor | undefined;
            msScrollbarHighlightColor?: csstype.Property.MsScrollbarHighlightColor | undefined;
            msScrollbarShadowColor?: csstype.Property.MsScrollbarShadowColor | undefined;
            msScrollbarTrackColor?: csstype.Property.MsScrollbarTrackColor | undefined;
            msTextAutospace?: csstype.Property.MsTextAutospace | undefined;
            msTextCombineHorizontal?: csstype.Property.TextCombineUpright | undefined;
            msTextOverflow?: csstype.Property.TextOverflow | undefined;
            msTouchAction?: csstype.Property.TouchAction | undefined;
            msTouchSelect?: csstype.Property.MsTouchSelect | undefined;
            msTransform?: csstype.Property.Transform | undefined;
            msTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            msTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            msTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            msTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            msTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            msUserSelect?: csstype.Property.MsUserSelect | undefined;
            msWordBreak?: csstype.Property.WordBreak | undefined;
            msWrapFlow?: csstype.Property.MsWrapFlow | undefined;
            msWrapMargin?: csstype.Property.MsWrapMargin<string | number> | undefined;
            msWrapThrough?: csstype.Property.MsWrapThrough | undefined;
            msWritingMode?: csstype.Property.WritingMode | undefined;
            WebkitAlignContent?: csstype.Property.AlignContent | undefined;
            WebkitAlignItems?: csstype.Property.AlignItems | undefined;
            WebkitAlignSelf?: csstype.Property.AlignSelf | undefined;
            WebkitAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            WebkitAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            WebkitAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            WebkitAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            WebkitAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            WebkitAnimationName?: csstype.Property.AnimationName | undefined;
            WebkitAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            WebkitAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            WebkitAppearance?: csstype.Property.WebkitAppearance | undefined;
            WebkitBackdropFilter?: csstype.Property.BackdropFilter | undefined;
            WebkitBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            WebkitBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            WebkitBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            WebkitBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            WebkitBorderBeforeColor?: csstype.Property.WebkitBorderBeforeColor | undefined;
            WebkitBorderBeforeStyle?: csstype.Property.WebkitBorderBeforeStyle | undefined;
            WebkitBorderBeforeWidth?: csstype.Property.WebkitBorderBeforeWidth<string | number> | undefined;
            WebkitBorderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            WebkitBorderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            WebkitBorderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            WebkitBorderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            WebkitBorderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            WebkitBoxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            WebkitBoxReflect?: csstype.Property.WebkitBoxReflect<string | number> | undefined;
            WebkitBoxShadow?: csstype.Property.BoxShadow | undefined;
            WebkitBoxSizing?: csstype.Property.BoxSizing | undefined;
            WebkitClipPath?: csstype.Property.ClipPath | undefined;
            WebkitColumnCount?: csstype.Property.ColumnCount | undefined;
            WebkitColumnFill?: csstype.Property.ColumnFill | undefined;
            WebkitColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            WebkitColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            WebkitColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            WebkitColumnSpan?: csstype.Property.ColumnSpan | undefined;
            WebkitColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            WebkitFilter?: csstype.Property.Filter | undefined;
            WebkitFlexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            WebkitFlexDirection?: csstype.Property.FlexDirection | undefined;
            WebkitFlexGrow?: csstype.Property.FlexGrow | undefined;
            WebkitFlexShrink?: csstype.Property.FlexShrink | undefined;
            WebkitFlexWrap?: csstype.Property.FlexWrap | undefined;
            WebkitFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            WebkitFontKerning?: csstype.Property.FontKerning | undefined;
            WebkitFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            WebkitFontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            WebkitHyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            WebkitHyphens?: csstype.Property.Hyphens | undefined;
            WebkitInitialLetter?: csstype.Property.InitialLetter | undefined;
            WebkitJustifyContent?: csstype.Property.JustifyContent | undefined;
            WebkitLineBreak?: csstype.Property.LineBreak | undefined;
            WebkitLineClamp?: csstype.Property.WebkitLineClamp | undefined;
            WebkitMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            WebkitMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            WebkitMaskAttachment?: csstype.Property.WebkitMaskAttachment | undefined;
            WebkitMaskBoxImageOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            WebkitMaskBoxImageRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            WebkitMaskBoxImageSlice?: csstype.Property.MaskBorderSlice | undefined;
            WebkitMaskBoxImageSource?: csstype.Property.MaskBorderSource | undefined;
            WebkitMaskBoxImageWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            WebkitMaskClip?: csstype.Property.WebkitMaskClip | undefined;
            WebkitMaskComposite?: csstype.Property.WebkitMaskComposite | undefined;
            WebkitMaskImage?: csstype.Property.WebkitMaskImage | undefined;
            WebkitMaskOrigin?: csstype.Property.WebkitMaskOrigin | undefined;
            WebkitMaskPosition?: csstype.Property.WebkitMaskPosition<string | number> | undefined;
            WebkitMaskPositionX?: csstype.Property.WebkitMaskPositionX<string | number> | undefined;
            WebkitMaskPositionY?: csstype.Property.WebkitMaskPositionY<string | number> | undefined;
            WebkitMaskRepeat?: csstype.Property.WebkitMaskRepeat | undefined;
            WebkitMaskRepeatX?: csstype.Property.WebkitMaskRepeatX | undefined;
            WebkitMaskRepeatY?: csstype.Property.WebkitMaskRepeatY | undefined;
            WebkitMaskSize?: csstype.Property.WebkitMaskSize<string | number> | undefined;
            WebkitMaxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            WebkitOrder?: csstype.Property.Order | undefined;
            WebkitOverflowScrolling?: csstype.Property.WebkitOverflowScrolling | undefined;
            WebkitPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            WebkitPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            WebkitPerspective?: csstype.Property.Perspective<string | number> | undefined;
            WebkitPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            WebkitPrintColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            WebkitRubyPosition?: csstype.Property.RubyPosition | undefined;
            WebkitScrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            WebkitShapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            WebkitTapHighlightColor?: csstype.Property.WebkitTapHighlightColor | undefined;
            WebkitTextCombine?: csstype.Property.TextCombineUpright | undefined;
            WebkitTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            WebkitTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            WebkitTextDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            WebkitTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            WebkitTextEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            WebkitTextEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            WebkitTextEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            WebkitTextFillColor?: csstype.Property.WebkitTextFillColor | undefined;
            WebkitTextOrientation?: csstype.Property.TextOrientation | undefined;
            WebkitTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            WebkitTextStrokeColor?: csstype.Property.WebkitTextStrokeColor | undefined;
            WebkitTextStrokeWidth?: csstype.Property.WebkitTextStrokeWidth<string | number> | undefined;
            WebkitTextUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            WebkitTouchCallout?: csstype.Property.WebkitTouchCallout | undefined;
            WebkitTransform?: csstype.Property.Transform | undefined;
            WebkitTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            WebkitTransformStyle?: csstype.Property.TransformStyle | undefined;
            WebkitTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            WebkitTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            WebkitTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            WebkitTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitUserModify?: csstype.Property.WebkitUserModify | undefined;
            WebkitUserSelect?: csstype.Property.UserSelect | undefined;
            WebkitWritingMode?: csstype.Property.WritingMode | undefined;
            MozAnimation?: csstype.Property.Animation<string & {}> | undefined;
            MozBorderImage?: csstype.Property.BorderImage | undefined;
            MozColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            MozColumns?: csstype.Property.Columns<string | number> | undefined;
            MozOutlineRadius?: csstype.Property.MozOutlineRadius<string | number> | undefined;
            msContentZoomLimit?: csstype.Property.MsContentZoomLimit | undefined;
            msContentZoomSnap?: csstype.Property.MsContentZoomSnap | undefined;
            msFlex?: csstype.Property.Flex<string | number> | undefined;
            msScrollLimit?: csstype.Property.MsScrollLimit | undefined;
            msScrollSnapX?: csstype.Property.MsScrollSnapX | undefined;
            msScrollSnapY?: csstype.Property.MsScrollSnapY | undefined;
            msTransition?: csstype.Property.Transition<string & {}> | undefined;
            WebkitAnimation?: csstype.Property.Animation<string & {}> | undefined;
            WebkitBorderBefore?: csstype.Property.WebkitBorderBefore<string | number> | undefined;
            WebkitBorderImage?: csstype.Property.BorderImage | undefined;
            WebkitBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            WebkitColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            WebkitColumns?: csstype.Property.Columns<string | number> | undefined;
            WebkitFlex?: csstype.Property.Flex<string | number> | undefined;
            WebkitFlexFlow?: csstype.Property.FlexFlow | undefined;
            WebkitMask?: csstype.Property.WebkitMask<string | number> | undefined;
            WebkitMaskBoxImage?: csstype.Property.MaskBorder | undefined;
            WebkitTextEmphasis?: csstype.Property.TextEmphasis | undefined;
            WebkitTextStroke?: csstype.Property.WebkitTextStroke<string | number> | undefined;
            WebkitTransition?: csstype.Property.Transition<string & {}> | undefined;
            azimuth?: csstype.Property.Azimuth | undefined;
            boxAlign?: csstype.Property.BoxAlign | undefined;
            boxDirection?: csstype.Property.BoxDirection | undefined;
            boxFlex?: csstype.Property.BoxFlex | undefined;
            boxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            boxLines?: csstype.Property.BoxLines | undefined;
            boxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            boxOrient?: csstype.Property.BoxOrient | undefined;
            boxPack?: csstype.Property.BoxPack | undefined;
            clip?: csstype.Property.Clip | undefined;
            gridColumnGap?: csstype.Property.GridColumnGap<string | number> | undefined;
            gridGap?: csstype.Property.GridGap<string | number> | undefined;
            gridRowGap?: csstype.Property.GridRowGap<string | number> | undefined;
            imeMode?: csstype.Property.ImeMode | undefined;
            offsetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            offsetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            offsetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            offsetInline?: csstype.Property.InsetInline<string | number> | undefined;
            offsetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            offsetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            scrollSnapCoordinate?: csstype.Property.ScrollSnapCoordinate<string | number> | undefined;
            scrollSnapDestination?: csstype.Property.ScrollSnapDestination<string | number> | undefined;
            scrollSnapPointsX?: csstype.Property.ScrollSnapPointsX | undefined;
            scrollSnapPointsY?: csstype.Property.ScrollSnapPointsY | undefined;
            scrollSnapTypeX?: csstype.Property.ScrollSnapTypeX | undefined;
            scrollSnapTypeY?: csstype.Property.ScrollSnapTypeY | undefined;
            KhtmlBoxAlign?: csstype.Property.BoxAlign | undefined;
            KhtmlBoxDirection?: csstype.Property.BoxDirection | undefined;
            KhtmlBoxFlex?: csstype.Property.BoxFlex | undefined;
            KhtmlBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            KhtmlBoxLines?: csstype.Property.BoxLines | undefined;
            KhtmlBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            KhtmlBoxOrient?: csstype.Property.BoxOrient | undefined;
            KhtmlBoxPack?: csstype.Property.BoxPack | undefined;
            KhtmlLineBreak?: csstype.Property.LineBreak | undefined;
            KhtmlOpacity?: csstype.Property.Opacity | undefined;
            KhtmlUserSelect?: csstype.Property.UserSelect | undefined;
            MozBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            MozBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            MozBackgroundInlinePolicy?: csstype.Property.BoxDecorationBreak | undefined;
            MozBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            MozBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            MozBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            MozBorderRadiusBottomleft?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            MozBorderRadiusBottomright?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            MozBorderRadiusTopleft?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            MozBorderRadiusTopright?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            MozBoxAlign?: csstype.Property.BoxAlign | undefined;
            MozBoxDirection?: csstype.Property.BoxDirection | undefined;
            MozBoxFlex?: csstype.Property.BoxFlex | undefined;
            MozBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            MozBoxOrient?: csstype.Property.BoxOrient | undefined;
            MozBoxPack?: csstype.Property.BoxPack | undefined;
            MozBoxShadow?: csstype.Property.BoxShadow | undefined;
            MozFloatEdge?: csstype.Property.MozFloatEdge | undefined;
            MozForceBrokenImageIcon?: csstype.Property.MozForceBrokenImageIcon | undefined;
            MozOpacity?: csstype.Property.Opacity | undefined;
            MozOutline?: csstype.Property.Outline<string | number> | undefined;
            MozOutlineColor?: csstype.Property.OutlineColor | undefined;
            MozOutlineStyle?: csstype.Property.OutlineStyle | undefined;
            MozOutlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            MozPerspective?: csstype.Property.Perspective<string | number> | undefined;
            MozPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            MozTextAlignLast?: csstype.Property.TextAlignLast | undefined;
            MozTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            MozTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            MozTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            MozTransform?: csstype.Property.Transform | undefined;
            MozTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            MozTransformStyle?: csstype.Property.TransformStyle | undefined;
            MozTransition?: csstype.Property.Transition<string & {}> | undefined;
            MozTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            MozTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            MozTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            MozTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            MozUserInput?: csstype.Property.MozUserInput | undefined;
            msImeMode?: csstype.Property.ImeMode | undefined;
            OAnimation?: csstype.Property.Animation<string & {}> | undefined;
            OAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            OAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            OAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            OAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            OAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            OAnimationName?: csstype.Property.AnimationName | undefined;
            OAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            OAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            OBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            OBorderImage?: csstype.Property.BorderImage | undefined;
            OObjectFit?: csstype.Property.ObjectFit | undefined;
            OObjectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            OTabSize?: csstype.Property.TabSize<string | number> | undefined;
            OTextOverflow?: csstype.Property.TextOverflow | undefined;
            OTransform?: csstype.Property.Transform | undefined;
            OTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            OTransition?: csstype.Property.Transition<string & {}> | undefined;
            OTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            OTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            OTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            OTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitBoxAlign?: csstype.Property.BoxAlign | undefined;
            WebkitBoxDirection?: csstype.Property.BoxDirection | undefined;
            WebkitBoxFlex?: csstype.Property.BoxFlex | undefined;
            WebkitBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            WebkitBoxLines?: csstype.Property.BoxLines | undefined;
            WebkitBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            WebkitBoxOrient?: csstype.Property.BoxOrient | undefined;
            WebkitBoxPack?: csstype.Property.BoxPack | undefined;
            alignmentBaseline?: csstype.Property.AlignmentBaseline | undefined;
            baselineShift?: csstype.Property.BaselineShift<string | number> | undefined;
            clipRule?: csstype.Property.ClipRule | undefined;
            colorInterpolation?: csstype.Property.ColorInterpolation | undefined;
            colorRendering?: csstype.Property.ColorRendering | undefined;
            dominantBaseline?: csstype.Property.DominantBaseline | undefined;
            fill?: csstype.Property.Fill | undefined;
            fillOpacity?: csstype.Property.FillOpacity | undefined;
            fillRule?: csstype.Property.FillRule | undefined;
            floodColor?: csstype.Property.FloodColor | undefined;
            floodOpacity?: csstype.Property.FloodOpacity | undefined;
            glyphOrientationVertical?: csstype.Property.GlyphOrientationVertical | undefined;
            lightingColor?: csstype.Property.LightingColor | undefined;
            marker?: csstype.Property.Marker | undefined;
            markerEnd?: csstype.Property.MarkerEnd | undefined;
            markerMid?: csstype.Property.MarkerMid | undefined;
            markerStart?: csstype.Property.MarkerStart | undefined;
            shapeRendering?: csstype.Property.ShapeRendering | undefined;
            stopColor?: csstype.Property.StopColor | undefined;
            stopOpacity?: csstype.Property.StopOpacity | undefined;
            stroke?: csstype.Property.Stroke | undefined;
            strokeDasharray?: csstype.Property.StrokeDasharray<string | number> | undefined;
            strokeDashoffset?: csstype.Property.StrokeDashoffset<string | number> | undefined;
            strokeLinecap?: csstype.Property.StrokeLinecap | undefined;
            strokeLinejoin?: csstype.Property.StrokeLinejoin | undefined;
            strokeMiterlimit?: csstype.Property.StrokeMiterlimit | undefined;
            strokeOpacity?: csstype.Property.StrokeOpacity | undefined;
            strokeWidth?: csstype.Property.StrokeWidth<string | number> | undefined;
            textAnchor?: csstype.Property.TextAnchor | undefined;
            vectorEffect?: csstype.Property.VectorEffect | undefined;
            '--navbar-height': string | number;
        };
        animate?: framer_motion.AnimationControls | framer_motion.TargetAndTransition | framer_motion.VariantLabels | boolean;
        onDrag?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragEnd?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragStart?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onAnimationStart?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
        variants?: framer_motion.Variants;
        initial?: boolean | framer_motion.Target | framer_motion.VariantLabels;
        onAnimationComplete?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
    };
}>;
declare const useNavbarContext: () => {
    containerRef: React$1.RefObject<HTMLElement>;
    height: string | number;
    isHidden: boolean;
    shouldHideOnScroll: boolean;
    motionProps: {
        animate?: (framer_motion.AnimationControls | framer_motion.TargetAndTransition | framer_motion.VariantLabels | boolean) | undefined;
        onDrag?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragEnd?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragStart?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onAnimationStart?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
        variants?: framer_motion.Variants | undefined;
        initial?: (boolean | framer_motion.Target | framer_motion.VariantLabels) | undefined;
        onAnimationComplete?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
    } | undefined;
    getContainerProps: (props?: NavbarProps) => {
        'data-hidden': boolean | "true" | "false";
        ref: React$1.RefObject<HTMLElement>;
        style: {
            accentColor?: csstype.Property.AccentColor | undefined;
            alignContent?: csstype.Property.AlignContent | undefined;
            alignItems?: csstype.Property.AlignItems | undefined;
            alignSelf?: csstype.Property.AlignSelf | undefined;
            alignTracks?: csstype.Property.AlignTracks | undefined;
            animationComposition?: csstype.Property.AnimationComposition | undefined;
            animationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            animationDirection?: csstype.Property.AnimationDirection | undefined;
            animationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            animationFillMode?: csstype.Property.AnimationFillMode | undefined;
            animationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            animationName?: csstype.Property.AnimationName | undefined;
            animationPlayState?: csstype.Property.AnimationPlayState | undefined;
            animationRangeEnd?: csstype.Property.AnimationRangeEnd<string | number> | undefined;
            animationRangeStart?: csstype.Property.AnimationRangeStart<string | number> | undefined;
            animationTimeline?: csstype.Property.AnimationTimeline | undefined;
            animationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            appearance?: csstype.Property.Appearance | undefined;
            aspectRatio?: csstype.Property.AspectRatio | undefined;
            backdropFilter?: csstype.Property.BackdropFilter | undefined;
            backfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            backgroundAttachment?: csstype.Property.BackgroundAttachment | undefined;
            backgroundBlendMode?: csstype.Property.BackgroundBlendMode | undefined;
            backgroundClip?: csstype.Property.BackgroundClip | undefined;
            backgroundColor?: csstype.Property.BackgroundColor | undefined;
            backgroundImage?: csstype.Property.BackgroundImage | undefined;
            backgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            backgroundPositionX?: csstype.Property.BackgroundPositionX<string | number> | undefined;
            backgroundPositionY?: csstype.Property.BackgroundPositionY<string | number> | undefined;
            backgroundRepeat?: csstype.Property.BackgroundRepeat | undefined;
            backgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            blockOverflow?: csstype.Property.BlockOverflow | undefined;
            blockSize?: csstype.Property.BlockSize<string | number> | undefined;
            borderBlockColor?: csstype.Property.BorderBlockColor | undefined;
            borderBlockEndColor?: csstype.Property.BorderBlockEndColor | undefined;
            borderBlockEndStyle?: csstype.Property.BorderBlockEndStyle | undefined;
            borderBlockEndWidth?: csstype.Property.BorderBlockEndWidth<string | number> | undefined;
            borderBlockStartColor?: csstype.Property.BorderBlockStartColor | undefined;
            borderBlockStartStyle?: csstype.Property.BorderBlockStartStyle | undefined;
            borderBlockStartWidth?: csstype.Property.BorderBlockStartWidth<string | number> | undefined;
            borderBlockStyle?: csstype.Property.BorderBlockStyle | undefined;
            borderBlockWidth?: csstype.Property.BorderBlockWidth<string | number> | undefined;
            borderBottomColor?: csstype.Property.BorderBottomColor | undefined;
            borderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            borderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            borderBottomStyle?: csstype.Property.BorderBottomStyle | undefined;
            borderBottomWidth?: csstype.Property.BorderBottomWidth<string | number> | undefined;
            borderCollapse?: csstype.Property.BorderCollapse | undefined;
            borderEndEndRadius?: csstype.Property.BorderEndEndRadius<string | number> | undefined;
            borderEndStartRadius?: csstype.Property.BorderEndStartRadius<string | number> | undefined;
            borderImageOutset?: csstype.Property.BorderImageOutset<string | number> | undefined;
            borderImageRepeat?: csstype.Property.BorderImageRepeat | undefined;
            borderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            borderImageSource?: csstype.Property.BorderImageSource | undefined;
            borderImageWidth?: csstype.Property.BorderImageWidth<string | number> | undefined;
            borderInlineColor?: csstype.Property.BorderInlineColor | undefined;
            borderInlineEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            borderInlineEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            borderInlineEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            borderInlineStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            borderInlineStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            borderInlineStartWidth?: csstype.Property.BorderInlineStartWidth<string | number> | undefined;
            borderInlineStyle?: csstype.Property.BorderInlineStyle | undefined;
            borderInlineWidth?: csstype.Property.BorderInlineWidth<string | number> | undefined;
            borderLeftColor?: csstype.Property.BorderLeftColor | undefined;
            borderLeftStyle?: csstype.Property.BorderLeftStyle | undefined;
            borderLeftWidth?: csstype.Property.BorderLeftWidth<string | number> | undefined;
            borderRightColor?: csstype.Property.BorderRightColor | undefined;
            borderRightStyle?: csstype.Property.BorderRightStyle | undefined;
            borderRightWidth?: csstype.Property.BorderRightWidth<string | number> | undefined;
            borderSpacing?: csstype.Property.BorderSpacing<string | number> | undefined;
            borderStartEndRadius?: csstype.Property.BorderStartEndRadius<string | number> | undefined;
            borderStartStartRadius?: csstype.Property.BorderStartStartRadius<string | number> | undefined;
            borderTopColor?: csstype.Property.BorderTopColor | undefined;
            borderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            borderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            borderTopStyle?: csstype.Property.BorderTopStyle | undefined;
            borderTopWidth?: csstype.Property.BorderTopWidth<string | number> | undefined;
            bottom?: csstype.Property.Bottom<string | number> | undefined;
            boxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            boxShadow?: csstype.Property.BoxShadow | undefined;
            boxSizing?: csstype.Property.BoxSizing | undefined;
            breakAfter?: csstype.Property.BreakAfter | undefined;
            breakBefore?: csstype.Property.BreakBefore | undefined;
            breakInside?: csstype.Property.BreakInside | undefined;
            captionSide?: csstype.Property.CaptionSide | undefined;
            caretColor?: csstype.Property.CaretColor | undefined;
            caretShape?: csstype.Property.CaretShape | undefined;
            clear?: csstype.Property.Clear | undefined;
            clipPath?: csstype.Property.ClipPath | undefined;
            color?: csstype.Property.Color | undefined;
            colorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            colorScheme?: csstype.Property.ColorScheme | undefined;
            columnCount?: csstype.Property.ColumnCount | undefined;
            columnFill?: csstype.Property.ColumnFill | undefined;
            columnGap?: csstype.Property.ColumnGap<string | number> | undefined;
            columnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            columnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            columnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            columnSpan?: csstype.Property.ColumnSpan | undefined;
            columnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            contain?: csstype.Property.Contain | undefined;
            containIntrinsicBlockSize?: csstype.Property.ContainIntrinsicBlockSize<string | number> | undefined;
            containIntrinsicHeight?: csstype.Property.ContainIntrinsicHeight<string | number> | undefined;
            containIntrinsicInlineSize?: csstype.Property.ContainIntrinsicInlineSize<string | number> | undefined;
            containIntrinsicWidth?: csstype.Property.ContainIntrinsicWidth<string | number> | undefined;
            containerName?: csstype.Property.ContainerName | undefined;
            containerType?: csstype.Property.ContainerType | undefined;
            content?: csstype.Property.Content | undefined;
            contentVisibility?: csstype.Property.ContentVisibility | undefined;
            counterIncrement?: csstype.Property.CounterIncrement | undefined;
            counterReset?: csstype.Property.CounterReset | undefined;
            counterSet?: csstype.Property.CounterSet | undefined;
            cursor?: csstype.Property.Cursor | undefined;
            direction?: csstype.Property.Direction | undefined;
            display?: csstype.Property.Display | undefined;
            emptyCells?: csstype.Property.EmptyCells | undefined;
            filter?: csstype.Property.Filter | undefined;
            flexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            flexDirection?: csstype.Property.FlexDirection | undefined;
            flexGrow?: csstype.Property.FlexGrow | undefined;
            flexShrink?: csstype.Property.FlexShrink | undefined;
            flexWrap?: csstype.Property.FlexWrap | undefined;
            float?: csstype.Property.Float | undefined;
            fontFamily?: csstype.Property.FontFamily | undefined;
            fontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            fontKerning?: csstype.Property.FontKerning | undefined;
            fontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            fontOpticalSizing?: csstype.Property.FontOpticalSizing | undefined;
            fontPalette?: csstype.Property.FontPalette | undefined;
            fontSize?: csstype.Property.FontSize<string | number> | undefined;
            fontSizeAdjust?: csstype.Property.FontSizeAdjust | undefined;
            fontSmooth?: csstype.Property.FontSmooth<string | number> | undefined;
            fontStretch?: csstype.Property.FontStretch | undefined;
            fontStyle?: csstype.Property.FontStyle | undefined;
            fontSynthesis?: csstype.Property.FontSynthesis | undefined;
            fontSynthesisPosition?: csstype.Property.FontSynthesisPosition | undefined;
            fontSynthesisSmallCaps?: csstype.Property.FontSynthesisSmallCaps | undefined;
            fontSynthesisStyle?: csstype.Property.FontSynthesisStyle | undefined;
            fontSynthesisWeight?: csstype.Property.FontSynthesisWeight | undefined;
            fontVariant?: csstype.Property.FontVariant | undefined;
            fontVariantAlternates?: csstype.Property.FontVariantAlternates | undefined;
            fontVariantCaps?: csstype.Property.FontVariantCaps | undefined;
            fontVariantEastAsian?: csstype.Property.FontVariantEastAsian | undefined;
            fontVariantEmoji?: csstype.Property.FontVariantEmoji | undefined;
            fontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            fontVariantNumeric?: csstype.Property.FontVariantNumeric | undefined;
            fontVariantPosition?: csstype.Property.FontVariantPosition | undefined;
            fontVariationSettings?: csstype.Property.FontVariationSettings | undefined;
            fontWeight?: csstype.Property.FontWeight | undefined;
            forcedColorAdjust?: csstype.Property.ForcedColorAdjust | undefined;
            gridAutoColumns?: csstype.Property.GridAutoColumns<string | number> | undefined;
            gridAutoFlow?: csstype.Property.GridAutoFlow | undefined;
            gridAutoRows?: csstype.Property.GridAutoRows<string | number> | undefined;
            gridColumnEnd?: csstype.Property.GridColumnEnd | undefined;
            gridColumnStart?: csstype.Property.GridColumnStart | undefined;
            gridRowEnd?: csstype.Property.GridRowEnd | undefined;
            gridRowStart?: csstype.Property.GridRowStart | undefined;
            gridTemplateAreas?: csstype.Property.GridTemplateAreas | undefined;
            gridTemplateColumns?: csstype.Property.GridTemplateColumns<string | number> | undefined;
            gridTemplateRows?: csstype.Property.GridTemplateRows<string | number> | undefined;
            hangingPunctuation?: csstype.Property.HangingPunctuation | undefined;
            height?: csstype.Property.Height<string | number> | undefined;
            hyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            hyphenateLimitChars?: csstype.Property.HyphenateLimitChars | undefined;
            hyphens?: csstype.Property.Hyphens | undefined;
            imageOrientation?: csstype.Property.ImageOrientation | undefined;
            imageRendering?: csstype.Property.ImageRendering | undefined;
            imageResolution?: csstype.Property.ImageResolution | undefined;
            initialLetter?: csstype.Property.InitialLetter | undefined;
            inlineSize?: csstype.Property.InlineSize<string | number> | undefined;
            inputSecurity?: csstype.Property.InputSecurity | undefined;
            insetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            insetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            insetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            insetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            isolation?: csstype.Property.Isolation | undefined;
            justifyContent?: csstype.Property.JustifyContent | undefined;
            justifyItems?: csstype.Property.JustifyItems | undefined;
            justifySelf?: csstype.Property.JustifySelf | undefined;
            justifyTracks?: csstype.Property.JustifyTracks | undefined;
            left?: csstype.Property.Left<string | number> | undefined;
            letterSpacing?: csstype.Property.LetterSpacing<string | number> | undefined;
            lineBreak?: csstype.Property.LineBreak | undefined;
            lineHeight?: csstype.Property.LineHeight<string | number> | undefined;
            lineHeightStep?: csstype.Property.LineHeightStep<string | number> | undefined;
            listStyleImage?: csstype.Property.ListStyleImage | undefined;
            listStylePosition?: csstype.Property.ListStylePosition | undefined;
            listStyleType?: csstype.Property.ListStyleType | undefined;
            marginBlockEnd?: csstype.Property.MarginBlockEnd<string | number> | undefined;
            marginBlockStart?: csstype.Property.MarginBlockStart<string | number> | undefined;
            marginBottom?: csstype.Property.MarginBottom<string | number> | undefined;
            marginInlineEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            marginInlineStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            marginLeft?: csstype.Property.MarginLeft<string | number> | undefined;
            marginRight?: csstype.Property.MarginRight<string | number> | undefined;
            marginTop?: csstype.Property.MarginTop<string | number> | undefined;
            marginTrim?: csstype.Property.MarginTrim | undefined;
            maskBorderMode?: csstype.Property.MaskBorderMode | undefined;
            maskBorderOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            maskBorderRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            maskBorderSlice?: csstype.Property.MaskBorderSlice | undefined;
            maskBorderSource?: csstype.Property.MaskBorderSource | undefined;
            maskBorderWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            maskClip?: csstype.Property.MaskClip | undefined;
            maskComposite?: csstype.Property.MaskComposite | undefined;
            maskImage?: csstype.Property.MaskImage | undefined;
            maskMode?: csstype.Property.MaskMode | undefined;
            maskOrigin?: csstype.Property.MaskOrigin | undefined;
            maskPosition?: csstype.Property.MaskPosition<string | number> | undefined;
            maskRepeat?: csstype.Property.MaskRepeat | undefined;
            maskSize?: csstype.Property.MaskSize<string | number> | undefined;
            maskType?: csstype.Property.MaskType | undefined;
            masonryAutoFlow?: csstype.Property.MasonryAutoFlow | undefined;
            mathDepth?: csstype.Property.MathDepth | undefined;
            mathShift?: csstype.Property.MathShift | undefined;
            mathStyle?: csstype.Property.MathStyle | undefined;
            maxBlockSize?: csstype.Property.MaxBlockSize<string | number> | undefined;
            maxHeight?: csstype.Property.MaxHeight<string | number> | undefined;
            maxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            maxLines?: csstype.Property.MaxLines | undefined;
            maxWidth?: csstype.Property.MaxWidth<string | number> | undefined;
            minBlockSize?: csstype.Property.MinBlockSize<string | number> | undefined;
            minHeight?: csstype.Property.MinHeight<string | number> | undefined;
            minInlineSize?: csstype.Property.MinInlineSize<string | number> | undefined;
            minWidth?: csstype.Property.MinWidth<string | number> | undefined;
            mixBlendMode?: csstype.Property.MixBlendMode | undefined;
            motionDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            motionPath?: csstype.Property.OffsetPath | undefined;
            motionRotation?: csstype.Property.OffsetRotate | undefined;
            objectFit?: csstype.Property.ObjectFit | undefined;
            objectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            offsetAnchor?: csstype.Property.OffsetAnchor<string | number> | undefined;
            offsetDistance?: csstype.Property.OffsetDistance<string | number> | undefined;
            offsetPath?: csstype.Property.OffsetPath | undefined;
            offsetPosition?: csstype.Property.OffsetPosition<string | number> | undefined;
            offsetRotate?: csstype.Property.OffsetRotate | undefined;
            offsetRotation?: csstype.Property.OffsetRotate | undefined;
            opacity?: csstype.Property.Opacity | undefined;
            order?: csstype.Property.Order | undefined;
            orphans?: csstype.Property.Orphans | undefined;
            outlineColor?: csstype.Property.OutlineColor | undefined;
            outlineOffset?: csstype.Property.OutlineOffset<string | number> | undefined;
            outlineStyle?: csstype.Property.OutlineStyle | undefined;
            outlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            overflowAnchor?: csstype.Property.OverflowAnchor | undefined;
            overflowBlock?: csstype.Property.OverflowBlock | undefined;
            overflowClipBox?: csstype.Property.OverflowClipBox | undefined;
            overflowClipMargin?: csstype.Property.OverflowClipMargin<string | number> | undefined;
            overflowInline?: csstype.Property.OverflowInline | undefined;
            overflowWrap?: csstype.Property.OverflowWrap | undefined;
            overflowX?: csstype.Property.OverflowX | undefined;
            overflowY?: csstype.Property.OverflowY | undefined;
            overlay?: csstype.Property.Overlay | undefined;
            overscrollBehaviorBlock?: csstype.Property.OverscrollBehaviorBlock | undefined;
            overscrollBehaviorInline?: csstype.Property.OverscrollBehaviorInline | undefined;
            overscrollBehaviorX?: csstype.Property.OverscrollBehaviorX | undefined;
            overscrollBehaviorY?: csstype.Property.OverscrollBehaviorY | undefined;
            paddingBlockEnd?: csstype.Property.PaddingBlockEnd<string | number> | undefined;
            paddingBlockStart?: csstype.Property.PaddingBlockStart<string | number> | undefined;
            paddingBottom?: csstype.Property.PaddingBottom<string | number> | undefined;
            paddingInlineEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            paddingInlineStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            paddingLeft?: csstype.Property.PaddingLeft<string | number> | undefined;
            paddingRight?: csstype.Property.PaddingRight<string | number> | undefined;
            paddingTop?: csstype.Property.PaddingTop<string | number> | undefined;
            page?: csstype.Property.Page | undefined;
            pageBreakAfter?: csstype.Property.PageBreakAfter | undefined;
            pageBreakBefore?: csstype.Property.PageBreakBefore | undefined;
            pageBreakInside?: csstype.Property.PageBreakInside | undefined;
            paintOrder?: csstype.Property.PaintOrder | undefined;
            perspective?: csstype.Property.Perspective<string | number> | undefined;
            perspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            pointerEvents?: csstype.Property.PointerEvents | undefined;
            position?: csstype.Property.Position | undefined;
            printColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            quotes?: csstype.Property.Quotes | undefined;
            resize?: csstype.Property.Resize | undefined;
            right?: csstype.Property.Right<string | number> | undefined;
            rotate?: csstype.Property.Rotate | undefined;
            rowGap?: csstype.Property.RowGap<string | number> | undefined;
            rubyAlign?: csstype.Property.RubyAlign | undefined;
            rubyMerge?: csstype.Property.RubyMerge | undefined;
            rubyPosition?: csstype.Property.RubyPosition | undefined;
            scale?: csstype.Property.Scale | undefined;
            scrollBehavior?: csstype.Property.ScrollBehavior | undefined;
            scrollMarginBlockEnd?: csstype.Property.ScrollMarginBlockEnd<string | number> | undefined;
            scrollMarginBlockStart?: csstype.Property.ScrollMarginBlockStart<string | number> | undefined;
            scrollMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollMarginInlineEnd?: csstype.Property.ScrollMarginInlineEnd<string | number> | undefined;
            scrollMarginInlineStart?: csstype.Property.ScrollMarginInlineStart<string | number> | undefined;
            scrollMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollPaddingBlockEnd?: csstype.Property.ScrollPaddingBlockEnd<string | number> | undefined;
            scrollPaddingBlockStart?: csstype.Property.ScrollPaddingBlockStart<string | number> | undefined;
            scrollPaddingBottom?: csstype.Property.ScrollPaddingBottom<string | number> | undefined;
            scrollPaddingInlineEnd?: csstype.Property.ScrollPaddingInlineEnd<string | number> | undefined;
            scrollPaddingInlineStart?: csstype.Property.ScrollPaddingInlineStart<string | number> | undefined;
            scrollPaddingLeft?: csstype.Property.ScrollPaddingLeft<string | number> | undefined;
            scrollPaddingRight?: csstype.Property.ScrollPaddingRight<string | number> | undefined;
            scrollPaddingTop?: csstype.Property.ScrollPaddingTop<string | number> | undefined;
            scrollSnapAlign?: csstype.Property.ScrollSnapAlign | undefined;
            scrollSnapMarginBottom?: csstype.Property.ScrollMarginBottom<string | number> | undefined;
            scrollSnapMarginLeft?: csstype.Property.ScrollMarginLeft<string | number> | undefined;
            scrollSnapMarginRight?: csstype.Property.ScrollMarginRight<string | number> | undefined;
            scrollSnapMarginTop?: csstype.Property.ScrollMarginTop<string | number> | undefined;
            scrollSnapStop?: csstype.Property.ScrollSnapStop | undefined;
            scrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            scrollTimelineAxis?: csstype.Property.ScrollTimelineAxis | undefined;
            scrollTimelineName?: csstype.Property.ScrollTimelineName | undefined;
            scrollbarColor?: csstype.Property.ScrollbarColor | undefined;
            scrollbarGutter?: csstype.Property.ScrollbarGutter | undefined;
            scrollbarWidth?: csstype.Property.ScrollbarWidth | undefined;
            shapeImageThreshold?: csstype.Property.ShapeImageThreshold | undefined;
            shapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            shapeOutside?: csstype.Property.ShapeOutside | undefined;
            tabSize?: csstype.Property.TabSize<string | number> | undefined;
            tableLayout?: csstype.Property.TableLayout | undefined;
            textAlign?: csstype.Property.TextAlign | undefined;
            textAlignLast?: csstype.Property.TextAlignLast | undefined;
            textCombineUpright?: csstype.Property.TextCombineUpright | undefined;
            textDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            textDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            textDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            textDecorationSkipInk?: csstype.Property.TextDecorationSkipInk | undefined;
            textDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            textDecorationThickness?: csstype.Property.TextDecorationThickness<string | number> | undefined;
            textEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            textEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            textEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            textIndent?: csstype.Property.TextIndent<string | number> | undefined;
            textJustify?: csstype.Property.TextJustify | undefined;
            textOrientation?: csstype.Property.TextOrientation | undefined;
            textOverflow?: csstype.Property.TextOverflow | undefined;
            textRendering?: csstype.Property.TextRendering | undefined;
            textShadow?: csstype.Property.TextShadow | undefined;
            textSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            textTransform?: csstype.Property.TextTransform | undefined;
            textUnderlineOffset?: csstype.Property.TextUnderlineOffset<string | number> | undefined;
            textUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            textWrap?: csstype.Property.TextWrap | undefined;
            timelineScope?: csstype.Property.TimelineScope | undefined;
            top?: csstype.Property.Top<string | number> | undefined;
            touchAction?: csstype.Property.TouchAction | undefined;
            transform?: csstype.Property.Transform | undefined;
            transformBox?: csstype.Property.TransformBox | undefined;
            transformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            transformStyle?: csstype.Property.TransformStyle | undefined;
            transitionBehavior?: csstype.Property.TransitionBehavior | undefined;
            transitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            transitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            transitionProperty?: csstype.Property.TransitionProperty | undefined;
            transitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            translate?: csstype.Property.Translate<string | number> | undefined;
            unicodeBidi?: csstype.Property.UnicodeBidi | undefined;
            userSelect?: csstype.Property.UserSelect | undefined;
            verticalAlign?: csstype.Property.VerticalAlign<string | number> | undefined;
            viewTimelineAxis?: csstype.Property.ViewTimelineAxis | undefined;
            viewTimelineInset?: csstype.Property.ViewTimelineInset<string | number> | undefined;
            viewTimelineName?: csstype.Property.ViewTimelineName | undefined;
            viewTransitionName?: csstype.Property.ViewTransitionName | undefined;
            visibility?: csstype.Property.Visibility | undefined;
            whiteSpace?: csstype.Property.WhiteSpace | undefined;
            whiteSpaceCollapse?: csstype.Property.WhiteSpaceCollapse | undefined;
            whiteSpaceTrim?: csstype.Property.WhiteSpaceTrim | undefined;
            widows?: csstype.Property.Widows | undefined;
            width?: csstype.Property.Width<string | number> | undefined;
            willChange?: csstype.Property.WillChange | undefined;
            wordBreak?: csstype.Property.WordBreak | undefined;
            wordSpacing?: csstype.Property.WordSpacing<string | number> | undefined;
            wordWrap?: csstype.Property.WordWrap | undefined;
            writingMode?: csstype.Property.WritingMode | undefined;
            zIndex?: csstype.Property.ZIndex | undefined;
            zoom?: csstype.Property.Zoom | undefined;
            all?: csstype.Property.All | undefined;
            animation?: csstype.Property.Animation<string & {}> | undefined;
            animationRange?: csstype.Property.AnimationRange<string | number> | undefined;
            background?: csstype.Property.Background<string | number> | undefined;
            backgroundPosition?: csstype.Property.BackgroundPosition<string | number> | undefined;
            border?: csstype.Property.Border<string | number> | undefined;
            borderBlock?: csstype.Property.BorderBlock<string | number> | undefined;
            borderBlockEnd?: csstype.Property.BorderBlockEnd<string | number> | undefined;
            borderBlockStart?: csstype.Property.BorderBlockStart<string | number> | undefined;
            borderBottom?: csstype.Property.BorderBottom<string | number> | undefined;
            borderColor?: csstype.Property.BorderColor | undefined;
            borderImage?: csstype.Property.BorderImage | undefined;
            borderInline?: csstype.Property.BorderInline<string | number> | undefined;
            borderInlineEnd?: csstype.Property.BorderInlineEnd<string | number> | undefined;
            borderInlineStart?: csstype.Property.BorderInlineStart<string | number> | undefined;
            borderLeft?: csstype.Property.BorderLeft<string | number> | undefined;
            borderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            borderRight?: csstype.Property.BorderRight<string | number> | undefined;
            borderStyle?: csstype.Property.BorderStyle | undefined;
            borderTop?: csstype.Property.BorderTop<string | number> | undefined;
            borderWidth?: csstype.Property.BorderWidth<string | number> | undefined;
            caret?: csstype.Property.Caret | undefined;
            columnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            columns?: csstype.Property.Columns<string | number> | undefined;
            containIntrinsicSize?: csstype.Property.ContainIntrinsicSize<string | number> | undefined;
            container?: csstype.Property.Container | undefined;
            flex?: csstype.Property.Flex<string | number> | undefined;
            flexFlow?: csstype.Property.FlexFlow | undefined;
            font?: csstype.Property.Font | undefined;
            gap?: csstype.Property.Gap<string | number> | undefined;
            grid?: csstype.Property.Grid | undefined;
            gridArea?: csstype.Property.GridArea | undefined;
            gridColumn?: csstype.Property.GridColumn | undefined;
            gridRow?: csstype.Property.GridRow | undefined;
            gridTemplate?: csstype.Property.GridTemplate | undefined;
            inset?: csstype.Property.Inset<string | number> | undefined;
            insetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            insetInline?: csstype.Property.InsetInline<string | number> | undefined;
            lineClamp?: csstype.Property.LineClamp | undefined;
            listStyle?: csstype.Property.ListStyle | undefined;
            margin?: csstype.Property.Margin<string | number> | undefined;
            marginBlock?: csstype.Property.MarginBlock<string | number> | undefined;
            marginInline?: csstype.Property.MarginInline<string | number> | undefined;
            mask?: csstype.Property.Mask<string | number> | undefined;
            maskBorder?: csstype.Property.MaskBorder | undefined;
            motion?: csstype.Property.Offset<string | number> | undefined;
            offset?: csstype.Property.Offset<string | number> | undefined;
            outline?: csstype.Property.Outline<string | number> | undefined;
            overflow?: csstype.Property.Overflow | undefined;
            overscrollBehavior?: csstype.Property.OverscrollBehavior | undefined;
            padding?: csstype.Property.Padding<string | number> | undefined;
            paddingBlock?: csstype.Property.PaddingBlock<string | number> | undefined;
            paddingInline?: csstype.Property.PaddingInline<string | number> | undefined;
            placeContent?: csstype.Property.PlaceContent | undefined;
            placeItems?: csstype.Property.PlaceItems | undefined;
            placeSelf?: csstype.Property.PlaceSelf | undefined;
            scrollMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollMarginBlock?: csstype.Property.ScrollMarginBlock<string | number> | undefined;
            scrollMarginInline?: csstype.Property.ScrollMarginInline<string | number> | undefined;
            scrollPadding?: csstype.Property.ScrollPadding<string | number> | undefined;
            scrollPaddingBlock?: csstype.Property.ScrollPaddingBlock<string | number> | undefined;
            scrollPaddingInline?: csstype.Property.ScrollPaddingInline<string | number> | undefined;
            scrollSnapMargin?: csstype.Property.ScrollMargin<string | number> | undefined;
            scrollTimeline?: csstype.Property.ScrollTimeline | undefined;
            textDecoration?: csstype.Property.TextDecoration<string | number> | undefined;
            textEmphasis?: csstype.Property.TextEmphasis | undefined;
            transition?: csstype.Property.Transition<string & {}> | undefined;
            viewTimeline?: csstype.Property.ViewTimeline | undefined;
            MozAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            MozAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            MozAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            MozAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            MozAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            MozAnimationName?: csstype.Property.AnimationName | undefined;
            MozAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            MozAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            MozAppearance?: csstype.Property.MozAppearance | undefined;
            MozBinding?: csstype.Property.MozBinding | undefined;
            MozBorderBottomColors?: csstype.Property.MozBorderBottomColors | undefined;
            MozBorderEndColor?: csstype.Property.BorderInlineEndColor | undefined;
            MozBorderEndStyle?: csstype.Property.BorderInlineEndStyle | undefined;
            MozBorderEndWidth?: csstype.Property.BorderInlineEndWidth<string | number> | undefined;
            MozBorderLeftColors?: csstype.Property.MozBorderLeftColors | undefined;
            MozBorderRightColors?: csstype.Property.MozBorderRightColors | undefined;
            MozBorderStartColor?: csstype.Property.BorderInlineStartColor | undefined;
            MozBorderStartStyle?: csstype.Property.BorderInlineStartStyle | undefined;
            MozBorderTopColors?: csstype.Property.MozBorderTopColors | undefined;
            MozBoxSizing?: csstype.Property.BoxSizing | undefined;
            MozColumnCount?: csstype.Property.ColumnCount | undefined;
            MozColumnFill?: csstype.Property.ColumnFill | undefined;
            MozColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            MozColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            MozColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            MozColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            MozContextProperties?: csstype.Property.MozContextProperties | undefined;
            MozFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            MozFontLanguageOverride?: csstype.Property.FontLanguageOverride | undefined;
            MozHyphens?: csstype.Property.Hyphens | undefined;
            MozImageRegion?: csstype.Property.MozImageRegion | undefined;
            MozMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            MozMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            MozOrient?: csstype.Property.MozOrient | undefined;
            MozOsxFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            MozOutlineRadiusBottomleft?: csstype.Property.MozOutlineRadiusBottomleft<string | number> | undefined;
            MozOutlineRadiusBottomright?: csstype.Property.MozOutlineRadiusBottomright<string | number> | undefined;
            MozOutlineRadiusTopleft?: csstype.Property.MozOutlineRadiusTopleft<string | number> | undefined;
            MozOutlineRadiusTopright?: csstype.Property.MozOutlineRadiusTopright<string | number> | undefined;
            MozPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            MozPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            MozStackSizing?: csstype.Property.MozStackSizing | undefined;
            MozTabSize?: csstype.Property.TabSize<string | number> | undefined;
            MozTextBlink?: csstype.Property.MozTextBlink | undefined;
            MozTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            MozUserFocus?: csstype.Property.MozUserFocus | undefined;
            MozUserModify?: csstype.Property.MozUserModify | undefined;
            MozUserSelect?: csstype.Property.UserSelect | undefined;
            MozWindowDragging?: csstype.Property.MozWindowDragging | undefined;
            MozWindowShadow?: csstype.Property.MozWindowShadow | undefined;
            msAccelerator?: csstype.Property.MsAccelerator | undefined;
            msBlockProgression?: csstype.Property.MsBlockProgression | undefined;
            msContentZoomChaining?: csstype.Property.MsContentZoomChaining | undefined;
            msContentZoomLimitMax?: csstype.Property.MsContentZoomLimitMax | undefined;
            msContentZoomLimitMin?: csstype.Property.MsContentZoomLimitMin | undefined;
            msContentZoomSnapPoints?: csstype.Property.MsContentZoomSnapPoints | undefined;
            msContentZoomSnapType?: csstype.Property.MsContentZoomSnapType | undefined;
            msContentZooming?: csstype.Property.MsContentZooming | undefined;
            msFilter?: csstype.Property.MsFilter | undefined;
            msFlexDirection?: csstype.Property.FlexDirection | undefined;
            msFlexPositive?: csstype.Property.FlexGrow | undefined;
            msFlowFrom?: csstype.Property.MsFlowFrom | undefined;
            msFlowInto?: csstype.Property.MsFlowInto | undefined;
            msGridColumns?: csstype.Property.MsGridColumns<string | number> | undefined;
            msGridRows?: csstype.Property.MsGridRows<string | number> | undefined;
            msHighContrastAdjust?: csstype.Property.MsHighContrastAdjust | undefined;
            msHyphenateLimitChars?: csstype.Property.MsHyphenateLimitChars | undefined;
            msHyphenateLimitLines?: csstype.Property.MsHyphenateLimitLines | undefined;
            msHyphenateLimitZone?: csstype.Property.MsHyphenateLimitZone<string | number> | undefined;
            msHyphens?: csstype.Property.Hyphens | undefined;
            msImeAlign?: csstype.Property.MsImeAlign | undefined;
            msLineBreak?: csstype.Property.LineBreak | undefined;
            msOrder?: csstype.Property.Order | undefined;
            msOverflowStyle?: csstype.Property.MsOverflowStyle | undefined;
            msOverflowX?: csstype.Property.OverflowX | undefined;
            msOverflowY?: csstype.Property.OverflowY | undefined;
            msScrollChaining?: csstype.Property.MsScrollChaining | undefined;
            msScrollLimitXMax?: csstype.Property.MsScrollLimitXMax<string | number> | undefined;
            msScrollLimitXMin?: csstype.Property.MsScrollLimitXMin<string | number> | undefined;
            msScrollLimitYMax?: csstype.Property.MsScrollLimitYMax<string | number> | undefined;
            msScrollLimitYMin?: csstype.Property.MsScrollLimitYMin<string | number> | undefined;
            msScrollRails?: csstype.Property.MsScrollRails | undefined;
            msScrollSnapPointsX?: csstype.Property.MsScrollSnapPointsX | undefined;
            msScrollSnapPointsY?: csstype.Property.MsScrollSnapPointsY | undefined;
            msScrollSnapType?: csstype.Property.MsScrollSnapType | undefined;
            msScrollTranslation?: csstype.Property.MsScrollTranslation | undefined;
            msScrollbar3dlightColor?: csstype.Property.MsScrollbar3dlightColor | undefined;
            msScrollbarArrowColor?: csstype.Property.MsScrollbarArrowColor | undefined;
            msScrollbarBaseColor?: csstype.Property.MsScrollbarBaseColor | undefined;
            msScrollbarDarkshadowColor?: csstype.Property.MsScrollbarDarkshadowColor | undefined;
            msScrollbarFaceColor?: csstype.Property.MsScrollbarFaceColor | undefined;
            msScrollbarHighlightColor?: csstype.Property.MsScrollbarHighlightColor | undefined;
            msScrollbarShadowColor?: csstype.Property.MsScrollbarShadowColor | undefined;
            msScrollbarTrackColor?: csstype.Property.MsScrollbarTrackColor | undefined;
            msTextAutospace?: csstype.Property.MsTextAutospace | undefined;
            msTextCombineHorizontal?: csstype.Property.TextCombineUpright | undefined;
            msTextOverflow?: csstype.Property.TextOverflow | undefined;
            msTouchAction?: csstype.Property.TouchAction | undefined;
            msTouchSelect?: csstype.Property.MsTouchSelect | undefined;
            msTransform?: csstype.Property.Transform | undefined;
            msTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            msTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            msTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            msTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            msTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            msUserSelect?: csstype.Property.MsUserSelect | undefined;
            msWordBreak?: csstype.Property.WordBreak | undefined;
            msWrapFlow?: csstype.Property.MsWrapFlow | undefined;
            msWrapMargin?: csstype.Property.MsWrapMargin<string | number> | undefined;
            msWrapThrough?: csstype.Property.MsWrapThrough | undefined;
            msWritingMode?: csstype.Property.WritingMode | undefined;
            WebkitAlignContent?: csstype.Property.AlignContent | undefined;
            WebkitAlignItems?: csstype.Property.AlignItems | undefined;
            WebkitAlignSelf?: csstype.Property.AlignSelf | undefined;
            WebkitAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            WebkitAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            WebkitAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            WebkitAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            WebkitAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            WebkitAnimationName?: csstype.Property.AnimationName | undefined;
            WebkitAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            WebkitAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            WebkitAppearance?: csstype.Property.WebkitAppearance | undefined;
            WebkitBackdropFilter?: csstype.Property.BackdropFilter | undefined;
            WebkitBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            WebkitBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            WebkitBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            WebkitBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            WebkitBorderBeforeColor?: csstype.Property.WebkitBorderBeforeColor | undefined;
            WebkitBorderBeforeStyle?: csstype.Property.WebkitBorderBeforeStyle | undefined;
            WebkitBorderBeforeWidth?: csstype.Property.WebkitBorderBeforeWidth<string | number> | undefined;
            WebkitBorderBottomLeftRadius?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            WebkitBorderBottomRightRadius?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            WebkitBorderImageSlice?: csstype.Property.BorderImageSlice | undefined;
            WebkitBorderTopLeftRadius?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            WebkitBorderTopRightRadius?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            WebkitBoxDecorationBreak?: csstype.Property.BoxDecorationBreak | undefined;
            WebkitBoxReflect?: csstype.Property.WebkitBoxReflect<string | number> | undefined;
            WebkitBoxShadow?: csstype.Property.BoxShadow | undefined;
            WebkitBoxSizing?: csstype.Property.BoxSizing | undefined;
            WebkitClipPath?: csstype.Property.ClipPath | undefined;
            WebkitColumnCount?: csstype.Property.ColumnCount | undefined;
            WebkitColumnFill?: csstype.Property.ColumnFill | undefined;
            WebkitColumnRuleColor?: csstype.Property.ColumnRuleColor | undefined;
            WebkitColumnRuleStyle?: csstype.Property.ColumnRuleStyle | undefined;
            WebkitColumnRuleWidth?: csstype.Property.ColumnRuleWidth<string | number> | undefined;
            WebkitColumnSpan?: csstype.Property.ColumnSpan | undefined;
            WebkitColumnWidth?: csstype.Property.ColumnWidth<string | number> | undefined;
            WebkitFilter?: csstype.Property.Filter | undefined;
            WebkitFlexBasis?: csstype.Property.FlexBasis<string | number> | undefined;
            WebkitFlexDirection?: csstype.Property.FlexDirection | undefined;
            WebkitFlexGrow?: csstype.Property.FlexGrow | undefined;
            WebkitFlexShrink?: csstype.Property.FlexShrink | undefined;
            WebkitFlexWrap?: csstype.Property.FlexWrap | undefined;
            WebkitFontFeatureSettings?: csstype.Property.FontFeatureSettings | undefined;
            WebkitFontKerning?: csstype.Property.FontKerning | undefined;
            WebkitFontSmoothing?: csstype.Property.FontSmooth<string | number> | undefined;
            WebkitFontVariantLigatures?: csstype.Property.FontVariantLigatures | undefined;
            WebkitHyphenateCharacter?: csstype.Property.HyphenateCharacter | undefined;
            WebkitHyphens?: csstype.Property.Hyphens | undefined;
            WebkitInitialLetter?: csstype.Property.InitialLetter | undefined;
            WebkitJustifyContent?: csstype.Property.JustifyContent | undefined;
            WebkitLineBreak?: csstype.Property.LineBreak | undefined;
            WebkitLineClamp?: csstype.Property.WebkitLineClamp | undefined;
            WebkitMarginEnd?: csstype.Property.MarginInlineEnd<string | number> | undefined;
            WebkitMarginStart?: csstype.Property.MarginInlineStart<string | number> | undefined;
            WebkitMaskAttachment?: csstype.Property.WebkitMaskAttachment | undefined;
            WebkitMaskBoxImageOutset?: csstype.Property.MaskBorderOutset<string | number> | undefined;
            WebkitMaskBoxImageRepeat?: csstype.Property.MaskBorderRepeat | undefined;
            WebkitMaskBoxImageSlice?: csstype.Property.MaskBorderSlice | undefined;
            WebkitMaskBoxImageSource?: csstype.Property.MaskBorderSource | undefined;
            WebkitMaskBoxImageWidth?: csstype.Property.MaskBorderWidth<string | number> | undefined;
            WebkitMaskClip?: csstype.Property.WebkitMaskClip | undefined;
            WebkitMaskComposite?: csstype.Property.WebkitMaskComposite | undefined;
            WebkitMaskImage?: csstype.Property.WebkitMaskImage | undefined;
            WebkitMaskOrigin?: csstype.Property.WebkitMaskOrigin | undefined;
            WebkitMaskPosition?: csstype.Property.WebkitMaskPosition<string | number> | undefined;
            WebkitMaskPositionX?: csstype.Property.WebkitMaskPositionX<string | number> | undefined;
            WebkitMaskPositionY?: csstype.Property.WebkitMaskPositionY<string | number> | undefined;
            WebkitMaskRepeat?: csstype.Property.WebkitMaskRepeat | undefined;
            WebkitMaskRepeatX?: csstype.Property.WebkitMaskRepeatX | undefined;
            WebkitMaskRepeatY?: csstype.Property.WebkitMaskRepeatY | undefined;
            WebkitMaskSize?: csstype.Property.WebkitMaskSize<string | number> | undefined;
            WebkitMaxInlineSize?: csstype.Property.MaxInlineSize<string | number> | undefined;
            WebkitOrder?: csstype.Property.Order | undefined;
            WebkitOverflowScrolling?: csstype.Property.WebkitOverflowScrolling | undefined;
            WebkitPaddingEnd?: csstype.Property.PaddingInlineEnd<string | number> | undefined;
            WebkitPaddingStart?: csstype.Property.PaddingInlineStart<string | number> | undefined;
            WebkitPerspective?: csstype.Property.Perspective<string | number> | undefined;
            WebkitPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            WebkitPrintColorAdjust?: csstype.Property.PrintColorAdjust | undefined;
            WebkitRubyPosition?: csstype.Property.RubyPosition | undefined;
            WebkitScrollSnapType?: csstype.Property.ScrollSnapType | undefined;
            WebkitShapeMargin?: csstype.Property.ShapeMargin<string | number> | undefined;
            WebkitTapHighlightColor?: csstype.Property.WebkitTapHighlightColor | undefined;
            WebkitTextCombine?: csstype.Property.TextCombineUpright | undefined;
            WebkitTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            WebkitTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            WebkitTextDecorationSkip?: csstype.Property.TextDecorationSkip | undefined;
            WebkitTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            WebkitTextEmphasisColor?: csstype.Property.TextEmphasisColor | undefined;
            WebkitTextEmphasisPosition?: csstype.Property.TextEmphasisPosition | undefined;
            WebkitTextEmphasisStyle?: csstype.Property.TextEmphasisStyle | undefined;
            WebkitTextFillColor?: csstype.Property.WebkitTextFillColor | undefined;
            WebkitTextOrientation?: csstype.Property.TextOrientation | undefined;
            WebkitTextSizeAdjust?: csstype.Property.TextSizeAdjust | undefined;
            WebkitTextStrokeColor?: csstype.Property.WebkitTextStrokeColor | undefined;
            WebkitTextStrokeWidth?: csstype.Property.WebkitTextStrokeWidth<string | number> | undefined;
            WebkitTextUnderlinePosition?: csstype.Property.TextUnderlinePosition | undefined;
            WebkitTouchCallout?: csstype.Property.WebkitTouchCallout | undefined;
            WebkitTransform?: csstype.Property.Transform | undefined;
            WebkitTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            WebkitTransformStyle?: csstype.Property.TransformStyle | undefined;
            WebkitTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            WebkitTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            WebkitTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            WebkitTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitUserModify?: csstype.Property.WebkitUserModify | undefined;
            WebkitUserSelect?: csstype.Property.UserSelect | undefined;
            WebkitWritingMode?: csstype.Property.WritingMode | undefined;
            MozAnimation?: csstype.Property.Animation<string & {}> | undefined;
            MozBorderImage?: csstype.Property.BorderImage | undefined;
            MozColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            MozColumns?: csstype.Property.Columns<string | number> | undefined;
            MozOutlineRadius?: csstype.Property.MozOutlineRadius<string | number> | undefined;
            msContentZoomLimit?: csstype.Property.MsContentZoomLimit | undefined;
            msContentZoomSnap?: csstype.Property.MsContentZoomSnap | undefined;
            msFlex?: csstype.Property.Flex<string | number> | undefined;
            msScrollLimit?: csstype.Property.MsScrollLimit | undefined;
            msScrollSnapX?: csstype.Property.MsScrollSnapX | undefined;
            msScrollSnapY?: csstype.Property.MsScrollSnapY | undefined;
            msTransition?: csstype.Property.Transition<string & {}> | undefined;
            WebkitAnimation?: csstype.Property.Animation<string & {}> | undefined;
            WebkitBorderBefore?: csstype.Property.WebkitBorderBefore<string | number> | undefined;
            WebkitBorderImage?: csstype.Property.BorderImage | undefined;
            WebkitBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            WebkitColumnRule?: csstype.Property.ColumnRule<string | number> | undefined;
            WebkitColumns?: csstype.Property.Columns<string | number> | undefined;
            WebkitFlex?: csstype.Property.Flex<string | number> | undefined;
            WebkitFlexFlow?: csstype.Property.FlexFlow | undefined;
            WebkitMask?: csstype.Property.WebkitMask<string | number> | undefined;
            WebkitMaskBoxImage?: csstype.Property.MaskBorder | undefined;
            WebkitTextEmphasis?: csstype.Property.TextEmphasis | undefined;
            WebkitTextStroke?: csstype.Property.WebkitTextStroke<string | number> | undefined;
            WebkitTransition?: csstype.Property.Transition<string & {}> | undefined;
            azimuth?: csstype.Property.Azimuth | undefined;
            boxAlign?: csstype.Property.BoxAlign | undefined;
            boxDirection?: csstype.Property.BoxDirection | undefined;
            boxFlex?: csstype.Property.BoxFlex | undefined;
            boxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            boxLines?: csstype.Property.BoxLines | undefined;
            boxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            boxOrient?: csstype.Property.BoxOrient | undefined;
            boxPack?: csstype.Property.BoxPack | undefined;
            clip?: csstype.Property.Clip | undefined;
            gridColumnGap?: csstype.Property.GridColumnGap<string | number> | undefined;
            gridGap?: csstype.Property.GridGap<string | number> | undefined;
            gridRowGap?: csstype.Property.GridRowGap<string | number> | undefined;
            imeMode?: csstype.Property.ImeMode | undefined;
            offsetBlock?: csstype.Property.InsetBlock<string | number> | undefined;
            offsetBlockEnd?: csstype.Property.InsetBlockEnd<string | number> | undefined;
            offsetBlockStart?: csstype.Property.InsetBlockStart<string | number> | undefined;
            offsetInline?: csstype.Property.InsetInline<string | number> | undefined;
            offsetInlineEnd?: csstype.Property.InsetInlineEnd<string | number> | undefined;
            offsetInlineStart?: csstype.Property.InsetInlineStart<string | number> | undefined;
            scrollSnapCoordinate?: csstype.Property.ScrollSnapCoordinate<string | number> | undefined;
            scrollSnapDestination?: csstype.Property.ScrollSnapDestination<string | number> | undefined;
            scrollSnapPointsX?: csstype.Property.ScrollSnapPointsX | undefined;
            scrollSnapPointsY?: csstype.Property.ScrollSnapPointsY | undefined;
            scrollSnapTypeX?: csstype.Property.ScrollSnapTypeX | undefined;
            scrollSnapTypeY?: csstype.Property.ScrollSnapTypeY | undefined;
            KhtmlBoxAlign?: csstype.Property.BoxAlign | undefined;
            KhtmlBoxDirection?: csstype.Property.BoxDirection | undefined;
            KhtmlBoxFlex?: csstype.Property.BoxFlex | undefined;
            KhtmlBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            KhtmlBoxLines?: csstype.Property.BoxLines | undefined;
            KhtmlBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            KhtmlBoxOrient?: csstype.Property.BoxOrient | undefined;
            KhtmlBoxPack?: csstype.Property.BoxPack | undefined;
            KhtmlLineBreak?: csstype.Property.LineBreak | undefined;
            KhtmlOpacity?: csstype.Property.Opacity | undefined;
            KhtmlUserSelect?: csstype.Property.UserSelect | undefined;
            MozBackfaceVisibility?: csstype.Property.BackfaceVisibility | undefined;
            MozBackgroundClip?: csstype.Property.BackgroundClip | undefined;
            MozBackgroundInlinePolicy?: csstype.Property.BoxDecorationBreak | undefined;
            MozBackgroundOrigin?: csstype.Property.BackgroundOrigin | undefined;
            MozBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            MozBorderRadius?: csstype.Property.BorderRadius<string | number> | undefined;
            MozBorderRadiusBottomleft?: csstype.Property.BorderBottomLeftRadius<string | number> | undefined;
            MozBorderRadiusBottomright?: csstype.Property.BorderBottomRightRadius<string | number> | undefined;
            MozBorderRadiusTopleft?: csstype.Property.BorderTopLeftRadius<string | number> | undefined;
            MozBorderRadiusTopright?: csstype.Property.BorderTopRightRadius<string | number> | undefined;
            MozBoxAlign?: csstype.Property.BoxAlign | undefined;
            MozBoxDirection?: csstype.Property.BoxDirection | undefined;
            MozBoxFlex?: csstype.Property.BoxFlex | undefined;
            MozBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            MozBoxOrient?: csstype.Property.BoxOrient | undefined;
            MozBoxPack?: csstype.Property.BoxPack | undefined;
            MozBoxShadow?: csstype.Property.BoxShadow | undefined;
            MozFloatEdge?: csstype.Property.MozFloatEdge | undefined;
            MozForceBrokenImageIcon?: csstype.Property.MozForceBrokenImageIcon | undefined;
            MozOpacity?: csstype.Property.Opacity | undefined;
            MozOutline?: csstype.Property.Outline<string | number> | undefined;
            MozOutlineColor?: csstype.Property.OutlineColor | undefined;
            MozOutlineStyle?: csstype.Property.OutlineStyle | undefined;
            MozOutlineWidth?: csstype.Property.OutlineWidth<string | number> | undefined;
            MozPerspective?: csstype.Property.Perspective<string | number> | undefined;
            MozPerspectiveOrigin?: csstype.Property.PerspectiveOrigin<string | number> | undefined;
            MozTextAlignLast?: csstype.Property.TextAlignLast | undefined;
            MozTextDecorationColor?: csstype.Property.TextDecorationColor | undefined;
            MozTextDecorationLine?: csstype.Property.TextDecorationLine | undefined;
            MozTextDecorationStyle?: csstype.Property.TextDecorationStyle | undefined;
            MozTransform?: csstype.Property.Transform | undefined;
            MozTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            MozTransformStyle?: csstype.Property.TransformStyle | undefined;
            MozTransition?: csstype.Property.Transition<string & {}> | undefined;
            MozTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            MozTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            MozTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            MozTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            MozUserInput?: csstype.Property.MozUserInput | undefined;
            msImeMode?: csstype.Property.ImeMode | undefined;
            OAnimation?: csstype.Property.Animation<string & {}> | undefined;
            OAnimationDelay?: csstype.Property.AnimationDelay<string & {}> | undefined;
            OAnimationDirection?: csstype.Property.AnimationDirection | undefined;
            OAnimationDuration?: csstype.Property.AnimationDuration<string & {}> | undefined;
            OAnimationFillMode?: csstype.Property.AnimationFillMode | undefined;
            OAnimationIterationCount?: csstype.Property.AnimationIterationCount | undefined;
            OAnimationName?: csstype.Property.AnimationName | undefined;
            OAnimationPlayState?: csstype.Property.AnimationPlayState | undefined;
            OAnimationTimingFunction?: csstype.Property.AnimationTimingFunction | undefined;
            OBackgroundSize?: csstype.Property.BackgroundSize<string | number> | undefined;
            OBorderImage?: csstype.Property.BorderImage | undefined;
            OObjectFit?: csstype.Property.ObjectFit | undefined;
            OObjectPosition?: csstype.Property.ObjectPosition<string | number> | undefined;
            OTabSize?: csstype.Property.TabSize<string | number> | undefined;
            OTextOverflow?: csstype.Property.TextOverflow | undefined;
            OTransform?: csstype.Property.Transform | undefined;
            OTransformOrigin?: csstype.Property.TransformOrigin<string | number> | undefined;
            OTransition?: csstype.Property.Transition<string & {}> | undefined;
            OTransitionDelay?: csstype.Property.TransitionDelay<string & {}> | undefined;
            OTransitionDuration?: csstype.Property.TransitionDuration<string & {}> | undefined;
            OTransitionProperty?: csstype.Property.TransitionProperty | undefined;
            OTransitionTimingFunction?: csstype.Property.TransitionTimingFunction | undefined;
            WebkitBoxAlign?: csstype.Property.BoxAlign | undefined;
            WebkitBoxDirection?: csstype.Property.BoxDirection | undefined;
            WebkitBoxFlex?: csstype.Property.BoxFlex | undefined;
            WebkitBoxFlexGroup?: csstype.Property.BoxFlexGroup | undefined;
            WebkitBoxLines?: csstype.Property.BoxLines | undefined;
            WebkitBoxOrdinalGroup?: csstype.Property.BoxOrdinalGroup | undefined;
            WebkitBoxOrient?: csstype.Property.BoxOrient | undefined;
            WebkitBoxPack?: csstype.Property.BoxPack | undefined;
            alignmentBaseline?: csstype.Property.AlignmentBaseline | undefined;
            baselineShift?: csstype.Property.BaselineShift<string | number> | undefined;
            clipRule?: csstype.Property.ClipRule | undefined;
            colorInterpolation?: csstype.Property.ColorInterpolation | undefined;
            colorRendering?: csstype.Property.ColorRendering | undefined;
            dominantBaseline?: csstype.Property.DominantBaseline | undefined;
            fill?: csstype.Property.Fill | undefined;
            fillOpacity?: csstype.Property.FillOpacity | undefined;
            fillRule?: csstype.Property.FillRule | undefined;
            floodColor?: csstype.Property.FloodColor | undefined;
            floodOpacity?: csstype.Property.FloodOpacity | undefined;
            glyphOrientationVertical?: csstype.Property.GlyphOrientationVertical | undefined;
            lightingColor?: csstype.Property.LightingColor | undefined;
            marker?: csstype.Property.Marker | undefined;
            markerEnd?: csstype.Property.MarkerEnd | undefined;
            markerMid?: csstype.Property.MarkerMid | undefined;
            markerStart?: csstype.Property.MarkerStart | undefined;
            shapeRendering?: csstype.Property.ShapeRendering | undefined;
            stopColor?: csstype.Property.StopColor | undefined;
            stopOpacity?: csstype.Property.StopOpacity | undefined;
            stroke?: csstype.Property.Stroke | undefined;
            strokeDasharray?: csstype.Property.StrokeDasharray<string | number> | undefined;
            strokeDashoffset?: csstype.Property.StrokeDashoffset<string | number> | undefined;
            strokeLinecap?: csstype.Property.StrokeLinecap | undefined;
            strokeLinejoin?: csstype.Property.StrokeLinejoin | undefined;
            strokeMiterlimit?: csstype.Property.StrokeMiterlimit | undefined;
            strokeOpacity?: csstype.Property.StrokeOpacity | undefined;
            strokeWidth?: csstype.Property.StrokeWidth<string | number> | undefined;
            textAnchor?: csstype.Property.TextAnchor | undefined;
            vectorEffect?: csstype.Property.VectorEffect | undefined;
            '--navbar-height': string | number;
        };
        animate?: framer_motion.AnimationControls | framer_motion.TargetAndTransition | framer_motion.VariantLabels | boolean;
        onDrag?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragEnd?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onDragStart?: ((event: MouseEvent | TouchEvent | PointerEvent, info: framer_motion.PanInfo) => void) | undefined;
        onAnimationStart?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
        variants?: framer_motion.Variants;
        initial?: boolean | framer_motion.Target | framer_motion.VariantLabels;
        onAnimationComplete?: ((definition: framer_motion.AnimationDefinition) => void) | undefined;
    };
};

declare const Navbar: _chakra_ui_react.ComponentWithAs<"div", NavbarProps>;

interface NavbarLinkProps extends HTMLChakraProps<'a'> {
    children?: React.ReactNode;
    /**
     * Whether the link is active or not.
     * @default false
     */
    isActive?: boolean;
}
declare const NavbarLink: _chakra_ui_react.ComponentWithAs<"li", NavbarLinkProps>;

interface SidebarOptions {
    /**
     * Spacing between child elements.
     */
    spacing?: SystemProps['margin'];
    /**
     * Define the for the mobile nav. Use `false` to disable the mobile nav.
     *
     * @default "lg"
     */
    toggleBreakpoint?: false | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /**
     * Control the visibility of the sidebar.
     */
    isOpen?: boolean;
    /**
     * Callback invoked when the sidebar is opened.
     */
    onOpen?: () => void;
    /**
     * Callback invoked when the sidebar is closed.
     */
    onClose?: () => void;
    /**
     * The transition used when opening and closing the sidebar.
     */
    motionPreset?: 'slideInOut' | 'none';
}
interface SidebarProps extends SidebarOptions, Pick<HTMLMotionProps<'div'>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'>, Omit<HTMLChakraProps<'div'>, 'css' | 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'>, ThemingProps<'SuiSidebar'> {
}
interface SidebarToggleButtonProps extends Omit<IconButtonProps, 'aria-label' | 'icon'> {
    icon?: MaybeRenderProp<{
        isOpen: boolean;
    }>;
}
interface SidebarSectionProps extends HTMLChakraProps<'div'> {
    direction?: SystemProps['flexDirection'];
}
interface SidebarOverlayProps extends ChakraProps {
}

/**
 * Side navigation, commonly used as the primary navigation
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const Sidebar: _chakra_ui_react.ComponentWithAs<"nav", SidebarProps>;
/**
 * Button that toggles the sidebar visibility.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const SidebarToggleButton: React$1.FC<SidebarToggleButtonProps>;
/**
 * Overlay shown when sidebar is open on mobile.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const SidebarOverlay: React$1.FC<SidebarOverlayProps>;
/**
 * Sidebar section that can contain sidebar items.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const SidebarSection: React$1.FC<SidebarSectionProps>;

interface NavProps extends HTMLChakraProps<'nav'> {
    orientation?: 'vertical' | 'horizontal';
    spacing?: StackProps['spacing'];
}
declare const Nav: React$1.FC<NavProps>;

interface NavGroupTitleProps extends HTMLChakraProps<'div'> {
    leftIcon?: React$1.ReactElement;
    collapseIcon?: MaybeRenderProp<{
        isOpen: boolean;
    }>;
    isCollapsible?: boolean;
}
declare const NavGroupTitle: React$1.FC<NavGroupTitleProps>;
interface NavGroupProps extends Omit<HTMLChakraProps<'div'>, 'title'>, ThemingProps<'SuiNavGroup'> {
    title?: React$1.ReactNode;
    isCollapsible?: boolean;
    defaultIsOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    icon?: React$1.ReactElement;
}
declare const NavGroupContent: React$1.FC<HTMLChakraProps<'div'>>;
/**
 * Navigation group containing nav items, used in Sidebar.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const NavGroup: React$1.FC<NavGroupProps>;

interface NavItemLabelProps extends HTMLChakraProps<'span'> {
}
declare const NavItemLabel: _chakra_ui_react.ComponentWithAs<"span", NavItemLabelProps>;
interface NavItemProps extends HTMLChakraProps<'a'>, ThemingProps<'SuiNavItem'> {
    /**
     * The href attribute of the nav item,
     * will be wrapped in a `Link`, if `linkComponent` is configured in SaasProvider.
     */
    href?: string;
    /**
     * Icon to be displayed in the nav item
     */
    icon?: React$1.ReactElement;
    /**
     * Inset of the item, used for nested items
     */
    inset?: SystemProps['paddingLeft'];
    /**
     * Props to be passed to the tooltip
     * @see Docs https://chakra-ui.com/docs/overlay/tooltip
     */
    tooltipProps?: Omit<TooltipProps, 'children'>;
    /**
     * If `true`, the nav item will be active
     */
    isActive?: boolean;
}
/**
 * Navigation item used in the sidebar.
 *
 * @see Docs https://saas-ui.dev/docs/components/layout/sidebar
 */
declare const NavItem: _chakra_ui_react.ComponentWithAs<"a", NavItemProps>;

declare const NavGroupStylesProvider: React$1.Provider<Record<string, SystemStyleObject>>;
declare const useNavGroupStyles: () => Record<string, SystemStyleObject>;
declare const NavItemStylesProvider: React$1.Provider<Record<string, SystemStyleObject>>;
declare const useNavItemStyles: () => Record<string, SystemStyleObject>;

declare const SidebarStylesProvider: React$1.Provider<Record<string, SystemStyleObject>>;
declare const useSidebarStyles: () => Record<string, SystemStyleObject>;

type Variants = 'compact' | 'default';
interface UseSidebarReturn extends UseDisclosureReturn {
    isMobile?: boolean;
    breakpoints?: ResponsiveValue<boolean>;
    variant?: 'Sidebar' extends keyof ThemeTypings['components'] ? ThemeTypings['components']['Sidebar']['variants'] : Variants;
    size?: 'Sidebar' extends keyof ThemeTypings['components'] ? ThemeTypings['components']['Sidebar']['sizes'] : string;
}
declare const SidebarProvider: React$1.Provider<UseSidebarReturn>;
declare const useSidebarContext: () => UseSidebarReturn;
declare const useSidebarToggleButton: () => {
    isOpen: boolean;
    isMobile: boolean | undefined;
    getButtonProps: PropGetter;
};

interface SearchInputProps extends ThemingProps<'SuiSearchInput'>, Omit<InputProps, 'size' | 'variant'> {
    /**
     * The placeholder text for the input
     * @type string
     * @default Search
     */
    placeholder?: string;
    /**
     * The icon to render before the input text
     * @type React.ReactElement
     */
    icon?: React$1.ReactElement;
    /**
     * The icon to render in the reset button
     * @type React.ReactElement
     */
    resetIcon?: React$1.ReactElement;
    /**
     * Right element rendered when the value is empty
     * @type React.ReactElement
     */
    rightElement?: React$1.ReactElement;
    /**
     * Callback to trigger when the reset button is clicked or escape key is pressed
     */
    onReset?: () => void;
}
declare const SearchInput: _chakra_ui_react.ComponentWithAs<"input", SearchInputProps>;

interface SnackbarProps extends Omit<AlertProps, 'id' | 'title' | 'position'> {
    id?: ToastId;
    title?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    action?: React$1.ReactNode;
    description?: React$1.ReactNode;
    position?: ToastPosition;
    isClosable?: boolean;
    onClose?: () => void;
}
declare const Snackbar: React$1.FC<SnackbarProps>;
interface UseSnackbarOptions extends UseToastOptions {
    icon?: React$1.ReactNode;
    action?: React$1.ReactNode;
    variant?: 'snackbar' | 'subtle' | 'solid' | 'left-accent' | 'top-accent' | string;
}
type SnackbarOptions = UseSnackbarOptions | string;
interface SnackbarPromiseOptions {
    loading?: SnackbarOptions;
    success: SnackbarOptions | ((data: any) => SnackbarOptions);
    error: SnackbarOptions | ((error: any) => SnackbarOptions);
}
type UseSnackbarReturn = Omit<CreateToastFnReturn, 'promise'> & {
    info: (options: SnackbarOptions) => ToastId;
    success: (options: SnackbarOptions) => ToastId;
    error: (options: SnackbarOptions) => ToastId;
    promise: (promise: Promise<unknown>, options: SnackbarPromiseOptions) => Promise<unknown>;
};
/**
 * The snackbar component is used to give feedback after certain actions.
 *
 * @see Docs https://saas-ui.dev/docs/components/feedback/snackbar
 */
declare function useSnackbar(defaultOptions?: UseSnackbarOptions): UseSnackbarReturn;

type CreateStandAloneSnackbarReturn = {
    snackbar: CreateStandaloneToastReturn['toast'];
    SnackbarContainer: CreateStandaloneToastReturn['ToastContainer'];
};
declare const createStandAloneSnackbar: (options: CreateStandAloneToastParam) => CreateStandAloneSnackbarReturn;

interface StepsProps extends Omit<HTMLChakraProps<'div'>, 'onChange'>, ThemingProps<'Stepper'> {
    /**
     * The orientation of the stepper.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * The current step index or name.
     */
    step?: number | string;
    /**
     * The current step index.
     */
    index?: number;
    /**
     * Callback invoked when the step changes.
     */
    onChange?: (index: number) => void;
    /**
     * Props to pass to the stepper component.
     *
     * @see Docs https://chakra-ui.com/docs/feedback/stepper#props
     */
    stepperProps?: StepperProps;
}
/**
 * Wrapper element containing the steps.
 */
declare const Steps: _chakra_ui_react.ComponentWithAs<"div", StepsProps>;
interface StepsItemProps extends Omit<HTMLChakraProps<'div'>, 'title'> {
    /**
     * Custom render function
     */
    render?: (props?: any) => React$1.ReactElement;
    /**
     * The step name
     */
    name?: string;
    /**
     * The step title
     */
    title: React$1.ReactNode;
    /**
     * The step description
     */
    description?: React$1.ReactNode;
    /**
     * Show an icon instead of the step number
     */
    icon?: React$1.ReactNode;
    /**
     * Show the step as active
     */
    isActive?: boolean;
    /**
     * Show the step as completed
     */
    isCompleted?: boolean;
}
declare const StepsItem: React$1.FC<StepsItemProps>;
interface StepperContentProps extends HTMLChakraProps<'div'> {
    /**
     * Show or hide the content, only when orientation is vertical.
     */
    isOpen?: boolean;
    /**
     * The orientation of the stepper.
     */
    orientation?: 'horizontal' | 'vertical';
}
/**
 * Renders the step content, is collapsible.
 */
declare const StepsContent: React$1.FC<StepperContentProps>;
/**
 * Shown when all steps have completed.
 */
declare const StepsCompleted: React$1.FC<HTMLChakraProps<'div'>>;

declare const StepperProvider: React$1.Provider<{
    stepsRef: React$1.MutableRefObject<string[]>;
    activeStep: string;
    activeIndex: number;
    isFirstStep: boolean;
    isLastStep: boolean;
    isCompleted: boolean;
    setIndex: React$1.Dispatch<React$1.SetStateAction<number>>;
    setStep: (name: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    registerStep: (name: string) => void;
    unregisterStep: (name: string) => void;
}>;
declare const useStepperContext: () => {
    stepsRef: React$1.MutableRefObject<string[]>;
    activeStep: string;
    activeIndex: number;
    isFirstStep: boolean;
    isLastStep: boolean;
    isCompleted: boolean;
    setIndex: React$1.Dispatch<React$1.SetStateAction<number>>;
    setStep: (name: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    registerStep: (name: string) => void;
    unregisterStep: (name: string) => void;
};
interface UseStepperProps {
    step?: number | string;
    isCompleted?: boolean;
    onChange?(index: number): void;
}
declare function useStepper(props: UseStepperProps): {
    stepsRef: React$1.MutableRefObject<string[]>;
    activeStep: string;
    activeIndex: number;
    isFirstStep: boolean;
    isLastStep: boolean;
    isCompleted: boolean;
    setIndex: React$1.Dispatch<React$1.SetStateAction<number>>;
    setStep: (name: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    registerStep: (name: string) => void;
    unregisterStep: (name: string) => void;
};
type UseStepperReturn = ReturnType<typeof useStepper>;
interface UseStepProps {
    name?: string;
    isActive?: boolean;
    isCompleted?: boolean;
}
declare function useStep(props: UseStepProps): {
    isActive: boolean | undefined;
    isCompleted: boolean | undefined;
};
/**
 * Returns props for a Prev Button
 */
declare function useStepperPrevButton({ label }?: {
    label?: string | undefined;
}): {
    isDisabled: boolean;
    onClick: () => void;
    children: string;
};
/**
 * Returns props for a Next Button
 */
declare function useStepperNextButton({ label, submitLabel, }?: {
    label?: string | undefined;
    submitLabel?: string | undefined;
}): {
    isDisabled: boolean;
    onClick: () => void;
    children: string;
};

interface Web3AddressProps extends HTMLChakraProps<'span'> {
    address: string;
    startLength?: number;
    endLength?: number;
}
/**
 * Display Web3 addresses in a more readable format.
 *
 * @see Docs https://saas-ui.dev/docs/components/web3/address
 */
declare const Web3Address: React$1.FC<Web3AddressProps>;

declare const useTimelineStyles: () => Record<string, _chakra_ui_styled_system.SystemStyleObject>;
interface TimelineProps extends HTMLChakraProps<'ul'>, ThemingProps<'SuiTimeline'> {
}
/**
 * Display a list of events in chronological order.
 *
 * @see Docs https://saas-ui.dev/docs/components/data-display/timeline
 */
declare const Timeline: React__default.FC<TimelineProps>;
interface TimelineItemProps extends HTMLChakraProps<'li'> {
}
declare const TimelineItem: _chakra_ui_react.ComponentWithAs<"li", TimelineItemProps>;
interface TimelineContentProps extends HTMLChakraProps<'div'> {
}
declare const TimelineContent: React__default.FC<TimelineContentProps>;
interface TimelineSeparatorProps extends HTMLChakraProps<'div'> {
}
declare const TimelineSeparator: React__default.FC<TimelineSeparatorProps>;
interface TimelineDotProps extends HTMLChakraProps<'div'> {
}
declare const TimelineDot: React__default.FC<TimelineDotProps>;
interface TimelineIconProps extends HTMLChakraProps<'div'> {
}
declare const TimelineIcon: React__default.FC<TimelineIconProps>;
interface TimelineTrackProps extends HTMLChakraProps<'div'> {
}
declare const TimelineTrack: React__default.FC<TimelineTrackProps>;

interface CreateIconOptions {
    /**
     * The icon `svg` viewBox
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /**
     * The `svg` path or group element
     * @type React.ReactElement | React.ReactElement[]
     */
    path?: React.ReactElement | React.ReactElement[];
    /**
     * If the `svg` has a single path, simply copy the path's `d` attribute
     */
    d?: string;
    /**
     * The display name useful in the dev tools
     */
    displayName?: string;
    /**
     * Default props automatically passed to the component; overwriteable
     */
    defaultProps?: IconProps;
}
declare const createIcon: (props: CreateIconOptions) => _chakra_ui_react.ComponentWithAs<"svg", IconProps>;

interface IconBadgeProps extends IconProps, ThemingProps<'SuiIconBadge'> {
    /**
     * The icon to be used in the button.
     * @type React.ReactElement
     */
    icon?: React.ReactElement;
    /**
     * If `true`, the badge will be perfectly round. Else, it'll be slightly round
     *
     * @default false
     */
    isRound?: boolean;
    /**
     * A11y: A label that describes the icon
     */
    'aria-label'?: string;
}
declare const IconBadge: _chakra_ui_react.ComponentWithAs<"div", IconBadgeProps>;

export { AppShell, type AppShellProps, Banner, BannerActions, type BannerActionsProps, BannerCloseButton, BannerContent, type BannerContentProps, BannerDescription, type BannerDescriptionProps, BannerIcon, type BannerIconProps, type BannerProps, type BannerStatus, BannerTitle, type BannerTitleProps, Br, CollapseProvider, Command, ContextMenu, ContextMenuItem, ContextMenuList, type ContextMenuListProps, type ContextMenuProps, ContextMenuProvider, ContextMenuTrigger, type ContextMenuTriggerProps, EmptyState, EmptyStateActions, EmptyStateBody, type EmptyStateBodyProps, EmptyStateContainer, type EmptyStateContainerProps, EmptyStateDescription, EmptyStateFooter, EmptyStateIcon, type EmptyStateProps, EmptyStateTitle, ErrorBoundary, type ErrorBoundaryProps, type ErrorBoundaryState, IconBadge, type IconBadgeProps, Link, LoadingOverlay, type LoadingOverlayProps, LoadingSpinner, type LoadingSpinnerProps, LoadingText, type LoadingTextProps, Nav, NavGroup, NavGroupContent, type NavGroupProps, NavGroupStylesProvider, NavGroupTitle, type NavGroupTitleProps, NavItem, NavItemLabel, type NavItemLabelProps, type NavItemProps, NavItemStylesProvider, type NavProps, Navbar, NavbarBrand, type NavbarBrandProps, NavbarContent, type NavbarContentProps, NavbarItem, type NavbarItemProps, NavbarLink, type NavbarProps, NavbarProvider, OverflowMenu, type OverflowMenuProps, Persona, PersonaAvatar, PersonaContainer, type PersonaContainerProps, PersonaDetails, PersonaLabel, type PersonaProps, PersonaSecondaryLabel, PersonaTertiaryLabel, Presence, type PresenceOptions, Property, PropertyLabel, type PropertyLabelProps, PropertyList, type PropertyListProps, type PropertyProps, PropertyValue, type PropertyValueProps, SaasContext, type SaasContextValue, SaasProvider, type SaasProviderProps, SearchInput, type SearchInputProps, Sidebar, type SidebarOptions, SidebarOverlay, type SidebarOverlayProps, type SidebarProps, SidebarProvider, SidebarSection, type SidebarSectionProps, SidebarStylesProvider, SidebarToggleButton, type SidebarToggleButtonProps, Snackbar, type SnackbarOptions, type SnackbarPromiseOptions, type StepperContentProps, StepperProvider, Steps, StepsCompleted, StepsContent, StepsItem, type StepsItemProps, type StepsProps, StructuredList, StructuredListButton, type StructuredListButtonProps, StructuredListCell, type StructuredListCellProps, StructuredListHeader, type StructuredListHeaderProps, StructuredListIcon, type StructuredListIconProps, StructuredListItem, type StructuredListItemProps, type StructuredListProps, Timeline, TimelineContent, type TimelineContentProps, TimelineDot, type TimelineDotProps, TimelineIcon, type TimelineIconProps, TimelineItem, type TimelineItemProps, type TimelineProps, TimelineSeparator, type TimelineSeparatorProps, TimelineTrack, type TimelineTrackProps, type UseCollapse, type UseCollapseReturn, type UseContextMenuProps, type UseContextMenuReturn, type UseSidebarReturn, type UseSnackbarOptions, type UseSnackbarReturn, type UseStepProps, type UseStepperProps, type UseStepperReturn, Web3Address, type Web3AddressProps, createIcon, createStandAloneSnackbar, defaultPresenceTokens, useCollapse, useCollapseContext, useContextMenu, useContextMenuContext, useEmptyStateStyles, useLink, useNavGroupStyles, useNavItemStyles, useNavbar, useNavbarContext, useSaas, useSidebarContext, useSidebarStyles, useSidebarToggleButton, useSnackbar, useStep, useStepper, useStepperContext, useStepperNextButton, useStepperPrevButton, useTimelineStyles };
