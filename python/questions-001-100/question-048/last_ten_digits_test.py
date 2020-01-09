import unittest, last_ten_digits


class TestGetLastTenDigits(unittest.TestCase):
  def test_get_last_ten_digits(self):
    self.assertEqual(last_ten_digits.get_last_ten_digits(), 9110846700)


if __name__ == '__main__':
  unittest.main()
