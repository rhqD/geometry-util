import getVectorLength from './getVectorLength';
import scaleVectorTo from './scaleVectorTo';

describe('scaleVectorTo', () => {
  it('should correctly scale 1d vector', () => {
    const vector = {
      x: 1,
    };
    const scaledVector = scaleVectorTo(vector, 3);
    expect(scaledVector).toEqual({
      x: 3
    });
  });

  it('should correctly scale 2d vector', () => {
    const vector = {
      x: 3,
      y: 6,
    };
    const scaledVector = scaleVectorTo(vector, 3);
    const length = getVectorLength(scaledVector);
    expect(length).toBe(3);
    expect(scaledVector.y / vector.y).toBe(scaledVector.x / vector.x);
  });

  it('should correctly scale 3d vector', () => {
    const vector = {
      x: 3,
      y: 6,
      z: 7,
    };
    const scaledVector = scaleVectorTo(vector, 20);
    const length = getVectorLength(scaledVector);
    expect(length).toBeCloseTo(20, 4);
    expect(scaledVector.y / vector.y).toBe(scaledVector.x / vector.x);
    expect(scaledVector.z / vector.z).toBe(scaledVector.x / vector.x);
  });

  it('should throw error when try to scale a zero vector', () => {
    const vector = {
      x: 0,
      y: 0,
      z: 0,
    };
    expect(() => scaleVectorTo(vector, 20)).toThrowError("can't scale a empty or zero vector to certain length")
  });
});