// src/wait.ts
function waitFor(predicate) {
  let value = predicate();
  if (!!value)
    return Promise.resolve(value);
  return new Promise((resolve) => {
    const id = globalThis.setInterval(function() {
      let value2 = predicate();
      if (value2) {
        globalThis.clearInterval(id);
        resolve(value2);
      }
    }, 0);
  });
}
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

export {
  waitFor,
  waitForEvent
};
