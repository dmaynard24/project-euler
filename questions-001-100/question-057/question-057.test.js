const getFractionCount = require('./question-057');

test('in the first one-thousand expansions of the square root of two, gets the count of fractions that contain a numerator with more digits than the denominator to be 153', () => {
  expect(getFractionCount(1000)).toBe(153);
});
