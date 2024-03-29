# Large sum

# Problem 13
# Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

from ...util import digits
from . import numbers

numbers = numbers.numbers


def get_first_digits_of_sum(digit_count):
  num_sum = sum([int(num[0:digit_count + 1]) for num in numbers.split('\n')])
  digits_to_trim = digits.get_digit_count(num_sum) - digit_count

  return num_sum // 10**digits_to_trim
