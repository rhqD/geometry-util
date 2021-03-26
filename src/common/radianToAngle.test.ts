import radianToAngle from "./radianToAngle";

describe('radianToAngle', () => {
  it('should correctly calculate for 0', () => {
    expect(radianToAngle(0)).toBeCloseTo(0);
  });

  it('should correctly calculate for Math.PI', () => {
    expect(radianToAngle(Math.PI)).toBeCloseTo(180);
  });

  it('should correctly calculate for Math.PI / 2', () => {
    expect(radianToAngle(Math.PI / 2)).toBeCloseTo(90);
  });

  it('should correctly calculate for 0', () => {
    expect(radianToAngle(Math.PI / 3)).toBeCloseTo(60);
  });
});