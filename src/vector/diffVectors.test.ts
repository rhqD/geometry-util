import diffVectors from "./diffVectors";

describe('diffVectors', () => {
  it('should correctly diff one 1d vectors', () => {
    const vector1 = {
      x: 1,
    };
    expect(diffVectors(vector1)).toEqual({ x: 1 });
  });
  it('should correctly diff two 1d vectors', () => {
    const vector1 = {
      x: 1,
    };
    const vector2 = {
      x: 3,
    };
    expect(diffVectors(vector1, vector2)).toEqual({ x: -2 });
  });

  it('should correctly diff one 2d vectors', () => {
    const vector1 = {
      x: 1,
      y: 4
    };
    expect(diffVectors(vector1)).toEqual({ x: 1, y: 4 });
  });
  it('should correctly diff two 2d vectors', () => {
    const vector1 = {
      x: 1,
      y: 3
    };
    const vector2 = {
      x: 3,
      y: 7
    };
    expect(diffVectors(vector1, vector2)).toEqual({ x: -2, y: -4 });
  });

  it('should correctly diff one 3d vectors', () => {
    const vector1 = {
      x: 1,
      y: 4,
      z: 2
    };
    expect(diffVectors(vector1)).toEqual({ x: 1, y: 4, z: 2 });
  });
  it('should correctly diff two 3d vectors', () => {
    const vector1 = {
      x: 1,
      y: 3,
      z: 2
    };
    const vector2 = {
      x: 3,
      y: 7,
      z: 2
    };
    expect(diffVectors(vector1, vector2)).toEqual({ x: -2, y: -4, z: 0 });
  });

  it('should correctly diff with empty vector', () => {
    const vector1 = {
      x: 1,
      y: 2,
      z: 3,
    };
    expect(diffVectors(vector1, {})).toEqual({
      x: 1,
      y: 2,
      z: 3
    });
  });
});