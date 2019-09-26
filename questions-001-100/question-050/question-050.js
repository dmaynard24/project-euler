// Consecutive prime sum

// Problem 50
// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?

const primal = require('../../util/primal');

function getSumOfConsecutivePrimes(limit) {
  let primes = primal.getPrimes(limit),
    primeNums = primes.reduce(
      (a, c, i) => {
        if (c) {
          a.push(2 * i + 1);
        }
        return a;
      },
      [2]
    ),
    largestConsecutiveCount = 0,
    largestSum = 0;

  for (let i = 0; i < primeNums.length; i++) {
    let primeNum = primeNums[i],
      consecutiveCount = 1,
      sum = primeNum;

    let j = i + 1;
    while (sum < limit && j < primeNums.length) {
      consecutiveCount++;
      sum += primeNums[j];

      if (primal.isPrime(sum, primes)) {
        if (consecutiveCount > largestConsecutiveCount) {
          largestConsecutiveCount = consecutiveCount;
          largestSum = sum;
        }
      }

      j++;
    }
  }

  return largestSum;
}

// console.log(getSumOfConsecutivePrimes(1000000));

module.exports = getSumOfConsecutivePrimes;
