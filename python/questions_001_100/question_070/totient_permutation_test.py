import unittest, totient_permutation


class TestGetTotientPermutation(unittest.TestCase):
  def test_get_totient_permutation(self):
    self.assertEqual(totient_permutation.get_totient_permutation(100_000),
                     75_841)
    self.assertEqual(totient_permutation.get_totient_permutation(10_000_000),
                    #  8_319_823)


if __name__ == '__main__':
  unittest.main()
