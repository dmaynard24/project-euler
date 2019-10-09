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
  let lIndex = 0,
    rIndex = arr.length - 1;
  while (rIndex - lIndex > 0) {
    l = arr[lIndex];
    r = arr[rIndex];

    if (l != r) {
      return false;
    }

    lIndex++;
    rIndex--;
  }

  return true;
}

module.exports = { isPalindrome, isArrayPalindrome };
