// Distinct primes factors

// Problem 47
// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2^2 × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

const primal = require('../../util/primal');

function getFirstInteger(targetCount) {
	let limit = 150000,
		primeFactorCounts = primal.getPrimeFactorCounts(limit);

	for (let i = 1; i < limit; i++) {
		let count = primeFactorCounts[i];

		if (count == targetCount) {
			let isConsecutiveSet = true;

			for (let j = 1; j < targetCount; j++) {
				if (primeFactorCounts[i + j] != targetCount) {
					isConsecutiveSet = false;
					i += j;
					break;
				}
			}

			if (isConsecutiveSet) {
				return i;
			}
		}
	}

	return `Unable to find ${targetCount} consecutive integers that have four distinct prime factors each under ${limit}`;
}

module.exports = getFirstInteger;
