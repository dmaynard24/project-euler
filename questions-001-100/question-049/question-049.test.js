const getPrimePermutationTerms = require('./question-049');

test('gets the 12-digit number formed by concatenating the three terms in this arithmetic sequence to be 296962999629', () => {
  expect(getPrimePermutationTerms(4)).toBe('296962999629');
});
