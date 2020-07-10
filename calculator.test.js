import calculator from './calculator';

test('Add 1,2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('Add 5,2,13 to equal 20', () => {
  expect(calculator.add(5, 2, 13)).toBe(20);
});
test('Add 5,2,13,0.4 to equal 20.4', () => {
  expect(calculator.add(5, 2, 13, 0.4)).toBeCloseTo(20.4);
});
test('Subtract 5 - 2 to equal 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test('Subtract 15 - 2 - 7 to equal 6', () => {
  expect(calculator.subtract(15, 2, 7)).toBe(6);
});
test('Divide 20 by 2 to equal 10', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});
test('Divide 330 by 3 to equal 110', () => {
  expect(calculator.divide(330, 3)).toBe(110);
});
test('Multiply 34 by 4 to equal 136', () => {
  expect(calculator.multiply(34, 4)).toBe(136);
});
test('Multiply 4 by 25 to equal 100', () => {
  expect(calculator.multiply(4, 25)).toBe(100);
});
