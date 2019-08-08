// Summation of primes

// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function getPrimeSum(limit) {
  let primes = getPrimes(limit),
    sum = 2;
  for (let i = 3; i < limit; i += 2) {
    if (isPrime(i, primes)) {
      sum += i;
    }
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

test('gets the sum of all the primes below ten to be 17', () => {
  expect(getPrimeSum(10)).toBe(17);
});

test('gets the sum of all the primes below two million to be 142913828922', () => {
  expect(getPrimeSum(2000000)).toBe(142913828922);
});
