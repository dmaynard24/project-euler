// Smallest multiple

// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const primal = require(`../../util/primal`);

function getSmallestMultiple(upper) {
  const nums = [...Array(upper + 1).keys()].slice(1);
  const primeFactorCounts = [];
  const primes = primal.getPrimes(16000);

  nums.forEach((num) => {
    if (primal.isPrime(num, primes)) {
      primeFactorCounts[num] = 1;
    } else {
      const pfs = primal.getPrimeFactors(num, primes);
      pfs.forEach((pf) => {
        primeFactorCounts[pf.base] = primeFactorCounts[pf.base] ? Math.max(primeFactorCounts[pf.base], pf.exp) : pf.exp;
      });
    }
  });

  const lcm = Object.keys(primeFactorCounts).reduce((acc, curr) => {
    acc *= curr ** primeFactorCounts[curr];
    return acc;
  }, 1);

  return lcm;
}

module.exports = getSmallestMultiple;
