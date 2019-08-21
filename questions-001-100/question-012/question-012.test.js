const getFirstTriangleWithDivisors = require('./question-012');

test('gets the value of the first triangle number to have over five hundred divisors to be 76576500', () => {
  expect(getFirstTriangleWithDivisors(500)).toBe(76576500);
});
