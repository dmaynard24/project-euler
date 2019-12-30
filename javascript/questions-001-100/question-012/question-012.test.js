const getFirstTriangleWithDivisors = require('./question-012');

test('gets the value of the first triangle number to have over 5 divisors to be 28', () => {
	expect(getFirstTriangleWithDivisors(5)).toBe(28);
});

test('gets the value of the first triangle number to have over 500 hundred divisors to be 76,576,500', () => {
	expect(getFirstTriangleWithDivisors(500)).toBe(76576500);
});
