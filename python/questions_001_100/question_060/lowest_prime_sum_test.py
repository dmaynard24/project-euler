import unittest, lowest_prime_sum


class TestGetLowestPrimeSum(unittest.TestCase):
  def test_get_lowest_prime_sum(self):
    self.assertEqual(lowest_prime_sum.get_lowest_prime_sum(4), 792)
    # self.assertEqual(lowest_prime_sum.get_lowest_prime_sum(5), 26_033)


if __name__ == '__main__':
  unittest.main()
