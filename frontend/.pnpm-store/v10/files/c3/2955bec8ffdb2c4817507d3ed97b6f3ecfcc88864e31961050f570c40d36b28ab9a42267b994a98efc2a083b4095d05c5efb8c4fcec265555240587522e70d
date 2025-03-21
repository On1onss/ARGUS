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
  Hotkey: () => Hotkey,
  HotkeysProvider: () => HotkeysProvider,
  createHotkeys: () => createHotkeys,
  splitKeys: () => splitKeys,
  useHotkeys: () => useHotkeys,
  useHotkeysContext: () => useHotkeysContext,
  useHotkeysShortcut: () => useHotkeysShortcut
});
module.exports = __toCommonJS(src_exports);

// src/provider.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var { createContext, useContext } = React;
var HotkeysContext = createContext([]);
var HotkeysProvider = ({
  children,
  hotkeys
}) => {
  const value = { hotkeys };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotkeysContext.Provider, { value, children });
};
var useHotkeysContext = () => {
  return useContext(HotkeysContext);
};

// src/use-hotkeys.ts
var React2 = __toESM(require("react"));
var { useEffect, useCallback, useMemo, useRef } = React2;
var shiftedKeys = {
  ")": "0",
  "!": "1",
  "@": "'",
  '"': "'",
  "#": "3",
  "\xA3": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  "~": "#",
  _: "-",
  "+": "=",
  ":": ";",
  "<": ",",
  ">": ".",
  "?": "/",
  "|": "\\",
  "{": "[",
  "}": "]"
};
var modifiers = {
  "\u2325": "alt",
  option: "alt",
  "\u21E7": "shift",
  "\u2303": "control",
  ctrl: "control",
  "\u2318": "meta",
  cmd: "meta",
  command: "meta",
  mod: "meta",
  // ios
  esc: "escape"
};
var splitKeys = (keys) => {
  return keys.replace(/\+/g, (match, offset) => {
    if (offset === 0) {
      return match;
    }
    return " ";
  }).split(/\s/);
};
var parseKeys = (keys) => {
  if (typeof keys === "string") {
    keys = [keys];
  }
  return keys.reduce((memo, command) => {
    memo.push(
      splitKeys(command.toLowerCase()).reduce(
        (keys2, key, i, command2) => {
          if (command2.length === 1 && shiftedKeys[key]) {
            return ["shift", shiftedKeys[key]];
          }
          if (modifiers[key]) {
            keys2.push(modifiers[key]);
          } else if (key !== "then") {
            keys2.push(key);
          }
          return keys2;
        },
        []
      )
    );
    return memo;
  }, []);
};
var toAriaKeyshortcuts = (keys) => {
  const parsed = parseKeys(keys);
  return parsed.map((keys2) => {
    return keys2.join("+");
  }).join(" ");
};
var keysMatch = (pressedKeys, targetKeys) => targetKeys.some((b) => {
  return pressedKeys.size === b.size && !Array.from(pressedKeys).some((v) => !b.has(v));
});
var getKeyFromEvent = (event) => {
  const key = event.key.toLowerCase();
  if (shiftedKeys[key]) {
    return shiftedKeys[key];
  }
  return key;
};
var useHotkeys = (keys, callback, options = [], deps) => {
  let _options = {};
  if (Array.isArray(options)) {
    deps = options;
    _options = {};
  } else {
    _options = options;
    deps = deps || [];
  }
  const {
    ignoreTags = ["INPUT", "TEXTAREA", "SELECT"],
    enableOnContentEditable,
    preventDefault = false
  } = _options;
  const targetElement = _options.targetElement || (typeof window === "undefined" ? null : window);
  const memoizedCallback = useCallback(callback, deps || []);
  const targetKeys = useMemo(
    () => parseKeys(keys).map((k) => new Set(k)),
    []
  );
  const pressedKeys = useMemo(() => /* @__PURE__ */ new Set(), []);
  const bufferKeys = useMemo(() => /* @__PURE__ */ new Set(), []);
  const bufferTimeout = useRef(null);
  const isInputEvent = (event) => {
    const target = event.target;
    return target.isContentEditable && !enableOnContentEditable || ignoreTags.includes(target.tagName) && // @ts-ignore: This only exists on HTMLInputElements
    !target.readOnly && // @ts-ignore: when targetElement is this input, we should trigger
    target !== targetElement;
  };
  function onKeyDown(event) {
    if (isInputEvent(event)) {
      return;
    }
    const key = getKeyFromEvent(event);
    pressedKeys.add(key);
    bufferKeys.add(key);
    if (bufferTimeout.current) {
      clearTimeout(bufferTimeout.current);
      bufferTimeout.current = null;
    }
    bufferTimeout.current = setTimeout(() => {
      bufferKeys.clear();
    }, 400);
    if (keysMatch(pressedKeys, targetKeys) || bufferKeys.size > 1 && keysMatch(bufferKeys, targetKeys)) {
      if (preventDefault) {
        event.preventDefault();
      }
      bufferKeys.clear();
      setTimeout(() => memoizedCallback(event), 0);
    }
  }
  function onKeyUp(event) {
    pressedKeys.clear();
  }
  function onWindowBlur() {
    pressedKeys.clear();
  }
  useEffect(() => {
    targetElement == null ? void 0 : targetElement.addEventListener("keydown", onKeyDown);
    targetElement == null ? void 0 : targetElement.addEventListener("keyup", onKeyUp);
    targetElement == null ? void 0 : targetElement.addEventListener("blur", onWindowBlur);
    return () => {
      targetElement == null ? void 0 : targetElement.removeEventListener("keydown", onKeyDown);
      targetElement == null ? void 0 : targetElement.removeEventListener("keyup", onKeyUp);
      targetElement == null ? void 0 : targetElement.removeEventListener("blur", onWindowBlur);
    };
  }, [memoizedCallback, targetElement]);
};

