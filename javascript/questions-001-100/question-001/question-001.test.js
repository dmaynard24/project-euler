const getSum = require('./question-001');

test('gets the sum of all multiples of 3 or 5 below 1000 to be 233,168', () => {
  expect(getSum(1000)).toBe(233168);
});
