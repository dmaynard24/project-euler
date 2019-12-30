const getNthPermutation = require('./question-024');

test('gets the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 to be 2,783,915,460', () => {
	expect(getNthPermutation(1000000)).toBe('2783915460');
});
