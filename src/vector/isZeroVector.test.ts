import isZeroVector from './isZeroVector';

describe('isZeroVector', () => {
  it('should return true for zero vector', () => {
    expect(isZeroVector({ x: 0, y: 0 })).toBe(true);
  });

  it('should return true for empty vector', () => {
    expect(isZeroVector({})).toBe(true);
  });
});