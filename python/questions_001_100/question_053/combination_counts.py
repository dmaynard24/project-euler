# Combinatoric selections

# Problem 53
# There are exactly ten ways of selecting three from five, 12345:

# 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

# In combinatorics, we use the notation, 5C3=10.

# In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

# It is not until n=23, that a value exceeds one-million: 23C10=1144066.

# How many, not necessarily distinct, values of nCr for 1≤n≤100, are greater than one-million?


def get_combination_counts(n_limit):
  target_combo_count = 1_000_000
  factorials = []
  count = 0

  # cache factorials
  factorials.append(1)
  for i in range(1, n_limit + 1):
    factorials.append(i * factorials[i - 1])

  def get_combo_count(n, r):
    return factorials[n] / (factorials[r] * factorials[n - r])

  for n in range(23, n_limit + 1):
    for r in range(1, n + 1):
      combo_count = get_combo_count(n, r)

      if r > n / 2 and combo_count < target_combo_count:
        break

      if combo_count > target_combo_count:
        count += 1

  return count