// src/use-hotkeys-shortcut.ts
var useHotkeysShortcut = (keyOrShortcut, callback, options = [], deps) => {
  var _a, _b;
  const { hotkeys } = useHotkeysContext();
  let keys = keyOrShortcut;
  if (typeof keys === "string") {
    const [group, key] = keys.split(".");
    if (group && key) {
      keys = (_b = (_a = hotkeys == null ? void 0 : hotkeys[group]) == null ? void 0 : _a.hotkeys[key]) == null ? void 0 : _b.command;
    }
    if (!keys) {
      keys = keyOrShortcut;
    }
  }
  useHotkeys(keys, callback, options, deps);
  return typeof keys === "string" ? keys : keys[0];
};

// src/hotkey.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Hotkey = (props) => {
  const { command, callback, hotkeyOptions, children } = props;
  const keys = useHotkeysShortcut(command, callback, hotkeyOptions);
  const ariaKeyshortcuts = import_react.default.useMemo(() => toAriaKeyshortcuts(keys), [keys]);
  if (typeof children === "function") {
    return children({ keys, ariaKeyshortcuts });
  }
  if (import_react.default.isValidElement(children)) {
    return import_react.default.cloneElement(children, {
      "aria-keyshortcuts": ariaKeyshortcuts
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-keyshortcuts": ariaKeyshortcuts, children });
};

// src/create-hotkeys.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var createHotkeys = (hotkeys) => {
  return {
    hotkeys,
    HotkeysProvider: (props) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(HotkeysProvider, { ...props, hotkeys }),
    useHotkeysContext: () => useHotkeysContext(),
    useHotkeys: (shortcut, callback, options = [], deps) => useHotkeysShortcut(shortcut, callback, options, deps),
    Hotkey
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Hotkey,
  HotkeysProvider,
  createHotkeys,
  splitKeys,
  useHotkeys,
  useHotkeysContext,
  useHotkeysShortcut
});
//# sourceMappingURL=index.js.map