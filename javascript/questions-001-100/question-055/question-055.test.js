const getLychrelCount = require(`./question-055`);

test(`gets the count of Lychrel numbers below ten-thousand to be 249`, () => {
  expect(getLychrelCount(10000)).toBe(249);
});
