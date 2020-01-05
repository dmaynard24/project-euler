const getSubstringPandigitalSum = require('./question-043');

test('gets the sum of all 0 to 9 pandigital numbers with this property to be 16,695,334,890', () => {
  expect(getSubstringPandigitalSum()).toBe(16695334890);
});
