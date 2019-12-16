const getDiagonalSum = require('./question-028');

test('gets the sum of the numbers on the diagonals in a 1,001 by 1,001 spiral formed in the same way to be 669,171,001', () => {
  expect(getDiagonalSum(1001)).toBe(669171001);
});
