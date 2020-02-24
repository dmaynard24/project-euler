// Pentagon numbers

// Problem 44
// Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?

const shapes = require(`../../util/shapes`);

function getPentagonDifference() {
  let smallest = Infinity;

  let n = 1;
  while (n < Infinity) {
    const pk = shapes.getNthPentagon(n);
    if (pk - 1 > smallest) {
      return smallest;
    }

    for (let i = 1; i < n; i++) {
      const pj = shapes.getNthPentagon(i);
      if (shapes.isPentagonal(pk + pj) && shapes.isPentagonal(pk - pj)) {
        smallest = pk - pj;
      }
    }

    n++;
  }

  return 0;
}

module.exports = getPentagonDifference;
