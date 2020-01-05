import unittest, name_score_sum


class TestGetNameScoreSum(unittest.TestCase):
  def test_get_name_score_sum(self):
    self.assertEqual(name_score_sum.get_name_score_sum(), 871198282)


if __name__ == '__main__':
  unittest.main()
