import unittest
from . import largest_product


class TestGetLargestProduct(unittest.TestCase):
  def test_get_largest_product(self):
    self.assertEqual(largest_product.get_largest_product(4), 70_600_674)


if __name__ == '__main__':
  unittest.main()
