# Prime digit replacements

# Problem 51
# By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

# By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

# Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import primal, digits, combination


def get_all_combos(length):
  all_combos = []
  for pick in range(1, length):
    all_combos.extend(combination.get_combos(range(length), pick))
  return all_combos


def get_smallest_prime(count):
  limit = 999_999
  primes = primal.get_primes(limit)
  combos = {'5': get_all_combos(5), '6': get_all_combos(6)}

  for i in range(56003, limit + 1, 2):
    if primal.is_prime(i, primes):
      original_digits = digits.get_digits(i)

      for _ in range(1, len(original_digits)):
        digit_replace_combos = combos[str(len(original_digits))]

        for j in range(len(digit_replace_combos)):
          combo = digit_replace_combos[j]
          other_primes = []
          is_replacing_last_digit = combo[len(combo) -
                                          1] == len(original_digits) - 1
          min_digit = 1 if combo[0] == 0 or is_replacing_last_digit else 0
          step = 2 if is_replacing_last_digit else 1

          for k in range(min_digit, 10, step):
            if is_replacing_last_digit and k == 5:
              continue

            new_digits = original_digits[:]
            for digit in combo:
              new_digits.pop(digit)
              new_digits.insert(digit, k)

            new_digits_int = digits.get_int_from_digits(new_digits)
            if primal.is_prime(new_digits_int, primes):
              other_primes.append(new_digits)

              if len(other_primes) == count:
                return digits.get_int_from_digits(other_primes[0])

            if (10 - k < count - len(other_primes)):
              break