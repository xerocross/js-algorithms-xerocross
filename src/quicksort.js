import Arrays from "./arrays.js"
import ArrayAlias from "./arrayAlias.js"

var quicksort = function (arr, compareFunction) {
  let arrayCopy = Arrays.shallowCopy(arr);
  let arrayAlias = ArrayAlias.buildArrayAlias(arrayCopy);
  partitionRecursively(arrayAlias, compareFunction);
  return arrayCopy;
}

var partitionRecursively = function (arrayAlias, compareFunction) {
  console.log("partitioning: " + Arrays.print(arrayAlias.buildRawArray()));
  let pivotValue = arrayAlias.get(0);
  let pivotIndex = partitionAtPivot(arrayAlias, pivotValue, compareFunction);
  let leftArrayAlias = ArrayAlias.buildArrayAlias(arrayAlias, 0, pivotIndex);
  if (leftArrayAlias.length > 1) {
    partitionRecursively(leftArrayAlias, compareFunction)
  }
  let rightArrayAlias = ArrayAlias.buildArrayAlias(arrayAlias, pivotIndex + 1, arrayAlias.length);
  if (rightArrayAlias.length > 1) {
    partitionRecursively(rightArrayAlias, compareFunction)
  }
}


// this function swaps elements and returns and index partitionIndex
// so that the element at index partitionIndex is in correct
// position
var partitionAtPivot = function (arrayAlias, pivotValue, compareFunction) {
  let len = arrayAlias.length;
  let indexOfLastElt = len - 1;
  let indexLeft = 0;
  let indexRight = indexOfLastElt;
  let pivotIndex;
  console.log("pivotValue " + pivotValue)
  while (indexLeft < indexRight) {
    console.log("1");
    while (indexLeft < indexRight)
    {
      let comparisonValue = compareFunction(arrayAlias.get(indexLeft), pivotValue);
      console.log("1.1 " + indexLeft);

      if (comparisonValue <= 0) {
        if (comparisonValue == 0) {
          pivotIndex = indexLeft;
        }
        indexLeft++;
      } else {
        break;
      }
    }
    while (indexRight > indexLeft) {
      let comparisonValue = compareFunction(pivotValue, arrayAlias.get(indexRight));
      console.log("1.3 " + indexRight);
      if (comparisonValue <= 0) {
        if (comparisonValue == 0) {
          pivotIndex = indexRight;
        }
        indexRight--;
      } else {
        break;
      }
    }
    console.log("2");
    if (indexLeft < indexRight) {
      console.log("2.5");
      arrayAlias.swap(indexLeft, indexRight);
    }

    console.log("3 ", indexLeft + " : " + indexRight);
    console.log("current: " + Arrays.print(arrayAlias.buildRawArray()));
  }
  console.log("4");

  let meetValue = indexLeft;




  let newPartitionIndex = pivotIndex;
  if (meetValue >= pivotIndex) {
    if (compareFunction(pivotValue, arrayAlias.get(meetValue)) > 0) {
      console.log("a")
      arrayAlias.swap(pivotIndex, meetValue);
      newPartitionIndex = meetValue;
    }
  } else if (meetValue <= pivotIndex) {
    if (compareFunction(arrayAlias.get(meetValue), pivotValue) > 0) {
      console.log("b")
      arrayAlias.swap(pivotIndex, meetValue);
      newPartitionIndex = meetValue;
    }
  }
  // else {
  //   console.log("c")
  //   arrayAlias.swap(pivotIndex, newPartitionIndex);
  // }





  console.log("partitioning result: " + Arrays.print(arrayAlias.buildRawArray()));
  console.log("partition index: " + newPartitionIndex);
  return newPartitionIndex;
}

export default {
  sort : quicksort
}
