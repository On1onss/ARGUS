'use client'

// src/use-promise.tsx
import * as React from "react";
function usePromise(fn) {
  const [isLoading, setLoading] = React.useState(false);
  const [isResolved, setResolved] = React.useState(false);
  const [isRejected, setRejected] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const call = (...params) => {
    setLoading(true);
    return fn(...params).then((data2) => {
      setData(data2);
      setResolved(true);
      setLoading(false);
      return data2;
    }).catch((err) => {
      setError(err);
      setRejected(true);
      setLoading(false);
      throw err;
    });
  };
  return [{ error, data, isLoading, isResolved, isRejected }, call];
}

// src/use-local-storage.ts
import React2, { useState as useState2, useEffect } from "react";
var isBrowser = typeof window !== "undefined";
function setItem(key, value) {
  if (isBrowser && "localStorage" in window) {
    return value === void 0 ? localStorage.removeItem(key) : localStorage.setItem(key, value);
  }
}
function getItem(key) {
  if (isBrowser && "localStorage" in window) {
    return localStorage.getItem(key);
  }
}
var serializeJSON = (value) => {
  try {
    return JSON.stringify(value);
  } catch (e) {
    throw new Error("useLocalStorage: failed to serialize the value to JSON");
  }
};
var deserializeJSON = (value) => {
  try {
    return value && JSON.parse(value);
  } catch (e) {
    return value;
  }
};
var triggerCustomEvent = (detail) => {
  const event = new CustomEvent("use-local-storage", {
    detail
  });
  window.dispatchEvent(event);
};
var useLocalStorage = (key, defaultValue, options = {}) => {
  const { serialize = serializeJSON, deserialize = deserializeJSON } = options;
  const initRef = React2.useRef(false);
  const [value, setValue] = useState2(() => {
    var _a;
    return isBrowser ? deserialize((_a = getItem(key)) != null ? _a : void 0) : defaultValue;
  });
  useEffect(() => {
    const handler = (event) => {
      const isCustom = event instanceof CustomEvent;
      const eventKey = isCustom ? event.detail.key : event.key;
      const newValue = isCustom ? event.detail.newValue : event.newValue;
      if ((isCustom || event.storageArea === window.localStorage) && eventKey === key) {
        setValue(deserialize(newValue != null ? newValue : void 0));
      }
    };
    if (isBrowser) {
      window.addEventListener("storage", handler);
      window.addEventListener("use-local-storage", handler);
    }
    return () => {
      if (isBrowser) {
        window.removeEventListener("storage", handler);
        window.removeEventListener("use-local-storage", handler);
      }
    };
  }, []);
  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }
    const serializedValue = serialize(value);
    if (getItem(key) !== serializedValue) {
      setItem(key, serializedValue);
      triggerCustomEvent({ key, newValue: serializedValue });
    }
  }, [value]);
  return [value === void 0 ? defaultValue : value, setValue];
};

// src/use-steps.ts
import { useState as useState3 } from "react";
var FIRST_STEP = 0;
var useSteps = ({
  steps,
  initialStep = FIRST_STEP
}) => {
  const [completed, setCompleted] = useState3([]);
  const [index, setIndex] = useState3(initialStep);
  const step = steps[index];
  const inRange = (index2) => {
    if (typeof index2 === "number") {
      if (index2 < FIRST_STEP) return FIRST_STEP;
      if (index2 >= steps.length) return steps.length - 1;
      return index2;
    }
    return steps.findIndex((step2) => step2.id === index2) || FIRST_STEP;
  };
  const go = (nextStep) => setIndex(inRange(nextStep));
  const next = () => go(index + 1);
  const prev = () => go(index - 1);
  const setComplete = (completeStep = index) => {
    const completeStepIndex = inRange(completeStep);
    const id = steps[completeStepIndex].id;
    setCompleted([.../* @__PURE__ */ new Set([...completed, id])]);
  };
  const setUncomplete = (uncompleteStep = index) => {
    const uncompleteStepIndex = inRange(uncompleteStep);
    const stepId = steps[uncompleteStepIndex].id;
    setCompleted(completed.filter((id) => id !== stepId));
  };
  const reset = (resetStep = initialStep) => {
    setIndex(resetStep);
    setCompleted([]);
  };
  return {
    setComplete,
    completed,
    index,
    isLast: index === steps.length - 1,
    navigation: { next, prev, go },
    step,
    setUncomplete,
    reset
  };
};

// src/use-script.ts
import { useEffect as useEffect2, useState as useState4 } from "react";
var useScript = (src) => {
  const [status, setStatus] = useState4(src ? "loading" : "idle");
  useEffect2(
    () => {
      if (!src) {
        setStatus("idle");
        return;
      }
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        document.body.appendChild(script);
        const setAttributeFromEvent = (event) => {
          script == null ? void 0 : script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        setStatus(script.getAttribute("data-status"));
      }
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src]
    // Only re-run effect if script src changes
  );
  return status;
};

// src/use-scroll-position.ts
import { useRef, useEffect as useEffect3 } from "react";
var isBrowser2 = typeof window !== "undefined";
function getScrollPosition(element) {
  if (!isBrowser2) return { x: 0, y: 0 };
  if (!element) {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: element.scrollLeft, y: element.scrollTop };
}
var useScrollPosition = (props) => {
  const { elementRef, delay = 30, callback, isEnabled } = props;
  const position = useRef(
    isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : { x: 0, y: 0 }
  );
  let throttleTimeout = null;
  const handler = () => {
    const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);
    if (typeof callback === "function") {
      callback({ prevPos: position.current, currPos });
    }
    position.current = currPos;
    throttleTimeout = null;
  };
  useEffect3(() => {
    if (!isEnabled) return;
    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(handler, delay);
        }
      } else {
        handler();
      }
    };
    const target = (elementRef == null ? void 0 : elementRef.current) || window;
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [elementRef == null ? void 0 : elementRef.current, delay, isEnabled]);
  return position.current;
};

// src/use-outside-click.ts
import { useCallbackRef } from "@chakra-ui/react";
import { useEffect as useEffect4, useRef as useRef2 } from "react";
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = useRef2({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  useEffect4(() => {
    if (!enabled) return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent(event, ref) {
  var _a;
  const target = event.target;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target)) return false;
  }
  return !((_a = ref.current) == null ? void 0 : _a.contains(target));
}
function getOwnerDocument(node) {
  var _a;
  return (_a = node == null ? void 0 : node.ownerDocument) != null ? _a : document;
}
export {
  useLocalStorage,
  useOutsideClick,
  usePromise,
  useScript,
  useScrollPosition,
  useSteps
};
//# sourceMappingURL=index.mjs.map