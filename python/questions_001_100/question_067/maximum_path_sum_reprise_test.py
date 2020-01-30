import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.questions_001_100.question_018 import maximum_path_sum
import unittest


class TestGetMaximumPathSum(unittest.TestCase):
  def test_get_maximum_path_sum(self):
    self.assertEqual(maximum_path_sum.get_maximum_path_sum(), 7_273)


if __name__ == '__main__':
  unittest.main()
