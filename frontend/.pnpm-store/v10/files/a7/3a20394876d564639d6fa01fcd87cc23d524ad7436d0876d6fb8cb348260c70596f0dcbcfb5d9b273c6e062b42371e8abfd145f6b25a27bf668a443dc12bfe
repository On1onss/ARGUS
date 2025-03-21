// src/get-element-offset.ts
function getElementOffset(element) {
  let left = 0;
  let top = 0;
  let el = element;
  if (el.parentNode) {
    do {
      left += el.offsetLeft;
      top += el.offsetTop;
    } while ((el = el.offsetParent) && el.nodeType < 9);
    el = element;
    do {
      left -= el.scrollLeft;
      top -= el.scrollTop;
    } while ((el = el.parentNode) && !/body/i.test(el.nodeName));
  }
  return {
    top,
    right: innerWidth - left - element.offsetWidth,
    bottom: innerHeight - top - element.offsetHeight,
    left
  };
}

export {
  getElementOffset
};
