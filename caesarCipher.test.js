import caesarCipher from './caesarCipher';

test('Change abc 1 places to bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});
test('Change HeLlo 3 places to KhOor', () => {
  expect(caesarCipher('HeLlo', 3)).toBe('KhOor');
});
test('Change Hi, my name is Tim! 5 places to mn, rd sfrj nx ynr!', () => {
  expect(caesarCipher('Hi, my name is Tim!', 5)).toBe('Mn, rd sfrj nx Ynr!');
});
