import Arrays from "./arrays.js"

test("permutation test recognizes fixed permutations", function() {
  var array1 = [17, 2, 9];
  var array2 = [2, 17, 9];
  var array3 = [17, 9, 2];
  var result = Arrays.isPermutation(array1, array2, (x,y) => x==y) &&
    Arrays.isPermutation(array2, array3, (x,y) => x==y) &&
    Arrays.isPermutation(array1, array3, (x,y) => x==y);
  expect(result).toBe(true);
});

test("permutation handle arrays with duplicates", function() {
  var array1 = [17, 2, 9, 2, 18];
  var array2 = [17, 9, 2, 18, 2];
  var result = Arrays.isPermutation(array1, array2, (x,y) => x==y);
  expect(result).toBe(true);
});

test("returns false on non-permutation", function() {
  var array1 = [17, 2, 9, 2, 18];
  var array2 = [16, 9, 2, 18, 2];
  var result = Arrays.isPermutation(array1, array2, (x,y) => x==y);
  expect(result).toBe(false);
});

test("can handle permutations with undefined", function() {
  var array1 = [17, 2, undefined, undefined];
  var array2 = [undefined, 17, undefined, 2];
  var result = Arrays.isPermutation(array1, array2, (x,y) => x==y);
  expect(result).toBe(true);
});
