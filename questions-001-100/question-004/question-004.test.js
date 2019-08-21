// Largest palindrome product

// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const digits = require('../../util/digits');

function getLargestPalindromeProduct(digits) {
  let upper = Math.pow(10, digits) - 1,
    lower = Math.pow(10, digits - 1);

  let m = upper,
    n = upper,
    largest = 0;

  while (n >= lower) {
    m = upper;
    while (m >= lower) {
      let product = m * n;
      if (product > largest) {
        if (isPalindrome(product)) {
          largest = product;
          lower = Math.min(m, n);
        }
      }
      m--;
    }
    n--;
  }

  return largest;
}

function isPalindrome(num) {
  let numDigits = digits.getDigitsReversed(num),
    reverse = [...numDigits].reverse();

  for (let i = 0; i < numDigits.length; i++) {
    if (numDigits[i] != reverse[i]) {
      return false;
    }
  }

  return true;
}

test('gets the largest palindrome made from the product of two 3-digit numbers to be 906609', () => {
  expect(getLargestPalindromeProduct(3)).toBe(906609);
});
