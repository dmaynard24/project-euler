const getTwoPoundCombinationCount = require(`./question-031`);

test(`gets the count of different ways can £2 be made using any number of coins to be 73,682`, () => {
  expect(getTwoPoundCombinationCount()).toBe(73682);
});
