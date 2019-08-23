const getDigitFactorialSum = require('./question-034');

test('gets the sum of all numbers which are equal to the sum of the factorial of their digits to be 40730', () => {
  expect(getDigitFactorialSum()).toBe(40730);
});
