import angleToRadian from "./angleToRadian";

describe('angleToRadian', () => {
  it('should correctly calculate for 0', () => {
    expect(angleToRadian(0)).toBeCloseTo(0);
  });

  it('should correctly calculate for Math.PI', () => {
    expect(angleToRadian(180)).toBeCloseTo(Math.PI);
  });

  it('should correctly calculate for Math.PI / 2', () => {
    expect(angleToRadian(90)).toBeCloseTo(Math.PI / 2);
  });

  it('should correctly calculate for 0', () => {
    expect(angleToRadian(60)).toBeCloseTo(Math.PI / 3);
  });
});