const getChainCount = require(`./question-092`);

test(`expects the count of starting numbers below ten million that will arrive at 89 to be 8,581,146`, () => {
  expect(getChainCount(10000000)).toBe(8581146);
});
