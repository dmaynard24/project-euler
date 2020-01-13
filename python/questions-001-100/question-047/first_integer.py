# Distinct primes factors

# Problem 47
# The first two consecutive numbers to have two distinct prime factors are:

# 14 = 2 × 7
# 15 = 3 × 5

# The first three consecutive numbers to have three distinct prime factors are:

# 644 = 2^2 × 7 × 23
# 645 = 3 × 5 × 43
# 646 = 2 × 17 × 19.

# Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_first_integer(target_count):
  limit = 150_000
  prime_factor_counts = primal.get_prime_factor_counts(limit)

  for i in range(1, limit):
    count = prime_factor_counts[i]

    if count == target_count:
      is_consecutive_set = True

      for j in range(1, target_count):
        if prime_factor_counts[i + j] != target_count:
          is_consecutive_set = False
          i += j
          break

      if is_consecutive_set:
        return i

  return f'Unable to find {target_count} consecutive integers that have four distinct prime factors each under {limit}'