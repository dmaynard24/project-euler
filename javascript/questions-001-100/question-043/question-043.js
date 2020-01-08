// Sub-string divisibility

// Problem 43
// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

const isPandigital = require('../../util/pandigital'),
  digits = require('../../util/digits');

function getSubstringPandigitalSum() {
  let possibles = {
    1: getPossibleMultiples(2),
    2: getPossibleMultiples(3),
    3: getPossibleMultiples(5),
    4: getPossibleMultiples(7),
    5: getPossibleMultiples(11),
    6: getPossibleMultiples(13),
    7: getPossibleMultiples(17)
  };

  function getSetAtIndex(index, set, concat) {
    let pandigitals = [];

    for (let i = 0; i < set.length; i++) {
      let newConcat = index == 7 ? set[i] : [set[i][0], ...concat];

      if (isPandigital(newConcat)) {
        if (index - 1 > 0) {
          let newSet = possibles[index - 1].filter(match => {
            return match[1] == newConcat[0] && match[2] == newConcat[1];
          });

          pandigitals = pandigitals.concat(getSetAtIndex(index - 1, newSet, newConcat));
        } else {
          pandigitals.push(newConcat);
        }
      }
    }

    return pandigitals;
  }

  // recursively create concatenated arrays beginning with an empty array
  let pandigitals = getSetAtIndex(7, possibles[7], []);

  // get remaining first digit of each pandigital, add them all up
  let sum = 0;
  pandigitals.forEach(p => {
    sum += digits.getIntFromDigits([getRemainingDigit(p), ...p]);
  });

  return sum;
}

// returns an array of multiples stored as 3-digit arrays
function getPossibleMultiples(multiplicand) {
  let multiples = [],
    multiplier = 1,
    product = 0;

  while (product < 1000 - multiplicand) {
    product = multiplicand * multiplier;
    // 12 is the first 3-digit pandigital (with a leading zero)
    if (product >= 12) {
      let productDigits = digits.getDigits(product);
      // prepend leading zero
      multiples.push(product < 100 ? [0, ...productDigits] : productDigits);
    }

    multiplier++;
  }

  return multiples;
}

function getRemainingDigit(digits) {
  let digitsSorted = [...digits].sort();
  for (let i = 0; i < 10; i++) {
    if (i != digitsSorted[i]) {
      return i;
    }
  }
}

module.exports = getSubstringPandigitalSum;
