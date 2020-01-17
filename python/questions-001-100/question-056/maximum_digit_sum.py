# Powerful digit sum

# Problem 56
# A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

# Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits


def get_maximum_digit_sum(limit):
  lower = 2
  largest = 0

  for a in range(limit - 1, lower - 1, -1):
    if a % 10 == 0:
      continue

    for b in range(limit - 1, lower - 1, -1):
      power_digits = digits.get_digits(a**b)
      if len(power_digits) * 9 < largest:
        break

      power_digits_sum = sum(power_digits)
      if power_digits_sum > largest:
        largest = power_digits_sum

  return largest