import unittest
from . import digit_factorial_sum


class TestGetDigitFactorialSum(unittest.TestCase):
  def test_get_digit_factorial_sum(self):
    self.assertEqual(digit_factorial_sum.get_digit_factorial_sum(), 40_730)


if __name__ == '__main__':
  unittest.main()
