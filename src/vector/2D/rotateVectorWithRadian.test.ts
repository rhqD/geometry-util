import { IVector } from '../../interfaces';
import getRadianBetween from '../getRadianBetween';
import getVectorLength from '../getVectorLength';
import rotateVectorWithRadian from './rotateVectorWithRadian';

const cases: (number | IVector)[][] = [
  [
    {
      x: 1,
      y: 1
    },
    Math.PI / 2
  ], [
    {
      x: 1,
      y: 3
    },
    Math.PI / 3
  ], [
    {
      x: 0,
      y: -3
    },
    Math.PI / 4
  ], [
    {
      x: -1,
      y: -1
    },
    Math.PI / 4
  ]
];

describe('rotateVectorWithRadian', () => {
  it.each(cases)('test case', (...args) => {
    const vector = args[0] as IVector;
    const radian = args[1] as number;
    const result = rotateVectorWithRadian(vector, radian);
    expect(getRadianBetween(vector, result)).toBeCloseTo(radian);
    expect(getVectorLength(result)).toBeCloseTo(getVectorLength(vector));
  });

  it('should return zero vector when try to rotate a zero vector', () => {
    expect(rotateVectorWithRadian({ x: 0, y: 0 }, 0)).toEqual({
      x: 0,
      y: 0
    });
  });
  
});