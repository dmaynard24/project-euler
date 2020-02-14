// Powerful digit counts

// Problem 63
// The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.

// How many n-digit positive integers exist which are also an nth power?

const digits = require(`../../util/digits`);

function getPowerfulIntegerCount() {
  let count = 0;

  for (let exp = 1; exp <= 21; exp++) {
    let base = 1;
    let digitCount = 1;
    while (digitCount <= exp) {
      const powerful = Math.pow(base, exp);

      digitCount = digits.getDigitCount(powerful);
      if (digitCount === exp) {
        count++;
      }

      base++;
    }
  }

  return count;
}

module.exports = getPowerfulIntegerCount;
