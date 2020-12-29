const shapeSet = {
  circle: 'circle',
  rect: 'rect',
  trapezoid: 'trapezoid'
}
const logList = [];

const getCircleArea = (r, n = r) => {
  logList.push(shapeSet.circle)
  let circleArea = Math.PI * r ** 2
  if (r === n) {
    return circleArea
  }
  return circleArea + getCircleArea(r + 1, n)
}
const getRectArea = (rows, cols) => {
  logList.push(shapeSet.rect)
  return rows * cols;
}
const getTrapezoidArea = (top, bottom, height) => {
  logList.push(shapeSet.trapezoid)
  return ((top + bottom) / 2) * height;
}

function getArea(shape, ...length) {
  if (shape === shapeSet.circle) {
    return getCircleArea(length[0], length[1])
  }
  if (shape === shapeSet.rect) {
    return getRectArea(length[0], length[1])
  }
  if (shape === shapeSet.trapezoid) {
    return getTrapezoidArea(length[0], length[1], length[2])
  }
}


console.log(`circle: ${getArea('circle', 3)}`)
console.log(`rect: ${getArea('rect', 3, 5)}`)
console.log(`trapezoid: ${getArea('trapezoid', 3, 5, 7)}`)
console.log(`circleSum: ${getArea('circle', 3, 5)}`)


function printExecutionSequence() {
  let printExecution = '';
  for (let i = 0; i < logList.length; i++) {
    printExecution += logList[i] + ', ';
  }
  return console.log(`Execution Sequence >> ${printExecution}`)
}

printExecutionSequence()