// Cubic permutations

// Problem 62
// The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

// Find the smallest cube for which exactly five permutations of its digits are cube.

const digits = require(`../../util/digits`);

function getSmallestCube(count) {
  const start = 10;
  const limit = 10000;
  const sortedCubes = new Map();

  for (let i = start; i < limit; i++) {
    const cube = i ** 3;
    const sortedValue = digits
      .getDigits(cube)
      .sort((a, b) => b - a)
      .join(``);

    if (sortedCubes.has(sortedValue)) {
      const cachedCube = sortedCubes.get(sortedValue);
      cachedCube.count++;
      cachedCube.cubes.push(cube);

      if (cachedCube.count === count) {
        return Math.min.apply(null, cachedCube.cubes);
      }
    } else {
      sortedCubes.set(sortedValue, {
        count: 1,
        cubes: [cube],
      });
    }
  }

  return `Unable to find a cube with ${count} permutations that are also cubes under ${limit}`;
}

module.exports = getSmallestCube;
