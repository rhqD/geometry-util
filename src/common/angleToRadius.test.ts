import angleToRadius from "./angleToRadius";

describe('angleToRadius', () => {
  it('should correctly calculate for 0', () => {
    expect(angleToRadius(0)).toBeCloseTo(0);
  });

  it('should correctly calculate for Math.PI', () => {
    expect(angleToRadius(180)).toBeCloseTo(Math.PI);
  });

  it('should correctly calculate for Math.PI / 2', () => {
    expect(angleToRadius(90)).toBeCloseTo(Math.PI / 2);
  });

  it('should correctly calculate for 0', () => {
    expect(angleToRadius(60)).toBeCloseTo(Math.PI / 3);
  });
});