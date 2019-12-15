// Totient permutation

// Problem 70
// Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.
// The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

// Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

// Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.

const primal = require('../../util/primal'),
  permutation = require('../../util/permutation');

function getTotientPermutation() {
  let limit = Math.pow(10, 7),
    primes = primal.getPrimes(limit),
    minN,
    minQuotient = Infinity;

  for (let n = limit; n > 1; n--) {
    if (!primal.isPrime(n, primes)) {
      let phiN = phi(n, primes);
      if (permutation.isPermutation(n, phiN)) {
        let quotient = n / phiN;
        if (quotient < minQuotient) {
          minQuotient = quotient;
          minN = n;
        }
      }
    }
  }

  return minN;
}

function phi(val, primes) {
  if (primal.isPrime(val, primes)) {
    return val - 1;
  }

  let primeFactors = primal.getPrimeFactors(val, primes),
    count = val * primeFactors.reduce((a, c) => a * (1 - 1 / c.base), 1);
  return count;
}

module.exports = getTotientPermutation;
