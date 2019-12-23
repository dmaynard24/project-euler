import unittest, largest_product


class TestGetLargestProduct(unittest.TestCase):
	def test_get_largest_product(self):
		self.assertEqual(largest_product.get_largest_product(13), 23514624000)


if __name__ == '__main__':
	unittest.main()
