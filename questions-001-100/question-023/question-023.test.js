const getSum = require('./question-023');

test('gets the sum of all the positive integers which cannot be written as the sum of two abundant numbers to be 4179871', () => {
  expect(getSum()).toBe(4179871);
});
