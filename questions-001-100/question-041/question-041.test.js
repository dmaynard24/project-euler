// Pandigital prime

// Problem 41
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

const digits = require('../../util/digits'),
  primal = require('../../util/primal');

function getLargestPandigitalPrime() {
  let largest = 2143;

  for (let i = 7654321; i >= largest; i -= 2) {
    if (isPandigital(i) && primal.isPrime(i)) {
      return i;
    }
  }

  return largest;
}

// instead of using my isPandigital utility function (../../util/pandigital),
// I wrote a new one because this question requires all numbers 1 through n are used exactly once
function isPandigital(num) {
  let numDigits = digits.getDigits(num).sort();

  if (numDigits[0] == 0) {
    return false;
  }

  for (let i = 0; i < numDigits.length; i++) {
    if (numDigits[i] != i + 1) {
      return false;
    }
  }

  return true;
}

test('gets the largest n-digit pandigital prime that exists to be 7652413', () => {
  expect(getLargestPandigitalPrime()).toBe(7652413);
});
