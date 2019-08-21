const getTripletProduct = require('./question-009');

test('gets the product of the terms in a special Pythagorean triplet to be 31875000', () => {
  expect(getTripletProduct(1000)).toBe(31875000);
});
