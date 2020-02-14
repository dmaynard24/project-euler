const getNthPrime = require(`./question-007.js`);

test(`gets the 6th prime number to be 13`, () => {
  expect(getNthPrime(6)).toBe(13);
});

test(`gets the 10,001st prime number to be 104,743`, () => {
  expect(getNthPrime(10001)).toBe(104743);
});
