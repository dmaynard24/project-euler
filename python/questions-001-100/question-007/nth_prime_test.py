import unittest, nth_prime


class TestGetNthPrime(unittest.TestCase):
  def test_get_nth_prime(self):
    self.assertEqual(nth_prime.get_nth_prime(6), 13)
    self.assertEqual(nth_prime.get_nth_prime(10_001), 104_743)


if __name__ == '__main__':
  unittest.main()
