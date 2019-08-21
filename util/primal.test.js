const primal = require('./primal'),
  primes = primal.getPrimes(200);

test('expects that 149 is prime', () => {
  expect(primal.isPrime(149, primes)).toBe(true);
});

test('expects that 24 is not prime', () => {
  expect(primal.isPrime(24, primes)).toBe(false);
});

test('expects that 24 is not prime (without sieve)', () => {
  expect(primal.isPrime(24)).toBe(false);
});

test('expects that the prime factors of 24 are [{ base: 2, exp: 3 }, { base: 3, exp: 1 }]', () => {
  expect(primal.getPrimeFactors(24, primes)).toStrictEqual([{ base: 2, exp: 3 }, { base: 3, exp: 1 }]);
});
