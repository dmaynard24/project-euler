// Double-base palindromes

// Problem 36
// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

const palindrome = require('../../util/palindrome');

function getPalindromicSum(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i += 2) {
    if (palindrome.isArrayPalindrome([...i.toString()])) {
      let binary = i.toString(2);
      if (palindrome.isArrayPalindrome([...binary])) {
        sum += i;
      }
    }
  }

  return sum;
}

module.exports = getPalindromicSum;
