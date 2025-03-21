// src/keyboard-event.ts
var rtlKeyMap = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
var sameKeyMap = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
};
function getEventKey(event, options = {}) {
  const { dir = "ltr", orientation = "horizontal" } = options;
  let { key } = event;
  key = sameKeyMap[key] ?? key;
  const isRtl = dir === "rtl" && orientation === "horizontal";
  if (isRtl && key in rtlKeyMap) {
    key = rtlKeyMap[key];
  }
  return key;
}
var PAGE_KEYS = /* @__PURE__ */ new Set(["PageUp", "PageDown"]);
var ARROW_KEYS = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
function getEventStep(event) {
  if (event.ctrlKey || event.metaKey) {
    return 0.1;
  } else {
    const isPageKey = PAGE_KEYS.has(event.key);
    const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.has(event.key);
    return isSkipKey ? 10 : 1;
  }
}

export {
  getEventKey,
  getEventStep
};
