import getDotProduct from './getDotProduct';

describe('getDotProduct', () => {
  it('should correctly get DotProduct of two 1d vector', () => {
    const vector1 = { x: 3 };
    const vector2 = { x: 4 };
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(12);
  });

  it('should correctly get DotProduct of two 2d vector', () => {
    const vector1 = { x: 3, y: 2 };
    const vector2 = { x: 4, y: 6 };
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(24);
  });

  it('should correctly get DotProduct of two 3d vector', () => {
    const vector1 = { x: 3, y: 2, z: 1 };
    const vector2 = { x: 4, y: 6, z: 1 };
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(25);
  });

  it('should correctly get DotProduct of two vectors with different dimensions', () => {
    const vector1 = { x: 3, z: 1 };
    const vector2 = { x: 4, y: 6 };
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(12);
  });

  it('should correctly return 0 when one of the vectors is empty', () => {
    const vector1 = { x: 3, z: 1 };
    const vector2 = {};
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(0);
  });

  it('should correctly return 0 when one of the vectors is zero', () => {
    const vector1 = { x: 3, z: 1 };
    const vector2 = { x: 0, y: 0 };
    const dotProduct = getDotProduct(vector1, vector2);
    expect(dotProduct).toBe(0);
  });
});