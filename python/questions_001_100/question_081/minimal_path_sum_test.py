import unittest, minimal_path_sum


class TestGetMinimalPathSum(unittest.TestCase):
  def test_get_minimal_path_sum(self):
    self.assertEqual(minimal_path_sum.get_minimal_path_sum(), 427_337)


if __name__ == '__main__':
  unittest.main()
