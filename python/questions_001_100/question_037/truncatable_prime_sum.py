# Truncatable primes

# Problem 37
# The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

# Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

# NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

from ...util import primal, digits


def get_truncatable_prime_sum():
  limit = 800_000
  primes = primal.get_primes(limit)
  prime_nums = primal.get_prime_numbers(primes)

  def is_truncatable_prime(num):
    if num < 10:
      return False

    is_truncatable = True
    num_digits = digits.get_digits(num)
    for i in range(1, len(num_digits)):
      ltr = 0
      rtl = 0
      for j in range(len(num_digits)):
        if j >= i:
          ltr *= 10
          ltr += num_digits[j]
        else:
          rtl *= 10
          rtl += num_digits[j]

      is_truncatable = primal.is_prime(ltr, primes) and primal.is_prime(
          rtl, primes)
      if is_truncatable == False:
        return False

    return True

  return sum(filter(is_truncatable_prime, prime_nums))
