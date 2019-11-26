# Smallest multiple

# Problem 5
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_smallest_multiple(upper):
  nums = range(1, upper + 1)
  prime_factor_counts = [0] * (upper + 1)
  primes = primal.get_primes(16000)

  for num in nums:
    if primal.is_prime(num, primes):
      prime_factor_counts[num] = 1
    else:
      pfs = primal.get_prime_factors(num, primes)
      for pf in pfs:
        if prime_factor_counts[pf['base']] != 0:
          prime_factor_counts[pf['base']] = max(
              prime_factor_counts[pf['base']], pf['exp'])
        else:
          prime_factor_counts[pf['base']] = pf['exp']

  lcm = 1
  for i, pfc in enumerate(prime_factor_counts):
    lcm *= i**pfc
  return lcm