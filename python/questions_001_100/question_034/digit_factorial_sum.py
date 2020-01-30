# Digit factorials

# Problem 34
# 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

# Find the sum of all numbers which are equal to the sum of the factorial of their digits.

# Note: as 1! = 1 and 2! = 2 are not sums they are not included.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits


def get_digit_factorial_sum():
  factorials = []
  factorial_sum = 0

  factorials.append(1)
  for i in range(1, 10):
    factorials.append(i * factorials[i - 1])

  for j in range(3, 41_000):
    num_digits = digits.get_digits(j)
    digit_factorial_sum = 0
    for digit in num_digits:
      digit_factorial_sum += factorials[digit]

    if j == digit_factorial_sum:
      factorial_sum += j

  return factorial_sum
