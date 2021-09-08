import unittest
from . import numerator


class TestGetNumerator(unittest.TestCase):
  def test_get_numerator(self):
    self.assertEqual(numerator.get_numerator(8), 2)
    self.assertEqual(numerator.get_numerator(1_000_000), 428_570)


if __name__ == '__main__':
  unittest.main()
