const getConstantProduct = require('./question-040');

test('gets the value of d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000 to be 210', () => {
  expect(getConstantProduct()).toBe(210);
});
