# Magic 5-gon ring

# Problem 68
# Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.

# Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.

# It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.

# Total	Solution Set
# 9	    4,2,3; 5,3,1; 6,1,2
# 9	    4,3,2; 6,2,1; 5,1,3
# 10	    2,3,5; 4,5,1; 6,1,3
# 10	    2,5,3; 6,3,1; 4,1,5
# 11	    1,4,6; 3,6,2; 5,2,4
# 11	    1,6,4; 5,4,2; 3,2,6
# 12	    1,5,6; 2,6,4; 3,4,5
# 12	    1,6,5; 3,5,4; 2,4,6
# By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.

# Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum 16-digit string for a "magic" 5-gon ring?

from ...util import digits, combination, permutation


def get_all_perms(arr, pick):
  combos = combination.get_combos(arr, pick)
  all_perms = []
  for combo in combos:
    all_perms.extend(permutation.get_perms(combo))
  return all_perms


# flatten an array (one level)
def flatten(arr):
  flat = []
  for val in arr:
    if type(val) == list:
      flat.extend(val)
    else:
      flat.append(val)
  return flat


def get_largest_concat():
  gon_count = 5
  possible_values = range(1, gon_count * 2 + 1)
  all_perms = get_all_perms(possible_values, 3)
  possible_subsets = []
  for perm in all_perms:
    set_sum = sum(perm)
    possible_subsets.append({'set': perm, 'sum': set_sum})

  def get_next_subset(curr_set, set_sum, edge_vals, cached_subsets):
    solution_set = []

    for i in range(len(possible_subsets)):
      curr_subset = possible_subsets[i]['set']

      # always check for cached
      if ''.join(map(str, curr_subset)) in cached_subsets:
        continue

      if len(curr_set) == 0:
        # reset on the first set only
        edge_vals = {}
        set_sum = possible_subsets[i]['sum']
      else:
        # check continue cases on all sets except first
        if (possible_subsets[i]['sum'] != set_sum
            or curr_subset[1] != curr_set[-1][2]
            or str(curr_subset[0]) in edge_vals
            or str(curr_subset[2]) in edge_vals):
          continue

      # check on only the last set
      if len(curr_set) == gon_count - 1:
        if curr_subset[2] != curr_set[0][1]:
          continue

      # store on all sets
      curr_set.append(curr_subset)

      # base case
      if len(curr_set) == gon_count:
        # look for smallest subset in order to rotate
        smallest_set_index = 0
        smallest_set_val = len(possible_values) + 1
        for i in range(len(curr_set)):
          subset = curr_set[i]
          if subset[0] == 1:
            smallest_set_index = i
            break
          elif subset[0] < smallest_set_val:
            smallest_set_index = i
            smallest_set_val = subset[0]

        # rotate based on the index of the smallest subset
        rotated_set = [None] * gon_count
        if smallest_set_index != 0:
          rotated_set[0] = curr_set[smallest_set_index]
          for i in range(1, gon_count):
            rotated_set[i] = curr_set[(smallest_set_index + i) % gon_count]
        else:
          # set was already in correct order
          rotated_set = curr_set

        # cache subsets to avoid duplicates later
        for subset in rotated_set:
          cached_subsets[''.join(map(str, subset))] = True

        # store rotated set
        solution_set.append(rotated_set[:])

      # cache edge vals
      edge_vals[str(curr_subset[0])] = True
      edge_vals[str(curr_subset[2])] = True

      solution_set.extend(
          get_next_subset(curr_set, set_sum, edge_vals, cached_subsets))

      # pop and remove cached edge_vals
      left_key = str(curr_set[-1][0])
      right_key = str(curr_set[-1][2])
      if left_key in edge_vals:
        edge_vals.pop(left_key)
      if right_key in edge_vals:
        edge_vals.pop(right_key)
      curr_set.pop()

    return solution_set

  solution_set = get_next_subset([], possible_subsets[0]['sum'], {}, {})

  solution_set_ints = [
      int_val for int_val in
      [digits.get_int_from_digits(flatten(ss)) for ss in solution_set]
      if digits.get_digit_count(int_val) == 16
  ]

  return max(solution_set_ints)
