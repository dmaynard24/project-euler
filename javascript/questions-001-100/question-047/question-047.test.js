const getFirstInteger = require(`./question-047`);

test(`gets the first integer of the first four consecutive integers to have two distinct prime factors each to be 14`, () => {
  expect(getFirstInteger(2)).toBe(14);
});

test(`gets the first integer of the first four consecutive integers to have three distinct prime factors each to be 644`, () => {
  expect(getFirstInteger(3)).toBe(644);
});

test(`gets the first integer of the first four consecutive integers to have four distinct prime factors each to be 134,043`, () => {
  expect(getFirstInteger(4)).toBe(134043);
});
