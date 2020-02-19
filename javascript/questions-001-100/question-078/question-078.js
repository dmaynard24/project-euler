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

const shapes = require('../../util/shapes');

function getLeastN(divisor) {
  // use mod later to prevent big ints
  const mod = divisor * 10;

  // set count of partitions for zero to 1 for the sake of the generator
  const partitionCounts = [1];
  // partitionCounts[i] = partitionCounts[i - getNthPentagon(1)] + partitionCounts[i - getNthPentagon(-1)]
  //                    - partitionCounts[i - getNthPentagon(2)] - partitionCounts[i - getNthPentagon(-2)]
  //                    + partitionCounts[i - getNthPentagon(3)] + partitionCounts[i - getNthPentagon(-3)]
}

console.log(getLeastN(1000));
// 100000 - 11224
// 10000 - 599
// 1000 - 449
// 100 - 74
// 10 - 9
