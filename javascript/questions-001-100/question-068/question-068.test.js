const getLargestConcat = require(`./question-068`);

test(`gets the maximum 16-digit string for a "magic" 5-gon ring to be 6531031914842725`, () => {
  expect(getLargestConcat()).toBe(6531031914842725);
});
