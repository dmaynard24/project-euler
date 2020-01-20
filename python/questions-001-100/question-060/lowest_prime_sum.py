# Prime pair sets

# Problem 60
# The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

# Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal, digits


def get_lowest_prime_sum(count):
  non_prime_perms = {}
  global sum_limit
  sum_limit = sys.maxsize
  initial_limit = 10000
  primes = primal.get_primes(initial_limit)

  def get_sets(curr_set):
    global sum_limit
    sets = []

    set_sum = sum(curr_set) if len(curr_set) > 0 else 0
    if set_sum < sum_limit:
      term_limit = sum_limit - curr_set[-1] * (
          count - len(curr_set)) if sum_limit != sys.maxsize else initial_limit
      i_start = curr_set[-1] + 1 if len(curr_set) > 0 else 2
      for i in range(i_start, term_limit):
        if primal.is_prime(i, primes):
          # only evaluate new permutations
          new_term_digits = digits.get_digits(i)
          are_all_prime = True
          for j in range(len(curr_set)):
            term_digits = digits.get_digits(curr_set[j])
            prepended = i
            for digit in term_digits:
              prepended *= 10
              prepended += digit

            if non_prime_perms.get(
                str(prepended)) == True or primal.is_prime(prepended) == False:
              non_prime_perms[prepended] = True
              are_all_prime = False
              break

            appended = curr_set[j]
            for digit in new_term_digits:
              appended *= 10
              appended += digit

            if non_prime_perms.get(
                str(appended)) == True or primal.is_prime(appended) == False:
              non_prime_perms[appended] = True
              are_all_prime = False
              break

          if are_all_prime:
            new_set = curr_set + [i]

            if len(new_set) < count:
              sets.extend(get_sets(new_set))
            else:
              sets.append(new_set)

              set_sum = sum(new_set)
              if set_sum < sum_limit:
                sum_limit = set_sum

    return sets

  sets = get_sets([])

  if len(sets):
    smallest = sum(sets[0])
    for i in range(1, len(sets)):
      set_sum = sum(sets[i])
      if set_sum < smallest:
        smallest = set_sum
    return smallest

  return f'Unable to find a set of {count} primes for which any two primes concatenate to produce another prime.'