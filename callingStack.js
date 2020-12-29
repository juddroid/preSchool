const shapeSet = {
  circle: 'circle',
  rect: 'rect',
  trapezoid: 'trapezoid',
};
const logSet = {};
let logCount = 0;

function getLog(func, rst) {
  logSet[logCount] = [func, rst];
  logCount++;
}

const getCircleArea = (r, n = r) => {
  let result = Math.PI * r ** 2;
  let name = shapeSet.circle;
  getLog(name, result);
  if (r === n) {
    return result;
  }
  return result + getCircleArea(r + 1, n);
};
const getRectArea = (rows, cols) => {
  let name = shapeSet.rect;
  let result = rows * cols;
  getLog(name, result);
  return result;
};
const getTrapezoidArea = (top, bottom, height) => {
  let name = shapeSet.trapezoid;
  let result = ((top + bottom) / 2) * height;
  getLog(name, result);
  return result;
};

function getArea(shape, ...length) {
  if (shape === shapeSet.circle) {
    return getCircleArea(length[0], length[1]);
  }
  if (shape === shapeSet.rect) {
    return getRectArea(length[0], length[1]);
  }
  if (shape === shapeSet.trapezoid) {
    return getTrapezoidArea(length[0], length[1], length[2]);
  }
}

console.log(`circle: ${getArea('circle', 3)}`);
console.log(`rect: ${getArea('rect', 3, 5)}`);
console.log(`trapezoid: ${getArea('trapezoid', 3, 5, 7)}`);
console.log(`circleSum: ${getArea('circle', 3, 5)}`);

function printExecutionSequence() {
  let logValue = Object.values(logSet);
  let lastResult = [];
  for (let i = 0; i < logValue.length; i++) {
    lastResult.push(`${logValue[i][0]}: ${logValue[i][1]}`);
  }
  return console.log(`Execution Sequence >> ${lastResult.join(', ')}`);
}

printExecutionSequence();
