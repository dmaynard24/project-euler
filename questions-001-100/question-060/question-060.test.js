const getLowestPrimeSum = require('./question-060');

test('gets the lowest sum for a set of five primes for which any two primes concatenate to produce another prime to be 26033', () => {
  expect(getLowestPrimeSum(5)).toBe(26033);
});
