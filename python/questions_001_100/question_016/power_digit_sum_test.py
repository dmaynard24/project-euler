import unittest
from . import power_digit_sum


class TestGetPowerDigitSum(unittest.TestCase):
  def test_get_power_digit_sum(self):
    self.assertEqual(power_digit_sum.get_power_digit_sum(15), 26)
    self.assertEqual(power_digit_sum.get_power_digit_sum(1_000), 1_366)


if __name__ == '__main__':
  unittest.main()
