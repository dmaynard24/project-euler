// Summation of primes

// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const primal = require(`../../util/primal`);

function getPrimeSum(limit) {
  const primes = primal.getPrimes(limit);
  const primeNums = primal.getPrimeNumbers(primes);

  return primeNums.reduce((a, c) => a + c);
}

module.exports = getPrimeSum;
