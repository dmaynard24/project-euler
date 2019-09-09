const getFirstInteger = require('./question-047');

test('gets the first integer of the first four consecutive integers to have four distinct prime factors each to be 134043', () => {
  expect(getFirstInteger()).toBe('134043');
});
