// Square root digital expansion

// Problem 80
// It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

// The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.

// For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

const digits = require('../../util/digits'),
  Decimal = require('decimal.js');

function getSquareRootDigitalSum(max) {
  let sum = 0;

  Decimal.set({ precision: 100, rounding: 1 });

  for (let num = 1; num <= max; num++) {
    let sqrtArr = Decimal.sqrt(num).d;

    if (sqrtArr.length != 1) {
      let len = 0;
      for (let j = 0; j < sqrtArr.length; j++) {
        if (len > 100) {
          break;
        }

        let part = sqrtArr[j],
          partDigits = digits.getDigits(part);
        for (let k = 0; k < partDigits.length; k++) {
          if (len > 100) {
            break;
          }

          sum += partDigits[k];
          len++;
        }
      }
    }
  }

  return sum;
}

module.exports = getSquareRootDigitalSum;
