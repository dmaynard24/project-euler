# Prime power triples

# Problem 87
# The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

# 28 = 2^2 + 2^3 + 2^4
# 33 = 3^2 + 2^3 + 2^4
# 49 = 5^2 + 2^3 + 2^4
# 47 = 2^2 + 3^3 + 2^4

# How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal


def get_prime_sum_count(limit):
  prime_limit = 10_000
  primes = primal.get_primes(prime_limit)
  prime_nums = primal.get_prime_numbers(primes)
  smallest_cube = 2**3
  smallest_fourth = 2**4
  sums = {}

  for square_root in prime_nums:
    square = square_root**2
    if limit - square < smallest_cube + smallest_fourth:
      break
    for cube_root in prime_nums:
      cube = cube_root**3
      if limit - cube < square + smallest_fourth:
        break
      for fourth_root in prime_nums:
        fourth = fourth_root**4
        prime_sum = square + cube + fourth
        if prime_sum < limit:
          sums[prime_sum] = 1
        else:
          break

  return len(sums)


print(get_prime_sum_count(50_000_000))  # 1097343
