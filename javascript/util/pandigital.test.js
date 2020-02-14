const isPandigital = require(`./pandigital`);

test(`expects that 134706 is pandigital`, () => {
  expect(isPandigital(134706)).toBe(true);
});

test(`expects that 134706 is not pandigital when you exclude zero`, () => {
  expect(isPandigital(134706, { excludeZero: true })).toBe(false);
});

test(`expects that '134706' is pandigital`, () => {
  expect(isPandigital(`134706`)).toBe(true);
});

test(`expects that '134706' is not pandigital when you exclude zero`, () => {
  expect(isPandigital(`134706`, { excludeZero: true })).toBe(false);
});
