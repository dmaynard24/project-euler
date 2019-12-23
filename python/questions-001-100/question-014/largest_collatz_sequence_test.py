import unittest, largest_collatz_sequence


class TestGetFirstDigitsOfSum(unittest.TestCase):
	def test_get_largest_collatz_sequence(self):
		self.assertEqual(
			largest_collatz_sequence.get_largest_collatz_sequence(1000000), 837799)


if __name__ == '__main__':
	unittest.main()
