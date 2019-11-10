const getLargestPalindromeProduct = require('./question-004');

test('gets the largest palindrome made from the product of two 3-digit numbers to be 906609', () => {
  expect(getLargestPalindromeProduct(3)).toBe(906609);
});
