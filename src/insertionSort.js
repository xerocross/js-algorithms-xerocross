import Arrays from "./arrays.js"

var insertionSort = function (arr, compareFunction) {
  var sortedPartCutoffIndex = 1;
  // The subsequence [0, sortedPartCutoffIndex) is
  // sorted.  Note that we exclude the element at index
  // sortedPartCutoffIndex
  var copyOfArray = Arrays.shallowCopy(arr);
  var len = arr.length;
  for (; sortedPartCutoffIndex < len; sortedPartCutoffIndex++) {
    insertNextElement(copyOfArray, compareFunction, sortedPartCutoffIndex);
  }
  return copyOfArray;
}

var insertNextElement = function (arr, compareFunction, sortedPartCutoffIndex) {
  var newIndexValue = sortedPartCutoffIndex;
  while (newIndexValue > 0 && compareFunction(arr[newIndexValue - 1], arr[newIndexValue]) > 0) {
    Arrays.swap(arr, newIndexValue - 1, newIndexValue);
    newIndexValue--;
  }
  return;
}

export default {
  sort: insertionSort
}
