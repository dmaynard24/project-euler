const getPowerfulIntegerCount = require('./question-063');

test('gets the count of n-digit positive integers exist which are also an nth power to be 49', () => {
  expect(getPowerfulIntegerCount()).toBe(49);
});
