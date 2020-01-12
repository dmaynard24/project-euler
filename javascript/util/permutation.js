const digits = require('./digits');

function isPermutation(num, testNum) {
  let numDigits = digits.getDigitsReversed(num),
    testNumDigits = digits.getDigitsReversed(testNum);

  if (numDigits.length != testNumDigits.length) {
    return false;
  }

  // create hashmap of digit counts in first array
  let digitCounts = new Map();
  for (let i = 0; i < numDigits.length; i++) {
    let digit = numDigits[i];
    if (!digitCounts.has(digit)) {
      digitCounts.set(digit, 1);
    } else {
      digitCounts.set(digit, digitCounts.get(digit) + 1);
    }
  }

  // check digit counts in the second array to make sure they match
  for (let i = 0; i < testNumDigits.length; i++) {
    let digit = testNumDigits[i];
    if (!digitCounts.has(digit)) {
      return false;
    } else {
      digitCounts.set(digit, digitCounts.get(digit) - 1);
      if (digitCounts.get(digit) < 0) {
        return false;
      }
    }
  }

  return true;
}

// always picks arr.length
function getPerms(arr) {
  if (arr.length < 2) {
    return [arr];
  }

  let perms = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr.splice(i, 1),
      remainingPerms = getPerms(arr);
    for (let j = 0; j < remainingPerms.length; j++) {
      perms.push(first.concat(remainingPerms[j]));
    }

    arr.splice(i, 0, first[0]);
  }

  return perms;
}

module.exports = { isPermutation, getPerms };
