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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
  isContains: function isContains(arr, elt, equalsFunction) {
    for (var i = 0; i < arr.length; i++) {
      if (equalsFunction(arr[i], elt)) {
        return true;
      }
    }
    return false;
  },
  isPermutation: function isPermutation(arr1, arr2, equalsFunction) {
    if (arr1.length != arr2.length) {
      return false;
    }
    var len = arr1.length;
    var orderedArray = [];
    for (var i = 0; i < len; i++) {
      orderedArray[i] = i;
    }
    var mapFromArr1ToArr2 = [];
    outerloop: for (var _i = 0; _i < len; _i++) {
      var elt = arr1[_i];
      for (var j = 0; j < orderedArray.length; j++) {
        if (equalsFunction(elt, arr2[orderedArray[j]])) {
          orderedArray.splice(j, 1);
          continue outerloop;
        }
      }
      return false;
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
  },
  print: function print(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
      str += arr[i] + " ";
    }
    return str;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  buildArrayAlias: function buildArrayAlias(arr, indexL, indexR) {
    if (typeof indexL == "undefined") {
      indexL = 0;
    }
    if (typeof indexR == "undefined") {
      indexR = arr.length;
    }
    var len = indexR - indexL;
    var alias = {
      isAlias: true,
      get: function get(i) {
        if (arr.isAlias) {
          return arr.get(indexL + i);
        }
        return arr[indexL + i];
      },
      set: function set(i, val) {
        if (arr.isAlias) {
          arr.set(indexL + i, val);
        } else {
          arr[indexL + i] = val;
        }
      },
      length: len,
      getRawArray: function getRawArray() {
        return arr;
      },
      buildRawArray: function buildRawArray() {
        var rawArray = [];
        for (var i = 0; i < len; i++) {
          rawArray.push(this.get(i));
        }
        return rawArray;
      },
      swap: function swap(i, j) {
        var placeholder = this.get(i);
        this.set(i, this.get(j));
        this.set(j, placeholder);
      }
    };
    return alias;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quicksort = exports.mergesort = exports.insertionSort = exports.bubbleSort = undefined;

var _bubblesort = __webpack_require__(3);

var _bubblesort2 = _interopRequireDefault(_bubblesort);

var _insertionSort = __webpack_require__(4);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

var _mergesort = __webpack_require__(5);

var _mergesort2 = _interopRequireDefault(_mergesort);

var _quicksort = __webpack_require__(6);

var _quicksort2 = _interopRequireDefault(_quicksort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bubbleSort = exports.bubbleSort = _bubblesort2.default.sort;
var insertionSort = exports.insertionSort = _insertionSort2.default.sort;
var mergesort = exports.mergesort = _mergesort2.default.sort;
var quicksort = exports.quicksort = _quicksort2.default.sort;

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
/* 4 */
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrays = __webpack_require__(0);

var _arrays2 = _interopRequireDefault(_arrays);

var _arrayAlias = __webpack_require__(1);

var _arrayAlias2 = _interopRequireDefault(_arrayAlias);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildArrayAlias = _arrayAlias2.default.buildArrayAlias;
// array alias is a convenience that also helps
// reduce the explosion of indexes that can result
// from trying to implement mergesort
// basically it is just a way to interact with a
// subsequence of an array almost as if it were
// a distinct array from 0 to n

var mergesort = function mergesort(arr, compareFunction) {
  var resultArray = buildArrayAlias(_arrays2.default.shallowCopy(arr));
  mergesortRecursion(resultArray, compareFunction);
  return resultArray.buildRawArray();
};

// we expect arr to be an array alias
var mergesortRecursion = function mergesortRecursion(arr, compareFunction) {
  var len = arr.length;
  if (len <= 1) {
    // do nothing
  } else if (len == 2) {
    if (compareFunction(arr.get(0), arr.get(1)) > 0) {
      var placeholder = arr.get(0);
      arr.set(0, arr.get(1));
      arr.set(1, placeholder);
    }
    // now the pair is sorted
  } else {
    var half = Math.floor(len / 2);
    var arrL = buildArrayAlias(arr, 0, half);
    var arrR = buildArrayAlias(arr, half, len);
    mergesortRecursion(arrL, compareFunction);
    // now arrL is sorted
    mergesortRecursion(arrR, compareFunction);
    // now arrR is sorted
    var mergedArray = mergeTwoSortedArrays(arrL, arrR, compareFunction);
    // mergedArray is actually a truly distinct array
    // As of this writing, I am not aware of any new
    // to do this kind of merging in place
    // so we must
    for (var i = 0; i < mergedArray.length; i++) {
      arr.set(i, mergedArray.get(i));
    }
  }
  //now arr is sorted
  return arr;
};

// this function offers no guarantee of behavior
// if either of the two input arrays is not sorted
var mergeTwoSortedArrays = function mergeTwoSortedArrays(arrL, arrR, compareFunction) {
  var indexLeft = 0;
  var indexRight = 0;
  var leftLength = arrL.length;
  var rightLength = arrR.length;
  var mergedArray = [];
  while (indexLeft < leftLength && indexRight < rightLength) {
    // if there are still elements left in both the right array
    // and the left array then we have to compare them and pick
    // the lesser one
    var comparisonValue = compareFunction(arrL.get(indexLeft), arrR.get(indexRight));
    if (comparisonValue < 0) {
      mergedArray.push(arrL.get(indexLeft));
      indexLeft++;
    } else {
      mergedArray.push(arrR.get(indexRight));
      indexRight++;
    }
  }
  // only one of the following two while conditions
  // should execute
  while (indexLeft < leftLength) {
    mergedArray.push(arrL.get(indexLeft));
    indexLeft++;
  }
  while (indexRight < rightLength) {
    mergedArray.push(arrR.get(indexRight));
    indexRight++;
  }
  return buildArrayAlias(mergedArray);
};

exports.default = {
  sort: mergesort
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrays = __webpack_require__(0);

var _arrays2 = _interopRequireDefault(_arrays);

var _arrayAlias = __webpack_require__(1);

var _arrayAlias2 = _interopRequireDefault(_arrayAlias);

var _weAssert = __webpack_require__(7);

var _weAssert2 = _interopRequireDefault(_weAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quicksort = function quicksort(arr, compareFunction) {
  var arrayCopy = _arrays2.default.shallowCopy(arr);
  quicksortRecursion(arrayCopy, 0, arrayCopy.length - 1, compareFunction);
  return arrayCopy;
};

var quicksortRecursion = function quicksortRecursion(arr, lo, high, compareFunction) {
  if (lo < high) {
    var p = partition(arr, lo, high, compareFunction);
    quicksortRecursion(arr, lo, p, compareFunction);
    quicksortRecursion(arr, p + 1, high, compareFunction);
  }
};

// the input indexes lo and high are both inclusive, so
// here we will partition the sub-sequence of elements
// arr_lo, ..., arr_high
var partition = function partition(arr, lo, high, compareFunction) {
  var i = lo - 1;
  var j = high + 1;
  var pivot = arr[lo];
  while (true) {
    do {
      i++;
    } while (compareFunction(arr[i], pivot) < 0);
    // since pivot is a value attained in the array,
    // the while loop condition definitely evaluates
    // false before reaching the end of the array.
    // Now we have arr[k] < pivot for all k < i
    do {
      j--;
    } while (compareFunction(pivot, arr[j]) < 0);
    // similarly, j >= 0 and arr[k] > pivot for all k > j
    _weAssert2.default.that(compareFunction(arr[i], pivot) >= 0 && compareFunction(arr[j], pivot) <= 0, "arr[i] >= pivot and arr[j] <= pivot");

    if (i < j) {
      _weAssert2.default.that(lo <= i && i <= high, "lo <= i && i <= high");
      _weAssert2.default.that(lo <= j && j <= high, "lo <= j && j <= high");
      _arrays2.default.swap(arr, i, j);
    } else {
      // since we always choose the pivot at lo, we know that
      // j never goes left further than lo.
      _weAssert2.default.that(lo <= j, "lo <= j");
      // therefore j is a partition point of the array between
      // lo and high
      return j;
    }
  }
};

exports.default = {
  sort: quicksort
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  that: function that(statement, message) {
    if (!statement) {
      throw new Error("false assertion: " + message);
    }
  }
};

/***/ })
/******/ ]);
});