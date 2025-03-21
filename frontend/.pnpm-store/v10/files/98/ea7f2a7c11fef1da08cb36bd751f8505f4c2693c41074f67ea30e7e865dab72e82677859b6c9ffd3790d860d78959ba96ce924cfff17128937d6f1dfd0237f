'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Hotkey: () => import_use_hotkeys2.Hotkey,
  HotkeysCommand: () => HotkeysCommand,
  HotkeysGroup: () => HotkeysGroup,
  HotkeysItem: () => HotkeysItem,
  HotkeysList: () => HotkeysList,
  HotkeysListItems: () => HotkeysListItems,
  HotkeysProvider: () => import_use_hotkeys2.HotkeysProvider,
  HotkeysSearch: () => HotkeysSearch,
  createHotkeys: () => import_use_hotkeys2.createHotkeys,
  splitKeys: () => import_use_hotkeys2.splitKeys,
  useHotkeys: () => import_use_hotkeys2.useHotkeys,
  useHotkeysContext: () => import_use_hotkeys2.useHotkeysContext,
  useHotkeysSearch: () => useHotkeysSearch,
  useHotkeysShortcut: () => import_use_hotkeys2.useHotkeysShortcut
});
module.exports = __toCommonJS(src_exports);
var import_use_hotkeys2 = require("@saas-ui/use-hotkeys");

// src/hotkeys.tsx
var React = __toESM(require("react"));
var import_react = require("@chakra-ui/react");
var import_utils = require("@chakra-ui/utils");
var import_react2 = require("@chakra-ui/react");
var import_core = require("@saas-ui/core");
var import_use_hotkeys = require("@saas-ui/use-hotkeys");
var import_jsx_runtime = require("react/jsx-runtime");
var [StylesProvider, useStyles] = (0, import_react.createStylesContext)("SuiHotkeys");
var regExpSyntaxCharacter = /[.*+?^${}()|[\]\\]/g;
function escapeRegExp(value) {
  return value.replace(regExpSyntaxCharacter, "\\$&");
}
var [HotkeysListProvider, useHotkeysListContext] = (0, import_utils.createContext)({
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
var HotkeysList = (0, import_react.forwardRef)(
  ({ children, ...props }, ref) => {
    const styles = (0, import_react.useMultiStyleConfig)("SuiHotkeys", props);
    const ownProps = (0, import_react.omitThemingProps)(props);
    const context = useHotkeysList(ownProps);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.chakra.div,
      {
        ...props,
        ref,
        __css: styles.container,
        className: (0, import_utils.cx)("sui-hotkeys", props.className),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotkeysListProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StylesProvider, { value: styles, children }) })
      }
    );
  }
);
HotkeysList.displayName = "HotkeysList";
var useHotkeysSearch = () => {
  return useHotkeysListContext();
};
var HotkeysSearch = (0, import_react.forwardRef)(
  (props, ref) => {
    const { query, setQuery } = useHotkeysSearch();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.SearchInput,
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
var HotkeysListItems = (0, import_react.forwardRef)(
  (props, ref) => {
    const { hotkeys, query } = useHotkeysListContext();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.chakra.div,
      {
        ...props,
        ref,
        className: (0, import_utils.cx)("sui-hotkeys__list-items", props.className),
        children: Object.values(hotkeys).map((group, i) => {
          const results = filterHotkeys(group.hotkeys, query);
          if (!(results == null ? void 0 : results.length)) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotkeysGroup, { title: group.title, children: results.map(({ label, command }) => {
            const c = Array.isArray(command) ? command[0] : command;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotkeysItem, { command: c, children: label }, c);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react.chakra.div,
    {
      ...rest,
      __css: groupStyles,
      className: (0, import_utils.cx)("sui-hotkeys__group", props.className),
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.chakra.p, { __css: titleStyles, children: title }),
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
    keys = (0, import_use_hotkeys.splitKeys)(children).map((key, i) => {
      if (key === "then") {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.chakra.span, { __css: styles.then, children: key }, key);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Kbd, { children: key }, key);
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.chakra.span,
    {
      ...rest,
      __css: styles.command,
      className: (0, import_utils.cx)("sui-hotkeys__command", props.className),
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react.chakra.div,
    {
      __css: itemStyles,
      className: (0, import_utils.cx)("sui-hotkeys__item", props.className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.chakra.span, { flex: "1", children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotkeysCommand, { children: command })
      ]
    }
  );
};
HotkeysItem.displayName = "HotkeysItem";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Hotkey,
  HotkeysCommand,
  HotkeysGroup,
  HotkeysItem,
  HotkeysList,
  HotkeysListItems,
  HotkeysProvider,
  HotkeysSearch,
  createHotkeys,
  splitKeys,
  useHotkeys,
  useHotkeysContext,
  useHotkeysSearch,
  useHotkeysShortcut
});
//# sourceMappingURL=index.js.map