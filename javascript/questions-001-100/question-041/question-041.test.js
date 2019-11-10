const getLargestPandigitalPrime = require('./question-041');

test('gets the largest n-digit pandigital prime that exists to be 7652413', () => {
  expect(getLargestPandigitalPrime()).toBe(7652413);
});
