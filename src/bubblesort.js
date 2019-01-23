import Arrays from "./arrays.js"
import WeAssert from "we-assert";
var weAssert  = WeAssert.build();
weAssert.setLevel("ERROR")
weAssert.setHandler(function(statement, message){
    throw new Error(message);
});

// arr should be a JavaScript array of any type T
// compareFunction is the usual thing -- a function
// defined on pairs (T x,T y) that returns integers
// this function does not mutate the array

var bubblesort = function (arr, compareFunction) {
    weAssert.that(Array.isArray(arr), "first argument of bubblesort must be an array");
    weAssert.that(typeof compareFunction == "function", "second argument of bubblesort must be a function");
    let bubbleIndex = 0;
    let copyOfArray = Arrays.shallowCopy(arr);
    for (let passnumber = 0; passnumber < copyOfArray.length - 1; passnumber++) {
        bubbleIndex = (arr.length -1) - passnumber;
        comparisonPass(copyOfArray, compareFunction, bubbleIndex);
        weAssert
            .forXBetween(0, bubbleIndex - 1)
            .that(i=>compareFunction(copyOfArray[i], copyOfArray[bubbleIndex]) <= 0, 
                `all items before index ${bubbleIndex} in the array should evaluate less than the item at ${bubbleIndex}`);
    }
    weAssert.that(bubbleIndex == 0 || bubbleIndex == 1, `after the loop, bubbleIndex should equal 1 or 0, but it was ${bubbleIndex}`);
    // this proves the array is sorted
    return copyOfArray;
}

var comparisonPass = function (arr, compareFunction, bubbleIndex) {
    let isChange = false;
    let index = 1;
    for (; index < bubbleIndex + 1; index++) {
        var comparisonValue = compareFunction(arr[index - 1], arr[index]);
        if (comparisonValue > 0) {
            Arrays.swap(arr, index - 1, index);
            isChange = true;
        }
        weAssert.that(compareFunction(arr[index - 1], arr[index]) <= 0, "")
    }
    weAssert
        .forXBetween(bubbleIndex - 1, arr.length - 1)
        .that(i=> compareFunction(arr[i], arr[i+1]) <= 0,
            `subarray between ${bubbleIndex - 1} and ${arr.length} should be sorted`)
    return isChange;
}

export default {
    sort : bubblesort
}
