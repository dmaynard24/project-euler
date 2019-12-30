const getFibonacciTerm = require('./question-025');

test('gets the index of the first term in the Fibonacci sequence to contain 2 digits to be 7', () => {
	expect(getFibonacciTerm(2)).toBe(7);
});

test('gets the index of the first term in the Fibonacci sequence to contain 3 digits to be 12', () => {
	expect(getFibonacciTerm(3)).toBe(12);
});

test('gets the index of the first term in the Fibonacci sequence to contain 4 digits to be 17', () => {
	expect(getFibonacciTerm(4)).toBe(17);
});

test('gets the index of the first term in the Fibonacci sequence to contain 1000 digits to be 4,782', () => {
	expect(getFibonacciTerm(1000)).toBe(4782);
});
