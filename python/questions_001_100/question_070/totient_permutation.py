# Totient permutation

# Problem 70
# Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.
# The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

# Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

# Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.

import sys
from ...util import primal, permutation, phi


def get_totient_permutation(limit):
  primes = primal.get_primes(limit)
  min_n = None
  min_quotient = sys.maxsize

  for n in range(limit, 1, -1):
    if primal.is_prime(n, primes) == False:
      phi_n = phi.get_phi(n, primes)
      if permutation.is_permutation(n, phi_n):
        quotient = n / phi_n
        if quotient < min_quotient:
          min_quotient = quotient
          min_n = n

  return min_n