import getAngleBetweenTwoVectors from './getAngleBetweenTwoVectors';

describe('getAngleBetweenTwoVectors', () => {
  it('should always return 0 for two 1d vectors', () => {
    const vector1 = { x: 1 };
    const vector2 = { x: 2 };
    const radius = getAngleBetweenTwoVectors(vector1, vector2);
    expect(radius).toBe(0);
  });

  it('should always return 0 between a vector and empty vector', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = {};
    const radius = getAngleBetweenTwoVectors(vector1, vector2);
    expect(radius).toBe(0);
  });

  it('should always return 0 between a vector and zero vector', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 0, y: 0 };
    const radius = getAngleBetweenTwoVectors(vector1, vector2);
    expect(radius).toBe(0);
  });

  it('should correctly calculate the radius between two 2d vectors', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 2, y: -1 };
    const radius = getAngleBetweenTwoVectors(vector1, vector2);
    expect(radius).toBeCloseTo(90);
  });

  it('should correctly calculate the radius between two 3d vectors', () => {
    const vector1 = { x: 1, y: 2, z: 3 };
    const vector2 = { x: 2, y: 2, z: -2 };
    const radius = getAngleBetweenTwoVectors(vector1, vector2);
    expect(radius).toBeCloseTo(90);
  });
});