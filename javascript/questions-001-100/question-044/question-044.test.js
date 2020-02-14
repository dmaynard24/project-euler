const getPentagonDifference = require(`./question-044`);

test(`gets the minimum difference between a pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal to be 5,482,660`, () => {
  expect(getPentagonDifference()).toBe(5482660);
});
