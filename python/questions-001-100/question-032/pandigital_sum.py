# Pandigital products

# Problem 32
# We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

# The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

# Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

# HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import pandigital
import math


def get_pandigital_sum():
  products = {}
  pandigital_sum = 0

  for i in range(2, 101):
    limit = math.ceil(9876 / i)

    if pandigital.is_pandigital(i, exclude_zero=True) == False:
      continue

    for j in range(1, limit + 1):
      if pandigital.is_pandigital(j, exclude_zero=True) == False:
        continue

      product = i * j
      if pandigital.is_pandigital(product, exclude_zero=True) == False:
        continue

      # tried using my get_digits utility function (from ../../util/digits), but it was slower than string conversion. weird.
      concat = str(i) + str(j) + str(product)
      if len(concat) > 9:
        break

      if len(concat) == 9 and pandigital.is_pandigital(int(concat),
                                                       exclude_zero=True):
        if products.get(product) is None:
          products[product] = 1
          pandigital_sum += product

  return pandigital_sum
