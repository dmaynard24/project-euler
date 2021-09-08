import unittest
from . import first_integer


class TestGetFirstInteger(unittest.TestCase):
  def test_get_first_integer(self):
    self.assertEqual(first_integer.get_first_integer(2), 14)
    self.assertEqual(first_integer.get_first_integer(3), 644)
    self.assertEqual(first_integer.get_first_integer(4), 134_043)


if __name__ == '__main__':
  unittest.main()
