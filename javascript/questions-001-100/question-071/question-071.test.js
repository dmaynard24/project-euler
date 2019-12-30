const getNumerator = require('./question-071');

test('expects that, after listing the set of reduced proper fractions for d ≤ 8 in ascending order of size, the numerator of the fraction immediately to the left of 3/7 will be 2', () => {
	expect(getNumerator(8)).toBe(2);
});

test('expects that, after listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, the numerator of the fraction immediately to the left of 3/7 will be 428,570', () => {
	expect(getNumerator(1000000)).toBe(428570);
});
