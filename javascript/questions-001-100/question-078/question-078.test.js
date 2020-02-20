const getLeastN = require(`./question-078`);

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 10 is equal to 9`, () => {
  expect(getLeastN(10)).toBe(9);
});

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 100 is equal to 74`, () => {
  expect(getLeastN(100)).toBe(74);
});

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 1000 is equal to 449`, () => {
  expect(getLeastN(1000)).toBe(449);
});

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 10000 is equal to 599`, () => {
  expect(getLeastN(10000)).toBe(599);
});

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 100000 is equal to 11224`, () => {
  expect(getLeastN(100000)).toBe(11224);
});

test(`expects that, when p(n) represents the number of different ways in which n coins can be separated into piles, the least value of p(n) that is evenly divisible by 1000000 is equal to 55374`, () => {
  expect(getLeastN(1000000)).toBe(55374);
});
