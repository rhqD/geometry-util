import isParallel from './isParallel';

describe('isParallel', () => {
  it('should correctly tell if two vectors are parallel', () => {
    const vector1 = {
      x: 1,
      y: 2
    };
    const vector2 = {
      x: 2,
      y: 4,
    };
    expect(isParallel(vector1, vector2)).toBe(true);
  });

  it('should correctly tell if two vectors are parallel', () => {
    const vector1 = {
      x: 1,
      y: 2
    };
    const vector2 = {
      x: -2,
      y: -4,
    };
    expect(isParallel(vector1, vector2)).toBe(true);
  });

  it('zero vector is parallel to any vector', () => {
    const vector1 = {
      x: 0,
      y: 0
    };
    const vector2 = {
      x: -2,
      y: -4,
    };
    expect(isParallel(vector1, vector2)).toBe(true);
  });
});