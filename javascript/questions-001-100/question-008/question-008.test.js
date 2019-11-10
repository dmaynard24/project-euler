const getLargestProduct = require('./question-008');

test('gets the thirteen adjacent digits in the 1000-digit number that have the greatest product to be 23514624000', () => {
  expect(getLargestProduct(13)).toBe(23514624000);
});
