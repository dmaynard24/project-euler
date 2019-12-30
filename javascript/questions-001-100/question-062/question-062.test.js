const getSmallestCube = require('./question-062');

test('gets the smallest cube for which exactly five permutations of its digits are cube to be 127,035,954,683', () => {
	expect(getSmallestCube(5)).toBe(127035954683);
});
