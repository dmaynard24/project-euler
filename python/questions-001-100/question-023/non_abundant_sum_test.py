import unittest, non_abundant_sum


class TestGetNameScoreSum(unittest.TestCase):
	def test_get_non_abundant_sum(self):
		self.assertEqual(non_abundant_sum.get_non_abundant_sum(), 4179871)


if __name__ == '__main__':
	unittest.main()
