const getFibonacciTerm = require('./question-025');

test('gets the index of the first term in the Fibonacci sequence to contain 1000 digits to be 4782', () => {
  expect(getFibonacciTerm(1000)).toBe(4782);
});
