const getSum = require('./question-002');

test('gets the sum of all even-valued terms in the Fibonacci sequence to be 4,613,732', () => {
	expect(getSum(4000000)).toBe(4613732);
});
