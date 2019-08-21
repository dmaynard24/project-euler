const digits = require('./digits');

test('gets the digits in 8127 to be [8, 1, 2, 7]', () => {
  expect(digits.getDigits(8127)).toStrictEqual([8, 1, 2, 7]);
});

test('gets the digits in 2106 to be [2, 1, 0, 6]', () => {
  expect(digits.getDigits(2106)).toStrictEqual([2, 1, 0, 6]);
});

test('gets the reversed digits in 8127 to be [7, 2, 1, 8]', () => {
  expect(digits.getDigitsReversed(8127)).toStrictEqual([7, 2, 1, 8]);
});

test('gets the rotations of digits in 379 to be [793, 937]', () => {
  expect(digits.getDigitsRotations(379)).toStrictEqual([793, 937]);
});

test('gets the int value of an array of digits in [1, 0, 4, 7, 9] to be 10479', () => {
  expect(digits.getIntFromDigits([1, 0, 4])).toBe(104);
});
