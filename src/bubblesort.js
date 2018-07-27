import Arrays from "./arrays.js"

// arr should be a JavaScript array of any type T
// compareFunction is the usual thing -- a function
// defined on pairs (T x,T y) that returns integers
// this function does not mutate the array
var bubblesort = function (arr, compareFunction) {
  let copyOfArray = Arrays.shallowCopy(arr);
  let indexOutOfOrder = comparisonPass(copyOfArray, compareFunction);
  while (indexOutOfOrder > -1) {
    Arrays.swap(copyOfArray, indexOutOfOrder - 1, indexOutOfOrder);
    indexOutOfOrder = comparisonPass(copyOfArray, compareFunction);
  }
  return copyOfArray;
}

var comparisonPass = function (arr, compareFunction) {
  let index = 1;
  let len = arr.length;
  for (; index < len; index++) {
    var comparisonValue = compareFunction(arr[index - 1],arr[index]);
    if (comparisonValue > 0) {
      return index;
    }
  }
  return -1;
}

export default {
  sort : bubblesort
}
