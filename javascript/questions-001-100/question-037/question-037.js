// Truncatable primes

// Problem 37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

const primal = require('../../util/primal'),
  digits = require('../../util/digits');

function getTruncatablePrimeSum() {
  let limit = 800000,
    primes = primal.getPrimes(limit),
    sum = 0;

  // 23 is the first truncatable prime
  for (let i = 23; i <= limit; i += 2) {
    if (primal.isPrime(i, primes) && isTruncatablePrime(i)) {
      sum += i;
    }
  }

  function isTruncatablePrime(num) {
    let is = true,
      numDigits = digits.getDigits(num);

    for (let i = 1; i < numDigits.length; i++) {
      let ltr = 0,
        rtl = 0;
      for (let j = 0; j < numDigits.length; j++) {
        if (j >= i) {
          ltr *= 10;
          ltr += numDigits[j];
        } else {
          rtl *= 10;
          rtl += numDigits[j];
        }
      }

      is = primal.isPrime(ltr, primes) && primal.isPrime(rtl, primes);
      if (!is) {
        return false;
      }
    }

    return true;
  }

  return sum;
}

module.exports = getTruncatablePrimeSum;
