# Powerful digit counts

# Problem 63
# The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.

# How many n-digit positive integers exist which are also an nth power?

from ...util import digits


def get_powerful_integer_count():
  count = 0

  for exp in range(1, 22):
    base = 1
    digit_count = 1
    while digit_count <= exp:
      powerful = base**exp

      digit_count = digits.get_digit_count(powerful)
      if digit_count == exp:
        count += 1

      base += 1

  return count