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
  }
}
