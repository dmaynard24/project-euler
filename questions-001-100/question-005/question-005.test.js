// Smallest multiple

// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function getSmallestMultiple(upper) {
  let all = [...Array(upper + 1).keys()].splice(1);

  let npFactorCounts = all
    .map(np => getPrimeFactors(np))
    .map(npfs => {
      return npfs.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
      }, {});
    })
    .reduce((acc, curr) => {
      Object.keys(curr).forEach(key => {
        if (!acc[key] || acc[key] < curr[key]) {
          acc[key] = curr[key];
        }
      });
      return acc;
    }, {});

  let lcm = Object.keys(npFactorCounts).reduce((acc, curr) => {
    acc *= Math.pow(curr, npFactorCounts[curr]);
    return acc;
  }, 1);

  return lcm;
}

function getPrimeFactors(num) {
  let factors = [];

  while (num % 2 == 0) {
    factors.push(2);
    num /= 2;
  }

  let sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num < i) {
      break;
    }
    while (num % i == 0) {
      factors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    factors.push(num);
  }

  return factors;
}

test('gets the smallest positive number that is evenly divisible by 1 through 20 to be 232792560', () => {
  expect(getSmallestMultiple(20)).toBe(232792560);
});
