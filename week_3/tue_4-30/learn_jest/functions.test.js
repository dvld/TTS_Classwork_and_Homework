const calc = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(calc.add(1, 2)).toEqual(3);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(calc.subtract(10, 4)).toBe(6);
});

test('concatenates 2 strings together', () => {
  expect(calc.concatenate('niko', 'jared')).toBeTruthy();
});