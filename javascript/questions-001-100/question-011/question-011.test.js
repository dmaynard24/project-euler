const getLargestProduct = require('./question-011');

test('gets the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the grid to be 70600674', () => {
  expect(getLargestProduct(4)).toBe(70600674);
});
