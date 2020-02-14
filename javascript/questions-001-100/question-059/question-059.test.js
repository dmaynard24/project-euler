const getAsciiSum = require(`./question-059`);

test(`expects the sum of the ASCII values in the original text to be 129,448`, () => {
  expect(getAsciiSum()).toBe(129448);
});
