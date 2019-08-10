// Distinct primes factors

// Problem 47
// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2^2 × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

function getFirstInteger() {
  let limit = 31,
    primes = getPrimes(limit),
    targetCount = 4,
    consecutives = [],
    i = 1;

  while (Object.keys(consecutives).length < targetCount) {
    let count = getPrimeFactorCount(i);

    if (count == targetCount && (Object.keys(consecutives).length == 0 || consecutives[i - 1] == 1)) {
      consecutives[i] = 1;
    } else {
      consecutives = [];
    }

    i++;
  }

  function getPrimeFactorCount(num) {
    let primeFactorCount = 0;

    for (let i = 2; i <= limit; i++) {
      if (i > num / 2) {
        break;
      }
      if (isPrime(i, primes)) {
        if (num % i == 0) {
          primeFactorCount++;
          while (num % i == 0) {
            num /= i;
          }
        }
      }
    }

    if (num > 1) {
      primeFactorCount++;
    }

    return primeFactorCount;
  }

  return Object.keys(consecutives)[0];
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

test('gets the first integer of the first four consecutive integers to have four distinct prime factors each to be 134043', () => {
  expect(getFirstInteger()).toBe('134043');
});
