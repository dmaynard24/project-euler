// Square root convergents

// Problem 57
// It is possible to show that the square root of two can be expressed as an infinite continued fraction.

// √ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

// By expanding this for the first four iterations, we get:

// 1 + 1/2 = 3/2 = 1.5
// 1 + 1/(2 + 1/2) = 7/5 = 1.4
// 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
// 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

// The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

// In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?

const bigInt = require('big-integer');

function getFractionCount(iterationCount) {
  let count = 0,
    ns = [1],
    ds = [1],
    n = bigInt(3),
    d = bigInt(2);

  for (let i = 1; i <= iterationCount; i++) {
    ns.push(n);
    ds.push(d);
    n = n.multiply(2).add(ns[i - 1]);
    d = d.multiply(2).add(ds[i - 1]);
    if (n.toArray(10).value.length > d.toArray(10).value.length) {
      count++;
    }
  }

  return count;
}

module.exports = getFractionCount;
