const getFirstDigitsOfSum = require('./question-013');

test('gets the first ten digits of the sum of the one-hundred 50-digit numbers to be 5537376230', () => {
	expect(getFirstDigitsOfSum(10)).toBe(5537376230);
});
