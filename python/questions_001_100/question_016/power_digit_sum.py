# Power digit sum

# Problem 16
# 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

# What is the sum of the digits of the number 2^1000?

from ...util import digits


def get_power_digit_sum(power):
  return sum(digits.get_digits(2**power))
