import reverseString from './reverseString';

test('Change abc to cba', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('change hello world to dlrow olleh', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
