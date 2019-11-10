const getFractionCount = require('./question-064');

test('gets the count of continued fractions for N≤10000 that have an odd period to be 1322', () => {
  expect(getFractionCount(10000)).toBe(1322);
});
