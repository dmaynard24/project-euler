const getNumeratorSum = require(`./question-065`);

test(`gets the sum of digits in the numerator of the 10th convergent of the continued fraction for e to be 17`, () => {
  expect(getNumeratorSum(10)).toBe(17);
});

test(`gets the sum of digits in the numerator of the 100th convergent of the continued fraction for e to be 272`, () => {
  expect(getNumeratorSum(100)).toBe(272);
});
