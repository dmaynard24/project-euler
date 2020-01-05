import unittest, digit_fifth_power_sum


class TestGetDigitFifthPowerSum(unittest.TestCase):
  def test_get_digit_fifth_power_sum(self):
    self.assertEqual(digit_fifth_power_sum.get_digit_fifth_power_sum(), 443839)


if __name__ == '__main__':
  unittest.main()
