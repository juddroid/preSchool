// 해볼만한 것(1~무한대까지 인자를 받아 합을 구하는 함수를 만들어보자)

function infinitySum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}
console.log('infinitySum: ' + infinitySum(3, 5, 6));


// 반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.

function circleArea(r) {
  let area = Math.PI * r ** 2;
  return area
}
console.log('circleArea: ' + circleArea(3));


// 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.

const rectangleArea = (rows, cols) => rows * cols;
console.log('retangleArea: ' + rectangleArea(4, 5))

// 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.

const trapezoidArea = (top, bottom, height) => ((top + bottom) / 2) * height;
console.log('trapezoidArea: ' + trapezoidArea(2, 4, 6))

// 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.

const cylinderVolume = (r, h) => circleArea(r) * h;
console.log('cylinderVolume: ' + cylinderVolume(3, 7))
// 숫자가 아니면 에러를 반환하도록 구현한다.
// 인자의갯수가 부족하면 에러를 반환한다.