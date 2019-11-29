import unittest, prime_sum


class TestGetPrimeSumOne(unittest.TestCase):
  def test_get_prime_sum_one(self):
    self.assertEqual(prime_sum.get_prime_sum(10), 17)


class TestGetPrimeSumTwo(unittest.TestCase):
  def test_get_prime_sum_two(self):
    self.assertEqual(prime_sum.get_prime_sum(2000000), 142913828922)


if __name__ == '__main__':
  unittest.main()
