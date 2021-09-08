/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "./node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/intro */ "./src/blocks/intro/index.js");
/* harmony import */ var _blocks_cta_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/cta-hero */ "./src/blocks/cta-hero/index.js");
/* harmony import */ var _blocks_image_text_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/image-text-split */ "./src/blocks/image-text-split/index.js");
/* harmony import */ var _blocks_recent_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/recent-videos */ "./src/blocks/recent-videos/index.js");
/* harmony import */ var _blocks_what_is_answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/what-is-answer */ "./src/blocks/what-is-answer/index.js");
/* harmony import */ var _blocks_home_recent_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/home-recent-posts */ "./src/blocks/home-recent-posts/index.js");
/* harmony import */ var _blocks_home_featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/home-featured */ "./src/blocks/home-featured/index.js");
/* harmony import */ var _blocks_home_featured_authors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/home-featured-authors */ "./src/blocks/home-featured-authors/index.js");
/* harmony import */ var _blocks_home_newsletter_signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/home-newsletter-signup */ "./src/blocks/home-newsletter-signup/index.js");
/* harmony import */ var _blocks_taxonomy_masonry_feed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/taxonomy-masonry-feed */ "./src/blocks/taxonomy-masonry-feed/index.js");
// here we're going to import all of our custom blocks for webpack to compile


/***/ }),

/***/ "./src/blocks/cta-hero/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/cta-hero/editor.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/cta-hero/index.js":
/*!**************************************!*\
  !*** ./src/blocks/cta-hero/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CustomizerButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/CustomizerButton */ "./src/components/CustomizerButton.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/cta-hero/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/cta-hero/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __=wp.i18n.__,_wp$blockEditor=wp.blockEditor,RichText=_wp$blockEditor.RichText,MediaUpload=_wp$blockEditor.MediaUpload,PlainText=_wp$blockEditor.PlainText,registerBlockType=wp.blocks.registerBlockType,_wp$components=wp.components,Button=_wp$components.Button,ButtonGroup=_wp$components.ButtonGroup;registerBlockType("ctct-bcb/cta-hero-block",{title:__("CTA Hero"),icon:"align-left",category:"common",edit:function edit(a){var b=a.attributes,c=a.setAttributes;(function setDefaultAttributes(a){Object.keys(a).map(function(d){b.key||c({key:a[d]})})})({theme:"light",width:"lg"});// set the theme and width with buttons
var d=function(a){c({theme:a.target.value})},e=function(a){c({width:a.target.value})},f=[{type:"theme",setter:d,label:"Light",classLabel:"light",activeState:b.theme},{type:"theme",setter:d,label:"Dark",classLabel:"dark",activeState:b.theme}],g=[{type:"width",setter:e,label:"Large",classLabel:"lg",activeState:b.width},{type:"width",setter:e,label:"Medium",classLabel:"main",activeState:b.width}],h=function(a){return a.map(function(a){return wp.element.createElement(_components_CustomizerButton__WEBPACK_IMPORTED_MODULE_0__["default"],{props:a})})},i=function(a){return b.imageUrl?wp.element.createElement("img",{src:b.imageUrl,onClick:a,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(Button,{onClick:a,className:"button button-large"},"Select image"))};return wp.element.createElement("div",null,wp.element.createElement(function CustomizerOptions(){return wp.element.createElement("div",{className:"flex row afc jfsb"},wp.element.createElement(ButtonGroup,{className:"theme-buttons customizer"},h(f)),wp.element.createElement(ButtonGroup,{className:"width-buttons customizer"},h(g)))},null),wp.element.createElement("section",{className:"".concat(b.theme," cta-hero flex row afc jfc container container-").concat(b.width)},wp.element.createElement("div",{className:"item_3_5"},wp.element.createElement(MediaUpload,{onSelect:function onSelect(a){a.sizes.hasOwnProperty("ctaHero")?c({imageUrl:a.sizes.ctaHero.url}):c({imageUrl:a.sizes.full.url}),c({imageAlt:a.alt})},type:"image",value:b.imageID,render:function render(a){var b=a.open;return i(b)}})),wp.element.createElement("div",{className:"flex col item_2_5 cta-content__side"},wp.element.createElement(PlainText,{onChange:function onChange(a){return c({title:a})},value:b.title,placeholder:"Title",className:"heading"}),wp.element.createElement(RichText,{onChange:function onChange(a){return c({content:a})},value:b.content,multiline:"p",placeholder:"Content"}),wp.element.createElement("div",{className:"flex row afc cta-hero__button"},wp.element.createElement(RichText,{onChange:function onChange(a){return c({link:a})},value:b.link,placeholder:"Link"}),wp.element.createElement("i",{class:"fas fa-chevron-circle-right"})))))},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/cta-hero/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/cta-hero/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured-authors/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/home-featured-authors/editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured-authors/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/home-featured-authors/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/home-featured-authors/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/home-featured-authors/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.scss */ "./src/blocks/home-featured-authors/responsive.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_responsive_scss__WEBPACK_IMPORTED_MODULE_2__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,_wp=wp,ServerSideRender=_wp.serverSideRender;registerBlockType("ctct-bcb/home-featured-authors",{title:__("Home - Featured Authors"),icon:"groups",category:"common",edit:function edit(a){return wp.element.createElement(ServerSideRender,{block:"ctct-bcb/home-featured-authors",attributes:a.attributes})},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/home-featured-authors/responsive.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/home-featured-authors/responsive.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured-authors/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/home-featured-authors/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/home-featured/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/home-featured/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/home-featured/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/home-featured/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.scss */ "./src/blocks/home-featured/responsive.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_responsive_scss__WEBPACK_IMPORTED_MODULE_2__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,_wp=wp,ServerSideRender=_wp.serverSideRender;registerBlockType("ctct-bcb/home-featured-posts",{title:__("Home Featured Posts"),icon:"feedback",category:"common",edit:function edit(a){return wp.element.createElement(ServerSideRender,{block:"ctct-bcb/home-featured-posts",attributes:a.attributes})},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/home-featured/responsive.scss":
/*!**************************************************!*\
  !*** ./src/blocks/home-featured/responsive.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-featured/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/home-featured/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-newsletter-signup/editor.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/home-newsletter-signup/editor.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-newsletter-signup/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/home-newsletter-signup/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/home-newsletter-signup/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/home-newsletter-signup/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.scss */ "./src/blocks/home-newsletter-signup/responsive.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_responsive_scss__WEBPACK_IMPORTED_MODULE_2__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,_wp$blockEditor=wp.blockEditor,RichText=_wp$blockEditor.RichText,MediaUpload=_wp$blockEditor.MediaUpload,PlainText=_wp$blockEditor.PlainText,InspectorControls=wp.editor.InspectorControls,_wp$components=wp.components,PanelBody=_wp$components.PanelBody,Button=_wp$components.Button,ButtonGroup=_wp$components.ButtonGroup,_wp=wp,ServerSideRender=_wp.serverSideRender;registerBlockType("ctct-bcb/home-newsletter-signup",{title:__("Home Newsletter Signup"),icon:"feedback",category:"common",edit:function edit(a){var b=a.attributes,c=a.setAttributes,d=function(a){return b.imageUrl?wp.element.createElement("img",{src:b.imageUrl,onClick:a,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(Button,{onClick:a,className:"button button-large"},"Select image"))};return wp.element.createElement("div",null,wp.element.createElement(InspectorControls,null,wp.element.createElement(PanelBody,null,wp.element.createElement(MediaUpload,{onSelect:function onSelect(a){c({imageUrl:a.sizes.full.url,imageAlt:a.alt}),console.log(b)},type:"image",value:b.imageID,render:function render(a){var b=a.open;return d(b)}}))),wp.element.createElement("div",{className:"home-newsletter-signup form-container flex col afc",style:{backgroundImage:b.imageUrl}},wp.element.createElement("h2",{className:"cta"},wp.element.createElement(PlainText,{onChange:function onChange(a){return c({title:a})},value:b.title,placeholder:"Title",className:"cta"})),wp.element.createElement("form",{id:"subscribe",className:"signup-form-actual-form signup-form-actual-form-footer flex row nowrap","accept-charset":"utf-8",action:"https://cloud.c.constantcontact.com/jmmlsubscriptions/coi_verify",method:"GET",target:"_blank"},wp.element.createElement("input",{id:"subbox",className:"newsletter-email-field newsletter-email-field-footer",maxlength:"255",name:"email",required:"required",type:"text",placeholder:"Enter your email address"}),wp.element.createElement("input",{name:"sub",type:"hidden",value:"1"}),wp.element.createElement("input",{name:"method",type:"hidden",value:"JMML_hints_tips"}),wp.element.createElement("input",{id:"page",name:"page",type:"hidden",value:""}),wp.element.createElement("input",{id:"subbutton",className:"item_2_7 submit_optin_form",type:"submit",value:"Sign up"}))))},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/home-newsletter-signup/responsive.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/home-newsletter-signup/responsive.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-newsletter-signup/style.scss":
/*!******************************************************!*\
  !*** ./src/blocks/home-newsletter-signup/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-recent-posts/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/home-recent-posts/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-recent-posts/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/home-recent-posts/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/home-recent-posts/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/home-recent-posts/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.scss */ "./src/blocks/home-recent-posts/responsive.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_responsive_scss__WEBPACK_IMPORTED_MODULE_2__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,_wp=wp,ServerSideRender=_wp.serverSideRender;registerBlockType("ctct-bcb/home-recent-posts",{title:__("Home Recent Posts"),icon:"feedback",category:"common",edit:function edit(a){return wp.element.createElement(ServerSideRender,{block:"ctct-bcb/home-recent-posts",attributes:a.attributes})},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/home-recent-posts/responsive.scss":
/*!******************************************************!*\
  !*** ./src/blocks/home-recent-posts/responsive.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/home-recent-posts/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/home-recent-posts/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/image-text-split/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/image-text-split/editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/image-text-split/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/image-text-split/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image-text-split/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image-text-split/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,_wp$components=wp.components,Button=_wp$components.Button,ToggleControl=_wp$components.ToggleControl,_wp$blockEditor=wp.blockEditor,RichText=_wp$blockEditor.RichText,MediaUpload=_wp$blockEditor.MediaUpload,PlainText=_wp$blockEditor.PlainText;registerBlockType("ctct-bcb/image-text-split",{title:__("Image Text Split"),icon:"align-right",category:"common",edit:function edit(a){var b=a.attributes,c=a.setAttributes,d=function(a){return b.imageUrl?wp.element.createElement("img",{src:b.imageUrl,onClick:a,className:"image imgfix"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(Button,{onClick:a,className:"button button-large"},__("Select image")))},e=function(a){return a.sizes.textImageSplit?a.sizes.textImageSplit.url:a.sizes.full.url};return wp.element.createElement("div",null,wp.element.createElement(ToggleControl,{label:"Image Left",checked:b.imageLeft,onChange:function onAlignmentChange(){c({imageLeft:!b.imageLeft})}}),wp.element.createElement("section",{className:"text-image-split flex row afc jfc container container-main"+function switchOrientation(){return b.imageLeft?" imageLeft":" imageRight"}()},wp.element.createElement("section",{className:"image-side flex item_2_5"},wp.element.createElement(MediaUpload,{onSelect:function onSelect(a){console.log(a),c({imageAlt:a.alt,imageUrl:e(a)})},type:"image",value:b.imageID,render:function render(a){var b=a.open;return d(b)}})),wp.element.createElement("section",{className:"text-side item_3_5"},wp.element.createElement(PlainText,{className:"eyebrow",value:b.eyebrow,onChange:function onChange(a){c({eyebrow:a})},placeholder:"Eyebrow Title",tagName:"span"}),wp.element.createElement(PlainText,{className:"title",value:b.title,onChange:function onChange(a){c({title:a})},placeholder:"Title",tagName:"h3"}),wp.element.createElement(RichText,{className:"text-half",value:b.content,onChange:function onChange(a){return c({content:a})},tagName:"p",placeholder:"Enter some text here"}))))},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/image-text-split/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/image-text-split/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/intro/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/intro/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/intro/index.js":
/*!***********************************!*\
  !*** ./src/blocks/intro/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/intro/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/intro/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __=wp.i18n.__,RichText=wp.blockEditor.RichText,registerBlockType=wp.blocks.registerBlockType;registerBlockType("ctct-bcb/intro",{title:__("Intro Block"),icon:"editor-aligncenter",category:"common",attributes:{body:{type:"array",source:"children",selector:".intro_body"}},edit:function edit(a){var b=a.attributes,c=a.className,d=a.setAttributes;return wp.element.createElement("div",{className:"container intro"},wp.element.createElement(RichText,{onChange:function onChange(a){return d({body:a})},value:b.body,multiline:"p",placeholder:"Your intro text"}))},save:function save(a){var b=a.attributes;return wp.element.createElement("div",{className:"intro container container-sm"},wp.element.createElement("div",{className:"intro_content"},wp.element.createElement("div",{className:"intro_body"},b.body)))}});

/***/ }),

