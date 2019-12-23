import math


def get_proper_divisors(num):
	divisors = [1]

	for i in range(2, math.floor(math.sqrt(num)) + 1):
		if num % i == 0:
			divisors.append(i)
			if num / i != i:
				divisors.append(num / i)

	return divisors
