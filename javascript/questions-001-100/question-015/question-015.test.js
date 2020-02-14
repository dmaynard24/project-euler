const getRouteCount = require(`./question-015`);

test(`gets the number of routes through a 2x2 grid to be 6`, () => {
  expect(getRouteCount(2)).toBe(6);
});

test(`gets the number of routes through a 20×20 grid to be 137,846,528,820`, () => {
  expect(getRouteCount(20)).toBe(137846528820);
});
