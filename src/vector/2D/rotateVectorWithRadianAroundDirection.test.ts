import { IVector } from '../../types';
import getRadianBetween from '../getRadianBetween';
import getVectorLength from '../getVectorLength';
import rotateVectorWithRadianAroundDirection from './rotateVectorWithRadianAroundDirection';

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

describe('rotateVectorWithRadianAroundDirection', () => {
  it.each(cases)('test case', (...args) => {
    const vector = args[0] as IVector;
    const radian = args[1] as number;
    const result = rotateVectorWithRadianAroundDirection(vector, radian);
    expect(getRadianBetween(vector, result)).toBeCloseTo(radian);
    expect(getVectorLength(result)).toBeCloseTo(getVectorLength(vector));
  });

  it('should throw error when try to rotate a zero vector', () => {
    expect(() => rotateVectorWithRadianAroundDirection({ x: 0, y: 0 }, 0)).toThrowError();
  });
  
});