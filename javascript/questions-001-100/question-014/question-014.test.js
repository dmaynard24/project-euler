const getLargestCollatzSequence = require('./question-014');

test('gets the starting number under one million that produces the longest Collatz chain to be 837,799', () => {
	expect(getLargestCollatzSequence(1000000)).toBe(837799);
});
