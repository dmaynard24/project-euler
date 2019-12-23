import unittest, nth_prime


class TestGetSmallestMultipleOne(unittest.TestCase):
	def test_get_nth_prime(self):
		self.assertEqual(nth_prime.get_nth_prime(6), 13)
		self.assertEqual(nth_prime.get_nth_prime(10001), 104743)


if __name__ == '__main__':
	unittest.main()
