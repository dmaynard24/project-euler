import unittest, largestprimefactor


class TestGetLargestPrimeFactor(unittest.TestCase):
  def test_getlargestprimefactor(self):
    self.assertEqual(largestprimefactor.get_largest_prime_factor(600851475143),
                     6857)


if __name__ == '__main__':
  unittest.main()
