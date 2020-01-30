import unittest, lychrel_count


class TestGetLychrelCount(unittest.TestCase):
  def test_get_lychrel_count(self):
    self.assertEqual(lychrel_count.get_lychrel_count(10_000), 249)


if __name__ == '__main__':
  unittest.main()
