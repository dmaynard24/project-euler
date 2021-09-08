# Sub-string divisibility

# Problem 43
# The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

# Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

# d2d3d4=406 is divisible by 2
# d3d4d5=063 is divisible by 3
# d4d5d6=635 is divisible by 5
# d5d6d7=357 is divisible by 7
# d6d7d8=572 is divisible by 11
# d7d8d9=728 is divisible by 13
# d8d9d10=289 is divisible by 17
# Find the sum of all 0 to 9 pandigital numbers with this property.

from ...util import digits, pandigital


def get_remaining_digit(digits):
  digits_sorted = digits[:]
  digits_sorted.sort()
  for i in range(10):
    if i != digits_sorted[i]:
      return i


# returns an array of multiples stored as 3-digit arrays
def get_possible_multiples(multiplicand):
  multiples = []
  multiplier = 1
  product = 0

  while (product < 1_000 - multiplicand):
    product = multiplicand * multiplier
    # 12 is the first 3-digit pandigital (with a leading zero)
    if product >= 12:
      product_digits = digits.get_digits(product)
      # prepend leading zero
      multiples.append([0] +
                       product_digits if product < 100 else product_digits)

    multiplier += 1

  return multiples


def get_substring_pandigital_sum():
  possibles = {
      '1': get_possible_multiples(2),
      '2': get_possible_multiples(3),
      '3': get_possible_multiples(5),
      '4': get_possible_multiples(7),
      '5': get_possible_multiples(11),
      '6': get_possible_multiples(13),
      '7': get_possible_multiples(17)
  }

  def get_set_at_index(index, set, concat):
    pandigitals = []

    for i in range(len(set)):
      new_concat = set[i] if index == 7 else [set[i][0]] + concat

      if pandigital.is_pandigital(new_concat, exclude_zero=False):
        if index - 1 > 0:
          new_set = []
          for possible in possibles[str(index - 1)]:
            if possible[1] == new_concat[0] and possible[2] == new_concat[1]:
              new_set.append(possible)

          pandigitals = pandigitals + get_set_at_index(index - 1, new_set,
                                                       new_concat)
        else:
          pandigitals.append(new_concat)

    return pandigitals

  # recursively create concatenated arrays beginning with an empty array
  pandigitals = get_set_at_index(7, possibles['7'], [])

  # get remaining first digit of each pandigital, add them all up
  substring_pandigital_sum = 0
  for p in pandigitals:
    substring_pandigital_sum += digits.get_int_from_digits(
        [get_remaining_digit(p)] + p)

  return substring_pandigital_sum