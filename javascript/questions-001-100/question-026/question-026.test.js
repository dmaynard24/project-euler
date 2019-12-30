const getDenominatorWithLongestCycle = require('./question-026');

test('gets the value of d < 10 for which 1/d contains the longest recurring cycle in its decimal fraction part to be 7', () => {
	expect(getDenominatorWithLongestCycle(10)).toBe(7);
});

test('gets the value of d < 1,000 for which 1/d contains the longest recurring cycle in its decimal fraction part to be 983', () => {
	expect(getDenominatorWithLongestCycle(1000)).toBe(983);
});
