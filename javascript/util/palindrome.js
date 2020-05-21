const digits = require(`./digits`);

function isArrayPalindrome(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function isPalindrome(num) {
  return isArrayPalindrome(digits.getDigitsReversed(num));
}

module.exports = {
  isArrayPalindrome,
  isPalindrome,
};
