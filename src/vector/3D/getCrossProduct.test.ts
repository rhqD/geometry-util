import getCrossProduct from './getCrossProduct';
describe('getCrossProduct', () => {
  it('should correctly calculate cross product', () => {
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
});