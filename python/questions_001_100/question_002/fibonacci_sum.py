# Even Fibonacci numbers

# Problem 2
# Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


def get_fibonacci_sum(maximum):
  fibonacci_sum = 0
  first = 1
  second = 2

  while second <= maximum:
    fibonacci_sum += second
    double_second = second * 2
    first += double_second
    second += first - double_second + first

  return fibonacci_sum
