const getSmallestPrime = require('./question-051');

test('gets the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family to be 121,313', () => {
	expect(getSmallestPrime(8)).toBe(121313);
});
