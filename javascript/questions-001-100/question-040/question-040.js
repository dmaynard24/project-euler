// Champernowne's constant

// Problem 40
// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d_n represents the nth digit of the fractional part, find the value of the following expression.

// d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000

const digits = require(`../../util/digits`);

function getConstantProduct() {
  const targets = [1, 10, 100, 1000, 10000, 100000];
  const limit = targets[targets.length - 1];
  const digitCountObjs = [];

  let length = 0;
  let digitLength = 1;
  let product = 1;

  while (length < limit) {
    const firstNum = targets[digitLength - 1];
    const digitCount = targets[digitLength] - firstNum;

    digitCountObjs.push({
      length: digitLength,
      prevLengthSum: length,
      firstNum,
    });

    length += digitLength * digitCount;
    digitLength++;
  }

  let prevI = 0;
  // we can remove 1 and 10 because they both equal 1
  targets.slice(2).forEach((target) => {
    let dc = digitCountObjs[digitCountObjs.length - 1];
    for (let i = prevI; i < digitCountObjs.length; i++) {
      if (digitCountObjs[i].prevLengthSum > target) {
        dc = digitCountObjs[i - 1];
        prevI = i;
        break;
      }
    }

    let lengthSum = dc.prevLengthSum;
    let num = dc.firstNum;
    if (num < target) {
      while (lengthSum < target) {
        lengthSum += dc.length;
        num++;
      }
    }

    const diff = lengthSum - target;
    product *= diff > 0 ? digits.getDigitsReversed(num)[diff] : digits.getDigits(num)[0];
  });

  return product;
}

module.exports = getConstantProduct;
