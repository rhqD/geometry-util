import getRadianBetween from './getRadianBetween';

describe('getRadianBetween', () => {
  it('should always return 0 for two 1d vectors', () => {
    const vector1 = { x: 1 };
    const vector2 = { x: 2 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(0);
  });

  it('should always return 0 between a vector and empty vector', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = {};
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(0);
  });

  it('should always return 0 between a vector and zero vector', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 0, y: 0 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(0);
  });

  it('should correctly calculate the radian between two 2d vectors', () => {
    const vector1 = { x: 1, y: 2 };
    const vector2 = { x: 2, y: -1 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(Math.PI / 2);
  });

  it('should correctly calculate the radian between two 3d vectors', () => {
    const vector1 = { x: 1, y: 2, z: 3 };
    const vector2 = { x: 2, y: 2, z: -2 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(Math.PI / 2);
  });

  it('should return 0 for parallel vectors', () => {
    const vector1 = { x: 1, y: 2, z: 3 };
    const vector2 = { x: 2, y: 4, z: 6 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(0);
  });

  it('should return 0 for parallel vectors', () => {
    const vector1 = { x: 1, y: 2, z: 3 };
    const vector2 = { x: -2, y: -4, z: -6 };
    const radian = getRadianBetween(vector1, vector2);
    expect(radian).toBe(Math.PI);
  });
});