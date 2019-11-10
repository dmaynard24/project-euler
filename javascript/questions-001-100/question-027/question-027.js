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

const primal = require('../../util/primal');

function getCoefficientProduct() {
  let primes = primal.getPrimes(13000),
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
      allPrime = value > -1 && primal.isPrime(value, primes);

    while (allPrime) {
      n++;
      value = n * n + a * n + b;
      allPrime = value > -1 && primal.isPrime(value, primes);
    }

    return n;
  }

  return largestProduct;
}

module.exports = getCoefficientProduct;
