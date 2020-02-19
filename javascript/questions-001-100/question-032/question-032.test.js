const getPandigitalSum = require(`./question-032`);

test(`gets the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital to be 45,228`, () => {
  expect(getPandigitalSum()).toBe(45228);
});
