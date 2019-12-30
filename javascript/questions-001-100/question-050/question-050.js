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
		primeNums = primal.getPrimeNumbers(primes),
		largestConsecutiveCount = 0,
		largestSum = 0;

	for (let i = 0; i < primeNums.length; i++) {
		if (primeNums.length - i < largestConsecutiveCount) {
			return largestSum;
		}

		let consecutiveCount = 1,
			sum = primeNums[i];

		for (let j = i + 1; j < primeNums.length; j++) {
			sum += primeNums[j];

			if (sum > limit) {
				break;
			}

			consecutiveCount++;
			if (consecutiveCount > largestConsecutiveCount && primal.isPrime(sum, primes)) {
				largestConsecutiveCount = consecutiveCount;
				largestSum = sum;
			}
		}
	}

	return largestSum;
}

module.exports = getSumOfConsecutivePrimes;
