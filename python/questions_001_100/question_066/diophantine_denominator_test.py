import unittest
from . import diophantine_denominator


class TestGetDiophantineDenominator(unittest.TestCase):
  def test_get_diophantine_denominator(self):
    self.assertEqual(
        diophantine_denominator.get_diophantine_denominator(1_000), 661)


if __name__ == '__main__':
  unittest.main()
