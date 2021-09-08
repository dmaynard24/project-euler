# Largest prime factor

# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

from ...util import primal


def get_largest_prime_factor(num):
  primes = primal.get_primes(10_000)
  return primal.get_prime_factors(num, primes).pop()['base']
