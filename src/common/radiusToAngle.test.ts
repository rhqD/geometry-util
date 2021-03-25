import radiusToAngle from "./radiusToAngle";

describe('radiusToAngle', () => {
  it('should correctly calculate for 0', () => {
    expect(radiusToAngle(0)).toBeCloseTo(0);
  });

  it('should correctly calculate for Math.PI', () => {
    expect(radiusToAngle(Math.PI)).toBeCloseTo(180);
  });

  it('should correctly calculate for Math.PI / 2', () => {
    expect(radiusToAngle(Math.PI / 2)).toBeCloseTo(90);
  });

  it('should correctly calculate for 0', () => {
    expect(radiusToAngle(Math.PI / 3)).toBeCloseTo(60);
  });
});