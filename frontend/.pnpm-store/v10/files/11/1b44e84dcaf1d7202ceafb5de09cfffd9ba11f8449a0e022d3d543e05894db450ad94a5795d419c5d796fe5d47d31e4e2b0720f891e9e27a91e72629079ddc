// src/attrs.ts
var dataAttr = (guard) => {
  return guard ? "" : void 0;
};
var ariaAttr = (guard) => {
  return guard ? "true" : void 0;
};
var matchAttr = (el) => {
  return {
    get: (key) => el.getAttribute(key),
    set: (key, value) => el.setAttribute(key, value),
    is: (key, value) => {
      return el.getAttribute(key) === value;
    }
  };
};

export {
  dataAttr,
  ariaAttr,
  matchAttr
};
