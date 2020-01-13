import unittest, largest_prime_factor


class TestGetLargestPrimeFactor(unittest.TestCase):
  def test_get_largest_prime_factor(self):
    self.assertEqual(
        largest_prime_factor.get_largest_prime_factor(600_851_475_143), 6_857)


if __name__ == '__main__':
  unittest.main()
