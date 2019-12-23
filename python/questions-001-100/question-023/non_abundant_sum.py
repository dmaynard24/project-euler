# Non-abundant sums

# Problem 23
# A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

# A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

# As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

# Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import factors


def get_non_abundant_sum():
	lower = 12
	upper = 28213
	abundants = []
	for i in range(lower, upper + 1):
		proper_divisors_sum = sum(factors.get_proper_divisors(i))
		if (proper_divisors_sum > i):
			abundants.append(i)

	abundant_sums = [None] * (upper + 1)
	for i in range(0, len(abundants)):
		for j in range(i, len(abundants)):
			abundant_sum = abundants[i] + abundants[j]
			if (abundant_sum > upper):
				break

			abundant_sums[abundant_sum] = True

	non_abundant_sum = 0
	for i, val in enumerate(abundant_sums):
		non_abundant_sum += i if val == None else 0

	return non_abundant_sum
