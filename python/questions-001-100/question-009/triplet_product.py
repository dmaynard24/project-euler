# Special Pythagorean triplet

# Problem 9
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

# a^2 + b^2 = c^2
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

import math


def get_triplet_product(sum):
  n = 1
  m = 2
  upper = math.sqrt(sum)

  while n < upper:
    while m < upper:
      a = m * m - n * n
      b = 2 * m * n
      c = m * m + n * n
      triple_sum = a + b + c

      if sum % triple_sum == 0:
        k = sum / triple_sum
        return a * k * b * k * c * k

      m += 1
    n += 1


print(get_triplet_product(1000))
