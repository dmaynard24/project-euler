import unittest, shortest_passcode


class TestGetShortestPasscode(unittest.TestCase):
  def test_get_shortest_passcode(self):
    self.assertEqual(shortest_passcode.get_shortest_passcode(), 73162890)


if __name__ == '__main__':
  unittest.main()
