const getNumberLetterCount = require('./question-017');

test('gets the number of letters used in all numbers from 1 to 5 to be 19', () => {
  expect(getNumberLetterCount(5)).toBe(19);
});

test('gets the number of letters used in all numbers from 1 to 1000 to be 21124', () => {
  expect(getNumberLetterCount(1000)).toBe(21124);
});
