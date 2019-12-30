// Counting summations

// Problem 76
// It is possible to write five as a sum in exactly six different ways:

// 4 + 1
// 3 + 2
// 3 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1

// How many different ways can one hundred be written as a sum of at least two positive integers?

function getSummationCount(num) {
	// keep a cache of counts to avoid redundant recursion
	let summationCounts = new Map();

	function getCount(remaining, term) {
		if (remaining == 0) {
			return 1;
		}

		let count = 0;
		for (let nextTerm = term; nextTerm > 0; nextTerm--) {
			let newRemaining = remaining - nextTerm,
				nextTermArg = Math.min(newRemaining, nextTerm),
				cachedAddend,
				addend;

			// check cache
			if (summationCounts.has(newRemaining)) {
				// check chained map
				if (summationCounts.get(newRemaining).has(nextTermArg)) {
					cachedAddend = summationCounts.get(newRemaining).get(nextTermArg);
				}
			} else {
				summationCounts.set(newRemaining, new Map());
			}

			// wasn't cached, calculate addend and cache it
			if (!cachedAddend) {
				addend = getCount(newRemaining, nextTermArg);
				summationCounts.get(newRemaining).set(nextTermArg, addend);
			} else {
				addend = cachedAddend;
			}

			count += addend;
		}

		return count;
	}

	return getCount(num, num - 1);
}

module.exports = getSummationCount;
