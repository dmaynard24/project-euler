# Passcode derivation

# Problem 79
# A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

# The keylog string contains fifty successful login attempts.

# Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits

import keylog
keylog = keylog.keylog


def get_shortest_passcode():
  logins = set(map(int, keylog.split('\n')))
  all_logins = []
  for login in logins:
    all_logins.extend(digits.get_digits(login))
  passcode_arr = list(set(all_logins))


get_shortest_passcode()
