const getProperDivisors = require(`./factors`);

test(`gets the proper divisors of 24 to be [1, 2, 12, 3, 8, 4, 6]`, () => {
  expect(getProperDivisors(24)).toStrictEqual([1, 2, 12, 3, 8, 4, 6]);
});

test(`gets the proper divisors of 26 to be [1, 2, 13]`, () => {
  expect(getProperDivisors(26)).toStrictEqual([1, 2, 13]);
});

test(`gets the proper divisors of 7 to be [1]`, () => {
  expect(getProperDivisors(7)).toStrictEqual([1]);
});
