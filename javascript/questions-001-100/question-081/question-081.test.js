// const getMinimalPathSum = require('./queston-081');
const getMinimalPathSum = require(`./question-081`);

test(`gets the minimal path sum in the matrix string containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down to be 427,337`, () => {
  expect(getMinimalPathSum()).toBe(427337);
});
