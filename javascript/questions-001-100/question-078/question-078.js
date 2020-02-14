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

function getLeastN(divisor) {
  // use mod later to prevent big ints
  const mod = divisor * 10;

  // keep a cache of counts to avoid redundant recursion
  const partitionCounts = new Map();

  function getPartitionCount(remaining, term) {
    if (remaining === 0) {
      return 1;
    }

    let count = 0;
    for (let nextTerm = term; nextTerm > 0; nextTerm--) {
      const newRemaining = remaining - nextTerm;
      const nextTermArg = Math.min(newRemaining, nextTerm);
      let cachedAddend;
      let addend = 0;

      // check cache
      if (partitionCounts.has(newRemaining)) {
        // check chained map
        if (partitionCounts.get(newRemaining).has(nextTermArg)) {
          cachedAddend = partitionCounts.get(newRemaining).get(nextTermArg);
        }
      } else {
        partitionCounts.set(newRemaining, new Map());
      }

      if (!cachedAddend) {
        addend = getPartitionCount(newRemaining, nextTermArg);
        partitionCounts.get(newRemaining).set(nextTermArg, addend);
      } else {
        addend = cachedAddend;
      }

      count += addend;
      if (count > mod) {
        count %= mod;
      }
    }

    return count;
  }

  let i = 1;
  const limit = 20000;
  while (i < limit) {
    const partitionCount = getPartitionCount(i, i);
    if (partitionCount % divisor === 0) {
      // console.log(i, partitionCount, divisor);
      return i;
    }
    i++;
  }

  return `couldn't find a solution for n in p(n) where n is less than ${limit}`;
}

// console.log(getLeastN(10000));
// 100000 - 11224
// 10000 - 599
// 1000 - 449
// 100 - 74
// 10 - 9
