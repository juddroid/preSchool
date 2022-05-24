let searchCount = 0;

function getNumArr(n) {
  let numArr = [];
  for (let i = 1; i < n + 1; i++) {
    numArr.push(i);
  }
  return numArr;
}

function binarySearch(arr, num) {
  searchCount++;
  if (arr[parseInt(arr.length / 2)] === num) {
    return console.log(`Find: ${num}, Count: ${searchCount}`);
  }
  if (arr[parseInt(arr.length / 2)] > num) {
    arr.splice(parseInt(arr.length / 2), arr.length - parseInt(arr.length / 2));
    binarySearch(arr, num);
  }
  if (arr[parseInt(arr.length / 2)] < num) {
    arr.splice(0, arr.length - parseInt(arr.length / 2));
    binarySearch(arr, num);
  }
  // return console.error(`There is no exist ${num} in this array!`);
}

function test(testNum) {
  for (let i = 1; i < testNum + 1; i++) {
    binarySearch(getNumArr(testNum), i);
    searchCount = 0;
  }
}
console.log('test17');
test(100);
// binarySearch(getNumArr(100), 2);
// binarySearch(getNumArr(100), 4);
