// Champernowne's constant

// Problem 40
// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d_n represents the nth digit of the fractional part, find the value of the following expression.

// d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000

const digits = require('../../util/digits');

function getConstantProduct() {
  const targets = [1, 10, 100, 1000, 10000, 100000],
    limit = targets[targets.length - 1],
    digitCounts = [];

  let length = 0,
    digitLength = 1,
    product = 1;

  while (length < limit) {
    let firstNum = targets[digitLength - 1],
      digitCount = targets[digitLength] - firstNum;

    digitCounts.push({
      length: digitLength,
      prevLengthSum: length,
      firstNum: firstNum
    });

    length += digitLength * digitCount;
    digitLength++;
  }

  let prevI = 0;
  // we can remove 1 and 10 because they both equal 1
  targets.slice(2).forEach(target => {
    let dc = digitCounts[digitCounts.length - 1];
    for (let i = prevI; i < digitCounts.length; i++) {
      if (digitCounts[i].prevLengthSum > target) {
        dc = digitCounts[i - 1];
        prevI = i;
        break;
      }
    }

    let lengthSum = dc.prevLengthSum,
      num = dc.firstNum;
    if (num < target) {
      while (lengthSum < target) {
        lengthSum += dc.length;
        num++;
      }
    }

    let diff = lengthSum - target;
    product *=
      diff > 0
        ? digits
            .getDigits(num)
            .reverse()
            .slice(diff, diff + 1)
        : digits.getDigits(num).slice(0, 1);
  });

  return product;
}

module.exports = getConstantProduct;
