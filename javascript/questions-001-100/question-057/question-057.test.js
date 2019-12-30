const getFractionCount = require('./question-057');

test('in the first 7 expansions of the square root of two, gets the count of fractions that contain a numerator with more digits than the denominator to be 0', () => {
	expect(getFractionCount(7)).toBe(0);
});

test('in the first 8 expansions of the square root of two, gets the count of fractions that contain a numerator with more digits than the denominator to be 1', () => {
	expect(getFractionCount(8)).toBe(1);
});

test('in the first 1,000 expansions of the square root of two, gets the count of fractions that contain a numerator with more digits than the denominator to be 153', () => {
	expect(getFractionCount(1000)).toBe(153);
});
