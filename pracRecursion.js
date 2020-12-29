// Factorial
function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Fibonacci number
function fibonacci(first, second) {
  let third = first + second;
  console.log(third);
  if (third > 100) {
    return;
  }
  fibonacci(second, third);
}

fibonacci(0, 1);
