# Self powers

# Problem 48
# The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

# Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.


def get_last_ten_digits():
  return sum([val**val for val in range(1, 1_001)]) % 10_000_000_000