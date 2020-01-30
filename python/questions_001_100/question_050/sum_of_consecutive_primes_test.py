import unittest, sum_of_consecutive_primes


class TestGetSumOfConsecutivePrimes(unittest.TestCase):
  def test_get_sum_of_consecutive_primes(self):
    self.assertEqual(
        sum_of_consecutive_primes.get_sum_of_consecutive_primes(100), 41)
    self.assertEqual(
        sum_of_consecutive_primes.get_sum_of_consecutive_primes(1_000), 953)
    self.assertEqual(
        sum_of_consecutive_primes.get_sum_of_consecutive_primes(1_000_000),
        997_651)


if __name__ == '__main__':
  unittest.main()
