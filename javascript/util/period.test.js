const getPeriod = require('./period');

test('gets the period of 2 to be [2]', () => {
	expect(getPeriod(2)).toStrictEqual([2]);
});

test('gets the period of 13 to be [1, 1, 1, 1, 6]', () => {
	expect(getPeriod(13)).toStrictEqual([1, 1, 1, 1, 6]);
});

test('gets the period of 23 to be [1, 3, 1, 8]', () => {
	expect(getPeriod(23)).toStrictEqual([1, 3, 1, 8]);
});

test('gets the period of 919 to be [3, 5, 1, 2, 1, 2, 1, 1, 1, 2, 3, 1, 19, 2, 3, 1, 1, 4, 9, 1, 7, 1, 3, 6, 2, 11, 1, 1, 1, 29, 1, 1, 1, 11, 2, 6, 3, 1, 7, 1, 9, 4, 1, 1, 3, 2, 19, 1, 3, 2, 1, 1, 1, 2, 1, 2, 1, 5, 3, 60]', () => {
	expect(getPeriod(919)).toStrictEqual([
		3,
		5,
		1,
		2,
		1,
		2,
		1,
		1,
		1,
		2,
		3,
		1,
		19,
		2,
		3,
		1,
		1,
		4,
		9,
		1,
		7,
		1,
		3,
		6,
		2,
		11,
		1,
		1,
		1,
		29,
		1,
		1,
		1,
		11,
		2,
		6,
		3,
		1,
		7,
		1,
		9,
		4,
		1,
		1,
		3,
		2,
		19,
		1,
		3,
		2,
		1,
		1,
		1,
		2,
		1,
		2,
		1,
		5,
		3,
		60
	]);
});
