const getSmallestMultiple = require('./question-005');

test('gets the smallest positive number that is evenly divisible by 1 through 10 to be 2,520', () => {
	expect(getSmallestMultiple(10)).toBe(2520);
});

test('gets the smallest positive number that is evenly divisible by 1 through 20 to be 232,792,560', () => {
	expect(getSmallestMultiple(20)).toBe(232792560);
});
