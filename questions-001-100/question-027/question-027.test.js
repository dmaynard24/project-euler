// Quadratic primes

// Problem 27
// Euler discovered the remarkable quadratic formula:

// n^2 + n + 41
// It turns out that the formula will produce 40 primes for the consecutive integer values 0 ≤ n ≤ 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

// The incredible formula n^2 − 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n^2 + an + b, where |a| < 1000 and |b| ≤ 1000

// where |n| is the modulus/absolute value of n
// e.g. |11| = 11 and |−4| = 4
// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

function getCoefficientProduct() {
  let primes = getPrimes(13000),
    largestCount = 0,
    largestProduct = 0;

  // store all primes between -1000 and 1000
  let positives = primes.reduce((a, c, i) => {
      return c && i * 2 + 1 < 1000 ? [...a, i * 2 + 1] : a;
    }, []),
    negatives = positives.map(prime => prime * -1).reverse(),
    primesRange = negatives.concat(positives);

  primesRange.forEach(a => {
    primesRange.forEach(b => {
      let primeCount = getConsecutivePrimeCount(a, b);
      if (primeCount > largestCount) {
        largestCount = primeCount;
        largestProduct = a * b;
      }
    });
  });

  function getConsecutivePrimeCount(a, b) {
    let n = 0,
      value = n * n + a * n + b,
      allPrime = value > -1 && isPrime(value, primes);

    while (allPrime) {
      n++;
      value = n * n + a * n + b;
      allPrime = value > -1 && isPrime(value, primes);
    }

    return n;
  }

  return largestProduct;
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

test('gets the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0 to be -59231', () => {
  expect(getCoefficientProduct()).toBe(-59231);
});
