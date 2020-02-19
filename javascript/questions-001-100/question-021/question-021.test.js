const getAmicableSum = require(`./question-021`);

test(`gets the sum of all the amicable numbers under 10,000 to be 31,626`, () => {
  expect(getAmicableSum(10000)).toBe(31626);
});
