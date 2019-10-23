const digits = require('./digits');

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

function isArrayPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let l = arr[i],
      r = arr[arr.length - 1 - i];

    if (l != r) {
      return false;
    }
  }

  return true;
}

module.exports = { isPalindrome, isArrayPalindrome };
