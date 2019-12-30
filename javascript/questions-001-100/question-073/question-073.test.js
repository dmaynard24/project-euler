const getFractionCount = require('./question-073');

test('gets the count of fractions that lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 8 to be 3', () => {
	expect(getFractionCount(8)).toBe(3);
});

test('gets the count of fractions that lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000 to be 7,295,372', () => {
	expect(getFractionCount(12000)).toBe(7295372);
});
