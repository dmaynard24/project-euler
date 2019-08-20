// Integer right triangles

// Problem 39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

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

  // by looking at the values of b and c below, I'm able to limit the range of m based on the pLimit
  for (let m = 2; m * m + 2 * m < pMax; m++) {
    for (let n = 1; n < m; n++) {
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

// gets greatest common divisor of two numbers
function getGcd(a, b) {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
}

function areCoprime(a, b) {
  return getGcd(a, b) == 1;
}

test('gets the value of p ≤ 1000 where the number of solutions is maximised to be 840', () => {
  expect(getMostCommonPerimeter(1000)).toBe(840);
});
