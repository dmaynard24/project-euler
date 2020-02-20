// Coin partitions

// Problem 78
// Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.

// OOOOO
// OOOO   O
// OOO   OO
// OOO   O   O
// OO   OO   O
// OO   O   O   O
// O   O   O   O   O
// Find the least value of n for which p(n) is divisible by one million.

const shapes = require(`../../util/shapes`);

function getLeastN(divisor) {
  function getGeneralizedPentagon(i) {
    if (i % 2 === 0) {
      // when i is even, pass positive argument
      return shapes.getNthPentagon(Math.floor(i / 2) + 1);
    }
    // when i is odd, pass negative argument
    return shapes.getNthPentagon(-1 * Math.floor(i / 2) - 1);
  }

  function getTermSign(i) {
    // every two indices, swap term signs
    if (i % 4 < 2) {
      return 1;
    }
    return -1;
  }

  // set the partition count of 0 equal to 1 for the sake of the generator
  const partitionCounts = [1];
  let n = 1;
  while (n < Infinity) {
    let partitionCount = 0;

    let i = 0;
    while (i < Infinity) {
      const generalizedPentagon = getGeneralizedPentagon(i);

      if (generalizedPentagon > n) {
        break;
      }

      const prevPartitionCount = partitionCounts[n - generalizedPentagon];
      partitionCount += getTermSign(i) * prevPartitionCount;
      i++;
    }

    // mod to avoid massive integers
    partitionCount %= divisor;
    if (partitionCount === 0) {
      return n;
    }

    partitionCounts.push(partitionCount);
    n++;
  }

  return 0;
}

// a more generic function to get the partition count of any target n, essentially p(n)
// (not used to solve question 78)
function getPartitionCount(targetN) {
  function getGeneralizedPentagon(i) {
    if (i % 2 === 0) {
      // when i is even, pass positive argument
      return shapes.getNthPentagon(Math.floor(i / 2) + 1);
    }
    // when i is odd, pass negative argument
    return shapes.getNthPentagon(-1 * Math.floor(i / 2) - 1);
  }

  function getTermSign(i) {
    // every two indices, swap term signs
    if (i % 4 < 2) {
      return 1;
    }
    return -1;
  }

  // set the partition count of 0 equal to 1 for the sake of the generator
  const partitionCounts = [1];
  for (n = 1; n <= targetN; n++) {
    let partitionCount = 0;

    let i = 0;
    while (i < Infinity) {
      const generalizedPentagon = getGeneralizedPentagon(i);

      if (generalizedPentagon > n) {
        break;
      }

      const prevPartitionCount = partitionCounts[n - generalizedPentagon];
      partitionCount += getTermSign(i) * prevPartitionCount;
      i++;
    }

    partitionCounts.push(partitionCount);
  }

  return partitionCounts.pop();
}

module.exports = getLeastN;
