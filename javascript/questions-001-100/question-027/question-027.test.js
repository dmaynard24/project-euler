const getCoefficientProduct = require('./question-027');

test('gets the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0 to be -59231', () => {
  expect(getCoefficientProduct()).toBe(-59231);
});
