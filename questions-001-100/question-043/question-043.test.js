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

const isPandigital = require('../../util/pandigital');

function getSubstringPandigitalSum() {
  let possibles = {
      1: getPossibleMultiples(2),
      2: getPossibleMultiples(3),
      3: getPossibleMultiples(5),
      4: getPossibleMultiples(7),
      5: getPossibleMultiples(11),
      6: getPossibleMultiples(13),
      7: getPossibleMultiples(17)
    },
    pandigitals = [];

  function getSetAtIndex(index, set, concat) {
    for (let i = 0; i < set.length; i++) {
      let newConcat = index == 7 ? set[i] : set[i].substring(0, 1) + concat;

      if (isPandigital(newConcat)) {
        if (index - 1 > 0) {
          let sub = newConcat.substring(0, 2),
            newSet = possibles[index - 1].filter(match => {
              return match.substring(1, 3) == sub;
            });

          getSetAtIndex(index - 1, newSet, newConcat);
        } else {
          pandigitals.push(newConcat);
        }
      }
    }
  }

  // recursively create concatenated strings beginning with an empty string
  getSetAtIndex(7, possibles[7], '');

  // get remaining first digit of each pandigital, add them all up
  let sum = 0;
  pandigitals.forEach(p => {
    sum += parseInt(getRemainingDigit(p) + p, 10);
  });

  return sum;
}

// returns an array of strings since substring is used later
function getPossibleMultiples(multiplicand) {
  let multiples = [],
    multiplier = 1,
    product = 0;

  while (product < 1000 - multiplicand) {
    product = multiplicand * multiplier;
    // 12 is the first 3-digit pandigital with a leading zero
    if (product >= 12) {
      if (product < 100) {
        // prepend leading zero
        product = '0' + product;
      }
      multiples.push(product + '');
    }

    multiplier++;
  }

  return multiples;
}

function getRemainingDigit(str) {
  let digits = str.split('').map(d => parseInt(d, 10));
  for (let i = 0; i < 10; i++) {
    if (digits.indexOf(i) < 0) {
      return i;
    }
  }
}

test('gets the sum of all 0 to 9 pandigital numbers with this property to be 16695334890', () => {
  expect(getSubstringPandigitalSum()).toBe(16695334890);
});
