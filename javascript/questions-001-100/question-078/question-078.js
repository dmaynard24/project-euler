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
const bigInt = require(`big-integer`);

function getLeastN() {
  // partitionCounts[i] = partitionCounts[i - getNthPentagon(1)] + partitionCounts[i - getNthPentagon(-1)]
  //                    - partitionCounts[i - getNthPentagon(2)] - partitionCounts[i - getNthPentagon(-2)]
  //                    + partitionCounts[i - getNthPentagon(3)] + partitionCounts[i - getNthPentagon(-3)]

  // set count of partitions for zero to 1 for the sake of the generator
  const partitionCounts = [bigInt(1)];
  let index = 1;
  while (index < Infinity) {
    let partitionCount = bigInt(0);
    let i = 0;
    while (i < Infinity) {
      const n = Math.floor(i / 2) + 1;
      const generalizedPentagon = i % 2 === 0 ? shapes.getNthPentagon(n) : shapes.getNthPentagon(-1 * n);

      if (generalizedPentagon > index) {
        break;
      }

      const prevPartitionCount = partitionCounts[index - generalizedPentagon];
      partitionCount = i % 4 < 2 ? partitionCount.add(prevPartitionCount) : partitionCount.minus(prevPartitionCount);

      if (partitionCount.mod(1000000).equals(0)) {
        return index;
      }

      i++;
    }

    partitionCounts.push(partitionCount);
    index++;
  }

  return 0;
}

// generic function that could prove useful in the future
function getPartitionCount(targetIndex) {
  // partitionCounts[i] = partitionCounts[i - getNthPentagon(1)] + partitionCounts[i - getNthPentagon(-1)]
  //                    - partitionCounts[i - getNthPentagon(2)] - partitionCounts[i - getNthPentagon(-2)]
  //                    + partitionCounts[i - getNthPentagon(3)] + partitionCounts[i - getNthPentagon(-3)]

  // set count of partitions for zero to 1 for the sake of the generator
  const partitionCounts = [1];
  for (let index = 1; index <= targetIndex; index++) {
    let partitionCount = 0;
    let i = 0;
    while (i < Infinity) {
      const n = Math.floor(i / 2) + 1;
      const generalizedPentagon = i % 2 === 0 ? shapes.getNthPentagon(n) : shapes.getNthPentagon(-1 * n);

      if (generalizedPentagon > index) {
        break;
      }

      const prevPartitionCount = partitionCounts[index - generalizedPentagon];
      partitionCount += n % 4 < 2 ? prevPartitionCount : -1 * prevPartitionCount;

      i++;
    }

    partitionCounts.push(partitionCount);
  }

  return partitionCounts.pop();
}

console.log(getLeastN());
// 100000 - 11224
// 10000 - 599
// 1000 - 449
// 100 - 74
// 10 - 9
