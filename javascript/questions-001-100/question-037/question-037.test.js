const getTruncatablePrimeSum = require('./question-037');

test('gets the sum of the only eleven truncatable primes to be 748,317', () => {
	expect(getTruncatablePrimeSum()).toBe(748317);
});
