import sumVectors from "./sumVectors";

describe('sumVectors', () => {
  it('should correctly sum one 1d vectors', () => {
    const vector1 = {
      x: 1,
    };
    expect(sumVectors(vector1)).toEqual({ x: 1 });
  });
  it('should correctly sum two 1d vectors', () => {
    const vector1 = {
      x: 1,
    };
    const vector2 = {
      x: 3,
    };
    expect(sumVectors(vector1, vector2)).toEqual({ x: 4 });
  });

  it('should correctly sum three 1d vectors', () => {
    const vector1 = {
      x: 1,
    };
    const vector2 = {
      x: 3,
    };
    const vector3 = {
      x: 4,
    };
    expect(sumVectors(vector1, vector2, vector3)).toEqual({ x: 8 });
  });

  it('should correctly sum one 2d vectors', () => {
    const vector1 = {
      x: 1,
      y: 4
    };
    expect(sumVectors(vector1)).toEqual({ x: 1, y: 4 });
  });
  it('should correctly sum two 2d vectors', () => {
    const vector1 = {
      x: 1,
      y: 3
    };
    const vector2 = {
      x: 3,
      y: 7
    };
    expect(sumVectors(vector1, vector2)).toEqual({ x: 4, y: 10 });
  });

  it('should correctly sum three 2d vectors', () => {
    const vector1 = {
      x: 1,
      y: 5
    };
    const vector2 = {
      x: 3,
      y: 4
    };
    const vector3 = {
      x: 4,
      y: 1
    };
    expect(sumVectors(vector1, vector2, vector3)).toEqual({ x: 8, y: 10 });
  });

  it('should correctly sum one 3d vectors', () => {
    const vector1 = {
      x: 1,
      y: 4,
      z: 2
    };
    expect(sumVectors(vector1)).toEqual({ x: 1, y: 4, z: 2 });
  });
  it('should correctly sum two 3d vectors', () => {
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
    expect(sumVectors(vector1, vector2)).toEqual({ x: 4, y: 10, z: 4 });
  });

  it('should correctly sum three 3d vectors', () => {
    const vector1 = {
      x: 1,
      y: 5,
      z: 2
    };
    const vector2 = {
      x: 3,
      y: 4,
      z: 2
    };
    const vector3 = {
      x: 4,
      y: 1,
      z: 2
    };
    expect(sumVectors(vector1, vector2, vector3)).toEqual({ x: 8, y: 10, z: 6 });
  });

  it('should correctly sum with empty vector', () => {
    const vector1 = {
      x: 1,
      y: 2,
      z: 3,
    };
    expect(sumVectors(vector1, {})).toEqual(vector1);
  });
});