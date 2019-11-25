const digits = require('./digits');

function isArrayPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    // leftIndex = i
    // rightIndex = arr.length - 1 - i
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function isPalindrome(num) {
  return isArrayPalindrome(digits.getDigitsReversed(num))
}

module.exports = {
  isArrayPalindrome,
  isPalindrome
};