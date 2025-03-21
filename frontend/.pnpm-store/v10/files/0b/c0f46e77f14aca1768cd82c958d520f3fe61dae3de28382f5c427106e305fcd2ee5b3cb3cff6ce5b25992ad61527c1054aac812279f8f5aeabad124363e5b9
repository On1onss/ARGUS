'use client'

// src/provider.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var { createContext, useContext } = React;
var HotkeysContext = createContext([]);
var HotkeysProvider = ({
  children,
  hotkeys
}) => {
  const value = { hotkeys };
  return /* @__PURE__ */ jsx(HotkeysContext.Provider, { value, children });
};
var useHotkeysContext = () => {
  return useContext(HotkeysContext);
};

// src/use-hotkeys.ts
import * as React2 from "react";
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
import React3 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Hotkey = (props) => {
  const { command, callback, hotkeyOptions, children } = props;
  const keys = useHotkeysShortcut(command, callback, hotkeyOptions);
  const ariaKeyshortcuts = React3.useMemo(() => toAriaKeyshortcuts(keys), [keys]);
  if (typeof children === "function") {
    return children({ keys, ariaKeyshortcuts });
  }
  if (React3.isValidElement(children)) {
    return React3.cloneElement(children, {
      "aria-keyshortcuts": ariaKeyshortcuts
    });
  }
  return /* @__PURE__ */ jsx2("span", { "aria-keyshortcuts": ariaKeyshortcuts, children });
};

// src/create-hotkeys.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var createHotkeys = (hotkeys) => {
  return {
    hotkeys,
    HotkeysProvider: (props) => /* @__PURE__ */ jsx3(HotkeysProvider, { ...props, hotkeys }),
    useHotkeysContext: () => useHotkeysContext(),
    useHotkeys: (shortcut, callback, options = [], deps) => useHotkeysShortcut(shortcut, callback, options, deps),
    Hotkey
  };
};
export {
  Hotkey,
  HotkeysProvider,
  createHotkeys,
  splitKeys,
  useHotkeys,
  useHotkeysContext,
  useHotkeysShortcut
};
//# sourceMappingURL=index.mjs.map