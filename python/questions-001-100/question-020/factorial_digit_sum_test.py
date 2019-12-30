import unittest, factorial_digit_sum


class TestGetFactorialDigitSum(unittest.TestCase):
	def test_get_factorial_digit_sum(self):
		self.assertEqual(factorial_digit_sum.get_factorial_digit_sum(10), 27)
		self.assertEqual(factorial_digit_sum.get_factorial_digit_sum(100), 648)


if __name__ == '__main__':
	unittest.main()
