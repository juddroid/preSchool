function calculate(cmd, num1, num2) {
  switch (cmd) {
    case 'plus':
      return num1 + num2
    case 'minus':
      return num1 - num2
    case 'multiple':
      return num1 * num2;
    case 'divider':
      return num1 / num2;
    default:
      throw Error(cmd);
  }
}

console.log(calculate('plus', 1, 2))
console.log(calculate('minus', 1, 2))
console.log(calculate('multiple', 1, 2))
calculate('divider', 1, 2)
calculate('d', 1, 2)