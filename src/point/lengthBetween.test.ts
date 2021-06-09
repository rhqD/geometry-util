import lengthBetween from './lengthBetween';
describe('lengthBetween', () => {
  it('should correctly calculate the length between two points', () => {
    const point1 = {
      x: 1,
      y: 1,
    };
    const point2 = {
      x: 3,
      y: 2,
    };

    expect(lengthBetween(point1, point2)).toBeCloseTo(5 ** 0.5);
  });

  it('should correctly calculate the length between two points when one of the point is empty', () => {
    const point1 = {
      x: 1,
      y: 1,
    };
    const point2 = {};

    expect(lengthBetween(point1, point2)).toBeCloseTo(2 ** 0.5);
  });
});