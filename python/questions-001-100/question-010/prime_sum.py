# Summation of primes

# Problem 10
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_prime_sum(limit):
  primes = primal.get_primes(limit)
  sum = 2
  for i in range(3, limit, 2):
    if primal.is_prime(i, primes):
      sum += i
  return sum