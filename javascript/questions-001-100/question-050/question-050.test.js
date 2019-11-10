const getSumOfConsecutivePrimes = require('./question-050');

test('gets the prime, below one-hundred, that can be written as the sum of the most consecutive primes to be 41', () => {
  expect(getSumOfConsecutivePrimes(100)).toBe(41);
});

test('gets the prime, below one-thousand, that can be written as the sum of the most consecutive primes to be 997651', () => {
  expect(getSumOfConsecutivePrimes(1000)).toBe(953);
});

test('gets the prime, below one-million, that can be written as the sum of the most consecutive primes to be 997651', () => {
  expect(getSumOfConsecutivePrimes(1000000)).toBe(997651);
});
