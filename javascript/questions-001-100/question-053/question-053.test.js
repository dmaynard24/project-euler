const getCombinationCounts = require(`./question-053`);

test(`gets the count of, not necessarily distinct, values of nCr for 1 ≤ n ≤ 100 that are greater than one-million to be 4,075`, () => {
  expect(getCombinationCounts(100)).toBe(4075);
});
