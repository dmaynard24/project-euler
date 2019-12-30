const getPrimeSum = require('./question-010');

test('gets the sum of all the primes below ten to be 17', () => {
	expect(getPrimeSum(10)).toBe(17);
});

test('gets the sum of all the primes below two million to be 142,913,828,922', () => {
	expect(getPrimeSum(2000000)).toBe(142913828922);
});
