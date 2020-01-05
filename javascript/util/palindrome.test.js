const palindrome = require('./palindrome');

test('expects that 394493 is a palindrome', () => {
  expect(palindrome.isPalindrome(394493)).toBe(true);
});

test('expects that 39493 is a palindrome', () => {
  expect(palindrome.isPalindrome(39493)).toBe(true);
});

test('expects that 394463 is not a palindrome', () => {
  expect(palindrome.isPalindrome(394463)).toBe(false);
});

test('expects that [3, 9, 4, 4, 9, 3] is a palindrome', () => {
  expect(palindrome.isArrayPalindrome([3, 9, 4, 4, 9, 3])).toBe(true);
});

test('expects that [3, 9, 4, 9, 3] is a palindrome', () => {
  expect(palindrome.isArrayPalindrome([3, 9, 4, 9, 3])).toBe(true);
});

test('expects that [3, 9, 4, 4, 6, 3] is not a palindrome', () => {
  expect(palindrome.isArrayPalindrome([3, 9, 4, 4, 6, 3])).toBe(false);
});
