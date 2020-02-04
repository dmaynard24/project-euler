# Counting fractions in a range

# Problem 73
# Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

# If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

# 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

# It can be seen that there are 3 fractions between 1/3 and 1/2.

# How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal, coprime


def get_fraction_count(max_d):
  primes = primal.get_primes(max_d)
  min_target = 1 / 3
  max_target = 1 / 2
  min_d = 2
  count = 0

  for d in range(max_d, min_d - 1, -1):
    for n in range(1, d):
      quotient = n / d

      if quotient <= min_target:
        continue

      if quotient >= max_target:
        break

      if primal.is_prime(d, primes) or primal.is_prime(
          n, primes) or coprime.are_coprime(n, d):
        count += 1

  return count