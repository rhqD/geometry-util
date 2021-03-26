import getDirectedRadiusBetween from './getDirectedRadiusBetween';

describe('getDirectedRadiusBetween', () => {
  it('should correctly get directed radius', () => {
    const vector1 = {
      x: 1,
      y: 0
    };

    const vector2 = {
      x: 0,
      y: 1
    };
    expect(getDirectedRadiusBetween(vector1, vector2)).toBeCloseTo(Math.PI / 2);
  });

  it('should correctly get directed radius', () => {
    const vector1 = {
      x: 1,
      y: 0
    };

    const vector2 = {
      x: 0,
      y: 1
    };
    expect(getDirectedRadiusBetween(vector2, vector1)).toBeCloseTo(0 - Math.PI / 2);
  });

  it('should correctly get directed radius', () => {
    const vector1 = {
      x: 1,
      y: 0
    };

    const vector2 = {
      x: 0,
      y: -1
    };
    expect(getDirectedRadiusBetween(vector1, vector2)).toBeCloseTo(0 - Math.PI / 2);
  });

  it('should throw error when vectors are not all in 2D', () => {
    const vector1 = { x: 1 };
    const vector2 = { x: 2 };
    expect(() => getDirectedRadiusBetween(vector1, vector2)).toThrowError();
  });

  it('should throw error when vectors are not all in 2D', () => {
    const vector1 = { x: 1, y: 0, z: 1 };
    const vector2 = { x: 2 };
    expect(() => getDirectedRadiusBetween(vector1, vector2)).toThrowError();
  });

  it(' return 0 for empty vector and any other 2D vector', () => {
    const vector1 = { x: 1, y: 0 };
    const vector2 = {};
    expect(getDirectedRadiusBetween(vector1, vector2)).toBe(0);
  });

  it(' return 0 for zero vector and any other 2D vector', () => {
    const vector1 = { x: 1, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(getDirectedRadiusBetween(vector1, vector2)).toBe(0);
  });

  it(' return 0 for two 2D zero vectors', () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(getDirectedRadiusBetween(vector1, vector2)).toBe(0);
  });
});