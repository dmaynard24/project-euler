import unittest, fibonacci_sum


class TestGetFibonacciSum(unittest.TestCase):
  def test_get_fibonacci_sum(self):
    self.assertEqual(fibonacci_sum.get_fibonacci_sum(4000000), 4613732)


if __name__ == '__main__':
  unittest.main()
