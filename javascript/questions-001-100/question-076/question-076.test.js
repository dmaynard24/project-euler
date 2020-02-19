const getSummationCount = require(`./question-076`);

test(`gets the count of ways five can be written as the sum of at least two positive integers to be 6`, () => {
  expect(getSummationCount(5)).toBe(6);
});

test(`gets the count of ways one hundred can be written as the sum of at least two positive integers to be 190,569,291`, () => {
  expect(getSummationCount(100)).toBe(190569291);
});
