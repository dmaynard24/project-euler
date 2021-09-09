const getClosestArea = require(`./question-085`);

test(`expects the area of the grid with the nearest solution to containing eighteen rectangles to be 6`, () => {
  expect(getClosestArea(18)).toBe(6);
});

test(`expects the area of the grid with the nearest solution to containing sixty rectangles to be 12`, () => {
  expect(getClosestArea(60)).toBe(12);
});

test(`expects the area of the grid with the nearest solution to containing two million rectangles to be 2772`, () => {
  expect(getClosestArea(2000000)).toBe(2772);
});
