const getLargestPrimeFactor = require(`./question-003`);

test(`gets the largest prime factor of 600,851,475,143 to be 6,857`, () => {
  expect(getLargestPrimeFactor(600851475143)).toBe(6857);
});
