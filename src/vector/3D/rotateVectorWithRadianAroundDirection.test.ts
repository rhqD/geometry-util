import { IDirection, IVector } from '../../interfaces';
import diffVectors from '../diffVectors';
import getRadianBetween from '../getRadianBetween';
import getVectorLength from '../getVectorLength';
import projectVectorTo from '../projectVectorTo';
import rotateVectorWithRadianAroundDirection from './rotateVectorWithRadianAroundDirection';

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

describe('rotateVectorWithRadianAroundDirection', () => {
  it('should correctly rotate a vector', () => {
    const vector = {
      x: 1,
      y: 0,
      z: 0,
    };
    const direction = {
      z: 1,
    };
    const result = rotateVectorWithRadianAroundDirection(vector, direction, Math.PI / 2);
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
    const result = rotateVectorWithRadianAroundDirection(vector, direction, Math.PI / 2);
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
    const result = rotateVectorWithRadianAroundDirection(vector, direction, Math.PI / 2);
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
    const result = rotateVectorWithRadianAroundDirection(vector, direction, Math.PI / 2);
    expect(result.x).toBeCloseTo(-1);
    expect(result.y).toBeCloseTo(1);
    expect(result.z).toBeCloseTo(1);
  });

  it.each(cases)('test case', (...args) => {
    const vector = args[0] as IVector;
    const direction = args[1] as IDirection;
    const radian = args[2] as number;
    const result = rotateVectorWithRadianAroundDirection(vector, direction, radian);
    const originRadian = getRadianBetween(vector, direction);
    const radianAfterRotation = getRadianBetween(result, direction);
    expect(originRadian).toBeCloseTo(radianAfterRotation);
    expect(getVectorLength(result)).toBeCloseTo(getVectorLength(vector));
    const projectionVectorAtNormalDirection = diffVectors(
      vector,
      projectVectorTo(vector, direction),
    );
    const projectionVectorAtNormalDirectionAfterRotation = diffVectors(
      result,
      projectVectorTo(vector, direction),
    );
    expect(getRadianBetween(projectionVectorAtNormalDirection, projectionVectorAtNormalDirectionAfterRotation)).toBeCloseTo(radian);
  });

  it('should throw error when try to rotate a zero vector', () => {
    expect(() => rotateVectorWithRadianAroundDirection({ x: 0, y: 0, z: 0}, { x: 1, y: 0, z: 0 }, 0)).toThrowError();
  });

  it('should throw error when try to rotate around a zero vector', () => {
    expect(() => rotateVectorWithRadianAroundDirection({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 0}, 0)).toThrowError();
  });
  
});