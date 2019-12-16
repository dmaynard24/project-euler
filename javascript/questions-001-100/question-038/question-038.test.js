const getLargestPandigital = require('./question-038');

test('gets the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1, 2, ... , n) where n > 1 to be 932,718,654', () => {
  expect(getLargestPandigital()).toBe(932718654);
});
