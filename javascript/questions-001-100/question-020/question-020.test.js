const getFactorialDigitSum = require(`./question-020`);

test(`gets the sum of the digits in the number 10 factorial be 27`, () => {
  expect(getFactorialDigitSum(10)).toBe(27);
});

test(`gets the sum of the digits in the number 100 factorial be 648`, () => {
  expect(getFactorialDigitSum(100)).toBe(648);
});
