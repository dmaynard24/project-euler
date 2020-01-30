# Double-base palindromes

# Problem 36
# The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

# Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

# (Please note that the palindromic number, in either base, may not include leading zeros.)

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import palindrome


def get_palindromic_sum(limit):
  palindromic_sum = 0

  for i in range(1, limit, 2):
    if palindrome.is_array_palindrome(list(str(i))):
      binary = bin(i)[2:]
      if palindrome.is_array_palindrome(list(binary)):
        palindromic_sum += i

  return palindromic_sum
