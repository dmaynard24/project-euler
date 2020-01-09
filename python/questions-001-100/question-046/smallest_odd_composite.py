# Goldbach's other conjecture

# Problem 46
# It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

# 9 = 7 + 2×1^2
# 15 = 7 + 2×2^2
# 21 = 3 + 2×3^2
# 25 = 7 + 2×3^2
# 27 = 19 + 2×2^2
# 33 = 31 + 2×1^2

# It turns out that the conjecture was false.

# What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_smallest_odd_composite():
  limit = 6000
  primes = primal.get_primes(limit)

  for composite in range(35, limit, 2):
    if primal.is_prime(composite, primes) == False:
      proof = False

      for prime in range(2, composite):
        if proof:
          break

        if primal.is_prime(prime, primes):
          root = 1

          while proof == False:
            expression_value = prime + 2 * (root * root)
            if expression_value > composite:
              break
            proof = expression_value == composite

            root += 1

      if proof == False:
        return composite

  return f'Unable to disprove Goldbach\'s other conjecture under {limit}'