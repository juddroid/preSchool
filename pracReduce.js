const array1 = [1, 2, 3, 4];
const array2 = [];
const callback = (next, prev) => next + prev;

const myReduce = (arr, callbackFn, ...initial) => {
  // initialValueCheck
  let initialValueCheck = initial[0] !== undefined ? true : false;
  // setting initialValue
  if (arr.length === 0 && initialValueCheck) {
    return console.error('Uncaught TypeError: Reduce of empty array with no initial value');
  }
  let accumulator;
  let currentValue;
  let currentIndex;
  if (!initialValueCheck) {
    accumulator = arr[0];
    currentValue = arr[1];
    currentIndex = 1;
  }

  if (initialValueCheck) {
    accumulator = initial[0];
    currentValue = arr[0];
    currentIndex = 0;
  }
  // iterator
  arr.forEach((currentValue) => {
    // except empty property in array
    // if (arr[currentValue] === undefined) {
    //   return;
    // }
    // callbackFn: reducer
    accumulator = callbackFn(accumulator, currentValue);
  });
  return accumulator;
};

const result = myReduce(array1, callback);

console.log(result);

const arr = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

console.log(reduce(add, 0, arr));
