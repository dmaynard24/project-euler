# Pandigital prime

# Problem 41
# We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

# What is the largest n-digit pandigital prime that exists?

from ...util import digits, primal


# instead of using my isPandigital utility function (../../util/pandigital),
# I wrote a new one because this question requires all numbers 1 through n are used exactly once
def is_pandigital(num):
  num_digits = digits.get_digits(num)
  num_digits.sort()

  if num_digits[0] == 0:
    return False

  for i in range(len(num_digits)):
    if num_digits[i] != i + 1:
      return False

  return True


def get_largest_pandigital_prime():
  largest = 2143
  valid_ranges = []

  # max number of digits is 9, min is 4 (given by the example)
  for i in range(9, 3, -1):
    all_digits = list(range(1, i + 1))
    digits_sum = sum(all_digits)

    # a number is divisible by 3 if the sum of its digits is divisible by 3, making it non-prime
    if digits_sum % 3 != 0:
      valid_range = {
          'start': digits.get_int_from_digits(all_digits),
          # reverse all_digits (not in-place)
          'end': digits.get_int_from_digits(all_digits[::-1])
      }
      valid_ranges.append(valid_range)

  for j in range(len(valid_ranges)):
    for k in range(valid_ranges[j]['end'], valid_ranges[j]['start'] - 1, -2):
      if is_pandigital(k) and primal.is_prime(k):
        return k

  return largest
