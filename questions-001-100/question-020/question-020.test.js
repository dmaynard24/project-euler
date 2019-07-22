// Factorial digit sum

// Problem 20
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const bigInt = require('big-integer');

function getFactorialDigitSum(num) {
  return [
    ...bigInt(
      [...Array(num).keys()]
        .map(key => bigInt(key + 1).value)
        .reduce((acc, curr) => acc * curr)
    ).toArray(10).value
  ].reduce((acc, curr) => acc + curr);
}

test('gets the sum of the digits in the number 100! be 648', () => {
  expect(getFactorialDigitSum(100)).toBe(648);
});
