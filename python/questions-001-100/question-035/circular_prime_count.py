# Circular primes

# Problem 35
# The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

# There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

# How many circular primes are there below one million?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal, digits


def get_circular_prime_count(limit):
  primes = primal.get_primes(limit - 1)
  prime_nums = primal.get_prime_numbers(primes)
  count = 0

  for i in range(len(prime_nums)):
    num_digits = digits.get_digits(prime_nums[i])

    if len(num_digits) == 1:
      count += 1
    else:
      has_even_digit = False
      for digit in num_digits:
        if digit % 2 == 0:
          has_even_digit = True
          break

      if has_even_digit == False:
        are_all_prime = True
        length = len(num_digits)
        for j in range(1, length):
          rotation = 0
          for k in range(length):
            rotation *= 10
            rotation += num_digits[(j + k) % length]
          are_all_prime = primal.is_prime(rotation, primes)
          if are_all_prime == False:
            break

        if are_all_prime == True:
          count += 1

  return count
