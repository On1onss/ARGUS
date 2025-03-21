"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/typeahead.ts
var typeahead_exports = {};
__export(typeahead_exports, {
  findByTypeahead: () => findByTypeahead
});
module.exports = __toCommonJS(typeahead_exports);

// src/nodelist.ts
function itemById(v, id) {
  return v.find((node) => node.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match = (valueText, query) => valueText.toLowerCase().startsWith(query.toLowerCase());
var wrap = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function findByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match(getValueText(item), text));
}

// src/typeahead.ts
function findByTypeaheadImpl(_items, options) {
  const { state, activeId, key, timeout = 350 } = options;
  const search = state.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const query = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next = findByText(items, query, activeId);
  function cleanup() {
    clearTimeout(state.timer);
    state.timer = -1;
  }
  function update(value) {
    state.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next;
}
var findByTypeahead = /* @__PURE__ */ Object.assign(findByTypeaheadImpl, {
  defaultOptions: {
    keysSoFar: "",
    timer: -1
  },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findByTypeahead
});
