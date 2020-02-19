const primal = require(`./primal`);
const primes = primal.getPrimes(200);
const primeFactorCounts = primal.getPrimeFactorCounts(134043);

test(`expects that 149 is prime`, () => {
  expect(primal.isPrime(149, primes)).toBe(true);
});

test(`expects that 24 is not prime`, () => {
  expect(primal.isPrime(24, primes)).toBe(false);
});

test(`expects that 24 is not prime (without sieve)`, () => {
  expect(primal.isPrime(24)).toBe(false);
});

test(`expects that the prime factors of 24 are [{ base: 2, exp: 3 }, { base: 3, exp: 1 }]`, () => {
  expect(primal.getPrimeFactors(24, primes)).toStrictEqual([
    { base: 2, exp: 3 },
    { base: 3, exp: 1 },
  ]);
});

test(`expects that the prime factors of 25 are [{ base: 5, exp: 2 }]`, () => {
  expect(primal.getPrimeFactors(25, primes)).toStrictEqual([{ base: 5, exp: 2 }]);
});

test(`expects that 644 has 3 prime factors`, () => {
  expect(primeFactorCounts[644]).toBe(3);
});

test(`expects that 134043 has 4 prime factors`, () => {
  expect(primeFactorCounts[134043]).toBe(4);
});