/***/ "./src/blocks/intro/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/intro/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/recent-videos/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/recent-videos/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/recent-videos/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/recent-videos/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/recent-videos/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/recent-videos/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,Spinner=wp.components.Spinner,withSelect=wp.data.withSelect,_wp=wp,ServerSideRender=_wp.serverSideRender;registerBlockType("ctct-bcb/recent-videos",{title:__("Recent Videos"),icon:"feedback",category:"common",edit:function edit(a){return wp.element.createElement(ServerSideRender,{block:"ctct-bcb/recent-videos",attributes:a.attributes})},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/recent-videos/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/recent-videos/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/taxonomy-masonry-feed/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/taxonomy-masonry-feed/editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/taxonomy-masonry-feed/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/taxonomy-masonry-feed/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_taxonomy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/taxonomy */ "./src/data/taxonomy.js");
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/posts */ "./src/data/posts.js");
/* harmony import */ var _components_TaxonomySelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TaxonomySelect */ "./src/components/TaxonomySelect.js");
/* harmony import */ var _components_SelectTaxonomy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SelectTaxonomy */ "./src/components/SelectTaxonomy.js");
/* harmony import */ var _components_TaxGrid___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TaxGrid/ */ "./src/components/TaxGrid/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/taxonomy-masonry-feed/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/taxonomy-masonry-feed/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./responsive.scss */ "./src/blocks/taxonomy-masonry-feed/responsive.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_responsive_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ScrollPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ScrollPicker */ "./src/components/ScrollPicker/index.js");
var useState=wp.element.useState,__=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType;registerBlockType("ctct-bcb/tax-masonry-feed",{title:__("Home \u2013 Taxonomy Masonry Feed"),icon:"yes-alt",category:"common",edit:function edit(a){var b=a.attributes,c=a.setAttributes;console.log("attributes",b);var d=useState([]),e=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(d,2),f=e[0],g=e[1],h=useState([]),i=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(h,2),j=i[0],k=i[1],l=useState(null),m=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(l,2),n=m[0],o=m[1],p=useState(null),q=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(p,2),r=q[0],s=q[1],t=useState(""),u=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(t,2),v=u[0],w=u[1],x=useState(!0),y=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(x,2),z=y[0],A=y[1],B=function(a,b,c){s(c),g(a),w(b),A(!1)},C=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("industry"!==b){a.next=4;break}return a.abrupt("return",Object(_data_taxonomy__WEBPACK_IMPORTED_MODULE_4__["getIndustryList"])().then(function(a){B(a,"Industry:","industry"),c({termList:a,selectedTax:"industry",curTaxTitle:"Industry:"})}));case 4:if("topic"!==b){a.next=6;break}return a.abrupt("return",Object(_data_taxonomy__WEBPACK_IMPORTED_MODULE_4__["getTopicList"])().then(function(a){B(a,"Marketing Advice by Topic:","categories"),c({termList:a,selectedTax:"categories",curTaxTitle:"Marketing Advice by Topic:"})}));case 6:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),D=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b,d){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o(d),a.abrupt("return",Object(_data_posts__WEBPACK_IMPORTED_MODULE_5__["getFilteredPosts"])({rest:b,tax:r}).then(function(a){k(a),c({posts:a,selectedTerm:d})}));case 2:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),E={selected:{value:b.selectedTax,title:b.curTaxTitle}||!1,onChange:C},F={terms:b.termList||f,taxType:b.curTaxTitle||v,selectedTerm:b.selectedTerm||!1,onChange:D},G={posts:b.posts||j,tax:b.selectedTax||r},H={posts:j||b.posts.map(function(a){return{id:a.id,title:a.title.rendered,link:a.link,author:a.author,image:a._links["wp:featuredmedia"][0].href}}),tax:b.selectedTax||r};console.log("tax props",F);var I={terms:b.termList||f,type:r,active:!1,selectedTerm:b.selectedTerm||n},J=wp.element.createElement("div",null,wp.element.createElement(_components_SelectTaxonomy__WEBPACK_IMPORTED_MODULE_7__["default"],E),wp.element.createElement("section",{className:"taxFeed-block-wrap flex col afs jfs"},wp.element.createElement(_components_TaxonomySelect__WEBPACK_IMPORTED_MODULE_6__["default"],F),wp.element.createElement(_components_ScrollPicker__WEBPACK_IMPORTED_MODULE_12__["default"],I),wp.element.createElement(_components_TaxGrid___WEBPACK_IMPORTED_MODULE_8__["default"],G)));return c({markup:JSON.stringify({selectTaxProps:E,taxProps:F,slideProps:I,gridProps:H})}),J},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/taxonomy-masonry-feed/responsive.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/taxonomy-masonry-feed/responsive.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/taxonomy-masonry-feed/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/taxonomy-masonry-feed/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/what-is-answer/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/what-is-answer/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/blocks/what-is-answer/index.js":
/*!********************************************!*\
  !*** ./src/blocks/what-is-answer/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/what-is-answer/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/what-is-answer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __=wp.i18n.__,RichText=wp.blockEditor.RichText,registerBlockType=wp.blocks.registerBlockType;registerBlockType("ctct-bcb/what-is-answer",{title:__("What Is - Answer Block"),icon:"yes-alt",category:"common",edit:function edit(a){var b=a.attributes,c=a.setAttributes;return wp.element.createElement("div",{className:"container intro"},wp.element.createElement(RichText,{onChange:function onChange(a){return c({content:a})},value:b.content,multiline:"p",placeholder:"Your intro text"}))},save:function save(){return null}});

/***/ }),

/***/ "./src/blocks/what-is-answer/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/what-is-answer/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/CustomizerButton.js":
/*!********************************************!*\
  !*** ./src/components/CustomizerButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
var useState=wp.element.useState,Button=wp.components.Button,CustomizerButton=function(a){var b,c=a.props;b=!(c.classLabel!=c.activeState);var d=useState(b),e=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(d,2),f=e[0],g=e[1],h=c.setter;return wp.element.createElement(Button,{key:c.label.toLowerCase(),id:c.classLabel+"-"+c.type,className:"".concat(c.type,"-button customizer-button"),onClick:function handleClick(a){h(a),g(!f)},"data-active":f,value:c.classLabel},c.label)};/* harmony default export */ __webpack_exports__["default"] = (CustomizerButton);

/***/ }),

/***/ "./src/components/ScrollPicker/Slide.js":
/*!**********************************************!*\
  !*** ./src/components/ScrollPicker/Slide.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functionality_scrollSlideByKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functionality/scrollSlideByKey */ "./src/functionality/scrollSlideByKey.js");
var _wp$element=wp.element,useState=_wp$element.useState,useEffect=_wp$element.useEffect;/* harmony default export */ __webpack_exports__["default"] = (function(a){var b=useState("slide"),c=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(b,2),d=c[0],e=c[1],f=useState({}),g=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(f,2),h=g[0],i=g[1];return useEffect(function(){a.active&&(e("slide active-slide"),i({backgroundImage:a.background})),document.addEventListener("keydown",_functionality_scrollSlideByKey__WEBPACK_IMPORTED_MODULE_1__["default"])},[a.active]),useEffect(function(){var a=document.querySelector(".active-slide");if(a){var b=a.offsetTop,c=document.querySelector(".slide-container");c.style.top="-".concat(b,"px")}},[d]),wp.element.createElement("div",{className:d,style:h},a.name,wp.element.createElement("a",{href:a.link,className:"slide-button"},"Explore Industry"))});

