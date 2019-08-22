// Power digit sum

// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

const bigInt = require('big-integer');

function getPowerDigitSum(power) {
  return [
    ...bigInt(2)
      .pow(power)
      .toArray(10).value
  ].reduce((a, c) => a + c);
}

module.exports = getPowerDigitSum;
