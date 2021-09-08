# 10001st prime

# Problem 7
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10 001st prime number?

from ...util import primal


def get_nth_prime(n):
  limit = 105_000
  primes = primal.get_primes(limit)
  prime_nums = primal.get_prime_numbers(primes)

  return prime_nums[n - 1]
