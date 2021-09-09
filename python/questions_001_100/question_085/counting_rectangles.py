# Counting rectangles

# Problem 85
# By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles.

# Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.


def get_rect_count(rect_w, rect_h):
  count = 0

  for w in range(1, rect_w + 1):
    for h in range(1, rect_h + 1):
      count += (rect_w - w + 1) * (rect_h - h + 1)

  return count


def get_closest_area(target_count):
  closest_area = None
  smallest_diff = target_count

  # max our width at 100
  max_w = min(target_count // 2, 100)

  for w in range(3, max_w):
    for h in range(2, w + 1):
      rect_count = get_rect_count(w, h)
      diff = abs(target_count - rect_count)
      if diff < smallest_diff:
        closest_area = w * h
        smallest_diff = diff

  return closest_area
