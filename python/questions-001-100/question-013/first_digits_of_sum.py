# Large sum

# Problem 13
# Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits

import numbers


def get_first_digits_of_sum(digit_count):
  num_sum = sum(
      list(
          map(lambda num: int(num[0:digit_count + 1]),
              numbers.numbers.split('\n'))))
  digits_to_trim = digits.get_digit_count(num_sum) - digit_count

  return num_sum // 10**digits_to_trim