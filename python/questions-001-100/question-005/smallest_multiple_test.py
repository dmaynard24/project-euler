import unittest, smallest_multiple


class TestGetSmallestMultipleOne(unittest.TestCase):
	def test_get_smallest_multiple(self):
		self.assertEqual(smallest_multiple.get_smallest_multiple(10), 2520)
		self.assertEqual(smallest_multiple.get_smallest_multiple(20), 232792560)


if __name__ == '__main__':
	unittest.main()