// 10001st prime

// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const primal = require('../../util/primal');

function getNthPrime(n) {
  let limit = 105000,
    primes = primal.getPrimes(limit),
    count = 1;

  for (let i = 3; i < limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      count++;
    }
    if (count == n) {
      return i;
    }
  }

  return count;
}

test('gets the 6th prime number to be 13', () => {
  expect(getNthPrime(6)).toBe(13);
});

test('gets the 10001st prime number to be 104743', () => {
  expect(getNthPrime(10001)).toBe(104743);
});
