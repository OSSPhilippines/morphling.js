module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filters = __webpack_require__(1);

Object.keys(_filters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filters[key];
    }
  });
});

var filters = _interopRequireWildcard(_filters);

var _attributes = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
  var elemAttrs = (0, _attributes.getMorphAttributes)();
  elemAttrs.forEach(function (elemAttr) {
    try {
      elemAttr.forEach(function (attr) {
        var el = attr.el,
            name = attr.name,
            value = attr.value;

        var filter = name.split('.')[1];
        var func = '_' + filter;
        filters[func](el, value);
      });
    } catch (e) {
      console.error('Morphling Error:', e);
      return;
    }
  });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _capitalize = __webpack_require__(2);

Object.keys(_capitalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _capitalize[key];
    }
  });
});

var _lowercase = __webpack_require__(3);

Object.keys(_lowercase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lowercase[key];
    }
  });
});

var _uppercase = __webpack_require__(4);

Object.keys(_uppercase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uppercase[key];
    }
  });
});

var _reverse = __webpack_require__(5);

Object.keys(_reverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reverse[key];
    }
  });
});

var _truncate = __webpack_require__(6);

Object.keys(_truncate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _truncate[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function doIt(data, opts) {
  return '' + data.charAt(0).toUpperCase() + data.substring(1);
}

var capitalize = exports.capitalize = function capitalize(data, opts) {
  return doIt(data, opts);
};

var _capitalize = exports._capitalize = function _capitalize(el, value) {
  var data = el.textContent;
  el.innerHTML = doIt(data, value);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function doIt(data, opts) {
  return data.toLowerCase();
}

var lowercase = exports.lowercase = function lowercase(data, opts) {
  return doIt(data, opts);
};

var _lowercase = exports._lowercase = function _lowercase(el, value) {
  var data = el.textContent;
  el.innerHTML = doIt(data, value);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function doIt(data, opts) {
  return data.toUpperCase();
}

var uppercase = exports.uppercase = function uppercase(data, opts) {
  return doIt(data, opts);
};

var _uppercase = exports._uppercase = function _uppercase(el, value) {
  var data = el.textContent;
  el.innerHTML = doIt(data, value);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function doIt(data, opts) {
  return data.split('').reverse().join('');
}

var reverse = exports.reverse = function reverse(data, opts) {
  return doIt(data, opts);
};

var _reverse = exports._reverse = function _reverse(el, value) {
  var data = el.textContent;
  el.innerHTML = doIt(data, value);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function doIt(data, opts) {
  return data.substr(0, opts) + '\u2026';
}

var truncate = exports.truncate = function truncate(data, opts) {
  return doIt(data, opts);
};

var _truncate = exports._truncate = function _truncate(el, value) {
  var data = el.textContent;
  el.innerHTML = doIt(data, value);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMorphAttributes = undefined;

var _invalidTags = __webpack_require__(8);

var _invalidTags2 = _interopRequireDefault(_invalidTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getElementAttrs(el) {
  return [].slice.call(el.attributes).map(function (attr) {
    return {
      el: el,
      name: attr.name,
      value: attr.value
    };
  });
}

var getMorphAttributes = exports.getMorphAttributes = function getMorphAttributes() {
  var elemsRaw = document.body.getElementsByTagName('*');
  var elemsArr = Array.prototype.slice.call(elemsRaw);
  var attributes = [];
  elemsArr.forEach(function (elem) {
    if (_invalidTags2.default.includes(elem.tagName)) return;
    attributes.push(getElementAttrs(elem));
  });
  return attributes;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = ["div","DIV","script","SCRIPT"]

/***/ })
/******/ ]);