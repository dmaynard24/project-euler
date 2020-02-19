const getDigitFifthPowerSum = require(`./question-030`);

test(`gets the sum of all the numbers that can be written as the sum of fifth powers of their digits to be 443,839`, () => {
  expect(getDigitFifthPowerSum()).toBe(443839);
});
