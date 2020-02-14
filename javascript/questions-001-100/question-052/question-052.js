// Permuted multiples

// Problem 52
// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

const isPandigital = require(`../../util/pandigital`);
const permutation = require(`../../util/permutation`);

function getSmallestInteger(maxMultiplier) {
  const limit = 1000000;
  let i = 1;

  while (i < limit) {
    i *= 10;

    let x = i;
    while (x < (i * 10) / maxMultiplier) {
      if (isPandigital(x)) {
        for (let multiplier = 2; multiplier <= maxMultiplier; multiplier++) {
          if (!permutation.isPermutation(x, x * multiplier)) {
            break;
          }

          if (multiplier === maxMultiplier) {
            return x;
          }
        }
      }

      x++;
    }
  }

  return `Unable to find a positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits under ${limit}`;
}

module.exports = getSmallestInteger;
