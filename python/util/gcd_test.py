import unittest, gcd


class TestGcd(unittest.TestCase):
	def test_gcd(self):
		self.assertEqual(gcd.get_gcd(8, 11), 1)
		self.assertEqual(gcd.get_gcd(8, 15), 1)
		self.assertEqual(gcd.get_gcd(8, 12), 4)


if __name__ == '__main__':
	unittest.main()
