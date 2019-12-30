const getMaximumPathSum = require('./question-018'),
	triangle = require('./triangle');

test('gets the maximum total from top to bottom of the triangle to be 1,074', () => {
	expect(getMaximumPathSum(triangle)).toBe(1074);
});
