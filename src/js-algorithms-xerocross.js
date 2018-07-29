import BubbleSort from "./bubblesort.js";
import InsertionSort from "./insertionSort.js"
import Mergesort from "./mergesort.js"
import Quicksort from "./quicksort.js"

export const bubbleSort = BubbleSort.sort;
export const insertionSort = InsertionSort.sort;
export const mergesort = Mergesort.sort;
export const quicksort = Quicksort.sort;

export const xA = {
  bubbleSort : BubbleSort.sort,
  insertionSort : InsertionSort.sort,
  mergesort : Mergesort.sort,
  quicksort : Quicksort.sort
}
