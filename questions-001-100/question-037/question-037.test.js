// Truncatable primes

// Problem 37
// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

function getTruncatablePrimeSum() {
  let limit = 800000,
    primes = getPrimes(limit),
    sum = 0;

  // 23 is the first truncatable prime
  for (let i = 23; i <= limit; i += 2) {
    if (isPrime(i, primes) && isTruncatablePrime(i)) {
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

      is = isPrime(ltr, primes) && isPrime(rtl, primes);
      if (!is) {
        return false;
      }
    }

    return true;
  }

  return sum;
}

// primes using Sieve of Eratosthenes (storing only odds)
function getPrimes(limit) {
  let oddsOnlyLimit = Math.floor(limit / 2) + 1,
    primes = Array(oddsOnlyLimit).fill(true);

  primes[0] = false;

  for (let i = 1; i <= Math.sqrt(limit); i++) {
    let n = 2 * i + 1;
    if (primes[i]) {
      let step = n;
      for (let j = step == 3 ? i + step : i + step * 2; j <= oddsOnlyLimit; j += step) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function isPrime(n, primes) {
  if (n % 2 == 0) {
    return n == 2;
  }

  return primes[(n - 1) / 2];
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
