# Digit fifth powers

# Problem 30
# Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

# 1634 = 1^4 + 6^4 + 3^4 + 4^4
# 8208 = 8^4 + 2^4 + 0^4 + 8^4
# 9474 = 9^4 + 4^4 + 7^4 + 4^4
# As 1 = 1^4 is not a sum it is not included.

# The sum of these numbers is 1634 + 8208 + 9474 = 19316.

# Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits


def get_digit_fifth_power_sum():
  fifth_powers = [digit**5 for digit in range(10)]
  power_sum = 0

  for i in range(2, 200_000):
    i_digits_reversed = digits.get_digits_reversed(i)

    if i == sum([fifth_powers[digit] for digit in i_digits_reversed]):
      power_sum += i

  return power_sum
