// Digit factorials

// Problem 34
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

const digits = require(`../../util/digits`);

function getDigitFactorialSum() {
  const factorials = [];
  let sum = 0;

  // cache factorials of all digits 1 - 9
  factorials.push(1);
  for (let i = 1; i <= 9; i++) {
    factorials.push(i * factorials[i - 1]);
  }

  for (let i = 3; i <= 41000; i++) {
    const numDigits = digits.getDigits(i);
    const digitFactorialSum = numDigits.reduce((a, c) => a + factorials[c], 0);

    if (i === digitFactorialSum) {
      sum += i;
    }
  }

  return sum;
}

module.exports = getDigitFactorialSum;
