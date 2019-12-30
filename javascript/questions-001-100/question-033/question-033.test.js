const question33 = require('./question-033');

test('gets the denominator of the product of the four curious fractions to be 100', () => {
	expect(question33.getFractionProductDenominator()).toBe(100);
});
