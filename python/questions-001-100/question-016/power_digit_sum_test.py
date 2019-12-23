import unittest, power_digit_sum


class TestGetPowerDigitSumOne(unittest.TestCase):
	def test_get_power_digit_sum(self):
		self.assertEqual(power_digit_sum.get_power_digit_sum(15), 26)


class TestGetPowerDigitSumTwo(unittest.TestCase):
	def test_get_power_digit_sum(self):
		self.assertEqual(power_digit_sum.get_power_digit_sum(1000), 1366)


if __name__ == '__main__':
	unittest.main()
