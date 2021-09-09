const getPrimeSumCount = require(`./question-087`);

test(`expects the count of numbers below fifty that can be expressed as the sum of a prime square, prime cube, and prime fourth power to be 4`, () => {
  expect(getPrimeSumCount(50)).toBe(4);
});

test(`expects the count of numbers below fifty million that can be expressed as the sum of a prime square, prime cube, and prime fourth power to be 1,097,343`, () => {
  expect(getPrimeSumCount(50000000)).toBe(1097343);
});
