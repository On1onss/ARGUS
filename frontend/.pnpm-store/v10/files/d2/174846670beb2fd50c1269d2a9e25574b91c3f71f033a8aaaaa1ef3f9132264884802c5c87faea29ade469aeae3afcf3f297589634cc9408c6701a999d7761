'use client'
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

// src/anatomy/index.ts
var anatomy_exports = {};
__export(anatomy_exports, {
  appShellAnatomy: () => appShellAnatomy,
  bannerAnatomy: () => bannerAnatomy,
  emptyStateAnatomy: () => emptyStateAnatomy,
  hotkeysAnantomy: () => hotkeysAnantomy,
  loadingOverlayAnatomy: () => loadingOverlayAnatomy,
  navGroupAnatomy: () => navGroupAnatomy,
  navItemAnatomy: () => navItemAnatomy,
  nprogressAnatomy: () => nprogressAnatomy,
  personaAnatomy: () => personaAnatomy,
  propertyAnatomy: () => propertyAnatomy,
  searchInputAnatomy: () => searchInputAnatomy,
  selectAnatomy: () => selectAnatomy,
  sidebarAnatomy: () => sidebarAnatomy,
  stepperAnatomy: () => stepperAnatomy,
  structuredListAnatomy: () => structuredListAnatomy,
  timelineAnatomy: () => timelineAnatomy
});
module.exports = __toCommonJS(anatomy_exports);

// src/anatomy/create-anatomy.ts
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map) continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// src/anatomy/index.ts
var appShellAnatomy = anatomy("app-shell").parts(
  "container",
  "inner",
  "main"
);
var emptyStateAnatomy = anatomy("emptystate").parts(
  "container",
  "body",
  "icon",
  "title",
  "descripton",
  "actions",
  "footer"
);
var bannerAnatomy = anatomy("banner").parts(
  "container",
  "icon",
  "content",
  "title",
  "description",
  "actions",
  "close"
);
var hotkeysAnantomy = anatomy("hotkeys").parts(
  "container",
  "group",
  "groupTitle",
  "item",
  "command",
  "then"
);
var loadingOverlayAnatomy = anatomy("loading-overlay").parts(
  "overlay",
  "text"
);
var navGroupAnatomy = anatomy("nav-group").parts(
  "container",
  "title",
  "icon",
  "content"
);
var navItemAnatomy = anatomy("nav-item").parts(
  "item",
  "link",
  "inner",
  "icon",
  "label"
);
var nprogressAnatomy = anatomy("nprogress").parts("container", "bar");
var personaAnatomy = anatomy("persona").parts(
  "container",
  "details",
  "avatar",
  "label",
  "secondaryLabel",
  "tertiaryLabel"
);
var searchInputAnatomy = anatomy("search-input").parts(
  "input",
  "reset"
);
var sidebarAnatomy = anatomy("sidebar").parts(
  "container",
  "overlay",
  "section",
  "toggleWrapper",
  "toggle"
);
var stepperAnatomy = anatomy("stepper").parts(
  "container",
  "steps",
  "icon",
  "content",
  "title",
  "separator"
);
var structuredListAnatomy = anatomy("structured-list").parts(
  "list",
  "item",
  "button",
  "header",
  "cell",
  "icon"
);
var propertyAnatomy = anatomy("property").parts(
  "property",
  "label",
  "value"
);
var selectAnatomy = anatomy("select").parts(
  "addon",
  "field",
  "element"
);
var timelineAnatomy = anatomy("timeline").parts(
  "container",
  "item",
  "separator",
  "icon",
  "dot",
  "track",
  "content"
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  appShellAnatomy,
  bannerAnatomy,
  emptyStateAnatomy,
  hotkeysAnantomy,
  loadingOverlayAnatomy,
  navGroupAnatomy,
  navItemAnatomy,
  nprogressAnatomy,
  personaAnatomy,
  propertyAnatomy,
  searchInputAnatomy,
  selectAnatomy,
  sidebarAnatomy,
  stepperAnatomy,
  structuredListAnatomy,
  timelineAnatomy
});
//# sourceMappingURL=index.js.map