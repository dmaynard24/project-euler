# Coin sums

# Problem 31
# In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

# 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
# It is possible to make £2 in the following way:

# 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
# How many different ways can £2 be made using any number of coins?


def get_two_pound_combination_count():
  coin_values = [200, 100, 50, 20, 10, 5, 2, 1]

  def get_coin_combo_count(i, target):
    coin_val = coin_values[i]

    if target == 0 or i == len(coin_values) - 1:
      return 1

    max_coin_count = int(target / coin_val)
    count = 0
    for coin_count in range(max_coin_count, -1, -1):
      count += get_coin_combo_count(i + 1, target - coin_val * coin_count)

    return count

  return get_coin_combo_count(0, coin_values[0])
