// Special Pythagorean triplet

// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function getTripletProduct(sum) {
	let n = 1,
		m = 2,
		upper = Math.sqrt(sum);

	while (n < upper) {
		while (m < upper) {
			let a = m * m - n * n,
				b = 2 * m * n,
				c = m * m + n * n,
				tripleSum = a + b + c;

			if (sum % tripleSum == 0) {
				let k = sum / tripleSum;
				return a * k * b * k * c * k;
			}

			m++;
		}
		n++;
	}
}

module.exports = getTripletProduct;
