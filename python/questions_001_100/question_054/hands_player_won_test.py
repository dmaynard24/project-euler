import unittest
from . import hands_player_won


class TestGetHandsPlayerWon(unittest.TestCase):
  def test_get_hands_player_won(self):
    self.assertEqual(hands_player_won.get_hands_player_won(1), 376)
    self.assertEqual(hands_player_won.get_hands_player_won(2), 624)


if __name__ == '__main__':
  unittest.main()
