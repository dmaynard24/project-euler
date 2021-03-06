// Singular integer right triangles

// Problem 75
// It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

// 12 cm: (3,4,5)
// 24 cm: (6,8,10)
// 30 cm: (5,12,13)
// 36 cm: (9,12,15)
// 40 cm: (8,15,17)
// 48 cm: (12,16,20)

// In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

// 120 cm: (30,40,50), (20,48,52), (24,45,51)

// Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

const getPrimitiveTriples = require(`../../util/pythagorean-triples`);

function getUniquePerimeters(pMax) {
  const primitives = getPrimitiveTriples(pMax);
  const perimeterCounts = new Map();
  let uniqueCounts = 0;

  primitives.forEach((primitive) => {
    let { p } = primitive;
    while (p <= pMax) {
      if (perimeterCounts.has(p)) {
        perimeterCounts.set(p, perimeterCounts.get(p) + 1);
        if (perimeterCounts.get(p) === 2) {
          uniqueCounts--;
        }
      } else {
        perimeterCounts.set(p, 1);
        uniqueCounts++;
      }

      p += primitive.p;
    }
  });

  return uniqueCounts;
}

module.exports = getUniquePerimeters;
