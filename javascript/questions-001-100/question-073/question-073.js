// Counting fractions in a range

// Problem 73
// Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

// If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

// 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

// It can be seen that there are 3 fractions between 1/3 and 1/2.

// How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?

const primal = require('../../util/primal'),
	areCoprime = require('../../util/coprime');

function getFractionCount(max) {
	let primes = primal.getPrimes(max),
		minTarget = 1 / 3,
		maxTarget = 1 / 2,
		minD = 2,
		count = 0;

	for (let d = max; d >= minD; d--) {
		for (let n = 1; n < d; n++) {
			let quotient = n / d;

			if (quotient <= minTarget) {
				continue;
			}

			if (quotient >= maxTarget) {
				break;
			}

			if (primal.isPrime(d, primes) || primal.isPrime(n, primes) || areCoprime(n, d)) {
				count++;
			}
		}
	}

	return count;
}

module.exports = getFractionCount;
