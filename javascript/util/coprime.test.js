const areCoprime = require(`./coprime`);

test(`expects that 8 and 11 are coprime`, () => {
  expect(areCoprime(8, 11)).toBe(true);
});

test(`expects that 8 and 15 are coprime`, () => {
  expect(areCoprime(8, 15)).toBe(true);
});

test(`expects that 8 and 12 are not coprime`, () => {
  expect(areCoprime(8, 12)).toBe(false);
});