/***/ }),

/***/ "./src/components/ScrollPicker/index.js":
/*!**********************************************!*\
  !*** ./src/components/ScrollPicker/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ "./src/components/ScrollPicker/Slide.js");
/* harmony default export */ __webpack_exports__["default"] = (function(a){return wp.element.createElement("section",{className:"scroll-picker ".concat(a.type," ").concat(a.active)},wp.element.createElement("div",{className:"active-window"},wp.element.createElement("div",{className:"slide-container"},a.terms.map(function(b){var c=!1;parseInt(a.selectedTerm)==b.id&&(c=!0);var d={active:c,name:b.name};return wp.element.createElement(_Slide__WEBPACK_IMPORTED_MODULE_0__["default"],d)}))))});

/***/ }),

/***/ "./src/components/SelectTaxonomy.js":
/*!******************************************!*\
  !*** ./src/components/SelectTaxonomy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
var _wp$element=wp.element,useState=_wp$element.useState,useEffect=_wp$element.useEffect;/* harmony default export */ __webpack_exports__["default"] = (function(a){var b=useState(a.selected.value),c=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(b,2),d=c[0],f=c[1];return useEffect(function(){},[]),console.log("selectProps",a),wp.element.createElement("div",null,wp.element.createElement("label",{for:"taxonomy-select"},"Choose a Taxonomy:"),wp.element.createElement("select",{name:"taxonomy-select",id:"taxonomy-select",onChange:function handleChange(b){a.onChange(b.target.value),f(b.target.value)}},wp.element.createElement("option",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},a.selected?"":"selected",{disabled:!0,value:!0})," ","-- select an option --"," "),wp.element.createElement("option",{value:"industry"},"Industry"),wp.element.createElement("option",{value:"topic"},"Topic")))});

/***/ }),

/***/ "./src/components/TaxGrid/index.js":
/*!*****************************************!*\
  !*** ./src/components/TaxGrid/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/posts */ "./src/data/posts.js");
var _wp$element=wp.element,useState=_wp$element.useState,useEffect=_wp$element.useEffect;/* harmony default export */ __webpack_exports__["default"] = (function(a){var b=wp.element.createElement("div",{className:"placeholder-grid flex col full"},wp.element.createElement("div",{className:"row-1 flex row jfsb"},wp.element.createElement("article",{className:"post"}),wp.element.createElement("article",{className:"post"}),wp.element.createElement("article",{className:"post"})),wp.element.createElement("div",{className:"row-2 flex row jfsb"},wp.element.createElement("article",{className:"post"}),wp.element.createElement("article",{className:"post"}),wp.element.createElement("article",{className:"post"}))),c=useState("industry"),d=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(c,2),e=d[0],f=d[1],g=useState(b),h=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(g,2),i=h[0],j=h[1],k=function(b){var c;"industry"===a.tax?c=2:"categories"===a.tax&&(f("categories"),c=1);var d=function(a){var b=Object(_data_posts__WEBPACK_IMPORTED_MODULE_1__["getMedia"])({rest:a._links["wp:featuredmedia"][0].href});console.log(b)},g=b.slice(0,c).map(function(a){return d(a),wp.element.createElement("article",{className:"post"},a.title.rendered)}),h=b.slice(c,b.length-1).map(function(a){return d(a),wp.element.createElement("article",{className:"post"},a.title.rendered)});return wp.element.createElement("div",{className:"flex col full ".concat(e)},wp.element.createElement("div",{className:"row-1 flex row jfsb"},g),wp.element.createElement("div",{className:"row-2 flex row jfsb"},h))};return useEffect(function(){a.posts.length&&j(k(a.posts))},[a.posts]),i});

/***/ }),

/***/ "./src/components/TaxonomySelect.js":
/*!******************************************!*\
  !*** ./src/components/TaxonomySelect.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_taxonomy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/taxonomy */ "./src/data/taxonomy.js");
var _wp$element=wp.element,useState=_wp$element.useState,useEffect=_wp$element.useEffect;/* harmony default export */ __webpack_exports__["default"] = (function(a){var b=useState(!0),c=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(b,2),d=c[0],e=c[1],f=useState(!0),g=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(f,2),h=g[0],i=g[1];return useEffect(function(){a.terms.length&&(i(a.terms.map(function(b){var c="";return c=b.id==a.selectedTerm?wp.element.createElement("option",{"data-name":b.id,value:b._links["wp:post_type"][0].href,dangerouslySetInnerHTML:{__html:b.name},selected:!0}):wp.element.createElement("option",{"data-name":b.id,value:b._links["wp:post_type"][0].href,dangerouslySetInnerHTML:{__html:b.name}}),c})),e(!1))},[a.terms]),wp.element.createElement("div",null,wp.element.createElement("label",{for:"industry-select"},a.taxType),wp.element.createElement("select",{name:"industry-select",id:"industry-select",onChange:function handleChange(b){console.log("data",b.target.options[b.target.selectedIndex].dataset.name),a.onChange(b.target.value,b.target.options[b.target.selectedIndex].dataset.name)}},h))});

/***/ }),

/***/ "./src/data/posts.js":
/*!***************************!*\
  !*** ./src/data/posts.js ***!
  \***************************/
/*! exports provided: getFilteredPosts, getAuthorMeta, getMedia, getFeaturedImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredPosts", function() { return getFilteredPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorMeta", function() { return getAuthorMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedia", function() { return getMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedImageUrl", function() { return getFeaturedImageUrl; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
var getFilteredPosts=function(a){var b;return"categories"===a.tax?b=4:"industry"===a.tax&&(b=5),window.fetch("".concat(a.rest,"&per_page=").concat(b)).then(function(a){return a.json()}).then(function(a){return a})};var getAuthorMeta=function(){};var getMedia=function(a){return window.fetch("".concat(a.rest)).then(function(a){return a.json()}).then(function(a){console.log(a);var b=function(a){var b=a.author;return{author:b}}(a);return b})};var getFeaturedImageUrl=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",window.fetch("".concat(b.rest)).then(function(a){return a.json()}).then(function(a){return"undefined"==typeof a.media_details?(console.log("cannot find featured media"),""):a.media_details.sizes.large.source_url}));case 1:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();

/***/ }),

/***/ "./src/data/taxonomy.js":
/*!******************************!*\
  !*** ./src/data/taxonomy.js ***!
  \******************************/
/*! exports provided: getIndustryList, getTopicList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndustryList", function() { return getIndustryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopicList", function() { return getTopicList; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
var getIndustryList=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function a(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",window.fetch("/wp-json/wp/v2/industry").then(function(a){return a.json()}).then(function(a){return a}));case 1:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();var getTopicList=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function a(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",window.fetch("/wp-json/wp/v2/categories").then(function(a){return a.json()}).then(function(a){return a}));case 1:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();

/***/ }),

