import {
  getDocument,
  getNodeName,
  getParent,
  getWindow,
  isHTMLElement,
  isWindow
} from "./chunk-CFKU37OD.mjs";
import {
  getComputedStyle
} from "./chunk-VUVAE7SR.mjs";

// src/scrollable.ts
function isScrollParent(el) {
  const { overflow, overflowX, overflowY } = getComputedStyle(el);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(el) {
  if (["html", "body", "#document"].includes(getNodeName(el))) {
    return getDocument(el).body;
  }
  if (isHTMLElement(el) && isScrollParent(el)) {
    return el;
  }
  return getScrollParent(getParent(el));
}
function getScrollParents(el, list = []) {
  const scrollParent = getScrollParent(el);
  const isBody = scrollParent === getDocument(el).body;
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const parents = list.concat(target);
  if (isBody)
    return parents;
  return parents.concat(getScrollParents(getParent(target)));
}
function getScrollOffset(el) {
  if (isWindow(el)) {
    return { scrollLeft: el.scrollX, scrollTop: el.scrollY };
  }
  return { scrollLeft: el.scrollLeft, scrollTop: el.scrollTop };
}

export {
  isScrollParent,
  getScrollParent,
  getScrollParents,
  getScrollOffset
};
