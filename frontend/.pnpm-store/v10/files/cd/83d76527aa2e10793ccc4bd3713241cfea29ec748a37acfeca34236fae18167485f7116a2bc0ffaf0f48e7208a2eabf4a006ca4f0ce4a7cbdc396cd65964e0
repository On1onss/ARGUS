'use client'

// src/index.ts
import {
  HotkeysProvider,
  useHotkeysContext,
  splitKeys as splitKeys2,
  useHotkeys,
  useHotkeysShortcut,
  Hotkey,
  createHotkeys
} from "@saas-ui/use-hotkeys";

// src/hotkeys.tsx
import * as React from "react";
import {
  chakra,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig,
  createStylesContext
} from "@chakra-ui/react";
import { cx, createContext } from "@chakra-ui/utils";
import { Kbd } from "@chakra-ui/react";
import { SearchInput } from "@saas-ui/core";
import {
  splitKeys
} from "@saas-ui/use-hotkeys";
import { jsx, jsxs } from "react/jsx-runtime";
var [StylesProvider, useStyles] = createStylesContext("SuiHotkeys");
var regExpSyntaxCharacter = /[.*+?^${}()|[\]\\]/g;
function escapeRegExp(value) {
  return value.replace(regExpSyntaxCharacter, "\\$&");
}
var [HotkeysListProvider, useHotkeysListContext] = createContext({
  name: "HotkeysListContext"
});
var useHotkeysList = (props) => {
  const [query, setQuery] = React.useState("");
  const { hotkeys } = props;
  return {
    hotkeys,
    query,
    setQuery
  };
};
var HotkeysList = forwardRef(
  ({ children, ...props }, ref) => {
    const styles = useMultiStyleConfig("SuiHotkeys", props);
    const ownProps = omitThemingProps(props);
    const context = useHotkeysList(ownProps);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...props,
        ref,
        __css: styles.container,
        className: cx("sui-hotkeys", props.className),
        children: /* @__PURE__ */ jsx(HotkeysListProvider, { value: context, children: /* @__PURE__ */ jsx(StylesProvider, { value: styles, children }) })
      }
    );
  }
);
HotkeysList.displayName = "HotkeysList";
var useHotkeysSearch = () => {
  return useHotkeysListContext();
};
var HotkeysSearch = forwardRef(
  (props, ref) => {
    const { query, setQuery } = useHotkeysSearch();
    return /* @__PURE__ */ jsx(
      SearchInput,
      {
        ...props,
        ref,
        value: query,
        onChange: ({ target }) => setQuery(target.value),
        onReset: () => setQuery("")
      }
    );
  }
);
HotkeysSearch.displayName = "HotkeysSearch";
var filterHotkeys = (hotkeys, query) => {
  const results = Object.values(hotkeys).reduce(
    (hotkeys2, key) => {
      const { label } = key;
      const re = query && new RegExp(escapeRegExp(query), "i");
      const command = Array.isArray(key.command) ? key.command : [key.command];
      if (!re || label.match(re) || command.some((c) => c.match(re))) {
        hotkeys2.push(key);
      }
      return hotkeys2;
    },
    []
  );
  if (!(results == null ? void 0 : results.length)) {
    return null;
  }
  return results;
};
var HotkeysListItems = forwardRef(
  (props, ref) => {
    const { hotkeys, query } = useHotkeysListContext();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...props,
        ref,
        className: cx("sui-hotkeys__list-items", props.className),
        children: Object.values(hotkeys).map((group, i) => {
          const results = filterHotkeys(group.hotkeys, query);
          if (!(results == null ? void 0 : results.length)) {
            return null;
          }
          return /* @__PURE__ */ jsx(HotkeysGroup, { title: group.title, children: results.map(({ label, command }) => {
            const c = Array.isArray(command) ? command[0] : command;
            return /* @__PURE__ */ jsx(HotkeysItem, { command: c, children: label }, c);
          }) }, i);
        })
      }
    );
  }
);
HotkeysListItems.displayName = "HotkeysListItems";
var HotkeysGroup = (props) => {
  const { title, children, ...rest } = props;
  const styles = useStyles();
  const groupStyles = {
    my: 2,
    py: 2,
    ...styles.group
  };
  const titleStyles = {
    py: 2,
    fontWeight: "semibold",
    ...styles.groupTitle
  };
  return /* @__PURE__ */ jsxs(
    chakra.div,
    {
      ...rest,
      __css: groupStyles,
      className: cx("sui-hotkeys__group", props.className),
      children: [
        title && /* @__PURE__ */ jsx(chakra.p, { __css: titleStyles, children: title }),
        children
      ]
    }
  );
};
HotkeysGroup.displayName = "HotkeysGroup";
var HotkeysCommand = (props) => {
  const { children, ...rest } = props;
  const styles = useStyles();
  let keys;
  if (typeof children === "string") {
    keys = splitKeys(children).map((key, i) => {
      if (key === "then") {
        return /* @__PURE__ */ jsx(chakra.span, { __css: styles.then, children: key }, key);
      }
      return /* @__PURE__ */ jsx(Kbd, { children: key }, key);
    });
  }
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ...rest,
      __css: styles.command,
      className: cx("sui-hotkeys__command", props.className),
      children: keys || children
    }
  );
};
HotkeysCommand.displayName = "HotkeysCommand";
var HotkeysItem = (props) => {
  const { command, children } = props;
  const styles = useStyles();
  const itemStyles = {
    display: "flex",
    alignItems: "center",
    textAlign: "start",
    flex: "0 0 auto",
    ...styles.item
  };
  return /* @__PURE__ */ jsxs(
    chakra.div,
    {
      __css: itemStyles,
      className: cx("sui-hotkeys__item", props.className),
      children: [
        /* @__PURE__ */ jsx(chakra.span, { flex: "1", children }),
        /* @__PURE__ */ jsx(HotkeysCommand, { children: command })
      ]
    }
  );
};
HotkeysItem.displayName = "HotkeysItem";
export {
  Hotkey,
  HotkeysCommand,
  HotkeysGroup,
  HotkeysItem,
  HotkeysList,
  HotkeysListItems,
  HotkeysProvider,
  HotkeysSearch,
  createHotkeys,
  splitKeys2 as splitKeys,
  useHotkeys,
  useHotkeysContext,
  useHotkeysSearch,
  useHotkeysShortcut
};
//# sourceMappingURL=index.mjs.map