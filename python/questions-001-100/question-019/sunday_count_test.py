import unittest, sunday_count


class TestGetSundayCount(unittest.TestCase):
  def test_get_sunday_count(self):
    self.assertEqual(sunday_count.get_sunday_count(1_901, 2_000), 171)


if __name__ == '__main__':
  unittest.main()
