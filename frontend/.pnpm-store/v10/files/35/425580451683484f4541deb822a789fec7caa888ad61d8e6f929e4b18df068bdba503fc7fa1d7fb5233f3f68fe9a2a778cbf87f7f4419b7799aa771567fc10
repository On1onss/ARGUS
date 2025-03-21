// src/queue-before-event.ts
function queueBeforeEvent(el, type, fn) {
  const id = requestAnimationFrame(() => {
    el.removeEventListener(type, invoke, true);
    fn();
  });
  const invoke = () => {
    cancelAnimationFrame(id);
    fn();
  };
  el.addEventListener(type, invoke, { once: true, capture: true });
}

export {
  queueBeforeEvent
};
