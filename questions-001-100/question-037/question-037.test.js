// Truncatable primes

// Problem 37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

function getTruncatablePrimeSum() {
  let primes = getPrimes(800000),
    sum = 0;

  primes.forEach((prime, val) => {
    // 23 is the first truncatable prime
    if (val >= 23 && prime && isTruncatablePrime(val)) {
      sum += val;
    }
  });

  function isTruncatablePrime(val) {
    let is = true,
      digits = getDigits(val);

    // ltr
    for (let i = 1; i < digits.length; i++) {
      let truncated = digits.slice(i).join('');
      is = primes[truncated];
      if (!is) {
        return false;
      }
    }

    // rtl
    for (let i = digits.length - 1; i > 0; i--) {
      let truncated = digits.slice(0, i).join('');
      is = primes[truncated];
      if (!is) {
        return false;
      }
    }

    return true;
  }

  return sum;
}

// primes using Sieve of Eratosthenes
function getPrimes(limit) {
  let primes = Array(limit + 1).fill(true);

  primes[0] = false;
  primes[1] = false;

  let step = 2;
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      step = i;
      for (let j = step * step; j <= limit; j += step) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

// getDigits takes an int value, returns array of ints
function getDigits(val) {
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
