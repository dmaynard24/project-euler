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

module.exports = getPrimeSum;
