from . import gcd


def are_coprime(a, b):
	return gcd.get_gcd(a, b) == 1