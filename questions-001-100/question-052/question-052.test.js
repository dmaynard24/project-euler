// Permuted multiples

// Problem 52
// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

const isPandigital = require('../../util/pandigital'),
  isPermutation = require('../../util/permutation');

function getSmallestInteger(maxMultiplier) {
  let matches = [],
    x = 125874;
  while (matches.length < maxMultiplier) {
    if (isPandigital(x)) {
      matches = [x];

      for (let multiplier = 2; multiplier <= maxMultiplier; multiplier++) {
        if (!isPermutation(x, x * multiplier)) {
          break;
        }

        matches.push(x * multiplier);
      }
    }

    x++;
  }

  return matches[0];
}

test('gets the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits to be 142857', () => {
  expect(getSmallestInteger(6)).toBe(142857);
});
