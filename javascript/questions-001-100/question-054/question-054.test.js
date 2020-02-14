const getHandsPlayerWon = require(`./question-054`);

test(`gets the count of hands that Player 1 won to be 376`, () => {
  expect(getHandsPlayerWon(1)).toBe(376);
});

test(`gets the count of hands that Player 2 won to be 624`, () => {
  expect(getHandsPlayerWon(2)).toBe(624);
});
