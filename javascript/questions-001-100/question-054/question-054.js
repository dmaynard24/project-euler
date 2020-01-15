// Poker hands

// Problem 54

// In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

// High Card: Highest value card.
// One Pair: Two cards of the same value.
// Two Pairs: Two different pairs.
// Three of a Kind: Three cards of the same value.
// Straight: All cards are consecutive values.
// Flush: All cards of the same suit.
// Full House: Three of a kind and a pair.
// Four of a Kind: Four cards of the same value.
// Straight Flush: All cards are consecutive values of same suit.
// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
// The cards are valued in the order:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

// If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

// Consider the following five hands dealt to two players:

//  Hand	 	Player 1	 	       Player 2	 	        Winner

//  1	 	    5H 5C 6S 7S KD     2C 3S 8S 8D TD     Player 2
//          Pair of Fives      Pair of Eights

//  2	 	    5D 8C 9S JS AC     2C 5C 7D 8S QH     Player 1
//          Highest card Ace   Highest card Queen

//  3	 	    2D 9C AS AH AC     3D 6D 7D TD QD     Player 2
//          Three Aces         Flush with Diamonds

//  4	 	    4D 6S 9H QH QC     3D 6D 7H QD QS     Player 1
//          Pair of Queens     Pair of Queens
//          Highest card Nine  Highest card Seven

//  5	 	    2H 2D 4C 4D 4S     3C 3D 3S 9S 9D     Player 1
//          Full House         Full House
//          with Three Fours   with Three Threes

// The poker string contains one-thousand random hands dealt to two players. Each line of the string contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

// How many hands does Player 1 win?

const poker = require('./poker');

function getHandsPlayerWon(player) {
  let hands = poker
    .split('\n')
    .map(bothHands => bothHands.split(' '))
    .map(tenCards => {
      return [tenCards.slice(0, 5), tenCards.slice(5)];
    });

  hands = hands.slice(0, 2);

  // start checking hands
  let winCount = 0,
    pushCount = 0;
  hands.forEach(hand => {
    let rankOne = getHandRank(hand[0]),
      rankTwo = getHandRank(hand[1]);

    console.log(hand[0], rankOne);
    console.log(hand[1], rankTwo);

    // first compare ranks
    if (rankOne.rank > rankTwo.rank) {
      winCount++;
    } else if (rankOne.rank == rankTwo.rank) {
      // then compare high cards
      if (rankOne.highCard > rankTwo.highCard) {
        winCount++;
      } else if (rankOne.highCard == rankTwo.highCard) {
        // then compare kickers
        if (rankOne.kicker && rankTwo.kicker) {
          if (rankOne.kicker > rankTwo.kicker) {
            winCount++;
          } else if (rankOne.kicker == rankTwo.kicker) {
            pushCount++;
          }
        } else {
          pushCount++;
        }
      }
    }
  });

  return player == 1 ? winCount : hands.length - winCount - pushCount;
}

function getCardRank(card) {
  let ranks = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };

  let cardNum = [...card][0];
  return ranks[cardNum];
}

function getHandRank(hand) {
  let cardRanks = hand.map(card => getCardRank(card)).sort((a, b) => a - b),
    cardSuits = hand.map(card => [...card][1]).sort();

  let handIsStraight = isStraight(cardRanks),
    handIsFlush = isFlush(cardSuits);

  if (handIsStraight) {
    if (handIsFlush) {
      if (cardRanks[0] == 10) {
        // Royal Flush
        return {
          rank: 10,
          highCard: cardRanks[cardRanks.length - 1],
          kicker: null
        };
      }
      // Straight Flush
      return {
        rank: 9,
        highCard: cardRanks[cardRanks.length - 1],
        kicker: null
      };
    }
    // Straight
    return {
      rank: 5,
      highCard: cardRanks[cardRanks.length - 1],
      kicker: null
    };
  }

  if (handIsFlush) {
    // Flush
    return {
      rank: 6,
      highCard: cardRanks[cardRanks.length - 1],
      kicker: null
    };
  }

  let { counts, kicker } = getConsecutiveCountsAndKicker(cardRanks);

  if (counts.length) {
    if (counts.length == 2) {
      if (counts[0].count == 3 || counts[1].count == 3) {
        // Full House
        return {
          rank: 7,
          highCard: counts.reduce((a, c) => {
            if (!a.count) {
              return c;
            } else {
              return c.count > a.count ? c : a;
            }
          }, {}).rank,
          kicker: kicker
        };
      } else {
        // Two Pairs
        return {
          rank: 3,
          highCard: counts.reduce((a, c) => {
            if (!a) {
              return c.rank;
            } else {
              return c.rank > a ? c.rank : a;
            }
          }, 0),
          kicker: kicker
        };
      }
    } else {
      let highCard = counts[0].rank;
      switch (counts[0].count) {
        case 4:
          // Four of a Kind
          return {
            rank: 8,
            highCard: highCard,
            kicker: kicker
          };
        case 3:
          // Three of a Kind
          return {
            rank: 4,
            highCard: highCard,
            kicker: kicker
          };
        case 2:
          // One Pair
          return {
            rank: 2,
            highCard: highCard,
            kicker: kicker
          };
      }
    }
  }

  // High Card
  return {
    rank: 1,
    highCard: cardRanks[cardRanks.length - 1],
    kicker: kicker
  };
}

function isStraight(ranks) {
  for (let i = 1; i < ranks.length; i++) {
    if (ranks[i - 1] != ranks[i] - 1) {
      return false;
    }
  }

  return true;
}

function isFlush(suits) {
  for (let i = 1; i < suits.length; i++) {
    if (suits[i - 1] != suits[i]) {
      return false;
    }
  }

  return true;
}

function getConsecutiveCountsAndKicker(ranks) {
  let consecutiveCounts = [],
    rankAndCount = {
      rank: ranks[0],
      count: 1
    };

  let kicker = null;
  for (let i = 1; i < ranks.length; i++) {
    if (ranks[i - 1] == ranks[i]) {
      rankAndCount.rank = ranks[i];
      rankAndCount.count++;
    } else {
      if (rankAndCount.count > 1) {
        consecutiveCounts.push(rankAndCount);
      } else {
        kicker = ranks[i - 1];
      }
      // reset
      rankAndCount = {
        rank: ranks[i],
        count: 1
      };
    }
  }

  if (rankAndCount.count > 1) {
    consecutiveCounts.push(rankAndCount);
  } else {
    kicker = ranks[ranks.length - 1];
  }

  return {
    counts: consecutiveCounts,
    kicker: kicker
  };
}

console.log(getHandsPlayerWon(1));

module.exports = getHandsPlayerWon;
