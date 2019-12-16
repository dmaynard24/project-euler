const getSumSquareDifference = require('./question-006');

test('gets the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum to be 25,164,150', () => {
  expect(getSumSquareDifference(100)).toBe(25164150);
});
