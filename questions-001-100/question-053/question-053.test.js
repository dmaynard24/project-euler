// Combinatoric selections

// Problem 53
// There are exactly ten ways of selecting three from five, 12345:

// 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

// In combinatorics, we use the notation, 5C3=10.

// In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

// It is not until n=23, that a value exceeds one-million: 23C10=1144066.

// How many, not necessarily distinct, values of nCr for 1≤n≤100, are greater than one-million?

function getCombinationCounts(nLimit) {
  let factorials = [],
    count = 0;

  // cache factorials of all digits 1 - 9
  factorials.push(1);
  for (let i = 1; i <= nLimit; i++) {
    factorials.push(i * factorials[i - 1]);
  }

  function getComboCount(n, r) {
    return factorials[n] / (factorials[r] * factorials[n - r]);
  }

  for (let n = 23; n <= nLimit; n++) {
    for (let r = 1; r <= n; r++) {
      if (getComboCount(n, r) > 1000000) {
        count++;
      }
    }
  }

  return count;
}

test('gets the count of, not necessarily distinct, values of nCr for 1≤n≤100 that are greater than one-million to be 4075', () => {
  expect(getCombinationCounts(100)).toBe(4075);
});
