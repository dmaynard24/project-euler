import unittest, unique_perimeters


class TestGetUniquePerimeters(unittest.TestCase):
  def test_get_unique_perimeters(self):
    self.assertEqual(unique_perimeters.get_unique_perimeters(1_500_000),
                     161_667)


if __name__ == '__main__':
  unittest.main()
