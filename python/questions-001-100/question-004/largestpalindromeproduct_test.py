import unittest, largestpalindromeproduct


class TestGetLargestPalindromeProduct(unittest.TestCase):
  def test_getlargestpalindromeproduct(self):
    self.assertEqual(largestpalindromeproduct.largest_palindrome_product(3),
                     906609)


if __name__ == '__main__':
  unittest.main()
