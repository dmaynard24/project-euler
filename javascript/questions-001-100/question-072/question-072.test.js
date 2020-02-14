const getFractionCount = require(`./question-072`);

test(`gets the count of elements contained in the set of reduced proper fractions for d ≤ 8 to be 21`, () => {
  expect(getFractionCount(8)).toBe(21);
});

test(`gets the count of elements contained in the set of reduced proper fractions for d ≤ 1,000,000 to be 303,963,552,391`, () => {
  expect(getFractionCount(1000000)).toBe(303963552391);
});
