const isPalindrome = require('./palindrome');

test('expects that 394493 is a palindrome', () => {
  expect(isPalindrome(394493)).toBe(true);
});

test('expects that 394463 is not a palindrome', () => {
  expect(isPalindrome(394463)).toBe(false);
});