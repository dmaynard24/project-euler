// Integer right triangles

// Problem 39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

function getMostCommonPerimeter(perimeterLimit) {
  let primitives = getPrimitiveTriples(perimeterLimit),
    perimeterCounts = [],
    mostCommon = 120,
    mostCommonCount = 3;

  primitives.forEach(primitive => {
    let p = primitive.p;
    while (p <= perimeterLimit) {
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

function getPrimitiveTriples(perimeterLimit) {
  let triples = [];

  let n = 1,
    m = n + 1,
    p = m * m - n * n + 2 * m * n + m * m + n * n;

  while (p < perimeterLimit) {
    while (p < perimeterLimit) {
      while (!areCoprime(m, n) || (m % 2 == 1 && n % 2 == 1)) {
        m++;
      }

      let a = m * m - n * n,
        b = 2 * m * n,
        c = m * m + n * n;
      p = a + b + c;

      if (p <= perimeterLimit) {
        triples.push({
          a: a,
          b: b,
          c: c,
          p: p
        });
      }

      m++;
    }

    n++;
    m = n + 1;
    p = m * m - n * n + 2 * m * n + m * m + n * n;
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
