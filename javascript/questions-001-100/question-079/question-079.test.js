const getShortestPasscode = require(`./question-079`);

test(`gets the shortest possible secret passcode of unknown length to be 73162890`, () => {
  expect(getShortestPasscode()).toBe(73162890);
});
