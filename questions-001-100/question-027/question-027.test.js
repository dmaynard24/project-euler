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

  let primesToThousand = primes
      .reduce((a, c, i) => {
        return c ? [...a, i] : a;
      }, [])
      .filter(prime => prime < 1000),
    negativePrimesFromThousand = primesToThousand
      .map(prime => prime * -1)
      .reverse(),
    primesRange = negativePrimesFromThousand.concat(primesToThousand);

  primesRange.forEach(a => {
    primesRange.forEach(b => {
      let primeCount = getConsecutivePrimeCount(a, b);
      if (primeCount > largestCount) {
        largestCount = primeCount;
        largestProduct = a * b;
      }
    });
  });

  return largestProduct;

  function getConsecutivePrimeCount(a, b) {
    let n = 0,
      value = n * n + a * n + b,
      allPrime = value > -1 && primes[value];

    while (allPrime) {
      n++;
      value = n * n + a * n + b;
      allPrime = value > -1 && primes[value];
    }

    return n;
  }

  // primes using Sieve of Eratosthenes
  function getPrimes(limit) {
    limit = Math.abs(limit);
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
}

test('gets the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0 to be -59231', () => {
  expect(getCoefficientProduct()).toBe(-59231);
});
