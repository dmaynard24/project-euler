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
  let leftIndex = 0,
    rightIndex = arr.length - 1;
  while (rightIndex - leftIndex > 0) {
    left = arr[leftIndex];
    right = arr[rightIndex];

    if (left != right) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

module.exports = { isPalindrome, isArrayPalindrome };
