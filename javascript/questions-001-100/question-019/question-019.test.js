const getSundayCount = require('./question-019');

test('gets how many Sundays fell on the first of the month during the twentieth century to be 171', () => {
  expect(getSundayCount(1901, 2000)).toBe(171);
});
