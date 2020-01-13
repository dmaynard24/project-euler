import unittest, combination_counts


class TestGetCombinationCounts(unittest.TestCase):
  def test_get_combination_counts(self):
    self.assertEqual(combination_counts.get_combination_counts(100), 4075)


if __name__ == '__main__':
  unittest.main()
