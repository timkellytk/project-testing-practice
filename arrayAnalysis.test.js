import arrayAnalysis from './arrayAnalysis';

test('Take an array of [1,2,3]', () => {
  expect(arrayAnalysis([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test('Take an array of [1,8,3]', () => {
  expect(arrayAnalysis([1, 8, 3])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 3,
  });
});
