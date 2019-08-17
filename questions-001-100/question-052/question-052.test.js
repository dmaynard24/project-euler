// Permuted multiples

// Problem 52
// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

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

function isPermutation(val, testVal) {
  let valDigits = getDigits(val),
    testValDigits = getDigits(testVal);

  if (valDigits.length == testValDigits.length) {
    valDigits.sort();
    testValDigits.sort();

    let valConcat = 0,
      testValConcat = 0;
    for (let i = 0; i < valDigits.length; i++) {
      valConcat *= 10;
      valConcat += valDigits[i];
      testValConcat *= 10;
      testValConcat += testValDigits[i];
    }

    return valConcat == testValConcat;
  }

  return false;
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

// takes an integer value
function isPandigital(num) {
  let digits = [];

  while (num > 0) {
    let mod = num % 10;
    if (digits[mod] == 1) {
      return false;
    }

    digits[mod] = 1;
    num = Math.floor(num / 10);
  }

  return true;
}

test('gets the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits to be 142857', () => {
  expect(getSmallestInteger(6)).toBe(142857);
});
