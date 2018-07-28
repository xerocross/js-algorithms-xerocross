import Quicksort from "./quicksort.js";
import Arrays from "./arrays.js"

test("can sort pre-defined array",function(){
  let testArray = [873, 928, 436, 689, 347, 649];
  let compareFunction = (x,y) => x - y;
  let resultingArray = Quicksort.sort(testArray, compareFunction);
  let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
  let resultIsPermutation = Arrays.isPermutation(testArray, resultingArray, (x,y)=>x==y);
  expect(resultIsSorted && resultIsPermutation).toBe(true);
});

// test('can sort random arrays of integers', () => {
//   var finalResult = true;
//   for(let len = 0; len < 20; len++) {
//     let max = 1000;
//     let testArray = Arrays.buildRandomSequence(len, max);
//     let compareFunction = (x,y) => x - y;
//     let resultingArray = Quicksort.sort(testArray, compareFunction);
//     let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
//     let resultIsPermutation = Arrays.isPermutation(testArray, resultingArray, (x,y)=>x==y);
//     if (!(resultIsSorted && resultIsPermutation)) {
//       finalResult = false;
//     }
//   }
//   expect(finalResult).toBe(true);
// });
