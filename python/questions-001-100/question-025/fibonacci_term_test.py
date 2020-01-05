import unittest, fibonacci_term


class TestGetFibonacciTerm(unittest.TestCase):
  def test_get_fibonacci_term(self):
    self.assertEqual(fibonacci_term.get_fibonacci_term(2), 7)
    self.assertEqual(fibonacci_term.get_fibonacci_term(3), 12)
    self.assertEqual(fibonacci_term.get_fibonacci_term(4), 17)
    self.assertEqual(fibonacci_term.get_fibonacci_term(1000), 4782)


if __name__ == '__main__':
  unittest.main()
