// Odd period square roots

// Problem 64
// All square roots are periodic when written as continued fractions.

// It can be seen that the sequence of leading integer terms for the continued fraction representing √23 is repeating. For conciseness, we use the notation √23=[4;(1,3,1,8)], to indicate that the block (1,3,1,8) repeats indefinitely.

// The first ten continued fraction representations of (irrational) square roots are:

// √2=[1;(2)], period=1
// √3=[1;(1,2)], period=2
// √5=[2;(4)], period=1
// √6=[2;(2,4)], period=2
// √7=[2;(1,1,1,4)], period=4
// √8=[2;(1,4)], period=2
// √10=[3;(6)], period=1
// √11=[3;(3,6)], period=2
// √12=[3;(2,6)], period=2
// √13=[3;(1,1,1,1,6)], period=5

// Exactly four continued fractions, for N≤13, have an odd period.

// How many continued fractions for N≤10000 have an odd period?

const getPeriod = require('../../util/period');

function getFractionCount(max) {
	return [...Array(max + 1).keys()].slice(2).filter(n => {
		return getPeriod(n).length % 2 != 0;
	}).length;
}

module.exports = getFractionCount;
