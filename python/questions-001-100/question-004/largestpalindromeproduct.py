# Largest palindrome product

# Problem 4
# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import palindrome


def largest_palindrome_product(digits):
  upper = 10**digits - 1
  lower = 10**(digits - 1)
  m = upper
  n = upper
  largest = 0
  while n >= lower:
    m = upper
    while m >= lower:
      product = m * n
      if product > largest and palindrome.is_palindrome(product):
        largest = product
        lower = min(m, n)
      m -= 1
    n -= 1
  return largest


print(largest_palindrome_product(3))