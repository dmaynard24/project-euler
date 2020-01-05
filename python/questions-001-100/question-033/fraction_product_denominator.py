# Digit cancelling fractions

# Problem 33
# The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

# We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

# There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

# If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits, gcd


def get_fraction_product_denominator():
  n_product = 1
  d_product = 1

  for n in range(10, 99):
    for d in range(n + 1, 100):
      decimal = n / d
      n_digits = digits.get_digits(n)
      d_digits = digits.get_digits(d)
      remaining_n = n_digits[0]
      cancelled_n = n_digits[1]
      remaining_d = d_digits[1]
      cancelled_d = d_digits[0]

      if cancelled_n == cancelled_d and remaining_d != 0 and decimal == remaining_n / remaining_d:
        n_product *= n
        d_product *= d

  return d_product / gcd.get_gcd(n_product, d_product)
