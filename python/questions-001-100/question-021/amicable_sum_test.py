import unittest, amicable_sum


class TestGetAmicableSum(unittest.TestCase):
	def test_get_amicable_sum(self):
		self.assertEqual(amicable_sum.get_amicable_sum(10000), 31626)


if __name__ == '__main__':
	unittest.main()
