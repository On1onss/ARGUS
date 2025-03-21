import {
  nextTick
} from "./chunk-36SNO7OB.mjs";
import {
  isIos
} from "./chunk-V3PG4N2P.mjs";

// src/text-selection.ts
var state = "default";
var savedUserSelect = "";
var modifiedElementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelection({ target, doc } = {}) {
  const _document = doc ?? document;
  if (isIos()) {
    if (state === "default") {
      savedUserSelect = _document.documentElement.style.webkitUserSelect;
      _document.documentElement.style.webkitUserSelect = "none";
    }
    state = "disabled";
  } else if (target) {
    modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
  return () => restoreTextSelection({ target, doc: _document });
}
function restoreTextSelection({ target, doc } = {}) {
  const _document = doc ?? document;
  if (isIos()) {
    if (state !== "disabled")
      return;
    state = "restoring";
    setTimeout(() => {
      nextTick(() => {
        if (state === "restoring") {
          if (_document.documentElement.style.webkitUserSelect === "none") {
            _document.documentElement.style.webkitUserSelect = savedUserSelect || "";
          }
          savedUserSelect = "";
          state = "default";
        }
      });
    }, 300);
  } else {
    if (target && modifiedElementMap.has(target)) {
      let targetOldUserSelect = modifiedElementMap.get(target);
      if (target.style.userSelect === "none") {
        target.style.userSelect = targetOldUserSelect ?? "";
      }
      if (target.getAttribute("style") === "") {
        target.removeAttribute("style");
      }
      modifiedElementMap.delete(target);
    }
  }
}

export {
  disableTextSelection,
  restoreTextSelection
};
