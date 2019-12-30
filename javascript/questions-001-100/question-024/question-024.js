// Lexicographic permutations

// Problem 24
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

function getNthPermutation(n) {
	let digits = [...Array(10).keys()],
		target = n - 1,
		perm = [];

	for (let i = 9; i >= 0; i--) {
		let perms = factorialize(i),
			index = Math.floor(target / perms),
			digit = digits[index];

		perm.push(digits.splice(digits.indexOf(digit), 1));

		target %= perms;
	}

	return perm.join('');
}

function factorialize(num) {
	let val = 1;
	while (num > 1) {
		val *= num;
		num--;
	}

	return val;
}

module.exports = getNthPermutation;
