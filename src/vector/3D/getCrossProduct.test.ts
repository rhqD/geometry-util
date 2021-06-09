import getCrossProduct from './getCrossProduct';
describe('getCrossProduct', () => {
  it('should correctly calculate cross product case 1', () => {
    const vector1 = { x: 1, y: 0, z: 0 };
    const vector2 = { x: 0, y: 1, z: 0 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 0,
      y: 0,
      z: 1,
    });
  });

  it('should correctly calculate cross product with presetAxes case 1', () => {
    const vector1 = { x: 1, y: 0, z: 0 };
    const vector2 = { x: 0, y: 1, z: 0 };
    const crossProduct = getCrossProduct(vector1, vector2, ['y', 'x', 'z']);
    expect(crossProduct).toEqual({
      x: 0,
      y: 0,
      z: -1,
    });
  });

  it('should correctly calculate cross product case 2', () => {
    const vector1 = { x: 1, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 1 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 0,
      y: -1,
      z: 0,
    });
  });

  it('should correctly calculate cross product case 3', () => {
    const vector1 = { x: 0, y: 1, z: 0 };
    const vector2 = { x: 0, y: 0, z: 1 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 1,
      y: 0,
      z: 0,
    });
  });

  it('should correctly calculate cross product case 4', () => {
    const vector1 = { x: 1, y: 2, z: 3 };
    const vector2 = { x: 2, y: 1, z: 4 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 5,
      y: 2,
      z: -3,
    });
  });

  it('should correctly calculate cross product. regardless of the order of the keys', () => {
    const vector1 = { y: 2, z: 3, x: 1 };
    const vector2 = { y: 1, z: 4, x: 2 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 5,
      y: 2,
      z: -3,
    });
  });

  it('should return zero vector when one of the vector is zero vector', () => {
    const vector1 = { y: 2, z: 3, x: 1 };
    const vector2 = { y: 0, z: 0, x: 0 };
    const crossProduct = getCrossProduct(vector1, vector2);
    expect(crossProduct).toEqual({
      x: 0,
      y: 0,
      z: 0,
    });
  });

  it('should throw error when try to calculate cross product of none 3 dimension vectors', () => {
    const vector1 = {};
    const vector2 = { x: 1 };
    expect(() => getCrossProduct(vector1, vector2)).toThrowError();
  });

  it('should return zero vector for parallel vectors', () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 2, y: 2, z: 2 };
    expect(getCrossProduct(vector1, vector2)).toEqual({
      x: 0,
      y: 0,
      z: 0
    });
  });

  it('should return zero vector for parallel vectors', () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: -2, y: -2, z: -2 };
    expect(getCrossProduct(vector1, vector2)).toEqual({
      x: 0,
      y: 0,
      z: 0
    });
  });
});