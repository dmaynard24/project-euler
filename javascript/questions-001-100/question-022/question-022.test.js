const getNameScoresSum = require('./question-022');

test('gets the total of all the name scores in the set to be 871,198,282', () => {
	expect(getNameScoresSum()).toBe(871198282);
});
