// Pandigital prime

// Problem 41
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

const digits = require('../../util/digits'),
  primal = require('../../util/primal');

function getLargestPandigitalPrime() {
  let largest = 2143,
    validRanges = [];

  // max number of digits is 9, min is 4 (given by the example)
  for (let i = 9; i >= 4; i--) {
    let allDigits = [...Array(i + 1).keys()].slice(1),
      digitsSum = allDigits.reduce((a, c) => a + c);
    // a number is divisible by 3 if the sum of its digits is divisible by 3, making it non-prime
    if (digitsSum % 3 != 0) {
      validRanges.push({
        start: digits.getIntFromDigits(allDigits),
        end: digits.getIntFromDigits(allDigits.reverse())
      });
    }
  }

  for (let i = 0; i < validRanges.length; i++) {
    for (j = validRanges[i].end; j >= validRanges[i].start; j -= 2) {
      if (isPandigital(j) && primal.isPrime(j)) {
        return j;
      }
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

module.exports = getLargestPandigitalPrime;
