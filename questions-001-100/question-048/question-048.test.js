const getLastTenDigits = require('./question-048');

test('gets the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000 to be 9110846700', () => {
  expect(getLastTenDigits()).toBe('9110846700');
});
