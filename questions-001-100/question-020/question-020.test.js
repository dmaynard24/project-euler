const getFactorialDigitSum = require('./question-020');

test('gets the sum of the digits in the number 100! be 648', () => {
  expect(getFactorialDigitSum(100)).toBe(648);
});
