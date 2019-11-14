const digits = require('./digits');

function isPalindrome(num) {
  let digitsReversed = digits.getDigitsReversed(num);

  let i = 0,
    len = digitsReversed.length;
  // leftIndex = i
  // rightIndex = len - 1 - i
  while (len - 1 - i - i > 0) {
    if (digitsReversed[i] != digitsReversed[len - 1 - i]) {
      return false;
    }

    i++;
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
