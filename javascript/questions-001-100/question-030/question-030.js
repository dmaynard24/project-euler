// Digit fifth powers

// Problem 30
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

function getDigitFifthPowerSum() {
	let fifthPowers = [...Array(10).keys()].map(key => Math.pow(key, 5)),
		sum = 0;

	for (let i = 2; i <= 200000; i++) {
		// tried using my getDigits utility function (from ../../util/digits), but it was slower than string conversion. weird.
		let digits = i.toString().split('');

		if (i == digits.map(digit => fifthPowers[digit]).reduce((a, c) => a + c)) {
			sum += i;
		}
	}

	return sum;
}

module.exports = getDigitFifthPowerSum;
