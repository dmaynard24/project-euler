// Largest palindrome product

// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const palindrome = require(`../../util/palindrome`);

function getLargestPalindromeProduct(digits) {
  const upper = Math.pow(10, digits) - 1;
  let lower = Math.pow(10, digits - 1);

  let m = upper;
  let n = upper;
  let largest = 0;

  while (n >= lower) {
    m = upper;
    while (m >= lower) {
      const product = m * n;
      if (product > largest && palindrome.isPalindrome(product)) {
        largest = product;
        lower = Math.min(m, n);
      }
      m--;
    }
    n--;
  }

  return largest;
}

module.exports = getLargestPalindromeProduct;
