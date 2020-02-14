// Prime summations

// Problem 77
// It is possible to write ten as the sum of primes in exactly five different ways:

// 7 + 3
// 5 + 5
// 5 + 3 + 2
// 3 + 3 + 2 + 2
// 2 + 2 + 2 + 2 + 2

// What is the first value which can be written as the sum of primes in over five thousand different ways?

const primal = require(`../../util/primal`);

function getPrimeSummationCount(comboCount) {
  const primes = primal.getPrimes(100);
  const primeNumsReversed = primal.getPrimeNumbers(primes).reverse();

  function getCount(remaining, index) {
    if (remaining === 0) {
      return 1;
    }

    let count = 0;
    for (let i = index; i < primeNumsReversed.length; i++) {
      const nextTerm = primeNumsReversed[i];
      const newRemaining = remaining - nextTerm;
      const nextIndex = newRemaining >= nextTerm ? i : i + 1;
      count += getCount(newRemaining, nextIndex);
    }

    return count;
  }

  let sum = 10;
  let count = 5;
  let firstIndex;
  while (count < comboCount) {
    sum++;

    for (let i = primeNumsReversed.length - 1; i >= 0; i--) {
      if (primeNumsReversed[i] >= sum) {
        firstIndex = i + 1;
        break;
      }
    }

    count = getCount(sum, firstIndex);
  }

  return sum;
}

module.exports = getPrimeSummationCount;
