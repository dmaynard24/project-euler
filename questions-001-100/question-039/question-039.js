// Integer right triangles

// Problem 39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

const areCoprime = require('../../util/coprime');

function getMostCommonPerimeter(pMax) {
  let primitives = getPrimitiveTriples(pMax),
    perimeterCounts = [],
    mostCommon = 120,
    mostCommonCount = 3;

  primitives.forEach(primitive => {
    let p = primitive.p;
    while (p <= pMax) {
      perimeterCounts[p] = perimeterCounts[p] ? perimeterCounts[p] + 1 : 1;

      if (perimeterCounts[p] > mostCommonCount) {
        mostCommonCount = perimeterCounts[p];
        mostCommon = p;
      }

      p += primitive.p;
    }
  });

  return mostCommon;
}

function getPrimitiveTriples(pMax) {
  let triples = [];

  // by looking at the values of b and c below, I'm able to limit the range of m based on the pMax
  for (let m = 2; m * m + 2 * m < pMax; m++) {
    let start = (m % 2) + 1;
    for (let n = start; n < m; n += 2) {
      let a = m * m - n * n,
        b = 2 * m * n,
        c = m * m + n * n,
        p = a + b + c;

      if (p > pMax) {
        break;
      }

      if (areCoprime(a, b)) {
        triples.push({
          a: a,
          b: b,
          c: c,
          p: p
        });
      }
    }
  }

  return triples;
}

module.exports = getMostCommonPerimeter;
