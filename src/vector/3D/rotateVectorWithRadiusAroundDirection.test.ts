import { IDirection, IVector } from '../../types';
import diffVectors from '../diffVectors';
import getRadiusBetween from '../getRadiusBetween';
import getVectorLength from '../getVectorLength';
import projectVectorAt from '../projectVectorAt';
import rotateVectorWithRadiusAroundDirection from './rotateVectorWithRadiusAroundDirection';

const cases: (number | IVector | IDirection)[][] = [
  [
    {
      x: 1,
      y: 1,
      z: 1,
    }, {
      x: 1,
      y: 2,
      z: 3
    },
    Math.PI / 2
  ], [
    {
      x: 1,
      y: 3,
      z: 1,
    }, {
      x: 1,
      y: 5,
      z: 2
    },
    Math.PI / 3
  ], [
    {
      x: 0,
      y: -3,
      z: 1,
    }, {
      x: -1,
      y: -5,
      z: -2
    },
    Math.PI / 4
  ], [
    {
      x: -1,
      y: -1,
      z: 1,
    }, {
      x: 3,
      y: 5,
      z: 2
    },
    Math.PI / 4
  ]
];

describe('rotateVectorWithRadiusAroundDirection', () => {
  it('should correctly rotate a vector', () => {
    const vector = {
      x: 1,
      y: 0,
      z: 0,
    };
    const direction = {
      z: 1,
    };
    const result = rotateVectorWithRadiusAroundDirection(vector, direction, Math.PI / 2);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(1);
    expect(result.z).toBeCloseTo(0);
  });

  it('should correctly rotate a vector', () => {
    const vector = {
      x: 0,
      y: 1,
      z: 0,
    };
    const direction = {
      z: 1,
    };
    const result = rotateVectorWithRadiusAroundDirection(vector, direction, Math.PI / 2);
    expect(result.x).toBeCloseTo(-1);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(0);
  });

  it('should correctly rotate a vector', () => {
    const vector = {
      x: 0,
      y: 1,
      z: 0,
    };
    const direction = {
      x: 1,
    };
    const result = rotateVectorWithRadiusAroundDirection(vector, direction, Math.PI / 2);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(1);
  });

  it('should correctly rotate a vector', () => {
    const vector = {
      x: 1,
      y: 1,
      z: 1,
    };
    const direction = {
      z: 1,
    };
    const result = rotateVectorWithRadiusAroundDirection(vector, direction, Math.PI / 2);
    expect(result.x).toBeCloseTo(-1);
    expect(result.y).toBeCloseTo(1);
    expect(result.z).toBeCloseTo(1);
  });

  it.each(cases)('test case', (...args) => {
    const vector = args[0] as IVector;
    const direction = args[1] as IDirection;
    const radius = args[2] as number;
    const result = rotateVectorWithRadiusAroundDirection(vector, direction, radius);
    const originRadius = getRadiusBetween(vector, direction);
    const radiusAfterRotation = getRadiusBetween(result, direction);
    expect(originRadius).toBeCloseTo(radiusAfterRotation);
    expect(getVectorLength(result)).toBeCloseTo(getVectorLength(vector));
    const projectionVectorAtNormalDirection = diffVectors(
      vector,
      projectVectorAt(vector, direction),
    );
    const projectionVectorAtNormalDirectionAfterRotation = diffVectors(
      result,
      projectVectorAt(vector, direction),
    );
    expect(getRadiusBetween(projectionVectorAtNormalDirection, projectionVectorAtNormalDirectionAfterRotation)).toBeCloseTo(radius);
  });

  it('should throw error when try to rotate a zero vector', () => {
    expect(() => rotateVectorWithRadiusAroundDirection({ x: 0, y: 0, z: 0}, { x: 1, y: 0, z: 0 }, 0)).toThrowError();
  });

  it('should throw error when try to rotate around a zero vector', () => {
    expect(() => rotateVectorWithRadiusAroundDirection({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 0}, 0)).toThrowError();
  });
  
});