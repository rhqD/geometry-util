import rotatePointAroundWithRadian from './rotatePointAroundWithRadian';

describe('rotatePointAroundWithRadian', () => {
  it('should rotate a point correctly', () => {
    const point = {
      x: 1,
      y: 0,
    };
    const center = {
      x: 0,
      y: 0,
    };
    const rotatedPoint = rotatePointAroundWithRadian(point, center, Math.PI / 2);
    expect(rotatedPoint).toEqual({
      x: 0,
      y: 1,
    });
  });


  it('should rotate a point correctly with negative radian', () => {
    const point = {
      x: 1,
      y: 0,
    };
    const center = {
      x: 0,
      y: 0,
    };
    const rotatedPoint = rotatePointAroundWithRadian(point, center, 0 - Math.PI / 2);
    expect(rotatedPoint).toEqual({
      x: 0,
      y: -1,
    });
  });

  it('should rotate a point correctly', () => {
    const point = {
      x: 1,
      y: 0,
    };
    const center = {
      x: 0,
      y: 0,
    };
    const rotatedPoint = rotatePointAroundWithRadian(point, center, Math.PI);
    expect(rotatedPoint).toEqual({
      x: -1,
      y: 0,
    });
  });

  it('should rotate a point correctly when radian is 0', () => {
    const point = {
      x: 1,
      y: 0,
    };
    const center = {
      x: 0,
      y: 0,
    };
    const rotatedPoint = rotatePointAroundWithRadian(point, center, 0);
    expect(rotatedPoint).toEqual({
      x: 1,
      y: 0,
    });
  });

  it('should be able to rotate a point around itself correctly', () => {
    const point = {
      x: 1,
      y: 0,
    };
    const center = {
      x: 1,
      y: 0,
    };
    const rotatedPoint = rotatePointAroundWithRadian(point, center, Math.PI / 2);
    expect(rotatedPoint).toEqual({
      x: 1,
      y: 0,
    });
  });
});