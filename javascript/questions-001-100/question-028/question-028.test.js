const getDiagonalSum = require('./question-028');

test('gets the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way to be 669171001', () => {
  expect(getDiagonalSum(1001)).toBe(669171001);
});