const getSmallestOddComposite = require('./question-046');

test('gets the smallest odd composite that cannot be written as the sum of a prime and twice a square to be 5777', () => {
  expect(getSmallestOddComposite()).toBe(5777);
});
