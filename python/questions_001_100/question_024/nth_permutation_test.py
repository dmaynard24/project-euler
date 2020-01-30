import unittest, nth_permutation


class TestGetNthPermutation(unittest.TestCase):
  def test_get_nth_permutation(self):
    self.assertEqual(nth_permutation.get_nth_permutation(1_000_000),
                     2_783_915_460)


if __name__ == '__main__':
  unittest.main()
