import unittest, largest_product


class TestGetLargestProduct(unittest.TestCase):
  def test_get_largest_product_one(self):
    self.assertEqual(largest_product.get_largest_product(4), 70600674)


if __name__ == '__main__':
  unittest.main()
