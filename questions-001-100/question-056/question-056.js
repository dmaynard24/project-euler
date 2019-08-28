// Powerful digit sum

// Problem 56
// A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

const bigInt = require('big-integer');

function getMaximumDigitSum(limit) {
  let lower = limit - 10,
    largest = 0;

  for (let a = lower; a < limit; a++) {
    for (let b = lower; b < limit; b++) {
      let sum = [
        ...bigInt(a)
          .pow(b)
          .toArray(10).value
      ].reduce((a, c) => a + c);
      if (sum > largest) {
        largest = sum;
      }
    }
  }

  return largest;
}

module.exports = getMaximumDigitSum;
