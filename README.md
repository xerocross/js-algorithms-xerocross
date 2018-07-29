# JS Algorithms XeroCross

This is a collection of classic algorithms implemented in JavaScript.  There's
nothing special or unusual here except perhaps that the author has tried to write the source
files very verbosely so they are easy to read for understanding.

The purpose of this is mainly for the author's own practice, but the source files
may also be of educational use.

## Development and Testing

After you have cloned this repository, you need NPM.  While not strictly
necessary, we also recommend using Yarn.  To install all the necessary node modules
execute the command `yarn install`.

To run the full suite of tests, execute `yarn run test`.

If you make any changes to the source files, to rebuild the distributable file
execute `yarn run build`.

## Deployment

You can include the stand-alone script file `jsalgorithms-xerocross.js` directly in
your HTML file.  This exposes a global called `xA` that contains all of the algorithms
supported.

## The Algorithms

### bubbleSort

`bubbleSort(someArray, compareFunction)` returns a new sorted array.
It does not mutate.

### insertionSort

`insertionSort(someArray, compareFunction)` returns a new sorted array.
It does not mutate.

### mergesort

`mergesort(someArray, compareFunction)` returns a new sorted array.
It does not mutate.  (The name is not a typo.  In the author's mind "mergesort" is one word.)

### quicksort

`quicksort(someArray, compareFunction)` returns a new sorted array.
It does not mutate.

## Author

This is a one-man project written by Adam Cross


## License

See the [LICENSE.md](LICENSE.md) file for details.
