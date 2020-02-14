// 10001st prime

// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const primal = require(`../../util/primal`);

function getNthPrime(n) {
  const limit = 105000;
  const primes = primal.getPrimes(limit);
  const primeNums = primal.getPrimeNumbers(primes);

  return primeNums[n - 1];
}

module.exports = getNthPrime;
