const getGcd = require('./gcd');

test('gets the greatest common divisor of 8 and 11 to be 1', () => {
  expect(getGcd(8, 11)).toBe(1);
});

test('gets the greatest common divisor of 8 and 15 to be 1', () => {
  expect(getGcd(8, 15)).toBe(1);
});

test('gets the greatest common divisor of 8 and 12 to be 4', () => {
  expect(getGcd(8, 12)).toBe(4);
});