/***/ "./src/functionality/scrollSlideByKey.js":
/*!***********************************************!*\
  !*** ./src/functionality/scrollSlideByKey.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var move=function(a){var b=document.querySelector(".slide-container"),c=parseInt(b.style.top),d=document.querySelector(".active-slide"),e=d.previousSibling,f=d.nextSibling;"up"==a&&f?(b.style.top="".concat(c-200,"px"),d.classList.remove("active-slide"),f.classList.add("active-slide")):"down"==a&&e&&(b.style.top="".concat(c+200,"px"),d.classList.remove("active-slide"),e.classList.add("active-slide"))};/* harmony default export */ __webpack_exports__["default"] = (function(a){var b=a.which||a.keyCode;38===b?move("up"):40===b?move("down"):void 0});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/blocks.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/blocks.js */"./src/blocks.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2N0YS1oZXJvL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY3RhLWhlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jdGEtaGVyby9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1mZWF0dXJlZC1hdXRob3JzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1mZWF0dXJlZC1hdXRob3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1mZWF0dXJlZC1hdXRob3JzL3Jlc3BvbnNpdmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hvbWUtZmVhdHVyZWQtYXV0aG9ycy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1mZWF0dXJlZC9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hvbWUtZmVhdHVyZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ob21lLWZlYXR1cmVkL3Jlc3BvbnNpdmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hvbWUtZmVhdHVyZWQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hvbWUtbmV3c2xldHRlci1zaWdudXAvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ob21lLW5ld3NsZXR0ZXItc2lnbnVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1uZXdzbGV0dGVyLXNpZ251cC9yZXNwb25zaXZlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ob21lLW5ld3NsZXR0ZXItc2lnbnVwL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ob21lLXJlY2VudC1wb3N0cy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hvbWUtcmVjZW50LXBvc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1yZWNlbnQtcG9zdHMvcmVzcG9uc2l2ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaG9tZS1yZWNlbnQtcG9zdHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltYWdlLXRleHQtc3BsaXQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pbWFnZS10ZXh0LXNwbGl0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2UtdGV4dC1zcGxpdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW50cm8vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pbnRyby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9yZWNlbnQtdmlkZW9zL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVjZW50LXZpZGVvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlY2VudC12aWRlb3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RheG9ub215LW1hc29ucnktZmVlZC9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RheG9ub215LW1hc29ucnktZmVlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RheG9ub215LW1hc29ucnktZmVlZC9yZXNwb25zaXZlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90YXhvbm9teS1tYXNvbnJ5LWZlZWQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3doYXQtaXMtYW5zd2VyL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2hhdC1pcy1hbnN3ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93aGF0LWlzLWFuc3dlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbWl6ZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2Nyb2xsUGlja2VyL1NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njcm9sbFBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3RUYXhvbm9teS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYXhHcmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RheG9ub215U2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3RheG9ub215LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbmFsaXR5L3Njcm9sbFNsaWRlQnlLZXkuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJibG9ja0VkaXRvciIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiZWRpdCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwic2V0RGVmYXVsdEF0dHJpYnV0ZXMiLCJhdHRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRoZW1lIiwid2lkdGgiLCJzZXRUaGVtZSIsImJ1dHRvbiIsInRhcmdldCIsInZhbHVlIiwic2V0V2lkdGgiLCJ0aGVtZUJ1dHRvbnMiLCJ0eXBlIiwic2V0dGVyIiwibGFiZWwiLCJjbGFzc0xhYmVsIiwiYWN0aXZlU3RhdGUiLCJ3aWR0aEJ1dHRvbnMiLCJnZW5lcmF0ZUN1c3RvbUJ1dHRvbnMiLCJidXR0b25zIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJpbWFnZVVybCIsIkN1c3RvbWl6ZXJPcHRpb25zIiwibWVkaWEiLCJzaXplcyIsImhhc093blByb3BlcnR5IiwiY3RhSGVybyIsInVybCIsImZ1bGwiLCJpbWFnZUFsdCIsImFsdCIsImltYWdlSUQiLCJvcGVuIiwiY29udGVudCIsImxpbmsiLCJzYXZlIiwiU2VydmVyU2lkZVJlbmRlciIsInNlcnZlclNpZGVSZW5kZXIiLCJwcm9wcyIsIkluc3BlY3RvckNvbnRyb2xzIiwiZWRpdG9yIiwiUGFuZWxCb2R5IiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsIlRvZ2dsZUNvbnRyb2wiLCJpbWFnZVNpemUiLCJ0ZXh0SW1hZ2VTcGxpdCIsImltYWdlTGVmdCIsIm9uQWxpZ25tZW50Q2hhbmdlIiwic3dpdGNoT3JpZW50YXRpb24iLCJleWVicm93IiwiYm9keSIsInNvdXJjZSIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiU3Bpbm5lciIsIndpdGhTZWxlY3QiLCJkYXRhIiwidXNlU3RhdGUiLCJlbGVtZW50IiwidGVybXMiLCJzZXRUZXJtcyIsInBvc3RzIiwic2V0UG9zdHMiLCJ0ZXJtIiwic2V0VGVybSIsInRheCIsInNldFRheCIsInRheFRpdGxlIiwic2V0VGF4VGl0bGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRlcm1zQW5kTG9hZCIsImxpc3QiLCJnZXRUZXJtc0xpc3QiLCJ0YXhUeXBlIiwiZ2V0SW5kdXN0cnlMaXN0IiwidGhlbiIsInRlcm1MaXN0Iiwic2VsZWN0ZWRUYXgiLCJjdXJUYXhUaXRsZSIsImdldFRvcGljTGlzdCIsImdldFBvc3RzQnlUZXJtcyIsImVuZHBvaW50IiwiZ2V0RmlsdGVyZWRQb3N0cyIsInJlc3QiLCJzZWxlY3RlZFRlcm0iLCJzZWxlY3RUYXhQcm9wcyIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJ0YXhQcm9wcyIsImdyaWRQcm9wcyIsImdyaWRQcm9wc1NlcnZlciIsInBvc3QiLCJpZCIsInJlbmRlcmVkIiwiYXV0aG9yIiwiaW1hZ2UiLCJfbGlua3MiLCJocmVmIiwic2xpZGVQcm9wcyIsImFjdGl2ZSIsIm1hcmt1cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDdXN0b21pemVyQnV0dG9uIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZUNsaWNrIiwiZSIsInVzZUVmZmVjdCIsInNldENsYXNzTmFtZSIsInN0eWxlIiwic2V0U3R5bGUiLCJiYWNrZ3JvdW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsU2xpZGVCeUtleSIsImFjdGl2ZVNsaWRlIiwicXVlcnlTZWxlY3RvciIsImRpc3QiLCJvZmZzZXRUb3AiLCJzbGlkZUNvbnRhaW5lciIsInRvcCIsIm5hbWUiLCJwYXJzZUludCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwicGxhY2Vob2xkZXJHcmlkIiwic3BsaXQiLCJzZXRTcGxpdCIsImdyaWQiLCJzZXRHcmlkIiwiZmlsbFBvc3RzIiwibWlkZGxlIiwiZ2V0SW1hZ2UiLCJnZXRNZWRpYSIsInBvc3RzUm93T25lIiwic2xpY2UiLCJwb3N0c1Jvd1R3byIsImxlbmd0aCIsIm91dHB1dCIsInNldE91dHB1dCIsIl9faHRtbCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsIm51bVBvc3RzIiwid2luZG93IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZ2V0QXV0aG9yTWV0YSIsImltZyIsInBpY2tlZCIsImdldEZlYXR1cmVkSW1hZ2VVcmwiLCJtZWRpYV9kZXRhaWxzIiwibGFyZ2UiLCJzb3VyY2VfdXJsIiwibW92ZSIsInVwT3JEb3duIiwiZGlzdEZyb21Ub3AiLCJwcmV2aW91c1NsaWRlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNsaWRlIiwibmV4dFNp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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RUFBQVIsQ0FBUSxFQUFjRSxDQVZWLEdBV3JCeEMsQ0FBYyxDQUFDVixLQUFmLENBQXFCVyxHQUFyQixXQUE4QnNDLENBQVcsQ0FBRyxHQUE1QyxNQVhxQixDQVlyQjNDLENBQVcsQ0FBQ2dELFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGNBQTdCLENBWnFCLENBYXJCTCxDQUFhLENBQUNJLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLGNBQTVCLENBYnFCLENBZXhCLENBZkQsQ0FpQmUsd0VBQUEzRCxDQUFDLENBQUksQ0FDbEIsR0FBTTRELEVBQU8sQ0FBRzVELENBQUMsQ0FBQzZELEtBQUYsRUFBVzdELENBQUMsQ0FBQzRELE9BQTdCLENBRU8sRUFIVyxHQUVWQSxDQUZVLENBSWRWLElBQUksQ0FBQyxJQUFELENBSlUsQ0FNWCxFQU5XLEdBRVZVLENBRlUsQ0FPZFYsSUFBSSxDQUFDLE1BQUQsQ0FQVSxPQVVuQixDQVZELEUiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IscD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHE9bj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHI9bj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx1PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LHY9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksdz1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHg9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIseT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyx6PW4/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsQT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOlxuNjAxMTYsQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQyhhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBEPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxFPXt9O2Z1bmN0aW9uIEYoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RTt0aGlzLnVwZGF0ZXI9Y3x8RH1GLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0YucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcihDKDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtGLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEcoKXt9Ry5wcm90b3R5cGU9Ri5wcm90b3R5cGU7ZnVuY3Rpb24gSChhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1FO3RoaXMudXBkYXRlcj1jfHxEfXZhciBJPUgucHJvdG90eXBlPW5ldyBHO0kuY29uc3RydWN0b3I9SDtsKEksRi5wcm90b3R5cGUpO0kuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEo9e2N1cnJlbnQ6bnVsbH0sSz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGMpe3ZhciBlLGQ9e30sZz1udWxsLGs9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSy5jYWxsKGIsZSkmJiFMLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGg9QXJyYXkoZiksbT0wO208ZjttKyspaFttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWh9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWRbZV0mJihkW2VdPWZbZV0pO3JldHVybnskJHR5cGVvZjpwLHR5cGU6YSxrZXk6ZyxyZWY6ayxwcm9wczpkLF9vd25lcjpKLmN1cnJlbnR9fVxuZnVuY3Rpb24gTihhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBQPS9cXC8rL2csUT1bXTtmdW5jdGlvbiBSKGEsYixjLGUpe2lmKFEubGVuZ3RoKXt2YXIgZD1RLnBvcCgpO2QucmVzdWx0PWE7ZC5rZXlQcmVmaXg9YjtkLmZ1bmM9YztkLmNvbnRleHQ9ZTtkLmNvdW50PTA7cmV0dXJuIGR9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6Yyxjb250ZXh0OmUsY291bnQ6MH19XG5mdW5jdGlvbiBTKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+US5sZW5ndGgmJlEucHVzaChhKX1cbmZ1bmN0aW9uIFQoYSxiLGMsZSl7dmFyIGQ9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWR8fFwiYm9vbGVhblwiPT09ZClhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChkKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGMoZSxhLFwiXCI9PT1iP1wiLlwiK1UoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srKyl7ZD1hW2tdO3ZhciBmPWIrVShkLGspO2crPVQoZCxmLGMsZSl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj1CJiZhW0JdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGs9XG4wOyEoZD1hLm5leHQoKSkuZG9uZTspZD1kLnZhbHVlLGY9YitVKGQsaysrKSxnKz1UKGQsZixjLGUpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWQpdGhyb3cgYz1cIlwiK2EsRXJyb3IoQygzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yz9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpjLFwiXCIpKTtyZXR1cm4gZ31mdW5jdGlvbiBWKGEsYixjKXtyZXR1cm4gbnVsbD09YT8wOlQoYSxcIlwiLGIsYyl9ZnVuY3Rpb24gVShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gVyhhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBhYShhLGIsYyl7dmFyIGU9YS5yZXN1bHQsZD1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9YKGEsZSxjLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE8oYSkmJihhPU4oYSxkKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKStjKSksZS5wdXNoKGEpKX1mdW5jdGlvbiBYKGEsYixjLGUsZCl7dmFyIGc9XCJcIjtudWxsIT1jJiYoZz0oXCJcIitjKS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpO2I9UihiLGcsZSxkKTtWKGEsYWEsYik7UyhiKX12YXIgWT17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBaKCl7dmFyIGE9WS5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKEMoMzIxKSk7cmV0dXJuIGF9XG52YXIgYmE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6WSxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7c3VzcGVuc2U6bnVsbH0sUmVhY3RDdXJyZW50T3duZXI6SixJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O2V4cG9ydHMuQ2hpbGRyZW49e21hcDpmdW5jdGlvbihhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXTtYKGEsZSxudWxsLGIsYyk7cmV0dXJuIGV9LGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7Yj1SKG51bGwsbnVsbCxiLGMpO1YoYSxXLGIpO1MoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBWKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107WChhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFPKGEpKXRocm93IEVycm9yKEMoMTQzKSk7cmV0dXJuIGF9fTtcbmV4cG9ydHMuQ29tcG9uZW50PUY7ZXhwb3J0cy5GcmFnbWVudD1yO2V4cG9ydHMuUHJvZmlsZXI9dTtleHBvcnRzLlB1cmVDb21wb25lbnQ9SDtleHBvcnRzLlN0cmljdE1vZGU9dDtleHBvcnRzLlN1c3BlbnNlPXk7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1iYTtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihDKDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGc9YS5yZWYsaz1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGc9Yi5yZWYsaz1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGY9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoaCBpbiBiKUsuY2FsbChiLGgpJiYhTC5oYXNPd25Qcm9wZXJ0eShoKSYmKGVbaF09dm9pZCAwPT09YltoXSYmdm9pZCAwIT09Zj9mW2hdOmJbaF0pfXZhciBoPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09aCllLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGgpe2Y9QXJyYXkoaCk7Zm9yKHZhciBtPTA7bTxoO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Zn1yZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxcbmtleTpkLHJlZjpnLHByb3BzOmUsX293bmVyOmt9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6dixfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9TTtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6QSxfY3RvcjphLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnosdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFooKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWigpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFooKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBaKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBaKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBaKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE2LjEzLjFcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIGhlcmUgd2UncmUgZ29pbmcgdG8gaW1wb3J0IGFsbCBvZiBvdXIgY3VzdG9tIGJsb2NrcyBmb3Igd2VicGFjayB0byBjb21waWxlXG5pbXBvcnQgXCIuL2Jsb2Nrcy9pbnRyb1wiXG5pbXBvcnQgXCIuL2Jsb2Nrcy9jdGEtaGVyb1wiXG5pbXBvcnQgXCIuL2Jsb2Nrcy9pbWFnZS10ZXh0LXNwbGl0XCJcbmltcG9ydCBcIi4vYmxvY2tzL3JlY2VudC12aWRlb3NcIlxuaW1wb3J0IFwiLi9ibG9ja3Mvd2hhdC1pcy1hbnN3ZXJcIlxuaW1wb3J0IFwiLi9ibG9ja3MvaG9tZS1yZWNlbnQtcG9zdHNcIlxuaW1wb3J0IFwiLi9ibG9ja3MvaG9tZS1mZWF0dXJlZFwiXG5pbXBvcnQgXCIuL2Jsb2Nrcy9ob21lLWZlYXR1cmVkLWF1dGhvcnNcIlxuaW1wb3J0IFwiLi9ibG9ja3MvaG9tZS1uZXdzbGV0dGVyLXNpZ251cFwiXG5pbXBvcnQgXCIuL2Jsb2Nrcy90YXhvbm9teS1tYXNvbnJ5LWZlZWRcIlxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IFJpY2hUZXh0LCBNZWRpYVVwbG9hZCwgUGxhaW5UZXh0IH0gPSB3cC5ibG9ja0VkaXRvclxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5jb25zdCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSA9IHdwLmNvbXBvbmVudHNcblxuaW1wb3J0IEN1c3RvbWl6ZXJCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3VzdG9taXplckJ1dHRvblwiXG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjdGN0LWJjYi9jdGEtaGVyby1ibG9ja1wiLCB7XG4gIHRpdGxlOiBfXyhcIkNUQSBIZXJvXCIpLFxuICBpY29uOiBcImFsaWduLWxlZnRcIixcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG4gIGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0pIHtcbiAgICAvLyBzZXQgc29tZSBkZWZhdWx0cyBmb3Igc3R5bGluZyBwdXJwb3Nlc1xuICAgIGNvbnN0IHNldERlZmF1bHRBdHRyaWJ1dGVzID0gYXR0cyA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhhdHRzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzLmtleSkge1xuICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBrZXk6IGF0dHNba2V5XSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBzZXREZWZhdWx0QXR0cmlidXRlcyh7XG4gICAgICB0aGVtZTogXCJsaWdodFwiLFxuICAgICAgd2lkdGg6IFwibGdcIixcbiAgICB9KVxuXG4gICAgLy8gc2V0IHRoZSB0aGVtZSBhbmQgd2lkdGggd2l0aCBidXR0b25zXG4gICAgY29uc3Qgc2V0VGhlbWUgPSBidXR0b24gPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IHRoZW1lOiBidXR0b24udGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IHNldFdpZHRoID0gYnV0dG9uID0+IHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyB3aWR0aDogYnV0dG9uLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbiAgICBjb25zdCB0aGVtZUJ1dHRvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidGhlbWVcIixcbiAgICAgICAgc2V0dGVyOiBzZXRUaGVtZSxcbiAgICAgICAgbGFiZWw6IFwiTGlnaHRcIixcbiAgICAgICAgY2xhc3NMYWJlbDogXCJsaWdodFwiLFxuICAgICAgICBhY3RpdmVTdGF0ZTogYXR0cmlidXRlcy50aGVtZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidGhlbWVcIixcbiAgICAgICAgc2V0dGVyOiBzZXRUaGVtZSxcbiAgICAgICAgbGFiZWw6IFwiRGFya1wiLFxuICAgICAgICBjbGFzc0xhYmVsOiBcImRhcmtcIixcbiAgICAgICAgYWN0aXZlU3RhdGU6IGF0dHJpYnV0ZXMudGhlbWUsXG4gICAgICB9LFxuICAgIF1cbiAgICBjb25zdCB3aWR0aEJ1dHRvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwid2lkdGhcIixcbiAgICAgICAgc2V0dGVyOiBzZXRXaWR0aCxcbiAgICAgICAgbGFiZWw6IFwiTGFyZ2VcIixcbiAgICAgICAgY2xhc3NMYWJlbDogXCJsZ1wiLFxuICAgICAgICBhY3RpdmVTdGF0ZTogYXR0cmlidXRlcy53aWR0aCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwid2lkdGhcIixcbiAgICAgICAgc2V0dGVyOiBzZXRXaWR0aCxcbiAgICAgICAgbGFiZWw6IFwiTWVkaXVtXCIsXG4gICAgICAgIGNsYXNzTGFiZWw6IFwibWFpblwiLFxuICAgICAgICBhY3RpdmVTdGF0ZTogYXR0cmlidXRlcy53aWR0aCxcbiAgICAgIH0sXG4gICAgXVxuICAgIGNvbnN0IGdlbmVyYXRlQ3VzdG9tQnV0dG9ucyA9IGJ1dHRvbnMgPT5cbiAgICAgIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiA8Q3VzdG9taXplckJ1dHRvbiBwcm9wcz17YnV0dG9ufSAvPilcblxuICAgIGNvbnN0IEN1c3RvbWl6ZXJPcHRpb25zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdyBhZmMgamZzYlwiPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJ0aGVtZS1idXR0b25zIGN1c3RvbWl6ZXJcIj5cbiAgICAgICAgICAgIHtnZW5lcmF0ZUN1c3RvbUJ1dHRvbnModGhlbWVCdXR0b25zKX1cbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJ3aWR0aC1idXR0b25zIGN1c3RvbWl6ZXJcIj5cbiAgICAgICAgICAgIHtnZW5lcmF0ZUN1c3RvbUJ1dHRvbnMod2lkdGhCdXR0b25zKX1cbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBpbWFnZSB1cGxvYWQgY29tcG9uZW50XG4gICAgY29uc3QgZ2V0SW1hZ2VCdXR0b24gPSBvcGVuRXZlbnQgPT4ge1xuICAgICAgaWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2VVcmx9XG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuRXZlbnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlbkV2ZW50fSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBpbWFnZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEN1c3RvbWl6ZXJPcHRpb25zIC8+XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHthdHRyaWJ1dGVzLnRoZW1lfSBjdGEtaGVybyBmbGV4IHJvdyBhZmMgamZjIGNvbnRhaW5lciBjb250YWluZXItJHthdHRyaWJ1dGVzLndpZHRofWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fM181XCI+XG4gICAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e21lZGlhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEuc2l6ZXMuaGFzT3duUHJvcGVydHkoXCJjdGFIZXJvXCIpKSB7XG4gICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VVcmw6IG1lZGlhLnNpemVzLmN0YUhlcm8udXJsIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZVVybDogbWVkaWEuc2l6ZXMuZnVsbC51cmwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICBpbWFnZUFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmltYWdlSUR9XG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbCBpdGVtXzJfNSBjdGEtY29udGVudF9fc2lkZVwiPlxuICAgICAgICAgICAgPFBsYWluVGV4dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSl9XG4gICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBjb250ZW50IH0pfVxuICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgICAgICBtdWx0aWxpbmU9XCJwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm93IGFmYyBjdGEtaGVyb19fYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBsaW5rOiBjb250ZW50IH0pfVxuICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmxpbmt9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHNhdmU6IHByb3BzID0+IG51bGwsXG59KVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuY29uc3QgeyBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cFxuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXG5pbXBvcnQgXCIuL3Jlc3BvbnNpdmUuc2Nzc1wiXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY3RjdC1iY2IvaG9tZS1mZWF0dXJlZC1hdXRob3JzXCIsIHtcbiAgdGl0bGU6IF9fKFwiSG9tZSAtIEZlYXR1cmVkIEF1dGhvcnNcIiksXG4gIGljb246IFwiZ3JvdXBzXCIsXG4gIGNhdGVnb3J5OiBcImNvbW1vblwiLFxuXG4gIGVkaXQ6IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlcnZlclNpZGVSZW5kZXJcbiAgICAgICAgYmxvY2s9XCJjdGN0LWJjYi9ob21lLWZlYXR1cmVkLWF1dGhvcnNcIlxuICAgICAgICBhdHRyaWJ1dGVzPXtwcm9wcy5hdHRyaWJ1dGVzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4gIHNhdmU6IHByb3BzID0+IG51bGwsXG59KVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5jb25zdCB7IHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXIgfSA9IHdwXG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcbmltcG9ydCBcIi4vcmVzcG9uc2l2ZS5zY3NzXCJcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjdGN0LWJjYi9ob21lLWZlYXR1cmVkLXBvc3RzXCIsIHtcbiAgdGl0bGU6IF9fKFwiSG9tZSBGZWF0dXJlZCBQb3N0c1wiKSxcbiAgaWNvbjogXCJmZWVkYmFja1wiLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcblxuICBlZGl0OiBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXJ2ZXJTaWRlUmVuZGVyXG4gICAgICAgIGJsb2NrPVwiY3RjdC1iY2IvaG9tZS1mZWF0dXJlZC1wb3N0c1wiXG4gICAgICAgIGF0dHJpYnV0ZXM9e3Byb3BzLmF0dHJpYnV0ZXN9XG4gICAgICAvPlxuICAgIClcbiAgfSxcbiAgc2F2ZTogcHJvcHMgPT4gbnVsbCxcbn0pXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3NcbmNvbnN0IHsgUmljaFRleHQsIE1lZGlhVXBsb2FkLCBQbGFpblRleHQgfSA9IHdwLmJsb2NrRWRpdG9yXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXIgfSA9IHdwXG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcbmltcG9ydCBcIi4vcmVzcG9uc2l2ZS5zY3NzXCJcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjdGN0LWJjYi9ob21lLW5ld3NsZXR0ZXItc2lnbnVwXCIsIHtcbiAgdGl0bGU6IF9fKFwiSG9tZSBOZXdzbGV0dGVyIFNpZ251cFwiKSxcbiAgaWNvbjogXCJmZWVkYmFja1wiLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcblxuICBlZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9KSB7XG4gICAgLy8gaW1hZ2UgdXBsb2FkIGNvbXBvbmVudFxuICAgIGNvbnN0IGdldEltYWdlQnV0dG9uID0gb3BlbkV2ZW50ID0+IHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzLmltYWdlVXJsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXthdHRyaWJ1dGVzLmltYWdlVXJsfVxuICAgICAgICAgICAgb25DbGljaz17b3BlbkV2ZW50fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5FdmVudH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiPlxuICAgICAgICAgICAgICBTZWxlY3QgaW1hZ2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICA8UGFuZWxCb2R5PlxuICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXttZWRpYSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICBpbWFnZVVybDogbWVkaWEuc2l6ZXMuZnVsbC51cmwsXG4gICAgICAgICAgICAgICAgICBpbWFnZUFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlcylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMuaW1hZ2VJRH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtbmV3c2xldHRlci1zaWdudXAgZm9ybS1jb250YWluZXIgZmxleCBjb2wgYWZjXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGF0dHJpYnV0ZXMuaW1hZ2VVcmwgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgIDxQbGFpblRleHRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pfVxuICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN0YVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGlkPVwic3Vic2NyaWJlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ251cC1mb3JtLWFjdHVhbC1mb3JtIHNpZ251cC1mb3JtLWFjdHVhbC1mb3JtLWZvb3RlciBmbGV4IHJvdyBub3dyYXBcIlxuICAgICAgICAgICAgYWNjZXB0LWNoYXJzZXQ9XCJ1dGYtOFwiXG4gICAgICAgICAgICBhY3Rpb249XCJodHRwczovL2Nsb3VkLmMuY29uc3RhbnRjb250YWN0LmNvbS9qbW1sc3Vic2NyaXB0aW9ucy9jb2lfdmVyaWZ5XCJcbiAgICAgICAgICAgIG1ldGhvZD1cIkdFVFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInN1YmJveFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZW1haWwtZmllbGQgbmV3c2xldHRlci1lbWFpbC1maWVsZC1mb290ZXJcIlxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzdWJcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWV0aG9kXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiSk1NTF9oaW50c190aXBzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhZ2VcIiBuYW1lPVwicGFnZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJzdWJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXzJfNyBzdWJtaXRfb3B0aW5fZm9ybVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIlNpZ24gdXBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuICBzYXZlOiBwcm9wcyA9PiBudWxsLFxufSlcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuY29uc3QgeyBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cFxuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXG5pbXBvcnQgXCIuL3Jlc3BvbnNpdmUuc2Nzc1wiXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY3RjdC1iY2IvaG9tZS1yZWNlbnQtcG9zdHNcIiwge1xuICB0aXRsZTogX18oXCJIb21lIFJlY2VudCBQb3N0c1wiKSxcbiAgaWNvbjogXCJmZWVkYmFja1wiLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcblxuICBlZGl0OiBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXJ2ZXJTaWRlUmVuZGVyXG4gICAgICAgIGJsb2NrPVwiY3RjdC1iY2IvaG9tZS1yZWNlbnQtcG9zdHNcIlxuICAgICAgICBhdHRyaWJ1dGVzPXtwcm9wcy5hdHRyaWJ1dGVzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4gIHNhdmU6IHByb3BzID0+IG51bGwsXG59KVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5jb25zdCB7IEJ1dHRvbiwgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3JcblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxuXG5yZWdpc3RlckJsb2NrVHlwZShcImN0Y3QtYmNiL2ltYWdlLXRleHQtc3BsaXRcIiwge1xuICB0aXRsZTogX18oXCJJbWFnZSBUZXh0IFNwbGl0XCIpLFxuICBpY29uOiBcImFsaWduLXJpZ2h0XCIsXG4gIGNhdGVnb3J5OiBcImNvbW1vblwiLFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHNcbiAgICBjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IG9wZW5FdmVudCA9PiB7XG4gICAgICBpZiAoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YXR0cmlidXRlcy5pbWFnZVVybH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5FdmVudH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlIGltZ2ZpeFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlbkV2ZW50fSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCI+XG4gICAgICAgICAgICAgIHtfXyhcIlNlbGVjdCBpbWFnZVwiKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQWxpZ25tZW50Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlTGVmdDogIWF0dHJpYnV0ZXMuaW1hZ2VMZWZ0IH0pXG4gICAgfVxuICAgIGNvbnN0IHN3aXRjaE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaW1hZ2VMZWZ0ID8gXCIgaW1hZ2VMZWZ0XCIgOiBcIiBpbWFnZVJpZ2h0XCJcbiAgICB9XG4gICAgY29uc3QgaW1hZ2VTaXplID0gYXR0cyA9PiB7XG4gICAgICByZXR1cm4gYXR0cy5zaXplcy50ZXh0SW1hZ2VTcGxpdFxuICAgICAgICA/IGF0dHMuc2l6ZXMudGV4dEltYWdlU3BsaXQudXJsXG4gICAgICAgIDogYXR0cy5zaXplcy5mdWxsLnVybFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgTGVmdFwiXG4gICAgICAgICAgICBjaGVja2VkPXthdHRyaWJ1dGVzLmltYWdlTGVmdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFsaWdubWVudENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwidGV4dC1pbWFnZS1zcGxpdCBmbGV4IHJvdyBhZmMgamZjIGNvbnRhaW5lciBjb250YWluZXItbWFpblwiICtcbiAgICAgICAgICAgIHN3aXRjaE9yaWVudGF0aW9uKClcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbWFnZS1zaWRlIGZsZXggaXRlbV8yXzVcIj5cbiAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICBvblNlbGVjdD17bWVkaWEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lZGlhKVxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ6IG1lZGlhLmFsdCxcbiAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBpbWFnZVNpemUobWVkaWEpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmltYWdlSUR9XG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtc2lkZSBpdGVtXzNfNVwiPlxuICAgICAgICAgICAgPFBsYWluVGV4dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMuZXllYnJvd31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnRlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBleWVicm93OiBjb250ZW50IH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXllYnJvdyBUaXRsZVwiXG4gICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHRhZ05hbWU9XCJoM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaGFsZlwiXG4gICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmNvbnRlbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgIHRhZ05hbWU9XCJwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzb21lIHRleHQgaGVyZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuICBzYXZlOiBwcm9wcyA9PiBudWxsLFxufSlcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvclxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjdGN0LWJjYi9pbnRyb1wiLCB7XG4gIHRpdGxlOiBfXyhcIkludHJvIEJsb2NrXCIpLFxuICBpY29uOiBcImVkaXRvci1hbGlnbmNlbnRlclwiLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcbiAgYXR0cmlidXRlczoge1xuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgIHNvdXJjZTogXCJjaGlsZHJlblwiLFxuICAgICAgc2VsZWN0b3I6IFwiLmludHJvX2JvZHlcIixcbiAgICB9LFxuICB9LFxuXG4gIGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyb1wiPlxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KX1cbiAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5ib2R5fVxuICAgICAgICAgIG11bHRpbGluZT1cInBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnRybyB0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICBzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8gY29udGFpbmVyIGNvbnRhaW5lci1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvX2JvZHlcIj57YXR0cmlidXRlcy5ib2R5fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5jb25zdCB7IFNwaW5uZXIgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YVxuY29uc3QgeyBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cFxuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY3RjdC1iY2IvcmVjZW50LXZpZGVvc1wiLCB7XG4gIHRpdGxlOiBfXyhcIlJlY2VudCBWaWRlb3NcIiksXG4gIGljb246IFwiZmVlZGJhY2tcIixcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cbiAgZWRpdDogcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VydmVyU2lkZVJlbmRlclxuICAgICAgICBibG9jaz1cImN0Y3QtYmNiL3JlY2VudC12aWRlb3NcIlxuICAgICAgICBhdHRyaWJ1dGVzPXtwcm9wcy5hdHRyaWJ1dGVzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4gIHNhdmU6IHByb3BzID0+IG51bGwsXG59KVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZXRJbmR1c3RyeUxpc3QsIGdldFRvcGljTGlzdCB9IGZyb20gXCIuLi8uLi9kYXRhL3RheG9ub215XCJcbmltcG9ydCB7IGdldEZpbHRlcmVkUG9zdHMsIGdldE1lZGlhIH0gZnJvbSBcIi4uLy4uL2RhdGEvcG9zdHNcIlxuaW1wb3J0IFRheG9ub215U2VsZWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RheG9ub215U2VsZWN0XCJcbmltcG9ydCBTZWxlY3RUYXhvbm9teSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWxlY3RUYXhvbm9teVwiXG5pbXBvcnQgVGF4R3JpZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYXhHcmlkL1wiXG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcbmltcG9ydCBcIi4vcmVzcG9uc2l2ZS5zY3NzXCJcbmltcG9ydCBTY3JvbGxQaWNrZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2Nyb2xsUGlja2VyXCJcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjdGN0LWJjYi90YXgtbWFzb25yeS1mZWVkXCIsIHtcbiAgdGl0bGU6IF9fKFwiSG9tZSDigJMgVGF4b25vbXkgTWFzb25yeSBGZWVkXCIpLFxuICBpY29uOiBcInllcy1hbHRcIixcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cbiAgZWRpdDogcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHNcbiAgICBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXNcIiwgYXR0cmlidXRlcylcbiAgICBjb25zdCBbdGVybXMsIHNldFRlcm1zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbdGF4VGl0bGUsIHNldFRheFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBzZXRUZXJtc0FuZExvYWQgPSAobGlzdCwgdGF4VGl0bGUsIHRheCkgPT4ge1xuICAgICAgc2V0VGF4KHRheClcbiAgICAgIHNldFRlcm1zKGxpc3QpXG4gICAgICBzZXRUYXhUaXRsZSh0YXhUaXRsZSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGNvbnN0IGdldFRlcm1zTGlzdCA9IGFzeW5jIHRheFR5cGUgPT4ge1xuICAgICAgaWYgKHRheFR5cGUgPT09IFwiaW5kdXN0cnlcIikge1xuICAgICAgICByZXR1cm4gZ2V0SW5kdXN0cnlMaXN0KCkudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICBzZXRUZXJtc0FuZExvYWQobGlzdCwgXCJJbmR1c3RyeTpcIiwgXCJpbmR1c3RyeVwiKVxuICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgdGVybUxpc3Q6IGxpc3QsXG4gICAgICAgICAgICBzZWxlY3RlZFRheDogXCJpbmR1c3RyeVwiLFxuICAgICAgICAgICAgY3VyVGF4VGl0bGU6IFwiSW5kdXN0cnk6XCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGF4VHlwZSA9PT0gXCJ0b3BpY1wiKSB7XG4gICAgICAgIHJldHVybiBnZXRUb3BpY0xpc3QoKS50aGVuKGxpc3QgPT4ge1xuICAgICAgICAgIHNldFRlcm1zQW5kTG9hZChsaXN0LCBcIk1hcmtldGluZyBBZHZpY2UgYnkgVG9waWM6XCIsIFwiY2F0ZWdvcmllc1wiKVxuICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgdGVybUxpc3Q6IGxpc3QsXG4gICAgICAgICAgICBzZWxlY3RlZFRheDogXCJjYXRlZ29yaWVzXCIsXG4gICAgICAgICAgICBjdXJUYXhUaXRsZTogXCJNYXJrZXRpbmcgQWR2aWNlIGJ5IFRvcGljOlwiLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldFBvc3RzQnlUZXJtcyA9IGFzeW5jIChlbmRwb2ludCwgdGVybSkgPT4ge1xuICAgICAgc2V0VGVybSh0ZXJtKVxuICAgICAgcmV0dXJuIGdldEZpbHRlcmVkUG9zdHMoeyByZXN0OiBlbmRwb2ludCwgdGF4OiB0YXggfSkudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIHNldFBvc3RzKHBvc3RzKVxuICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgcG9zdHM6IHBvc3RzLCBzZWxlY3RlZFRlcm06IHRlcm0gfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHNldFNsaWRlQXR0cmlidXRlcyA9IGF0dHMgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IHNsaWRlQXR0czogYXR0cyB9KVxuICAgIH1cbiAgICBjb25zdCBzZWxlY3RUYXhQcm9wcyA9IHtcbiAgICAgIHNlbGVjdGVkOlxuICAgICAgICB7IHZhbHVlOiBhdHRyaWJ1dGVzLnNlbGVjdGVkVGF4LCB0aXRsZTogYXR0cmlidXRlcy5jdXJUYXhUaXRsZSB9IHx8XG4gICAgICAgIGZhbHNlLFxuICAgICAgb25DaGFuZ2U6IGdldFRlcm1zTGlzdCxcbiAgICB9XG4gICAgY29uc3QgdGF4UHJvcHMgPSB7XG4gICAgICB0ZXJtczogYXR0cmlidXRlcy50ZXJtTGlzdCB8fCB0ZXJtcyxcbiAgICAgIHRheFR5cGU6IGF0dHJpYnV0ZXMuY3VyVGF4VGl0bGUgfHwgdGF4VGl0bGUsXG4gICAgICBzZWxlY3RlZFRlcm06IGF0dHJpYnV0ZXMuc2VsZWN0ZWRUZXJtIHx8IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6IGdldFBvc3RzQnlUZXJtcyxcbiAgICB9XG4gICAgY29uc3QgZ3JpZFByb3BzID0ge1xuICAgICAgcG9zdHM6IGF0dHJpYnV0ZXMucG9zdHMgfHwgcG9zdHMsXG4gICAgICB0YXg6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRUYXggfHwgdGF4LFxuICAgIH1cbiAgICBjb25zdCBncmlkUHJvcHNTZXJ2ZXIgPSB7XG4gICAgICBwb3N0czpcbiAgICAgICAgcG9zdHMgfHxcbiAgICAgICAgYXR0cmlidXRlcy5wb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBwb3N0LmlkLFxuICAgICAgICAgICAgdGl0bGU6IHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgICAgICAgICBsaW5rOiBwb3N0LmxpbmssXG4gICAgICAgICAgICBhdXRob3I6IHBvc3QuYXV0aG9yLFxuICAgICAgICAgICAgaW1hZ2U6IHBvc3QuX2xpbmtzW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5ocmVmLFxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICB0YXg6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRUYXggfHwgdGF4LFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRheCBwcm9wc1wiLCB0YXhQcm9wcylcbiAgICBjb25zdCBzbGlkZVByb3BzID0ge1xuICAgICAgdGVybXM6IGF0dHJpYnV0ZXMudGVybUxpc3QgfHwgdGVybXMsXG4gICAgICB0eXBlOiB0YXgsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUZXJtOiBhdHRyaWJ1dGVzLnNlbGVjdGVkVGVybSB8fCB0ZXJtLFxuICAgIH1cbiAgICBjb25zdCBKU09OcHJvcHMgPSB7XG4gICAgICBzZWxlY3RUYXhQcm9wczogc2VsZWN0VGF4UHJvcHMsXG4gICAgICB0YXhQcm9wczogdGF4UHJvcHMsXG4gICAgICBzbGlkZVByb3BzOiBzbGlkZVByb3BzLFxuICAgICAgZ3JpZFByb3BzOiBncmlkUHJvcHNTZXJ2ZXIsXG4gICAgfVxuICAgIGNvbnN0IG1hcmt1cCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3RUYXhvbm9teSB7Li4uc2VsZWN0VGF4UHJvcHN9IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRheEZlZWQtYmxvY2std3JhcCBmbGV4IGNvbCBhZnMgamZzXCI+XG4gICAgICAgICAgPFRheG9ub215U2VsZWN0IHsuLi50YXhQcm9wc30gLz5cbiAgICAgICAgICA8U2Nyb2xsUGlja2VyIHsuLi5zbGlkZVByb3BzfSAvPlxuICAgICAgICAgIDxUYXhHcmlkIHsuLi5ncmlkUHJvcHN9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICBzZXRBdHRyaWJ1dGVzKHsgbWFya3VwOiBKU09OLnN0cmluZ2lmeShKU09OcHJvcHMpIH0pXG4gICAgcmV0dXJuIG1hcmt1cFxuICB9LFxuXG4gIHNhdmU6IHByb3BzID0+IG51bGwsXG59KVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3JcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY3RjdC1iY2Ivd2hhdC1pcy1hbnN3ZXJcIiwge1xuICB0aXRsZTogX18oXCJXaGF0IElzIC0gQW5zd2VyIEJsb2NrXCIpLFxuICBpY29uOiBcInllcy1hbHRcIixcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cbiAgZWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyb1wiPlxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KX1cbiAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgIG11bHRpbGluZT1cInBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnRybyB0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICBzYXZlOiBwcm9wcyA9PiBudWxsLFxufSlcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHNcblxuY29uc3QgQ3VzdG9taXplckJ1dHRvbiA9ICh7IHByb3BzIH0pID0+IHtcbiAgbGV0IGlzQWN0aXZlXG4gIGlmIChwcm9wcy5jbGFzc0xhYmVsID09IHByb3BzLmFjdGl2ZVN0YXRlKSB7XG4gICAgaXNBY3RpdmUgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgaXNBY3RpdmUgPSBmYWxzZVxuICB9XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShpc0FjdGl2ZSlcbiAgY29uc3Qgc2V0dGVyID0gcHJvcHMuc2V0dGVyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgc2V0dGVyKGUpXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBrZXk9e3Byb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCl9XG4gICAgICBpZD17cHJvcHMuY2xhc3NMYWJlbCArIFwiLVwiICsgcHJvcHMudHlwZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMudHlwZX0tYnV0dG9uIGN1c3RvbWl6ZXItYnV0dG9uYH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgZGF0YS1hY3RpdmU9e2FjdGl2ZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5jbGFzc0xhYmVsfVxuICAgID5cbiAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemVyQnV0dG9uXG4iLCJpbXBvcnQgc2Nyb2xsU2xpZGVCeUtleSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25hbGl0eS9zY3JvbGxTbGlkZUJ5S2V5XCJcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3QgW2NsYXNzTmFtZSwgc2V0Q2xhc3NOYW1lXSA9IHVzZVN0YXRlKFwic2xpZGVcIilcbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5hY3RpdmUpIHtcbiAgICAgIHNldENsYXNzTmFtZShcInNsaWRlIGFjdGl2ZS1zbGlkZVwiKVxuICAgICAgc2V0U3R5bGUoeyBiYWNrZ3JvdW5kSW1hZ2U6IHByb3BzLmJhY2tncm91bmQgfSlcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgc2Nyb2xsU2xpZGVCeUtleSlcbiAgfSwgW3Byb3BzLmFjdGl2ZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXNsaWRlXCIpXG4gICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICBjb25zdCBkaXN0ID0gYWN0aXZlU2xpZGUub2Zmc2V0VG9wXG4gICAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtY29udGFpbmVyXCIpXG4gICAgICBzbGlkZUNvbnRhaW5lci5zdHlsZS50b3AgPSBgLSR7ZGlzdH1weGBcbiAgICB9XG4gIH0sIFtjbGFzc05hbWVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtwcm9wcy5uYW1lfVxuICAgICAgPGEgaHJlZj17cHJvcHMubGlua30gY2xhc3NOYW1lPVwic2xpZGUtYnV0dG9uXCI+XG4gICAgICAgIEV4cGxvcmUgSW5kdXN0cnlcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFNsaWRlIGZyb20gXCIuL1NsaWRlXCJcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHNjcm9sbC1waWNrZXIgJHtwcm9wcy50eXBlfSAke3Byb3BzLmFjdGl2ZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZlLXdpbmRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtwcm9wcy50ZXJtcy5tYXAodGVybSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChwYXJzZUludChwcm9wcy5zZWxlY3RlZFRlcm0pID09IHRlcm0uaWQpIHtcbiAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2xpZGVQcm9wcyA9IHtcbiAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAgICAgICAgIG5hbWU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8U2xpZGUgey4uLnNsaWRlUHJvcHN9IC8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCJjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHByb3BzLnNlbGVjdGVkLnZhbHVlKVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRTZWxlY3RlZChlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBjaGVja0lmU2VsZWN0ZWQgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IHByb3BzLnNlbGVjdGVkLnZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJzZWxlY3RlZFwiXG4gICAgfVxuICB9XG4gIGNvbnN0IHNlbGVjdERlZmF1bHQgPSAoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5zZWxlY3RlZCkge1xuICAgICAgcmV0dXJuIFwic2VsZWN0ZWRcIlxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuICBjb25zb2xlLmxvZyhcInNlbGVjdFByb3BzXCIsIHByb3BzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXhvbm9teS1zZWxlY3RcIj5DaG9vc2UgYSBUYXhvbm9teTo8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBuYW1lPVwidGF4b25vbXktc2VsZWN0XCJcbiAgICAgICAgaWQ9XCJ0YXhvbm9teS1zZWxlY3RcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHsuLi4ocHJvcHMuc2VsZWN0ZWQgPyBcIlwiIDogXCJzZWxlY3RlZFwiKX0gZGlzYWJsZWQgdmFsdWU+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIC0tIHNlbGVjdCBhbiBvcHRpb24gLS17XCIgXCJ9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW5kdXN0cnlcIj5JbmR1c3RyeTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9waWNcIj5Ub3BpYzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7IGdldE1lZGlhIH0gZnJvbSBcIi4uLy4uL2RhdGEvcG9zdHNcIlxuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlckdyaWQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlci1ncmlkIGZsZXggY29sIGZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LTEgZmxleCByb3cgamZzYlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+PC9hcnRpY2xlPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+PC9hcnRpY2xlPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+PC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy0yIGZsZXggcm93IGpmc2JcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPjwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPjwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPjwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG4gIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlU3RhdGUoXCJpbmR1c3RyeVwiKVxuICBjb25zdCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShwbGFjZWhvbGRlckdyaWQpXG4gIGNvbnN0IGZpbGxQb3N0cyA9IHBvc3RzID0+IHtcbiAgICBsZXQgbWlkZGxlXG4gICAgaWYgKHByb3BzLnRheCA9PT0gXCJpbmR1c3RyeVwiKSB7XG4gICAgICBtaWRkbGUgPSAyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50YXggPT09IFwiY2F0ZWdvcmllc1wiKSB7XG4gICAgICBzZXRTcGxpdChcImNhdGVnb3JpZXNcIilcbiAgICAgIG1pZGRsZSA9IDFcbiAgICB9XG4gICAgY29uc3QgZ2V0SW1hZ2UgPSBwb3N0ID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gZ2V0TWVkaWEoeyByZXN0OiBwb3N0Ll9saW5rc1tcIndwOmZlYXR1cmVkbWVkaWFcIl1bMF0uaHJlZiB9KVxuICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgfVxuICAgIGNvbnN0IHBvc3RzUm93T25lID0gcG9zdHMuc2xpY2UoMCwgbWlkZGxlKS5tYXAocG9zdCA9PiB7XG4gICAgICBnZXRJbWFnZShwb3N0KVxuICAgICAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3RcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2FydGljbGU+XG4gICAgfSlcbiAgICBjb25zdCBwb3N0c1Jvd1R3byA9IHBvc3RzLnNsaWNlKG1pZGRsZSwgcG9zdHMubGVuZ3RoIC0gMSkubWFwKHBvc3QgPT4ge1xuICAgICAgZ2V0SW1hZ2UocG9zdClcbiAgICAgIHJldHVybiA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9hcnRpY2xlPlxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBjb2wgZnVsbCAke3NwbGl0fWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy0xIGZsZXggcm93IGpmc2JcIj57cG9zdHNSb3dPbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LTIgZmxleCByb3cgamZzYlwiPntwb3N0c1Jvd1R3b308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5wb3N0cy5sZW5ndGgpIHtcbiAgICAgIHNldEdyaWQoZmlsbFBvc3RzKHByb3BzLnBvc3RzKSlcbiAgICB9XG4gIH0sIFtwcm9wcy5wb3N0c10pXG5cbiAgcmV0dXJuIGdyaWRcbn1cbiIsImltcG9ydCB7IGdldEluZHVzdHJ5TGlzdCwgZ2V0VG9waWNMaXN0IH0gZnJvbSBcIi4uL2RhdGEvdGF4b25vbXlcIlxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBlLnRhcmdldC5vcHRpb25zW2UudGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQubmFtZSlcbiAgICBwcm9wcy5vbkNoYW5nZShcbiAgICAgIGUudGFyZ2V0LnZhbHVlLFxuICAgICAgZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0Lm5hbWVcbiAgICApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50ZXJtcy5sZW5ndGgpIHtcbiAgICAgIHNldE91dHB1dChcbiAgICAgICAgcHJvcHMudGVybXMubWFwKHRlcm0gPT4ge1xuICAgICAgICAgIGxldCBvdXRwdXQgPSBcIlwiXG4gICAgICAgICAgaWYgKHRlcm0uaWQgPT0gcHJvcHMuc2VsZWN0ZWRUZXJtKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9e3Rlcm0uaWR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm0uX2xpbmtzW1wid3A6cG9zdF90eXBlXCJdWzBdLmhyZWZ9XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXJtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9e3Rlcm0uaWR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm0uX2xpbmtzW1wid3A6cG9zdF90eXBlXCJdWzBdLmhyZWZ9XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXJtLm5hbWUgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH0sIFtwcm9wcy50ZXJtc10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJpbmR1c3RyeS1zZWxlY3RcIj57cHJvcHMudGF4VHlwZX08L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBuYW1lPVwiaW5kdXN0cnktc2VsZWN0XCJcbiAgICAgICAgaWQ9XCJpbmR1c3RyeS1zZWxlY3RcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICB7b3V0cHV0fVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZFBvc3RzID0gcHJvcHMgPT4ge1xuICBsZXQgbnVtUG9zdHNcbiAgaWYgKHByb3BzLnRheCA9PT0gXCJjYXRlZ29yaWVzXCIpIHtcbiAgICBudW1Qb3N0cyA9IDRcbiAgfSBlbHNlIGlmIChwcm9wcy50YXggPT09IFwiaW5kdXN0cnlcIikge1xuICAgIG51bVBvc3RzID0gNVxuICB9XG4gIHJldHVybiB3aW5kb3dcbiAgICAuZmV0Y2goYCR7cHJvcHMucmVzdH0mcGVyX3BhZ2U9JHtudW1Qb3N0c31gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHBvc3RzID0+IHBvc3RzKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QXV0aG9yTWV0YSA9IHByb3BzID0+IHt9XG5cbmV4cG9ydCBjb25zdCBnZXRNZWRpYSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIHdpbmRvd1xuICAgIC5mZXRjaChgJHtwcm9wcy5yZXN0fWApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oaW1nID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGltZylcbiAgICAgIGNvbnN0IHBpY2tlZCA9ICgoeyBhdXRob3IgfSkgPT4gKHsgYXV0aG9yIH0pKShpbWcpXG4gICAgICByZXR1cm4gcGlja2VkXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZlYXR1cmVkSW1hZ2VVcmwgPSBhc3luYyBwcm9wcyA9PiB7XG4gIHJldHVybiB3aW5kb3dcbiAgICAuZmV0Y2goYCR7cHJvcHMucmVzdH1gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGltZyA9PiB7XG4gICAgICBpZiAodHlwZW9mIGltZy5tZWRpYV9kZXRhaWxzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBpbWcubWVkaWFfZGV0YWlscy5zaXplcy5sYXJnZS5zb3VyY2VfdXJsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBmaW5kIGZlYXR1cmVkIG1lZGlhXCIpXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gICAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCBnZXRJbmR1c3RyeUxpc3QgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3dcbiAgICAuZmV0Y2goXCIvd3AtanNvbi93cC92Mi9pbmR1c3RyeVwiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHRlcm1zID0+IHRlcm1zKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9waWNMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gd2luZG93XG4gICAgLmZldGNoKFwiL3dwLWpzb24vd3AvdjIvY2F0ZWdvcmllc1wiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHRlcm1zID0+IHRlcm1zKVxufVxuIiwiY29uc3QgbW92ZSA9IHVwT3JEb3duID0+IHtcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWNvbnRhaW5lclwiKVxuICBjb25zdCBkaXN0RnJvbVRvcCA9IHBhcnNlSW50KHNsaWRlQ29udGFpbmVyLnN0eWxlLnRvcClcbiAgY29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1zbGlkZVwiKVxuICBjb25zdCBwcmV2aW91c1NsaWRlID0gYWN0aXZlU2xpZGUucHJldmlvdXNTaWJsaW5nXG4gIGNvbnN0IG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRTaWJsaW5nXG4gIGlmICh1cE9yRG93biA9PSBcInVwXCIgJiYgbmV4dFNsaWRlKSB7XG4gICAgc2xpZGVDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZGlzdEZyb21Ub3AgLSAyMDB9cHhgXG4gICAgYWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zbGlkZVwiKVxuICAgIG5leHRTbGlkZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNsaWRlXCIpXG4gIH0gZWxzZSBpZiAodXBPckRvd24gPT0gXCJkb3duXCIgJiYgcHJldmlvdXNTbGlkZSkge1xuICAgIHNsaWRlQ29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2Rpc3RGcm9tVG9wICsgMjAwfXB4YFxuICAgIGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2xpZGVcIilcbiAgICBwcmV2aW91c1NsaWRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2xpZGVcIilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlID0+IHtcbiAgY29uc3Qga2V5Q29kZSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgMzg6XG4gICAgICBtb3ZlKFwidXBcIilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA0MDpcbiAgICAgIG1vdmUoXCJkb3duXCIpXG4gICAgICBicmVha1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9