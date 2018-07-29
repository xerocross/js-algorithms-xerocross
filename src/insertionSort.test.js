import InsertionSort from "./insertionSort.js";
import Arrays from "./arrays.js"
import TestHelper from "./test-helper.js"
import {RandomSequences1, RandomSequences2} from "xero-random-sequences"

var sortFunction = InsertionSort.sort;

test('can sort RandomSequences1', () => {
  let compareFunction = (x,y) => x - y;
  let result = TestHelper.testSortFunction(RandomSequences1, sortFunction, compareFunction);
  expect(result).toBe(true);
});

test('can sort RandomSequences2', () => {
  let compareFunction = (x,y) => x - y;
  let result = TestHelper.testSortFunction(RandomSequences2, sortFunction, compareFunction);
  expect(result).toBe(true);
});
