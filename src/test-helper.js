import Arrays from "./arrays.js"

export default {
  testSortFunction : function(listOfArrays, sortFunction, compareFunction) {
    let finalResult = true;
    let numSequences = listOfArrays.length;
    for(let i = 0; i < numSequences; i++) {
      let testArray = listOfArrays[i];
      let compareFunction = (x,y) => x - y;
      let resultingArray = sortFunction(testArray, compareFunction);
      let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
      let resultIsPermutation = Arrays.isPermutation(testArray, resultingArray, (x,y)=>x==y);
      if (!(resultIsSorted && resultIsPermutation)) {
        finalResult = false;
      }
    }
    return finalResult;
  }
}
