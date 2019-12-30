// Integer right triangles

// Problem 39
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

const getPrimitiveTriples = require('../../util/pythagorean-triples');

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

module.exports = getMostCommonPerimeter;
