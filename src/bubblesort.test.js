import BubbleSort from "./bubblesort.js";
import Arrays from "./arrays.js"


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

test('can sort a predefined array', () => {
  var finalResult = true;
  for(let len = 0; len < 20; len++) {
    let testArray = [];
    let max = 1000;
    for (let i = 0; i < len; i++) {
      testArray[i] = getRandomInt(max);
    }
    let compareFunction = (x,y) => x - y;
    let resultingArray = BubbleSort.sort(testArray, compareFunction);
    let resultIsSorted = Arrays.isSorted(resultingArray, compareFunction);
    let displayString = "";
    for (let j = 0; j < resultingArray.length; j++) {
      displayString += " " + resultingArray[j];
    }
    console.log("sorted? ",displayString);
    if (resultIsSorted == false) {
      finalResult = false;
    }
  }
  expect(finalResult).toBe(true);
});
