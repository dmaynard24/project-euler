import unittest, maximum_digit_sum


class TestGetMaximumDigitSum(unittest.TestCase):
  def test_get_maximum_digit_sum(self):
    self.assertEqual(maximum_digit_sum.get_maximum_digit_sum(100), 972)


if __name__ == '__main__':
  unittest.main()
