const digits = require('./digits');

function isPermutation(num, testNum) {
  let numDigits = digits.getDigitsReversed(num),
    testNumDigits = digits.getDigitsReversed(testNum);

  if (numDigits.length != testNumDigits.length) {
    return false;
  }

  // create hashmap of digit counts in first array
  let digitCounts = [];
  for (let i = 0; i < numDigits.length; i++) {
    let digit = numDigits[i];
    if (digitCounts[digit] == undefined) {
      digitCounts[digit] = 1;
    } else {
      digitCounts[digit]++;
    }
  }

  // check digit counts in the second array to make sure they match
  for (let i = 0; i < testNumDigits.length; i++) {
    let digit = testNumDigits[i];
    if (digitCounts[digit] == undefined) {
      return false;
    } else {
      digitCounts[digit]--;
      if (digitCounts[digit] < 0) {
        return false;
      }
    }
  }

  return true;
}

// always picks a.length
function getPerms(a) {
  if (a.length < 2) {
    return [a];
  }

  var c,
    d,
    b = [];
  for (c = 0; c < a.length; c++) {
    var e = a.splice(c, 1),
      f = getPerms(a);
    for (d = 0; d < f.length; d++) {
      b.push(e.concat(f[d]));
    }
    a.splice(c, 0, e[0]);
  }
  return b;
}

module.exports = { isPermutation, getPerms };
