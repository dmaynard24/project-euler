# Counting summations

# Problem 76
# It is possible to write five as a sum in exactly six different ways:

# 4 + 1
# 3 + 2
# 3 + 1 + 1
# 2 + 2 + 1
# 2 + 1 + 1 + 1
# 1 + 1 + 1 + 1 + 1

# How many different ways can one hundred be written as a sum of at least two positive integers?


def get_summation_count(num):
  # keep a cache of counts to avoid redundant recursion
  summation_counts = {}

  def get_count(remaining, term):
    if remaining == 0:
      return 1

    count = 0
    for next_term in range(term, 0, -1):
      new_remaining = remaining - next_term
      next_term_arg = min(new_remaining, next_term)
      cached_addend = None
      addend = None

      # check cache
      if new_remaining in summation_counts:
        # check chained dict
        if next_term_arg in summation_counts[new_remaining]:
          cached_addend = summation_counts[new_remaining][next_term_arg]
      else:
        summation_counts[new_remaining] = {}

      # wasn't cached, calculate addend and cache it
      if cached_addend is None:
        addend = get_count(new_remaining, next_term_arg)
        summation_counts[new_remaining][next_term_arg] = addend
      else:
        addend = cached_addend

      count += addend

    return count

  return get_count(num, num - 1)