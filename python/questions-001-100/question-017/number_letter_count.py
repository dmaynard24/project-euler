# Number letter counts

# Problem 17
# If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

# If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

# NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


def get_number_letter_count(max):
  return sum(
      list(map(lambda num: len(get_words_from_number(num)), range(1,
                                                                  max + 1))))


def get_words_from_number(num):
  a = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
      'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ]
  b = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
      'eighty', 'ninety'
  ]
  words = ''

  if num == 1000:
    return 'onethousand'

  if num >= 100:
    hundreds = num // 100
    words += a[hundreds] + 'hundred'
    num -= 100 * hundreds

    if num != 0:
      words += 'and'

  if num >= 20:
    tens = num // 10
    words += b[tens]
    num -= 10 * tens

  if num > 0:
    words += a[num]

  return words