# Permuted multiples

# Problem 52
# It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

# Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import pandigital, permutation


def get_smallest_integer(max_multiplier):
  limit = 1000000
  i = 1

  while i < limit:
    i *= 10

    x = i
    while x < (i * 10) / max_multiplier:
      if pandigital.is_pandigital(x, exclude_zero=False):
        for multiplier in range(2, max_multiplier + 1):
          if permutation.is_permutation(x, x * multiplier) == False:
            break

          if multiplier == max_multiplier:
            return x

      x += 1

  return f'Unable to find a positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits under {limit}'