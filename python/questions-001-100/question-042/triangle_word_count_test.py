import unittest, triangle_word_count


class TestGetTriangleWordCount(unittest.TestCase):
  def test_get_triangle_word_count(self):
    self.assertEqual(triangle_word_count.get_triangle_word_count(), 162)


if __name__ == '__main__':
  unittest.main()
