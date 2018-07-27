(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("xA", [], factory);
	else if(typeof exports === 'object')
		exports["xA"] = factory();
	else
		root["xA"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isSorted: function isSorted(arr, compareFunction) {
    var oneBeforeLast = arr.length - 1;
    for (var i = 0; i < oneBeforeLast; i++) {
      if (compareFunction(arr[i], arr[i + 1]) > 0) {
        return false;
      }
    }
    return true;
  },
  swap: function swap(arr, i, j) {
    var placeholder = arr[i];
    arr[i] = arr[j];
    arr[j] = placeholder;
  },
  shallowCopy: function shallowCopy(arr) {
    var copy = [];
    for (var i = 0; i < arr.length; i++) {
      copy[i] = arr[i];
    }
    return copy;
  },
  buildRandomSequence: function buildRandomSequence(length, max) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var newArray = [];
    for (var i = 0; i < length; i++) {
      newArray[i] = getRandomInt(max);
    }
    return newArray;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertionSort = exports.bubbleSort = undefined;

var _bubblesort = __webpack_require__(2);

var _bubblesort2 = _interopRequireDefault(_bubblesort);

var _insertionSort = __webpack_require__(3);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bubbleSort = exports.bubbleSort = _bubblesort2.default.sort;
var insertionSort = exports.insertionSort = _insertionSort2.default.sort;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrays = __webpack_require__(0);

var _arrays2 = _interopRequireDefault(_arrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// arr should be a JavaScript array of any type T
// compareFunction is the usual thing -- a function
// defined on pairs (T x,T y) that returns integers
// this function does not mutate the array
var bubblesort = function bubblesort(arr, compareFunction) {
  var copyOfArray = _arrays2.default.shallowCopy(arr);
  var indexOutOfOrder = comparisonPass(copyOfArray, compareFunction);
  while (indexOutOfOrder > -1) {
    _arrays2.default.swap(copyOfArray, indexOutOfOrder - 1, indexOutOfOrder);
    indexOutOfOrder = comparisonPass(copyOfArray, compareFunction);
  }
  return copyOfArray;
};

var comparisonPass = function comparisonPass(arr, compareFunction) {
  var index = 1;
  var len = arr.length;
  for (; index < len; index++) {
    var comparisonValue = compareFunction(arr[index - 1], arr[index]);
    if (comparisonValue > 0) {
      return index;
    }
  }
  return -1;
};

exports.default = {
  sort: bubblesort
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrays = __webpack_require__(0);

var _arrays2 = _interopRequireDefault(_arrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insertionSort = function insertionSort(arr, compareFunction) {
  var sortedPartCutoffIndex = 1;
  // The subsequence [0, sortedPartCutoffIndex) is
  // sorted.  Note that we exclude the element at index
  // sortedPartCutoffIndex
  var copyOfArray = _arrays2.default.shallowCopy(arr);
  var len = arr.length;
  for (; sortedPartCutoffIndex < len; sortedPartCutoffIndex++) {
    insertNextElement(copyOfArray, compareFunction, sortedPartCutoffIndex);
  }
  return copyOfArray;
};

var insertNextElement = function insertNextElement(arr, compareFunction, sortedPartCutoffIndex) {
  var newIndexValue = sortedPartCutoffIndex;
  while (newIndexValue > 0 && compareFunction(arr[newIndexValue - 1], arr[newIndexValue]) > 0) {
    _arrays2.default.swap(arr, newIndexValue - 1, newIndexValue);
    newIndexValue--;
  }
  return;
};

exports.default = {
  sort: insertionSort
};

/***/ })
/******/ ]);
});