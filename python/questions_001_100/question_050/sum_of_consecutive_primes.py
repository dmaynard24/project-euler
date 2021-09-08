# Consecutive prime sum

# Problem 50
# The prime 41, can be written as the sum of six consecutive primes:

# 41 = 2 + 3 + 5 + 7 + 11 + 13
# This is the longest sum of consecutive primes that adds to a prime below one-hundred.

# The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

# Which prime, below one-million, can be written as the sum of the most consecutive primes?

from ...util import primal


def get_sum_of_consecutive_primes(limit):
  primes = primal.get_primes(limit)
  prime_nums = primal.get_prime_numbers(primes)
  largest_consecutive_count = 0
  largest_sum = 0

  for i in range(len(prime_nums)):
    if len(prime_nums) - i < largest_consecutive_count:
      return largest_sum

    consecutive_count = 1
    consecutive_sum = prime_nums[i]

    for j in range(i + 1, len(prime_nums)):
      consecutive_sum += prime_nums[j]

      if consecutive_sum > limit:
        break

      consecutive_count += 1
      if consecutive_count > largest_consecutive_count and primal.is_prime(
          consecutive_sum, primes):
        largest_consecutive_count = consecutive_count
        largest_sum = consecutive_sum

  return largest_sum