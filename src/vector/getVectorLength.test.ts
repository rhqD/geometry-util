import getVectorLength from "./getVectorLength";

describe('getVectorLength', () => {
  it('should correctly calculate length of zero vector', () => {
    const vector = {
      x: 0,
      y: 0,
      z: 0,
    };
    const length = getVectorLength(vector);
    expect(length).toBe(0);
  });

  it('should correctly calculate length of 1d vector', () => {
    const vector = {
      x: 1,
    };
    const length = getVectorLength(vector);
    expect(length).toBe(1);
  });

  it('should correctly calculate length of 2d vector', () => {
    const vector = {
      x: 3,
      y: 4,
    };
    const length = getVectorLength(vector);
    expect(length).toBe(5);
  });

  it('should correctly calculate length of 3d vector', () => {
    const vector = {
      x: 3,
      y: 4,
      z: 6,
    };
    const length = getVectorLength(vector);
    expect(length).toBe((3 ** 2 + 4 ** 2 + 6 ** 2) ** 0.5);
  });

  it('should correctly calculate length with negative value', () => {
    const vector = {
      x: -3,
      y: 4,
      z: -6,
    };
    const length = getVectorLength(vector);
    expect(length).toBe((3 ** 2 + 4 ** 2 + 6 ** 2) ** 0.5);
  });

  it('should correctly calculate length for empty vector', () => {
    const vector = {};
    const length = getVectorLength(vector);
    expect(length).toBe(0);
  });
});