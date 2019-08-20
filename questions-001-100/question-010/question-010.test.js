// Summation of primes

// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const primal = require('../../util/primal');

function getPrimeSum(limit) {
  let primes = primal.getPrimes(limit),
    sum = 2;
  for (let i = 3; i < limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      sum += i;
    }
  }
  return sum;
}

test('gets the sum of all the primes below ten to be 17', () => {
  expect(getPrimeSum(10)).toBe(17);
});

test('gets the sum of all the primes below two million to be 142913828922', () => {
  expect(getPrimeSum(2000000)).toBe(142913828922);
});
