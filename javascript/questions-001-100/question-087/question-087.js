// Prime power triples

// Problem 87
// The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

// 28 = 2^2 + 2^3 + 2^4
// 33 = 3^2 + 2^3 + 2^4
// 49 = 5^2 + 2^3 + 2^4
// 47 = 2^2 + 3^3 + 2^4

// How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?

const primal = require(`../../util/primal`);

function getPrimeSumCount(limit) {
  const primeLimit = 10000;
  const primes = primal.getPrimes(primeLimit);
  const primeNums = primal.getPrimeNumbers(primes);
  const smallestCube = 2 ** 3;
  const smallestFourth = 2 ** 4;
  const sums = new Set();

  for (let i = 0; i < primeNums.length; i++) {
    const square = primeNums[i] ** 2;
    if (limit - square < smallestCube + smallestFourth) {
      break;
    }
    for (let j = 0; j < primeNums.length; j++) {
      const cube = primeNums[j] ** 3;
      if (limit - cube < square + smallestFourth) {
        break;
      }
      for (let k = 0; k < primeNums.length; k++) {
        const fourth = primeNums[k] ** 4;
        const primeSum = square + cube + fourth;
        if (primeSum < limit) {
          sums.add(primeSum);
        } else {
          break;
        }
      }
    }
  }

  return sums.size;
}

module.exports = getPrimeSumCount;
