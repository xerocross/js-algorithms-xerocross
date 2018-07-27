import Arrays from "./arrays.js"
import ArrayAlias from "./arrayAlias.js"

var buildArrayAlias = ArrayAlias.buildArrayAlias;
// array alias is a convenience that also helps
// reduce the explosion of indexes that can result
// from trying to implement mergesort
// basically it is just a way to interact with a
// subsequence of an array almost as if it were
// a distinct array from 0 to n

var mergesort = function (arr, compareFunction) {
  let resultArray = buildArrayAlias(Arrays.shallowCopy(arr));
  mergesortRecursion(resultArray, compareFunction);
  return resultArray.buildRawArray();
}

// we expect arr to be an array alias
var mergesortRecursion = function (arr, compareFunction) {
  let len = arr.length;
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
    var half = Math.floor(len/2);
    let arrL = buildArrayAlias(arr, 0, half);
    let arrR = buildArrayAlias(arr, half, len);
    mergesortRecursion(arrL, compareFunction);
    // now arrL is sorted
    mergesortRecursion(arrR, compareFunction);
    // now arrR is sorted
    let mergedArray = mergeTwoSortedArrays(arrL, arrR, compareFunction);
    // mergedArray is actually a truly distinct array
    // As of this writing, I am not aware of any new
    // to do this kind of merging in place
    // so we must
    for (let i = 0; i < mergedArray.length; i++) {
      arr.set(i, mergedArray.get(i));
    }
  }
  //now arr is sorted
  return arr;
}

// this function offers no guarantee of behavior
// if either of the two input arrays is not sorted
var mergeTwoSortedArrays = function(arrL, arrR, compareFunction) {
  let indexLeft = 0;
  let indexRight = 0;
  let leftLength = arrL.length;
  let rightLength = arrR.length;
  let mergedArray = [];
  while (indexLeft < leftLength && indexRight < rightLength) {
    // if there are still elements left in both the right array
    // and the left array then we have to compare them and pick
    // the lesser one
    let comparisonValue = compareFunction(arrL.get(indexLeft), arrR.get(indexRight));
    if (comparisonValue < 0) {
      mergedArray.push(arrL.get(indexLeft));
      indexLeft++;
    } else {
      mergedArray.push(arrR.get(indexRight));
      indexRight++
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
    indexRight++
  }
  return buildArrayAlias(mergedArray);
}

export default {
  sort : mergesort
}
