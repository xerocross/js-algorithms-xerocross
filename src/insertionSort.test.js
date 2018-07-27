import InsertionSort from "./insertionSort.js";
import Arrays from "./arrays.js"

test('can sort random arrays of integers', () => {
  var finalResult = true;
  for(let len = 0; len < 20; len++) {
    let testArray = Arrays.buildRandomSequence(len, 1000);
    let compareFunction = (x,y) => x - y;
    let resultingArray = InsertionSort.sort(testArray, compareFunction);
    let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
    if (resultIsSorted == false) {
      finalResult = false;
    }
  }
  expect(finalResult).toBe(true);
});
