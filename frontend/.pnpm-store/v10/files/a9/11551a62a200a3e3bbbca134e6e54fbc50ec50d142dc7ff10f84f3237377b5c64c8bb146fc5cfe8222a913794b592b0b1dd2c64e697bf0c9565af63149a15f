// src/mutation-observer.ts
function observeAttributes(node, attributes, fn) {
  if (!node)
    return;
  const attrs = Array.isArray(attributes) ? attributes : [attributes];
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
        fn(change);
      }
    }
  });
  obs.observe(node, { attributes: true, attributeFilter: attrs });
  return () => obs.disconnect();
}
function observeChildren(node, fn) {
  if (!node)
    return;
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver(fn);
  obs.observe(node, { childList: true, subtree: true });
  return () => obs.disconnect();
}

export {
  observeAttributes,
  observeChildren
};
