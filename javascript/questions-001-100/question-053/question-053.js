// Combinatoric selections

// Problem 53
// There are exactly ten ways of selecting three from five, 12345:

// 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

// In combinatorics, we use the notation, 5C3=10.

// In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

// It is not until n=23, that a value exceeds one-million: 23C10=1144066.

// How many, not necessarily distinct, values of nCr for 1≤n≤100, are greater than one-million?

function getCombinationCounts(nLimit) {
  const targetComboCount = 1000000;
  const factorials = [];
  let count = 0;

  // cache factorials
  factorials.push(1);
  for (let i = 1; i <= nLimit; i++) {
    factorials.push(i * factorials[i - 1]);
  }

  function getComboCount(n, r) {
    return factorials[n] / (factorials[r] * factorials[n - r]);
  }

  for (let n = 23; n <= nLimit; n++) {
    for (let r = 1; r <= n; r++) {
      const comboCount = getComboCount(n, r);

      if (r > n / 2 && comboCount < targetComboCount) {
        break;
      }

      if (comboCount > targetComboCount) {
        count++;
      }
    }
  }

  return count;
}

module.exports = getCombinationCounts;
