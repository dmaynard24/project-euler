const areCoprime = require(`./coprime`);

function getPrimitiveTriples(pMax) {
  const triples = [];

  // by looking at the values of b and c below, I'm able to limit the range of m based on the pMax
  for (let m = 2; m * m + 2 * m < pMax; m++) {
    const start = (m % 2) + 1;
    for (let n = start; n < m; n += 2) {
      const a = m * m - n * n;
      const b = 2 * m * n;
      const c = m * m + n * n;
      const p = a + b + c;

      if (p > pMax) {
        break;
      }

      if (areCoprime(a, b)) {
        triples.push({
          a,
          b,
          c,
          p,
        });
      }
    }
  }

  return triples;
}

module.exports = getPrimitiveTriples;
