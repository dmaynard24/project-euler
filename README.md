# Project Euler

JavaScript and Python solutions to the [Project Euler](https://projecteuler.net) problems.

## Getting Started

### JavaScript

Be sure to have [NodeJS](https://nodejs.org/) installed, then run `npm install` to download the JS dependencies. The main dependency for running this package is [Jest](https://jestjs.io/) because it's used to test the performance of each solution.

To run a single test suite and observe the performance of a single solution, run the Jest CLI with the question number passed as a pattern to match. For example, to test question 78, run `jest question-078`.

In order to run all the tests, run `jest` and observe the output.

### Python

Be sure to have [Python](https://www.python.org/) installed.

To run a single test suite and observe the performance of a single solution, use Python's [unittest](https://docs.python.org/3/library/unittest.html) CLI with the path to the question module specified by file path. For example, to test question 78, run:

```
python -m unittest python/questions_001_100/question_078/*_test.py"
```

In order to run all the tests:

```
python -m unittest discover -p "*_test.py"
```

Or, you may use this npm script shorthand:

```
npm run test:python
```

## Authors

**Dave Maynard** - [GitHub](https://github.com/dmaynard24)
