const getMostCommonPerimeter = require('./question-039');

test('gets the value of p ≤ 1000 where the number of solutions is maximised to be 840', () => {
  expect(getMostCommonPerimeter(1000)).toBe(840);
});
