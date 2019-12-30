// Names scores

// Problem 22
// Using the array of names, a collection of over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the set?

const names = require('./names');

function getNameScoresSum() {
	names.sort();
	return names.reduce((a, c, i) => {
		return (
			a +
			[...c].reduce((a, c) => {
				return a + (c.charCodeAt() - 64);
			}, 0) *
				(i + 1)
		);
	}, 0);
}

module.exports = getNameScoresSum;
