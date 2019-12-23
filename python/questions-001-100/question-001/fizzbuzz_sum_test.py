import unittest, fizzbuzz_sum


class TestGetFizzbuzzSum(unittest.TestCase):
	def test_get_fizzbuzz_sum(self):
		self.assertEqual(fizzbuzz_sum.get_fizzbuzz_sum(10), 23)
		self.assertEqual(fizzbuzz_sum.get_fizzbuzz_sum(1000), 233168)


if __name__ == '__main__':
	unittest.main()