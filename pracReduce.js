const array1 = [1, 2, 3, 4];

const myReduce = (arr, callback, ...initial) => {
  // initialValueCheck
  let initialValueCheck = initial[0] === undefined ? true : false;
  // setting initialValue
  let initialValue;
  if (arr.length === 0 && initialValueCheck) {
    console.error('Uncaught TypeError: Reduce of empty array with no initial value');
  }
  if (initialValueCheck) {
    initialValue = arr[0];
  }
  initialValue = initial[0];

  // callbackFn
  callback = function callbackFn(accumulator, currentValue, ...rest) {
    // setting accumulator
    // setting currentValue
    if (initialValueCheck) {
      accumulator = initialValue;
      currentValue = arr[0];
    }
    currentValue = initialValue;

    // setting currentIndex
    let currentIndex;
    rest[0] = currentIndex;
    if (initialValueCheck) {
      currentIndex = 0;
    }
    currentIndex = 1;
    // readonly
    rest[1] = arr;
    return accumulator;
  };
  // reducer
  for (element in arr) {
    // except empty property in array
    if (arr[element] === undefined) {
      return;
    }
    callback;
  }

  return;
};

const result = myReduce(
  array1,
  (next, prev) => {
    next + prev;
  },
  []
);

console.log(result);
