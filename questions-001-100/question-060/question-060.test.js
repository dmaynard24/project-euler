const getLowestPrimeSum = require('./question-060');

test('gets the lowest sum for a set of four primes for which any two primes concatenate to produce another prime to be 792', () => {
  expect(getLowestPrimeSum(4)).toBe(792);
});
