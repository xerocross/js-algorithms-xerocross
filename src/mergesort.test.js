import Mergesort from "./mergesort.js";
import Arrays from "./arrays.js"

test('can sort random arrays of integers', () => {
  var finalResult = true;
  for(let len = 0; len < 20; len++) {
    let max = 1000;
    let testArray = Arrays.buildRandomSequence(len, max);
    let compareFunction = (x,y) => x - y;
    let resultingArray = Mergesort.sort(testArray, compareFunction);
    let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
    if (resultIsSorted == false) {
      finalResult = false;
    }
  }
  expect(finalResult).toBe(true);
});
