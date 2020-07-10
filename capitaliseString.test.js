import capitaliseString from './capitaliseString';

test('Change hello world to HELLO WORLD', () => {
  expect(capitaliseString('hello world')).toBe('HELLO WORLD');
});

test('Change hEllO bUDdy to hEllO bUDdy', () => {
  expect(capitaliseString('hEllO bUDdy')).toBe('HELLO BUDDY');
});
