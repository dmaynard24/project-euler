import unittest
from . import largest_palindrome_product


class TestGetLargestPalindromeProduct(unittest.TestCase):
  def test_get_largest_palindrome_product(self):
    self.assertEqual(
        largest_palindrome_product.get_largest_palindrome_product(3), 906_609)


if __name__ == '__main__':
  unittest.main()
