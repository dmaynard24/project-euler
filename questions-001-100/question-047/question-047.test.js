// Distinct primes factors

// Problem 47
// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2^2 × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

const primal = require('../../util/primal');

function getFirstInteger() {
  let limit = 31,
    primes = primal.getPrimes(limit),
    targetCount = 4,
    consecutives = [],
    i = 1;

  while (Object.keys(consecutives).length < targetCount) {
    let count = primal.getPrimeFactors(i, primes).length;

    if (count == targetCount && (Object.keys(consecutives).length == 0 || consecutives[i - 1] == 1)) {
      consecutives[i] = 1;
    } else {
      consecutives = [];
    }

    i++;
  }

  return Object.keys(consecutives)[0];
}

test('gets the first integer of the first four consecutive integers to have four distinct prime factors each to be 134043', () => {
  expect(getFirstInteger()).toBe('134043');
});