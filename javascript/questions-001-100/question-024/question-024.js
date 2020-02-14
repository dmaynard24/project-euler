// Lexicographic permutations

// Problem 24
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const digits = require(`../../util/digits`);

function factorialize(num) {
  let val = 1;
  while (num > 1) {
    val *= num;
    num--;
  }

  return val;
}

function getNthPermutation(n) {
  const allDigits = [...Array(10).keys()];
  let target = n - 1;
  const perm = [];

  for (let i = 9; i >= 0; i--) {
    const perms = factorialize(i);
    const index = Math.floor(target / perms);
    const digit = allDigits[index];

    perm.push(allDigits.splice(allDigits.indexOf(digit), 1));

    target %= perms;
  }

  return digits.getIntFromDigits(perm);
}

module.exports = getNthPermutation;
