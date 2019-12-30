const getNonRepeatingChainCount = require('./question-074');

test('gets the count of digit factorial chains starting with a number below one million and containing exactly sixty non-repeating terms to be 402', () => {
	expect(getNonRepeatingChainCount(1000000)).toBe(402);
});
