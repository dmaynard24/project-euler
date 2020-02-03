import unittest, totient_maximum


class TestGetTotientMaximum(unittest.TestCase):
  def test_get_totient_maximum(self):
    self.assertEqual(totient_maximum.get_totient_maximum(10), 6)
    self.assertEqual(totient_maximum.get_totient_maximum(1_000_000), 510_510)


if __name__ == '__main__':
  unittest.main()
