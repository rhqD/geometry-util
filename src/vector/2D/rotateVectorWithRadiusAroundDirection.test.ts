import { IVector } from '../../types';
import getRadiusBetweenVectors from '../getRadiusBetweenVectors';
import getVectorLength from '../getVectorLength';
import rotateVectorWithRadiusAroundDirection from './rotateVectorWithRadiusAroundDirection';

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

describe('rotateVectorWithRadiusAroundDirection', () => {
  it.each(cases)('test case', (...args) => {
    const vector = args[0] as IVector;
    const radius = args[1] as number;
    const result = rotateVectorWithRadiusAroundDirection(vector, radius);
    expect(getRadiusBetweenVectors(vector, result)).toBeCloseTo(radius);
    expect(getVectorLength(result)).toBeCloseTo(getVectorLength(vector));
  });

  it('should throw error when try to rotate a zero vector', () => {
    expect(() => rotateVectorWithRadiusAroundDirection({ x: 0, y: 0 }, 0)).toThrowError();
  });
  
});