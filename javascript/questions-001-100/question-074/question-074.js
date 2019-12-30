// Digit factorial chains

// Problem 74
// The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

// 1! + 4! + 5! = 1 + 24 + 120 = 145

// Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

// 169 → 363601 → 1454 → 169
// 871 → 45361 → 871
// 872 → 45362 → 872

// It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

// 69 → 363600 → 1454 → 169 → 363601 (→ 1454)
// 78 → 45360 → 871 → 45361 (→ 871)
// 540 → 145 (→ 145)

// Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

// How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?

const digits = require('../../util/digits');

function getNonRepeatingChainCount(limit) {
	let factorials = [],
		factorialSums = new Map(),
		targetLength = 60,
		count = 0;

	factorials.push(1);
	for (let i = 1; i <= 9; i++) {
		factorials.push(i * factorials[i - 1]);
	}

	for (let i = 1; i < limit; i++) {
		let didLoop = false,
			val = i,
			chain = new Map();

		chain.set(val, 1);
		while (!didLoop) {
			if (!factorialSums.has(val)) {
				let valDigits = digits.getDigitsReversed(val),
					sum = valDigits.reduce((a, c) => a + factorials[c], 0);

				factorialSums.set(val, sum);
			}

			if (chain.has(factorialSums.get(val))) {
				let length = chain.size;
				if (length == targetLength) {
					count++;
				}
				didLoop = true;
			} else {
				let cachedSum = factorialSums.get(val);
				chain.set(cachedSum, 1);
				val = cachedSum;
			}
		}
	}

	return count;
}

module.exports = getNonRepeatingChainCount;
