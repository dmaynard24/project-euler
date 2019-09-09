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
    largestConsecutiveCount = 0,
    largestSum = 0;

  for (let i = 2; i < limit; i++) {
    let consecutiveCount = 0,
      sum = 0;

    if (primal.isPrime(i, primes)) {
      consecutiveCount++;
      sum += i;

      let j = i + 1;
      while (sum < limit && j < primes.length) {
        if (primal.isPrime(j, primes)) {
          consecutiveCount++;
          sum += j;

          if (primal.isPrime(sum, primes) && consecutiveCount > largestConsecutiveCount) {
            largestConsecutiveCount = consecutiveCount;
            largestSum = sum;
          }
        }

        j++;
      }
    }
  }

  return largestSum;
}

module.exports = getSumOfConsecutivePrimes;
