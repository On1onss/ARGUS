// src/query.ts
function isDocument(el) {
  return el.nodeType === Node.DOCUMENT_NODE;
}
function isShadowRoot(el) {
  return el?.toString() === "[object ShadowRoot]";
}
function isWindow(value) {
  return value?.toString() === "[object Window]";
}
function isFrame(element) {
  return element.localName === "iframe";
}
var isWithinShadowRoot = (node) => {
  return isShadowRoot(node.getRootNode());
};
function getDocument(el) {
  if (isWindow(el))
    return el.document;
  if (isDocument(el))
    return el;
  return el?.ownerDocument ?? document;
}
function getRootNode(el) {
  return el.getRootNode();
}
function getWindow(el) {
  return el?.ownerDocument.defaultView ?? window;
}
function getDocumentElement(el) {
  return getDocument(el).documentElement;
}
function getNodeName(node) {
  return isWindow(node) ? "" : node?.localName ?? "";
}
function getEventWindow(event) {
  if (event.view)
    return event.view;
  let target = event.currentTarget;
  if (target != null)
    return getWindow(target);
  return window;
}
function getEventTarget(event) {
  return event.composedPath?.()[0] ?? event.target;
}
function getActiveElement(el) {
  let activeElement = getDocument(el).activeElement;
  while (activeElement && activeElement.shadowRoot) {
    const el2 = activeElement.shadowRoot.activeElement;
    if (el2 === activeElement)
      break;
    else
      activeElement = el2;
  }
  return activeElement;
}
function getActiveDescendant(node) {
  if (!node)
    return null;
  const id = node.getAttribute("aria-activedescendant");
  if (!id)
    return null;
  return getDocument(node).getElementById(id);
}
function getParent(el) {
  const doc = getDocument(el);
  if (getNodeName(el) === "html")
    return el;
  return el.assignedSlot || el.parentElement || doc.documentElement;
}
function defineDomHelpers(helpers) {
  const dom = {
    getRootNode: (ctx) => ctx.getRootNode?.() ?? document,
    getDoc: (ctx) => getDocument(dom.getRootNode(ctx)),
    getWin: (ctx) => dom.getDoc(ctx).defaultView ?? window,
    getActiveElement: (ctx) => dom.getDoc(ctx).activeElement,
    getById: (ctx, id) => dom.getRootNode(ctx).getElementById(id)
  };
  return {
    ...dom,
    ...helpers
  };
}
function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || isHTMLElement(parent) && isHTMLElement(child) && parent.contains(child);
}
function isHTMLElement(v) {
  return typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";
}
var isDisabled = (el) => {
  return el?.getAttribute("disabled") != null || !!el?.getAttribute("aria-disabled") === true;
};
function isElementEditable(el) {
  if (el == null || !isHTMLElement(el)) {
    return false;
  }
  try {
    const win = getWindow(el);
    return el instanceof win.HTMLInputElement && el.selectionStart != null || /(textarea|select)/.test(el.localName) || el.isContentEditable;
  } catch {
    return false;
  }
}
function isVisible(el) {
  if (!isHTMLElement(el))
    return false;
  return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
}

export {
  isDocument,
  isShadowRoot,
  isWindow,
  isFrame,
  isWithinShadowRoot,
  getDocument,
  getRootNode,
  getWindow,
  getDocumentElement,
  getNodeName,
  getEventWindow,
  getEventTarget,
  getActiveElement,
  getActiveDescendant,
  getParent,
  defineDomHelpers,
  contains,
  isHTMLElement,
  isDisabled,
  isElementEditable,
  isVisible
};
