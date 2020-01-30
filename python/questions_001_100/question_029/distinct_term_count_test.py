import unittest, distinct_term_count


class TestGetDistinctTermCount(unittest.TestCase):
  def test_get_distinct_term_count(self):
    self.assertEqual(distinct_term_count.get_distinct_term_count(5), 15)
    self.assertEqual(distinct_term_count.get_distinct_term_count(100), 9_183)


if __name__ == '__main__':
  unittest.main()
