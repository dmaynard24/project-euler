# 10001st prime

# Problem 7
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10 001st prime number?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_nth_prime(n):
  limit = 105000
  primes = primal.get_primes(limit)
  count = 1

  for i in range(3, limit, 2):
    if primal.is_prime(i, primes):
      count += 1
      if count == n:
        return i

  return count
