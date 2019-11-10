const getCircularPrimeCount = require('./question-035');

test('gets the count of circular primes below one hundred to be 13', () => {
  expect(getCircularPrimeCount(100)).toBe(13);
});

test('gets the count of circular primes below one million to be 55', () => {
  expect(getCircularPrimeCount(1000000)).toBe(55);
});
