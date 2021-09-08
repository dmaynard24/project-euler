# Pandigital multiples

# Problem 38
# Take the number 192 and multiply it by each of 1, 2, and 3:

# 192 × 1 = 192
# 192 × 2 = 384
# 192 × 3 = 576
# By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

# The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

# What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

from ...util import pandigital


def get_largest_pandigital():
  # we're able to deduce a few things about the range of input values to check:
  # 1. the input value must start with a 9 (because the largest example given starts with a 9 and we're concatenating products onto the starting value).
  # 2. the input value must be pandigital because it's part of the output value which must be pandigital.
  # 3. the input value must be 4 digits long. here's why:
  #   * the only 1 digit number (9) was already given in the example
  #   * every 2 digit number between 90 and 98 will always concat to either a 5, 8, or 11 digit number (we need a 9 digit output value)
  #   * every 3 digit number between 901 and 987 will always concat to either be a 7, or 11 digit number (we need a 9 digit output value)
  #   * every 4 digit number between 9123 and 9876 will always concat to a 9 digit output value. BINGO.
  for num in range(9_876, 9_182, -1):
    concat = num * 100_002

    if pandigital.is_pandigital(concat, exclude_zero=True):
      return concat

  return 918_273_645
