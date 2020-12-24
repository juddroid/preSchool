// 해볼만한 것(1~무한대까지 인자를 받아 합을 구하는 함수를 만들어보자)

function infinitySum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}

console.log(infinitySum(3, 5, 6))