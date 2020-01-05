const areCoprime = require('./coprime');

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

module.exports = getPrimitiveTriples;
