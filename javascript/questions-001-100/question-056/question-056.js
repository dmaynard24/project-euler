// Powerful digit sum

// Problem 56
// A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

const bigInt = require('big-integer');

function getMaximumDigitSum(limit) {
  let lower = 2,
    largest = 0;

  for (let a = limit - 1; a >= lower; a--) {
    if (a % 10 == 0) {
      continue;
    }

    for (let b = limit - 1; b >= lower; b--) {
      let powerDigits = bigInt(a)
        .pow(b)
        .toArray(10).value;
      if (powerDigits.length * 9 < largest) {
        break;
      }

      let sum = powerDigits.reduce((a, c) => a + c);
      if (sum > largest) {
        largest = sum;
      }
    }
  }

  return largest;
}

module.exports = getMaximumDigitSum;
