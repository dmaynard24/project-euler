# Names scores

# Problem 22
# Using the array of names, a collection of over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

# For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

# What is the total of all the name scores in the set?

from . import names

names = names.names


def get_name_score_sum():
  names.sort()

  name_score_sum = 0
  for i, name in enumerate(names):
    name_score_sum += sum([ord(char) - 64 for char in name]) * (i + 1)

  return name_score_sum
