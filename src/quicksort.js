import Arrays from "./arrays.js"
import ArrayAlias from "./arrayAlias.js"
import weAssert from "./we-assert.js"

var quicksort = function (arr, compareFunction) {
  let arrayCopy = Arrays.shallowCopy(arr);
  quicksortRecursion(arrayCopy, 0, arrayCopy.length - 1, compareFunction)
  return arrayCopy;
}

var quicksortRecursion = function (arr, lo, high, compareFunction) {
  if (lo < high) {
    var p = partition(arr, lo, high, compareFunction);
    quicksortRecursion(arr, lo, p, compareFunction);
    quicksortRecursion(arr, p + 1, high, compareFunction);
  }
}

// the input indexes lo and high are both inclusive, so
// here we will partition the sub-sequence of elements
// arr_lo, ..., arr_high
var partition = function (arr, lo, high, compareFunction) {
  let i = lo - 1;
  let j = high + 1;
  var pivot = arr[lo];
  while (true) {
    do {
      i++;
    } while (compareFunction(arr[i], pivot) < 0)
    // since pivot is a value attained in the array,
    // the while loop condition definitely evaluates
    // false before reaching the end of the array.
    // Now we have arr[k] < pivot for all k < i
    do {
      j--;
    } while (compareFunction(pivot, arr[j]) < 0)
    // similarly, j >= 0 and arr[k] > pivot for all k > j
    weAssert.that(compareFunction(arr[i], pivot) >= 0 && compareFunction(arr[j], pivot) <= 0, "arr[i] >= pivot and arr[j] <= pivot");


    if (i < j) {
      weAssert.that(lo <= i && i <= high, "lo <= i && i <= high");
      weAssert.that(lo <= j && j <= high, "lo <= j && j <= high");
      Arrays.swap(arr, i, j);
    } else {
      // since we always choose the pivot at lo, we know that
      // j never goes left further than lo.
      weAssert.that(lo <= j, "lo <= j");
      // therefore j is a partition point of the array between
      // lo and high
      return j;
    }
  }
}

export default {
  sort : quicksort
}
