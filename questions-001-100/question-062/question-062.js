// Cubic permutations

// Problem 62
// The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

// Find the smallest cube for which exactly five permutations of its digits are cube.

const digits = require('../../util/digits');

function getSmallestCube(count) {
  let start = 10,
    limit = 10000,
    sortedCubes = [];

  for (let i = start; i < limit; i++) {
    let cube = Math.pow(i, 3),
      sortedValue = digits.getIntFromDigits(digits.getDigits(cube).sort((a, b) => b - a));

    if (sortedCubes[sortedValue]) {
      sortedCubes[sortedValue].count++;
      sortedCubes[sortedValue].cubes.push(cube);

      if (sortedCubes[sortedValue].count == count) {
        return Math.min.apply(null, sortedCubes[sortedValue].cubes);
      }
    } else {
      sortedCubes[sortedValue] = {
        count: 1,
        cubes: [cube]
      };
    }
  }

  return `couldn't find a cube with ${count} permutations that are also cubes under ${limit}`;
}

module.exports = getSmallestCube;
