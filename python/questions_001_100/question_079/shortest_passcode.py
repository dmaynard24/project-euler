# Passcode derivation

# Problem 79
# A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

# The keylog string contains fifty successful login attempts.

# Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

from ...util import digits
from . import keylog

keylog = keylog.keylog


def get_shortest_passcode():
  logins = set(map(int, keylog.split('\n')))
  logins_digits = []
  all_logins = []
  for login in logins:
    login_digits = digits.get_digits(login)
    logins_digits.append(login_digits)
    all_logins.extend(login_digits)
  passcode_arr = list(set(all_logins))

  # twice for good measure
  for _ in range(2):
    for i in range(len(logins)):
      login_digits = logins_digits[i]
      for j in range(len(login_digits) - 1):
        current_index = passcode_arr.index(login_digits[j])
        next_digit = login_digits[j + 1]
        next_index = passcode_arr.index(next_digit)
        if next_index < current_index:
          passcode_arr.pop(next_index)
          passcode_arr.insert(current_index, next_digit)

  return digits.get_int_from_digits(passcode_arr)
