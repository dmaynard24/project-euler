# Square root digital expansion

# Problem 80
# It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

# The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.

# For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

from ...util import digits
from decimal import *


def get_square_root_digital_sum(max_num):
  precision = 102
  getcontext().prec = precision

  square_root_digital_sum = 0

  for num in range(1, max_num + 1):
    sqrt_tuple = Decimal(num).sqrt().as_tuple().digits

    if len(sqrt_tuple) == precision:
      square_root_digital_sum += sum(sqrt_tuple[:100])

  return square_root_digital_sum
