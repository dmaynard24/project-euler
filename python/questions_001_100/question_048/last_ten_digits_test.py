import unittest
from . import last_ten_digits


class TestGetLastTenDigits(unittest.TestCase):
  def test_get_last_ten_digits(self):
    self.assertEqual(last_ten_digits.get_last_ten_digits(), 9_110_846_700)


if __name__ == '__main__':
  unittest.main()
