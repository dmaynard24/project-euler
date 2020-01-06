# Coded triangle numbers

# Problem 42
# The nth term of the sequence of triangle numbers is given by, t_n = ½n(n+1); so the first ten triangle numbers are:

# 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

# By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t_10. If the word value is a triangle number then we shall call the word a triangle word.

# Using the array of words containing nearly two-thousand common English words, how many are triangle words?

import words
words = words.words


def get_triangle_word_count():
  value_range = list(range(1, 27))
  letter_values = {}
  for value in value_range:
    letter_values[chr(value + 64)] = value

  words_sorted = sorted(words, key=lambda word: len(word))
  words_sorted.reverse()

  limit = len(words_sorted[0])

  def get_word_value(word):
    word_value = 0
    for char in list(word):
      word_value += letter_values[char]
    return word_value


print(get_triangle_word_count())
