import unittest, two_pound_combination_count


class TestGetDigitFifthPowerSum(unittest.TestCase):
	def test_get_two_pound_combination_count(self):
		self.assertEqual(
			two_pound_combination_count.get_two_pound_combination_count(), 73682)


if __name__ == '__main__':
	unittest.main()
