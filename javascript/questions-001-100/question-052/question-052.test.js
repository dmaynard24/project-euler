const getSmallestInteger = require('./question-052');

test('gets the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits to be 142857', () => {
  expect(getSmallestInteger(6)).toBe(142857);
});
