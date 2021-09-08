# Digit factorial chains

# Problem 74
# The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

# 1! + 4! + 5! = 1 + 24 + 120 = 145

# Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

# 169 → 363601 → 1454 → 169
# 871 → 45361 → 871
# 872 → 45362 → 872

# It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

# 69 → 363600 → 1454 → 169 → 363601 (→ 1454)
# 78 → 45360 → 871 → 45361 (→ 871)
# 540 → 145 (→ 145)

# Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

# How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?

from ...util import digits


def get_non_repeating_chain_count(limit):
  factorials = []
  factorial_sums = {}
  target_length = 60
  count = 0

  factorials.append(1)
  for i in range(1, 10):
    factorials.append(i * factorials[i - 1])

  for i in range(1, limit):
    did_loop = False
    val = i
    chain = {}

    chain[val] = 1
    while did_loop == False:
      if val not in factorial_sums:
        val_digits = digits.get_digits_reversed(val)
        factorial_sum = 0
        for digit in val_digits:
          factorial_sum += factorials[digit]

        factorial_sums[val] = factorial_sum

      if factorial_sums.get(val) in chain:
        length = len(chain)
        if length == target_length:
          count += 1
        did_loop = True
      else:
        cached_sum = factorial_sums.get(val)
        chain[cached_sum] = 1
        val = cached_sum

  return count