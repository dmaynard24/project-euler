// Special Pythagorean triplet

// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function getTripletProduct(sum) {
  let n = 1;
  let m = 2;
  const upper = Math.sqrt(sum);

  while (n < upper) {
    while (m < upper) {
      const a = m * m - n * n;
      const b = 2 * m * n;
      const c = m * m + n * n;
      const tripleSum = a + b + c;

      if (sum % tripleSum === 0) {
        const k = sum / tripleSum;
        return a * k * b * k * c * k;
      }

      m++;
    }
    n++;
  }

  return 0;
}

module.exports = getTripletProduct;
