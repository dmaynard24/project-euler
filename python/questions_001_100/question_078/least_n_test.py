import unittest, least_n


class TestGetLeastN(unittest.TestCase):
  def test_get_least_n(self):
    self.assertEqual(least_n.get_least_n(10), 9)
    self.assertEqual(least_n.get_least_n(100), 74)
    self.assertEqual(least_n.get_least_n(1_000), 449)
    self.assertEqual(least_n.get_least_n(10_000), 599)
    self.assertEqual(least_n.get_least_n(100_000), 11_224)
    self.assertEqual(least_n.get_least_n(1_000_000), 55_374)


if __name__ == '__main__':
  unittest.main()
