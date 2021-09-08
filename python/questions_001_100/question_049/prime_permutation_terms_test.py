import unittest
from . import prime_permutation_terms


class TestGetLastTenDigits(unittest.TestCase):
  def test_get_prime_permutation_terms(self):
    self.assertEqual(prime_permutation_terms.get_prime_permutation_terms(),
                     296_962_999_629)


if __name__ == '__main__':
  unittest.main()
