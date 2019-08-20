// Truncatable primes

// Problem 37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

const primal = require('../../util/primal');

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

  function isTruncatablePrime(val) {
    let is = true,
      digits = getDigits(val);

    for (let i = 1; i < digits.length; i++) {
      let ltr = 0,
        rtl = 0;
      for (let j = 0; j < digits.length; j++) {
        if (j >= i) {
          ltr *= 10;
          ltr += digits[j];
        } else {
          rtl *= 10;
          rtl += digits[j];
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

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  if (val < 10) {
    return [val];
  }

  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

test('gets the sum of the only eleven truncatable primes to be 748317', () => {
  expect(getTruncatablePrimeSum()).toBe(748317);
});
