const getPowerDigitSum = require('./question-016');

test('gets the sum of the digits of the number 2^1000 to be 1366', () => {
  expect(getPowerDigitSum(1000)).toBe(1366);
});
