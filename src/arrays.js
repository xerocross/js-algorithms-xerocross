export default {
  isSorted : function(arr, compareFunction) {
    var oneBeforeLast = arr.length - 1;
    for (var i = 0; i < oneBeforeLast; i++) {
      if (compareFunction(arr[i], arr[i+1]) > 0 ) {
        return false;
      }
    }
    return true;
  },
  isContains : function(arr, elt, equalsFunction) {
    for (let i = 0; i < arr.length; i++) {
      if (equalsFunction(arr[i], elt)){
        return true;
      }
    }
    return false;
  },
  isPermutation : function(arr1, arr2, equalsFunction) {
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (!this.isContains(arr2, arr1[i], equalsFunction)) {
        return false;
      }
    }
    return true;
  },
  swap : function(arr, i, j) {
    let placeholder = arr[i];
    arr[i] = arr[j];
    arr[j] = placeholder;
  },
  shallowCopy : function(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
      copy[i] = arr[i];
    }
    return copy;
  },
  buildRandomSequence : function(length, max) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var newArray = [];
    for (let i = 0; i < length; i++) {
      newArray[i] = getRandomInt(max);
    }
    return newArray;
  },
  print : function(arr) {
    var str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i] + " "
    }
    return str;
  }
}
