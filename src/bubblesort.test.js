import BubbleSort from "./bubblesort.js";
import Arrays from "./arrays.js"
import TestHelper from "./test-helper.js"
import {RandomSequences1, RandomSequences2} from "xero-random-sequences"

var sortFunction = BubbleSort.sort;

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

// test('if first arg is not an array, throws error', () => {
//     let compareFunction = (x,y) => x - y;
//     expect(function(){
//         TestHelper.testSortFunction("not an array", sortFunction, compareFunction);
//     }).toThrow();
// });

// test('if second arg is not a function, throws error', () => {
//     expect(function(){
//         TestHelper.testSortFunction([1,5,4], sortFunction, "compareFunction");
//     }).toThrow();
// });
