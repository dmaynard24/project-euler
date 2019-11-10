const getSideLength = require('./question-058');

test('gets the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10% to be 26241', () => {
  expect(getSideLength(10)).toBe(26241);
});
