const getSquareRootDigitalSum = require('./question-080');

test('for the first one hundred natural numbers, gets the total of the digital sums of the first one hundred decimal digits for all the irrational square roots to be 40,886', () => {
  expect(getSquareRootDigitalSum(100)).toBe(40886);
});
