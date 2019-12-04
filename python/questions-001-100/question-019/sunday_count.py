# Counting Sundays

# Problem 19
# You are given the following information, but you may prefer to do some research for yourself.

# 1 Jan 1900 was a Monday.
# Thirty days has September,
# April, June and November.
# All the rest have thirty-one,
# Saving February alone,
# Which has twenty-eight, rain or shine.
# And on leap years, twenty-nine.
# A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
# How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


def get_sunday_count(start_year, end_year):
  firsts = {
      num: True
      for num in [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
  }
  leap_firsts = {
      num: True
      for num in [1, 32, 61, 92, 122, 153, 183, 214, 245, 275, 306, 336]
  }
  first_sunday = 7
  sunday_count = 0

  for current_year in range(start_year, end_year + 1):
    is_leap_year = False
    if current_year % 100 == 0:
      is_leap_year = current_year % 400 == 0
    else:
      is_leap_year = current_year % 4 == 0

    total_days = 366 if is_leap_year else 365
    final_sunday = None
    for i in range(first_sunday, total_days + 1, 7):
      if is_leap_year == False:
        if i in firsts:
          sunday_count += 1
      else:
        if i in leap_firsts:
          sunday_count += 1

      final_sunday = i

    first_sunday = 6 - (total_days - final_sunday)

  return sunday_count