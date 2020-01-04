from . import coprime


def get_primitive_triples(p_max):
	triples = []

	# by looking at the values of b and c below, I'm able to limit the range of m based on the p_max
	m = 2
	while m * m + 2 * m < p_max:
		start = (m % 2) + 1
		for n in range(start, m, 2):
			a = m * m - n * n
			b = 2 * m * n
			c = m * m + n * n
			p = a + b + c

			if p > p_max:
				break

			if coprime.are_coprime(a, b):
				triple = {}
				triple['a'] = a
				triple['b'] = b
				triple['c'] = c
				triple['p'] = p
				triples.append(triple)

		m += 1

	return triples