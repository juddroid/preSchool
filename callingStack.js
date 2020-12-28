const getCircleArea = (r, n = r) => {
  let circleArea = Math.PI * r ** 2
  if (r === n) {
    return circleArea
  }
  return circleArea + getCircleArea(r + 1, n)
}
const getRectArea = (rows, cols) => rows * cols;
const getTrapezoidArea = (top, bottom, height) => ((top + bottom) / 2) * height;

function getArea(shape, ...length) {
  if (shape === 'circle') {
    return getCircleArea(length[0], length[1])
  }
  if (shape === 'rect') {
    return getRectArea(length[0], length[1])
  }
  if (shape === 'trapezoid') {
    return getTrapezoidArea(length[0], length[1], length[2])
  }
}


// console.log(getArea('circle', 4))




console.log(`circle: ${getArea('circle', 3)}`)
console.log(`rect: ${getArea('rect', 3, 5)}`)
console.log(`trapezoid: ${getArea('trapezoid', 3, 5, 7)}`)
console.log(`circleSum: ${getArea('circle', 3, 5)}`)