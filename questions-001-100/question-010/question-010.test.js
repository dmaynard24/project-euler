// Summation of primes

// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const time0 = performance.now();

function getPrimeSum(limit) {
  return getPrimes(limit).reduce((a, c, i) => (c ? a + i : a), 0);
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

test('gets the sum of all the primes below two million to be 142913828922', () => {
  expect(getPrimeSum(2000000)).toBe(142913828922);
});
