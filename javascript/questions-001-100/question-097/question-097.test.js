const getLastTenDigits = require(`./question-097`);

test(`expects the last ten digits of the massive non-Mersenne prime number to be 8739992577`, () => {
  expect(getLastTenDigits()).toBe(8739992577);
});
