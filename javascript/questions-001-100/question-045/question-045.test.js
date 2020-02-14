const getTrianglePentagonHexagon = require(`./question-045`);

test(`gets the next triangle number after 40,755 that is also pentagonal and hexagonal to be 1,533,776,805`, () => {
  expect(getTrianglePentagonHexagon()).toBe(1533776805);
});
