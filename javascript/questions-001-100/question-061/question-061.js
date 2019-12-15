// Cyclical figurate numbers

// Problem 61
// Triangle, square, pentagonal, hexagonal, heptagonal, and octagonal numbers are all figurate (polygonal) numbers and are generated by the following formulae:

// Triangle	 	  P3n=n(n+1)/2	 	1, 3, 6, 10, 15, ...
// Square	 	    P4n=n2	 	1, 4, 9, 16, 25, ...
// Pentagonal	 	P5n=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
// Hexagonal	 	P6n=n(2n−1)	 	1, 6, 15, 28, 45, ...
// Heptagonal	 	P7n=n(5n−3)/2	 	1, 7, 18, 34, 55, ...
// Octagonal	 	P8n=n(3n−2)	 	1, 8, 21, 40, 65, ...
// The ordered set of three 4-digit numbers: 8128, 2882, 8281, has three interesting properties.

// The set is cyclic, in that the last two digits of each number is the first two digits of the next number (including the last number with the first).
// Each polygonal type: triangle (P3,127=8128), square (P4,91=8281), and pentagonal (P5,44=2882), is represented by a different number in the set.
// This is the only set of 4-digit numbers with this property.
// Find the sum of the only ordered set of six cyclic 4-digit numbers for which each polygonal type: triangle, square, pentagonal, hexagonal, heptagonal, and octagonal, is represented by a different number in the set.

const shapes = require('../../util/shapes');

function getOrderedSet() {
  const limit = 10000,
    termSets = {
      3: shapes.getTriangles(limit),
      4: shapes.getSquares(limit),
      5: shapes.getPentagons(limit),
      6: shapes.getHexagons(limit),
      7: shapes.getHeptagons(limit),
      8: shapes.getOctagons(limit)
    },
    setCount = Object.keys(termSets).length;

  function getNextTerm(set, startValue, matchedSets) {
    let returnSet = [],
      unmatchedKeys = Object.keys(matchedSets).filter(key => matchedSets[key] == false);

    for (let i = startValue; i < limit; i++) {
      for (let j = 0; j < unmatchedKeys.length; j++) {
        if (termSets[unmatchedKeys[j]].has(i)) {
          // for every set except the last
          if (set.length < setCount - 1) {
            if (i % 100 < 10) {
              break;
            }
          }

          // for every set except the first
          if (set.length != 0) {
            if (!areCyclical(set[set.length - 1], i)) {
              break;
            }
          }

          // for just the last set
          if (set.length == setCount - 1) {
            if (!areCyclical(i, set[0])) {
              break;
            }
          }

          // store matches
          matchedSets[unmatchedKeys[j]] = true;
          set.push(i);

          // immediately after pushing a new term, check exit condition
          if (set.length == setCount) {
            return set;
          }

          // continue
          if (returnSet.length == 0) {
            let newStartValue = (i % 100) * 100;
            returnSet = returnSet.concat(getNextTerm(set, newStartValue, matchedSets));
          }

          // pop off the value and update the matches
          matchedSets[unmatchedKeys[j]] = false;
          unmatchedKeys = Object.keys(matchedSets).filter(key => matchedSets[key] == false);
          set.pop();
        }
      }
    }

    return returnSet;
  }

  // 1010 is the initial start value because it's the first 4-digit number that can possibly be cyclical with another 4-digit number
  let onlySet = getNextTerm([], 1010, {
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  });

  return onlySet.reduce((a, c) => a + c);
}

function areCyclical(a, b) {
  return a % 100 == Math.floor(b / 100);
}

module.exports = getOrderedSet;
