# Ordered fractions

# Problem 71
# Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

# If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

# 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

# It can be seen that 2/5 is the fraction immediately to the left of 3/7.

# By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.

import sys
from ...util import primal, coprime


def get_numerator(max_d):
  primes = primal.get_primes(max_d)
  target = 3 / 7
  min_d = max_d - 10 if max_d > 10 else max_d - 5
  smallest_diff = sys.maxsize
  left_n = None

  for d in range(max_d, min_d - 1, -1):
    for n in range(1, d):
      quotient = n / d
      if quotient >= target:
        break

      diff = target - quotient
      if diff < smallest_diff and (primal.is_prime(d, primes)
                                   or primal.is_prime(n, primes)
                                   or coprime.are_coprime(n, d)):
        smallest_diff = diff
        left_n = n

  return left_n