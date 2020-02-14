const getMaximumDigitSum = require(`./question-056`);

test(`gets the maximum digital sum of all natural numbers of the form a^b where a < 100 and b < 100 to be 972`, () => {
  expect(getMaximumDigitSum(100)).toBe(972);
});
