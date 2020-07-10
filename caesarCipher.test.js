import caesarCipher from './caesarCipher';

test('Change abc 1 places to bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});
test('Change hello 3 places to khoor', () => {
  expect(caesarCipher('hello', 1)).toBe('khoor');
});
