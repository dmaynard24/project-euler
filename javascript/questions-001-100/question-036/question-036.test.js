const getPalindromicSum = require('./question-036');

test('gets the sum of all numbers, less than one million, which are palindromic in base 10 and base 2 to be 872,187', () => {
	expect(getPalindromicSum(1000000)).toBe(872187);
});
