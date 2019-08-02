// Champernowne's constant

// Problem 40
// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d_n represents the nth digit of the fractional part, find the value of the following expression.

// d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000

function getConstantProduct(limit) {
  let digitCounts = [],
    length = 0,
    digitLength = 1;

  while (length < limit) {
    let firstNum = Math.pow(10, digitLength - 1),
      digitCount = Math.pow(10, digitLength) - firstNum;

    digitCounts.push({
      length: digitLength,
      prevLengthSum: length,
      firstNum: firstNum
    });

    length += digitLength * digitCount;
    digitLength++;
  }

  let product = 1;
  // we can remove 1 and 10 because it's obvious they both equal 1
  let targets = [100, 1000, 10000, 100000, 1000000];

  targets.forEach(target => {
    let dc = digitCounts[digitCounts.length - 1];
    for (let i = 0; i < digitCounts.length; i++) {
      if (digitCounts[i].prevLengthSum > target) {
        dc = digitCounts[i - 1];
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
        ? getDigits(num)
            .reverse()
            .slice(diff, diff + 1)
        : getDigits(num).slice(0, 1);
  });

  return product;
}

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

test('gets the value of d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000 to be 210', () => {
  expect(getConstantProduct(1000000)).toBe(210);
});
