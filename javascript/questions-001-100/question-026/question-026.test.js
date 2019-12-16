const getDenominator = require('./question-026');

test('gets the value of d < 1,000 for which 1/d contains the longest recurring cycle in its decimal fraction part to be 983', () => {
  expect(getDenominator()).toBe(983);
});
