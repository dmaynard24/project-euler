# Summation of primes

# Problem 10
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

from ...util import primal


def get_prime_sum(limit):
  primes = primal.get_primes(limit)
  prime_nums = primal.get_prime_numbers(primes)
  return sum(prime_nums)
