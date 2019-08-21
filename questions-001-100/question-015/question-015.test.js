const getRoutes = require('./question-015');

test('gets the number of routes through a 20×20 grid to be 137846528820', () => {
  expect(getRoutes(20)).toBe(137846528820);
});
