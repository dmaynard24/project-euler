import unittest, palindromic_sum


class TestGetPalindromicSum(unittest.TestCase):
  def test_get_palindromic_sum(self):
    self.assertEqual(palindromic_sum.get_palindromic_sum(1000000), 872187)


if __name__ == '__main__':
  unittest.main()
