import unittest, pandigital


class TestPandigital(unittest.TestCase):
  def test_pandigital(self):
    self.assertEqual(pandigital.is_pandigital(134706, exclude_zero=False),
                     True)
    self.assertEqual(pandigital.is_pandigital(134706, exclude_zero=True),
                     False)
    self.assertEqual(pandigital.is_pandigital('134706', exclude_zero=False),
                     True)
    self.assertEqual(pandigital.is_pandigital('134706', exclude_zero=True),
                     False)


if __name__ == '__main__':
  unittest.main()
