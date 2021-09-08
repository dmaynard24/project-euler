import unittest
from . import powerful_integer_count


class TestGetPowerfulIntegerCount(unittest.TestCase):
  def test_get_powerful_integer_count(self):
    self.assertEqual(powerful_integer_count.get_powerful_integer_count(), 49)


if __name__ == '__main__':
  unittest.main()
