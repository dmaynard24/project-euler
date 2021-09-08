import unittest
from . import summation_count


class TestGetSummationCount(unittest.TestCase):
  def test_get_summation_count(self):
    self.assertEqual(summation_count.get_summation_count(5), 6)
    self.assertEqual(summation_count.get_summation_count(100), 190_569_291)


if __name__ == '__main__':
  unittest.main()
