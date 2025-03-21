(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.NProgress = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  var clamp = function clamp(num, lower, upper) {
    num = num <= upper ? num : upper;
    num = num >= lower ? num : lower;
    return num;
  };

  var createQueue = function createQueue() {
    var isRunning = false;
    var pending = [];
    var _next = function next() {
      isRunning = true;
      var cb = pending.shift();
      if (cb) {
        return cb(_next);
      }
      isRunning = false;
    };
    var clear = function clear() {
      isRunning = false;
      pending = [];
    };
    var enqueue = function enqueue(cb) {
      pending.push(cb);
      if (!isRunning && pending.length === 1) {
        _next();
      }
    };
    return {
      clear: clear,
      enqueue: enqueue
    };
  };

  var createTimeout = function createTimeout() {
    var handle;
    var cancel = function cancel() {
      if (handle) {
        window.cancelAnimationFrame(handle);
      }
    };
    var schedule = function schedule(callback, delay) {
      var deltaTime;
      var start;
      var _frame = function frame(time) {
        start = start || time;
        deltaTime = time - start;
        if (deltaTime > delay) {
          callback();
          return;
        }
        handle = window.requestAnimationFrame(_frame);
      };
      handle = window.requestAnimationFrame(_frame);
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  };

  var increment = function increment(progress) {
    var amount = 0;
    if (progress >= 0 && progress < 0.2) {
      amount = 0.1;
    } else if (progress >= 0.2 && progress < 0.5) {
      amount = 0.04;
    } else if (progress >= 0.5 && progress < 0.8) {
      amount = 0.02;
    } else if (progress >= 0.8 && progress < 0.99) {
      amount = 0.005;
    }
    return clamp(progress + amount, 0, 0.994);
  };

  // Hat-tip:
  // https://github.com/streamich/react-use/blob/master/src/useEffectOnce.ts.
  //
  // `react-use` appears to be unmaintained, so moving the required code into
  // this project for now.
  var useEffectOnce = function useEffectOnce(effect) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(effect, []);
  };

  var incrementParameter = function incrementParameter(num) {
    return ++num % 1000000;
  };
  var useUpdate = function useUpdate() {
    var _useState = React.useState(0),
      setState = _useState[1];
    return React.useCallback(function () {
      return setState(incrementParameter);
    }, []);
  };
  var useGetSetState = function useGetSetState(/* istanbul ignore next */
  initialState) {
    if (initialState === undefined) {
      initialState = {};
    }
    var update = useUpdate();
    var state = React.useRef(_extends({}, initialState));
    var get = React.useCallback(function () {
      return state.current;
    }, []);
    var set = React.useCallback(function (patch) {
      if (!patch) {
        return;
      }
      Object.assign(state.current, patch);
      update();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [get, set];
  };

  // Hat-tip:
  // https://github.com/streamich/react-use/blob/master/src/useUpdateEffect.ts.
  //
  // `react-use` appears to be unmaintained, so moving the required code into
  // this project for now.
  var useFirstMountState = function useFirstMountState() {
    var isFirst = React.useRef(true);
    if (isFirst.current) {
      isFirst.current = false;
      return true;
    }
    return isFirst.current;
  };
  var useUpdateEffect = function useUpdateEffect(effect, deps) {
    var isFirstMount = useFirstMountState();
    React.useEffect(function () {
      if (!isFirstMount) {
        return effect();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
  };

  /* istanbul ignore next */
  var noop = function noop() {
    return undefined;
  };
  var initialState = {
    isFinished: true,
    progress: 0,
    sideEffect: noop
  };
  var useNProgress = function useNProgress(_temp) {
    var _ref = _temp === undefined ? {} : _temp,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === undefined ? 200 : _ref$animationDuratio,
      _ref$incrementDuratio = _ref.incrementDuration,
      incrementDuration = _ref$incrementDuratio === undefined ? 800 : _ref$incrementDuratio,
      _ref$isAnimating = _ref.isAnimating,
      isAnimating = _ref$isAnimating === undefined ? false : _ref$isAnimating,
      _ref$minimum = _ref.minimum,
      minimum = _ref$minimum === undefined ? 0.08 : _ref$minimum;
    var _useGetSetState = useGetSetState(initialState),
      get = _useGetSetState[0],
      setState = _useGetSetState[1];
    var queue = React.useRef(null);
    var timeout = React.useRef(null);
    useEffectOnce(function () {
      queue.current = createQueue();
      timeout.current = createTimeout();
    });
    var cleanup = React.useCallback(function () {
      var _timeout$current, _queue$current;
      (_timeout$current = timeout.current) == null || _timeout$current.cancel();
      (_queue$current = queue.current) == null || _queue$current.clear();
    }, []);
    var set = React.useCallback(function (n) {
      var _queue$current4;
      n = clamp(n, minimum, 1);
      if (n === 1) {
        var _queue$current2, _queue$current3;
        cleanup();
        (_queue$current2 = queue.current) == null || _queue$current2.enqueue(function (next) {
          setState({
            progress: n,
            sideEffect: function sideEffect() {
              var _timeout$current2;
              return (_timeout$current2 = timeout.current) == null ? undefined : _timeout$current2.schedule(next, animationDuration);
            }
          });
        });
        (_queue$current3 = queue.current) == null || _queue$current3.enqueue(function () {
          setState({
            isFinished: true,
            sideEffect: cleanup
          });
        });
        return;
      }
      (_queue$current4 = queue.current) == null || _queue$current4.enqueue(function (next) {
        setState({
          isFinished: false,
          progress: n,
          sideEffect: function sideEffect() {
            var _timeout$current3;
            return (_timeout$current3 = timeout.current) == null ? undefined : _timeout$current3.schedule(next, animationDuration);
          }
        });
      });
    }, [animationDuration, cleanup, minimum, queue, setState, timeout]);
    var trickle = React.useCallback(function () {
      set(increment(get().progress));
    }, [get, set]);
    var start = React.useCallback(function () {
      var _work = function work() {
        var _queue$current5;
        trickle();
        (_queue$current5 = queue.current) == null || _queue$current5.enqueue(function (next) {
          var _timeout$current4;
          (_timeout$current4 = timeout.current) == null || _timeout$current4.schedule(function () {
            _work();
            next();
          }, incrementDuration);
        });
      };
      _work();
    }, [incrementDuration, queue, timeout, trickle]);
    var savedTrickle = React.useRef(noop);
    var sideEffect = get().sideEffect;
    React.useEffect(function () {
      savedTrickle.current = trickle;
    });
    useEffectOnce(function () {
      if (isAnimating) {
        start();
      }
      return cleanup;
    });
    useUpdateEffect(function () {
      get().sideEffect();
    }, [get, sideEffect]);
    useUpdateEffect(function () {
      if (!isAnimating) {
        set(1);
      } else {
        setState(_extends({}, initialState, {
          sideEffect: start
        }));
      }
    }, [isAnimating, set, setState, start]);
    return {
      animationDuration: animationDuration,
      isFinished: get().isFinished,
      progress: get().progress
    };
  };

  var _excluded = ["children"];
  var NProgress = function NProgress(_ref) {
    var children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
    var renderProps = useNProgress(restProps);
    return children(renderProps);
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var reactIs = {exports: {}};

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_development;

  function requireReactIs_development () {
  	if (hasRequiredReactIs_development) return reactIs_development;
  	hasRequiredReactIs_development = 1;



  	{
  	  (function() {

  	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  	// nor polyfill, then a plain number is used for performance.
  	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  	// (unstable) APIs that have been removed. Can we remove the symbols?

  	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  	function isValidElementType(type) {
  	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  	}

  	function typeOf(object) {
  	  if (typeof object === 'object' && object !== null) {
  	    var $$typeof = object.$$typeof;

  	    switch ($$typeof) {
  	      case REACT_ELEMENT_TYPE:
  	        var type = object.type;

  	        switch (type) {
  	          case REACT_ASYNC_MODE_TYPE:
  	          case REACT_CONCURRENT_MODE_TYPE:
  	          case REACT_FRAGMENT_TYPE:
  	          case REACT_PROFILER_TYPE:
  	          case REACT_STRICT_MODE_TYPE:
  	          case REACT_SUSPENSE_TYPE:
  	            return type;

  	          default:
  	            var $$typeofType = type && type.$$typeof;

  	            switch ($$typeofType) {
  	              case REACT_CONTEXT_TYPE:
  	              case REACT_FORWARD_REF_TYPE:
  	              case REACT_LAZY_TYPE:
  	              case REACT_MEMO_TYPE:
  	              case REACT_PROVIDER_TYPE:
  	                return $$typeofType;

  	              default:
  	                return $$typeof;
  	            }

  	        }

  	      case REACT_PORTAL_TYPE:
  	        return $$typeof;
  	    }
  	  }

  	  return undefined;
  	} // AsyncMode is deprecated along with isAsyncMode

  	var AsyncMode = REACT_ASYNC_MODE_TYPE;
  	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  	var ContextConsumer = REACT_CONTEXT_TYPE;
  	var ContextProvider = REACT_PROVIDER_TYPE;
  	var Element = REACT_ELEMENT_TYPE;
  	var ForwardRef = REACT_FORWARD_REF_TYPE;
  	var Fragment = REACT_FRAGMENT_TYPE;
  	var Lazy = REACT_LAZY_TYPE;
  	var Memo = REACT_MEMO_TYPE;
  	var Portal = REACT_PORTAL_TYPE;
  	var Profiler = REACT_PROFILER_TYPE;
  	var StrictMode = REACT_STRICT_MODE_TYPE;
  	var Suspense = REACT_SUSPENSE_TYPE;
  	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  	function isAsyncMode(object) {
  	  {
  	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
  	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

  	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
  	    }
  	  }

  	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  	}
  	function isConcurrentMode(object) {
  	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  	}
  	function isContextConsumer(object) {
  	  return typeOf(object) === REACT_CONTEXT_TYPE;
  	}
  	function isContextProvider(object) {
  	  return typeOf(object) === REACT_PROVIDER_TYPE;
  	}
  	function isElement(object) {
  	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	}
  	function isForwardRef(object) {
  	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
  	}
  	function isFragment(object) {
  	  return typeOf(object) === REACT_FRAGMENT_TYPE;
  	}
  	function isLazy(object) {
  	  return typeOf(object) === REACT_LAZY_TYPE;
  	}
  	function isMemo(object) {
  	  return typeOf(object) === REACT_MEMO_TYPE;
  	}
  	function isPortal(object) {
  	  return typeOf(object) === REACT_PORTAL_TYPE;
  	}
  	function isProfiler(object) {
  	  return typeOf(object) === REACT_PROFILER_TYPE;
  	}
  	function isStrictMode(object) {
  	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
  	}
  	function isSuspense(object) {
  	  return typeOf(object) === REACT_SUSPENSE_TYPE;
  	}

  	reactIs_development.AsyncMode = AsyncMode;
  	reactIs_development.ConcurrentMode = ConcurrentMode;
  	reactIs_development.ContextConsumer = ContextConsumer;
  	reactIs_development.ContextProvider = ContextProvider;
  	reactIs_development.Element = Element;
  	reactIs_development.ForwardRef = ForwardRef;
  	reactIs_development.Fragment = Fragment;
  	reactIs_development.Lazy = Lazy;
  	reactIs_development.Memo = Memo;
  	reactIs_development.Portal = Portal;
  	reactIs_development.Profiler = Profiler;
  	reactIs_development.StrictMode = StrictMode;
  	reactIs_development.Suspense = Suspense;
  	reactIs_development.isAsyncMode = isAsyncMode;
  	reactIs_development.isConcurrentMode = isConcurrentMode;
  	reactIs_development.isContextConsumer = isContextConsumer;
  	reactIs_development.isContextProvider = isContextProvider;
  	reactIs_development.isElement = isElement;
  	reactIs_development.isForwardRef = isForwardRef;
  	reactIs_development.isFragment = isFragment;
  	reactIs_development.isLazy = isLazy;
  	reactIs_development.isMemo = isMemo;
  	reactIs_development.isPortal = isPortal;
  	reactIs_development.isProfiler = isProfiler;
  	reactIs_development.isStrictMode = isStrictMode;
  	reactIs_development.isSuspense = isSuspense;
  	reactIs_development.isValidElementType = isValidElementType;
  	reactIs_development.typeOf = typeOf;
  	  })();
  	}
  	return reactIs_development;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs.exports;
  	hasRequiredReactIs = 1;

  	{
  	  reactIs.exports = requireReactIs_development();
  	}
  	return reactIs.exports;
  }

  var hoistNonReactStatics_cjs;
  var hasRequiredHoistNonReactStatics_cjs;

  function requireHoistNonReactStatics_cjs () {
  	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
  	hasRequiredHoistNonReactStatics_cjs = 1;

  	var reactIs = requireReactIs();

  	/**
  	 * Copyright 2015, Yahoo! Inc.
  	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
  	 */
  	var REACT_STATICS = {
  	  childContextTypes: true,
  	  contextType: true,
  	  contextTypes: true,
  	  defaultProps: true,
  	  displayName: true,
  	  getDefaultProps: true,
  	  getDerivedStateFromError: true,
  	  getDerivedStateFromProps: true,
  	  mixins: true,
  	  propTypes: true,
  	  type: true
  	};
  	var KNOWN_STATICS = {
  	  name: true,
  	  length: true,
  	  prototype: true,
  	  caller: true,
  	  callee: true,
  	  arguments: true,
  	  arity: true
  	};
  	var FORWARD_REF_STATICS = {
  	  '$$typeof': true,
  	  render: true,
  	  defaultProps: true,
  	  displayName: true,
  	  propTypes: true
  	};
  	var MEMO_STATICS = {
  	  '$$typeof': true,
  	  compare: true,
  	  defaultProps: true,
  	  displayName: true,
  	  propTypes: true,
  	  type: true
  	};
  	var TYPE_STATICS = {};
  	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  	function getStatics(component) {
  	  // React v16.11 and below
  	  if (reactIs.isMemo(component)) {
  	    return MEMO_STATICS;
  	  } // React v16.12 and above


  	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  	}

  	var defineProperty = Object.defineProperty;
  	var getOwnPropertyNames = Object.getOwnPropertyNames;
  	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var getPrototypeOf = Object.getPrototypeOf;
  	var objectPrototype = Object.prototype;
  	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  	  if (typeof sourceComponent !== 'string') {
  	    // don't hoist over string (html) components
  	    if (objectPrototype) {
  	      var inheritedComponent = getPrototypeOf(sourceComponent);

  	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
  	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
  	      }
  	    }

  	    var keys = getOwnPropertyNames(sourceComponent);

  	    if (getOwnPropertySymbols) {
  	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
  	    }

  	    var targetStatics = getStatics(targetComponent);
  	    var sourceStatics = getStatics(sourceComponent);

  	    for (var i = 0; i < keys.length; ++i) {
  	      var key = keys[i];

  	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
  	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

  	        try {
  	          // Avoid failures from read-only properties
  	          defineProperty(targetComponent, key, descriptor);
  	        } catch (e) {}
  	      }
  	    }
  	  }

  	  return targetComponent;
  	}

  	hoistNonReactStatics_cjs = hoistNonReactStatics;
  	return hoistNonReactStatics_cjs;
  }

  var hoistNonReactStatics_cjsExports = requireHoistNonReactStatics_cjs();
  var hoistNonReactStatics = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjsExports);

  function withNProgress(BaseComponent) {
    var WithNProgress = function WithNProgress(props) {
      var hookProps = useNProgress(props);
      return /*#__PURE__*/React__namespace.createElement(BaseComponent, _extends({}, props, hookProps));
    };
    hoistNonReactStatics(WithNProgress, BaseComponent);
    return WithNProgress;
  }

  exports.NProgress = NProgress;
  exports.useNProgress = useNProgress;
  exports.withNProgress = withNProgress;

}));
//# sourceMappingURL=react-nprogress.umd.development.js.map
