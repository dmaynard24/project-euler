const getPrimeSummationCount = require(`./question-077`);

test(`gets the first value which can be written as the sum of primes in over five different ways to be 10`, () => {
  expect(getPrimeSummationCount(5)).toBe(10);
});

test(`gets the first value which can be written as the sum of primes in over five thousand different ways to be 71`, () => {
  expect(getPrimeSummationCount(5000)).toBe(71);
});
