const getPowerDigitSum = require('./question-016');

test('gets the sum of the digits of the number 2^15 to be 26', () => {
	expect(getPowerDigitSum(15)).toBe(26);
});

test('gets the sum of the digits of the number 2^1,000 to be 1,366', () => {
	expect(getPowerDigitSum(1000)).toBe(1366);
});
