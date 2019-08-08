// 10001st prime

// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function getNthPrime(n) {
  let limit = 105000,
    primes = getPrimes(limit),
    count = 1;

  for (let i = 3; i < limit; i += 2) {
    if (isPrime(i, primes)) {
      count++;
    }
    if (count == n) {
      return i;
    }
  }

  return count;
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

test('gets the 6th prime number to be 13', () => {
  expect(getNthPrime(6)).toBe(13);
});

test('gets the 10001st prime number to be 104743', () => {
  expect(getNthPrime(10001)).toBe(104743);
});
