// Factorial digit sum

// Problem 20
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const bigInt = require('big-integer');

function getFactorialDigitSum(num) {
  let factorial = bigInt(1);
  for (let i = 2; i <= num; i++) {
    factorial = factorial.multiply(i);
  }

  return factorial.toArray(10).value.reduce((acc, curr) => acc + curr);
}

module.exports = getFactorialDigitSum;
