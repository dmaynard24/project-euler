# Poker hands

# Problem 54

# In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

# High Card: Highest value card.
# One Pair: Two cards of the same value.
# Two Pairs: Two different pairs.
# Three of a Kind: Three cards of the same value.
# Straight: All cards are consecutive values.
# Flush: All cards of the same suit.
# Full House: Three of a kind and a pair.
# Four of a Kind: Four cards of the same value.
# Straight Flush: All cards are consecutive values of same suit.
# Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
# The cards are valued in the order:
# 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

# If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

# Consider the following five hands dealt to two players:

#  Hand	 	Player 1	 	       Player 2	 	        Winner

#  1	 	    5H 5C 6S 7S KD     2C 3S 8S 8D TD     Player 2
#          Pair of Fives      Pair of Eights

#  2	 	    5D 8C 9S JS AC     2C 5C 7D 8S QH     Player 1
#          Highest card Ace   Highest card Queen

#  3	 	    2D 9C AS AH AC     3D 6D 7D TD QD     Player 2
#          Three Aces         Flush with Diamonds

#  4	 	    4D 6S 9H QH QC     3D 6D 7H QD QS     Player 1
#          Pair of Queens     Pair of Queens
#          Highest card Nine  Highest card Seven

#  5	 	    2H 2D 4C 4D 4S     3C 3D 3S 9S 9D     Player 1
#          Full House         Full House
#          with Three Fours   with Three Threes

# The poker string contains one-thousand random hands dealt to two players. Each line of the string contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

# How many hands does Player 1 win?

import poker
poker = poker.poker


def is_straight(ranks):
  for i in range(1, len(ranks)):
    if ranks[i - 1] != ranks[i] - 1:
      return False

  return True


def is_flush(suits):
  for i in range(1, len(suits)):
    if suits[i - 1] != suits[i]:
      return False

  return True


def get_card_rank(card):
  ranks = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'T': 10,
      'J': 11,
      'Q': 12,
      'K': 13,
      'A': 14
  }

  card_num = card[:][0]
  return ranks[card_num]


def get_hand_rank(hand):
  card_ranks = list(map(lambda card: get_card_rank(card), hand))
  card_ranks.sort()
  card_suits = list(map(lambda card: card[:][1], hand))
  card_suits.sort()

  hand_is_straight = is_straight(card_ranks)
  hand_is_flush = is_flush(card_suits)

  if hand_is_straight:
    if hand_is_flush:
      if card_ranks[0] == 10:
        # Royal Flush
        return {'rank': 10, 'high_card': card_ranks[-1], 'kicker': None}
      # Straight Flush
      return {'rank': 9, 'high_card': card_ranks[-1], 'kicker': None}
    # Straight
    return {'rank': 5, 'high_card': card_ranks[-1], 'kicker': None}

  if hand_is_flush:
    # Flush
    return {'rank': 6, 'high_card': card_ranks[-1], 'kicker': None}

  counts, kicker = get_consecutive_counts_and_kicker(card_ranks).values()

  if len(counts) > 0:
    if len(counts) == 2:
      if counts[0]['count'] == 3 or counts[1]['count'] == 3:
        # Full House
        high_card = counts[0]
        for count in counts[1:]:
          if count['count'] > high_card['count']:
            high_card = count
        return {'rank': 7, 'high_card': high_card['rank'], 'kicker': kicker}
      else:
        # Two Pairs
        high_card = 0
        for count in counts[1:]:
          if count['rank'] > high_card:
            high_card = count['rank']
        return {'rank': 3, 'high_card': high_card, 'kicker': kicker}
    else:
      high_card = counts[0]['rank']
      if counts[0]['count'] == 4:
        # Four of a Kind
        return {'rank': 8, 'high_card': high_card, 'kicker': kicker}
      elif counts[0]['count'] == 3:
        # Three of a Kind
        return {'rank': 4, 'high_card': high_card, 'kicker': kicker}
      elif counts[0]['count'] == 2:
        # One Pair
        return {'rank': 2, 'high_card': high_card, 'kicker': kicker}

  # High Card
  return {'rank': 1, 'high_card': card_ranks[-1], 'kicker': kicker}


def get_consecutive_counts_and_kicker(ranks):
  consecutive_counts = []
  rank_and_count = {'rank': ranks[0], 'count': 1}

  kicker = None
  for i in range(1, len(ranks)):
    if ranks[i - 1] == ranks[i]:
      rank_and_count['rank'] = ranks[i]
      rank_and_count['count'] += 1
    else:
      if rank_and_count['count'] > 1:
        consecutive_counts.append(rank_and_count)
      else:
        kicker = ranks[i - 1]
      # reset
      rank_and_count = {'rank': ranks[i], 'count': 1}

  if rank_and_count['count'] > 1:
    consecutive_counts.append(rank_and_count)
  else:
    kicker = ranks[-1]

  return {'counts': consecutive_counts, 'kicker': kicker}


def get_hands_player_won(player):
  hands = list(
      map(lambda ten_cards: [ten_cards[:5], ten_cards[5:]],
          map(lambda both_hands: both_hands.split(' '), poker.split('\n'))))

  # start checking hands
  win_count = 0
  push_count = 0
  for hand in hands:
    rank_one = get_hand_rank(hand[0])
    rank_two = get_hand_rank(hand[1])

    # first compare ranks
    if rank_one['rank'] > rank_two['rank']:
      win_count += 1
    elif rank_one['rank'] == rank_two['rank']:
      # then compare high cards
      if rank_one['high_card'] > rank_two['high_card']:
        win_count += 1
      elif rank_one['high_card'] == rank_two['high_card']:
        # then compare kickers
        if rank_one['kicker'] is not None and rank_two['kicker'] is not None:
          if rank_one['kicker'] > rank_two['kicker']:
            win_count += 1
          elif rank_one['kicker'] == rank_two['kicker']:
            push_count += 1
        else:
          push_count += 1

  return win_count if player == 1 else len(hands) - win_count - push_count