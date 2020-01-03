import unittest, largest_pandigital


class TestGetLargestPandigital(unittest.TestCase):
	def test_get_largest_pandigital(self):
		self.assertEqual(largest_pandigital.get_largest_pandigital(), 932718654)


if __name__ == '__main__':
	unittest.main()
