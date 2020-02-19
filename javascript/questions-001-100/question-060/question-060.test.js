const getLowestPrimeSum = require(`./question-060`);

test(`gets the lowest sum for a set of 4 primes for which any two primes concatenate to produce another prime to be 792`, () => {
  expect(getLowestPrimeSum(4)).toBe(792);
});

// test('gets the lowest sum for a set of 5 primes for which any two primes concatenate to produce another prime to be 26,033', () => {
//   expect(getLowestPrimeSum(5)).toBe(26033);
// });
