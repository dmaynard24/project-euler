from . import digits


def is_permutation(num, test_num):
  num_digits = digits.get_digits_reversed(num)
  test_num_digits = digits.get_digits_reversed(test_num)

  if len(num_digits) != len(test_num_digits):
    return False

  # create hashmap of digit counts in first array
  digit_counts = {}
  for digit in num_digits:
    if digit_counts.get(digit) is None:
      digit_counts[digit] = 1
    else:
      digit_counts[digit] += 1

  # check digit counts in the second array to make sure they match
  for test_digit in test_num_digits:
    if digit_counts.get(test_digit) is None:
      return False
    else:
      digit_counts[test_digit] -= 1
      if digit_counts[test_digit] < 0:
        return False

  return True