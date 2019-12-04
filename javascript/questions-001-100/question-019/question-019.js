// Counting Sundays

// Problem 19
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

function getSundayCount(startYear, endYear) {
  let firsts = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
    leapFirsts = [1, 32, 61, 92, 122, 153, 183, 214, 245, 275, 306, 336];
  firsts = firsts.reduce((a, c) => {
    a.set(c, true);
    return a;
  }, new Map());
  leapFirsts = leapFirsts.reduce((a, c) => {
    a.set(c, true);
    return a;
  }, new Map());

  let firstSunday = 7,
    sundayCount = 0;

  for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
    let isLeapYear;
    if (currentYear % 100 == 0) {
      isLeapYear = currentYear % 400 == 0;
    } else {
      isLeapYear = currentYear % 4 == 0;
    }

    let totalDays = isLeapYear ? 366 : 365,
      finalSunday;
    for (let i = firstSunday; i <= totalDays; i += 7) {
      if (!isLeapYear) {
        if (firsts.has(i)) {
          sundayCount++;
        }
      } else {
        if (leapFirsts.has(i)) {
          sundayCount++;
        }
      }

      finalSunday = i;
    }

    firstSunday = 6 - (totalDays - finalSunday);
  }

  return sundayCount;
}

module.exports = getSundayCount;
