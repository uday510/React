import { sum } from '../sum';

test('sum function calculates sum of two values', () => {

  const result = sum(3, 4);

  expect(result).toBe(7);
});

