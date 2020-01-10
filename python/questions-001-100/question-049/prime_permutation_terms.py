# Prime permutations

# Problem 49
# The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

# There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

# What 12-digit number do you form by concatenating the three terms in this sequence?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal, permutation, digits


def get_prime_permutation_terms():
  limit = 9999
  addend = 3330
  primes = primal.get_primes(limit)

  # 1489 is the next prime
  for i in range(1489, limit - addend * 2 + 1, 2):
    if primal.is_prime(i, primes):
      terms_concat = digits.get_digits(i)
      for j in range(1, 3):
        next_term = i + addend * j
        if primal.is_prime(next_term, primes) and permutation.is_permutation(
            i, next_term):
          terms_concat = terms_concat + digits.get_digits(next_term)
          if len(terms_concat) == 12:
            return digits.get_int_from_digits(terms_concat)
        else:
          break